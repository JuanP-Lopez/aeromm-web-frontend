import { supabase } from "../../../../lib/db";

export async function POST(req) {
  try {
    const formData = await req.formData();

    const idAdmin = formData.get("id");
    const group = formData.get("group");
    const description = formData.get("description");
    const pic = formData.get("image");

    console.log("Id del admin del grupo: ", idAdmin);
    console.log("Grupo:", group);
    console.log("Descripción:", description);
    console.log("Imagen:", pic);

    if (!idAdmin || !group || !description || !pic) {
      return Response.json({
        success: false,
        error: "Faltan datos",
      });
    }

    const groupSafeName = group
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-_]/g, "");

    const fileName = `group/id-${idAdmin}-${groupSafeName}-${Date.now()}`;
    console.log(fileName);

    const { data: fileData, error: fileError } = await supabase.storage
      .from("GroupsPics")
      .upload(fileName, pic);

    if (fileError) {
      console.error("Error subiendo imagen del grupo: ", fileError);
      return Response.json({
        success: false,
        error: "Error al subir imagen del grupo",
      });
    }

    const { data: groupData, error: groupError } = await supabase
      .from("grupos")
      .insert([
        {
          nombre_grupo: group,
          descripcion: description,
          id_admin: idAdmin,
        },
      ])
      .select();

    if (groupError) {
      console.error("Error DB:", groupError);
      return Response.json({
        success: false,
        error: "Error al guardar grupo",
      });
    }

    const idGrupo = groupData[0].id_grupo;

    const { data: pathData, error: pathError } = await supabase
      .from("grupos_assets")
      .insert([
        {
          imagen_path: fileName,
          categoria: "Logo",
          id_grupo: idGrupo,
        },
      ])
      .select();

    if (pathError) {
      console.error("Error DB:", pathError);
      return Response.json({
        success: false,
        error: "Error al guardar ruta de imagen",
      });
    }

    return Response.json({
      success: true,
      group: groupData[0],
      status: 200,
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      { success: false, message: "Error interno del servidor" },
      { status: 500 },
    );
  }
}
