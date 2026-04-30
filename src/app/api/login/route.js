import { supabase } from "../../../lib/db"

export async function POST(req) {
  try {

    const { email, password } = await req.json();

    console.log("Email recibido:", email);
    console.log("Contraseña recibida;: ", password)

    const { data, error } = await supabase
      .from("admins")
      .select("*")
      .eq("correo", email);

    console.log("Resultado DB:", data);
    console.log("Error DB:", error);

    if (error) {
      console.error(error);
      return Response.json(
        { success: false, message: "Error consultando la base" },
        { status: 500 }
      );
    }

    if (!data || data.length === 0) {
      console.error(error);
      return Response.json(
        { success: false, message: "Usuario no encontrado" },
        { status: 401 }
      );
    }

    const user = data[0];

    if (user.password !== password) {
      return Response.json(
        { success: false, message: "Contraseña incorrecta" },
        { status: 401 }
      );
    }

    const { data: getPath, error: pathError } = await supabase
      .from("users_assets")
      .select("imagen_path")
      .eq("id_user", user.id_admin)

    console.log(getPath[0].imagen_path);
    const path = getPath[0].imagen_path;

    const { data: getUrl, error: urlError } = await supabase.storage
      .from("ProfilePics")
      .getPublicUrl(path);

    console.log(getUrl);
    console.log(urlError);

    return Response.json({
      success: true,
      user: {
        id: user.id_admin,
        name: user.nombre,
        email: user.correo,
        picUrl: getUrl.publicUrl
      }
    });

  } catch (error) {

    console.error(error);

    return Response.json(
      { success: false, message: "Error interno del servidor" },
      { status: 500 }
    );

  }
}
