import { createClient } from "../../../../lib/supabase/server";

export async function GET() {
  const supabase = await createClient();

  try {
    const { data: user, error: userError } = await supabase.auth.getUser();

    if (userError || !user) {
      return Response.json(
        { success: false, error: "Usuario no encontrado" },
        { status: 401 },
      );
    }

    console.log("usuario recuperado al recuperar grupos: ", user);

    const { data: idUser, error: idError } = await supabase
      .from("admins")
      .select("id_admin")
      .eq("auth_user_id", user.user.id)
      .single();

    const id = idUser.id_admin;

    console.log("id recuperado: ", id);

    const { data: groups, error: errorGroups } = await supabase
      .from("vw_groups_user")
      .select("*")
      .eq("id_admin", id);

    console.log("Resultado grupos: ", groups);
    console.log("Error grupos: ", errorGroups);

    if (errorGroups) {
      console.log(errorGroups);
      return null;
    }

    const groupsWithUrls = groups.map((group) => {
      const { data } = supabase.storage
        .from("GroupsPics")
        .getPublicUrl(group.imagen_path);      
      return {
        group, imageUrl: data.publicUrl
      };
    });

    return Response.json({
        success: true,
        status: 200,
        id,
        groupsData: groupsWithUrls,
      });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        success: false,
        error: "Error interno del servidor",
      },
      {
        status: 500,
      },
    );
  }
}
