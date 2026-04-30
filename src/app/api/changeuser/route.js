import { supabase } from "../../../lib/db";

export async function POST(req) {
  try {
    const { user_id, og_username, username, email, password, og_password } = await req.json();

    console.log("Id recibido: ", user_id);
    console.log("Nombre original: ", og_username);
    console.log("Nombre recibido: ", username);
    console.log("Email recibido: ", email);
    console.log("Contraseña recibida: ", password);
    console.log("Confirmación de contraseña anterior: ", og_password);

    const { data, error } = await supabase
      .from("admins")
      .select("password")
      .eq("id_admin", user_id);

    console.log("Resultado DB:", data);
    console.log("Error DB:", error);

    if (!data || data.length === 0) {
      return Response.json({
        success: false,
        error: "Usuario no encontrado",
      });
    }

    if (error) {
      console.error("Error DB:", error);
      return Response.json({ success: false, error: "Error en DB" });
    }

    if (og_password != data[0].password) {
      console.log("Contraseña nueva: ", password);
      console.log("Contraseña anterior: ", og_password);
      return Response.json({
        success: false,
        error: "Contraseña original erronea",
        state: "showError",
      });
    }

    const { data: updatedUser, error: updateError } = await supabase
      .from("admins")
      .update({
        nombre: username,
        password: password,
      })
      .eq("id_admin", user_id)
      .select();

    if (updateError) {
      console.error("Error DB:", updateError);
      return Response.json({
        success: false,
        error: "Error al cambiar los datos del usuario",
      });
    }

    console.log("Usuario actualizado:", updatedUser);

    const user = updatedUser[0];

    console.log(user);  

    return Response.json({
      success: true,
      user: {
        id: user.id_admin,
        name: user.nombre,
        email: user.correo,
      },
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      { success: false, message: "Error interno del servidor" },
      { status: 500 },
    );
  }
}
