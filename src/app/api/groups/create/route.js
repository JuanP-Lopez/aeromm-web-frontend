import { supabase } from "@/app/lib/db";

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

    const fileName = `id-${idAdmin}-${group}-${Date.now()}`;
    console.log(fileName);

    const { data: fileData, error: fileError } = await supabase.storage
      .from("GroupsPics")
      .upload(fileName, pic)

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
          id_admin: idAdmin
        }
      ])
      .select();

    if (groupError) {
      console.error("Error DB:", groupError);
      return Response.json({
        success: false,
        error: "Error al guardar grupo",
      });
    }
    
    return Response.json({
      success: true,
      group: groupData[0],
      status: 200
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      { success: false, message: "Error interno del servidor" },
      { status: 500 },
    );
  }
}
