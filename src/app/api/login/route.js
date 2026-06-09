import { createClient } from "../../../lib/supabase/server";

export async function POST(req) {

  try {

    const supabase = await createClient();

    const { email, password } = await req.json();

    const {
      data: authData,
      error: authError,
    } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (authError) {
      return Response.json(
        {
          success: false,
          message: authError.message,
        },
        {
          status: 401,
        }
      );
    }

    const authUserId = authData.user.id;

    const {
      data: user,
      error: userError,
    } = await supabase
      .from("admins")
      .select("*")
      .eq("auth_user_id", authUserId)
      .single();

    if (userError || !user) {
      return Response.json(
        {
          success: false,
          message: "Perfil no encontrado",
        },
        {
          status: 404,
        }
      );
    }

    const {
      data: getPath,
    } = await supabase
      .from("users_assets")
      .select("imagen_path")
      .eq("id_user", user.id_admin)
      .single();

    let picUrl = null;

    if (getPath?.imagen_path) {

      const {
        data: getUrl,
      } = supabase.storage
        .from("ProfilePics")
        .getPublicUrl(
          getPath.imagen_path
        );

      picUrl = getUrl.publicUrl;
    }

    return Response.json({
      success: true,
      user: {
        id: user.id_admin,
        name: user.nombre,
        email: user.correo,
        picUrl,
      },
    });

  } catch (error) {

    console.error(error);

    return Response.json(
      {
        success: false,
        message:
          "Error interno del servidor",
      },
      {
        status: 500,
      }
    );

  }

}