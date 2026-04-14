import { supabase } from "@/app/lib/db";

export async function POST(req) {
  try {
    const { username, email, password, confirmPassword } = await req.json();

    console.log("Nombre recibido: ", username);
    console.log("Email recibido: ", email);
    console.log("Contraseña recibida: ", password);
    console.log("Confirmación de contraseña: ", confirmPassword);

    if (password != confirmPassword) {
      return Response.json({
        success: false,
        error: "Contraseñas diferentes",
        state: "showError",
        user: {
          username: username,
          email: email,
          password: password,
          confirmPassword: confirmPassword,
        },
      });
    }

    const { data, error } = await supabase
      .from("admins")
      .select("id_admin")
      .eq("correo", email);

    console.log("Resultado DB:", data);
    console.log("Error DB:", error);

    if (error) {
      console.error("Error DB:", error);
      return Response.json({ success: false, error: "Error en DB" });
    }

    console.log("Data:", data);
    console.log("Length:", data?.length);

    if (data && data.length >= 1) {
      console.error(error);
      return Response.json({
        success: false,
        error: "Usuario ya existente",
      });
    } /*else {
      console.error(error);
      return Response.json({
        success: true,
        error: "Usuario no existente",
      });
    }*/

    const { data: newUser, error: insertError } = await supabase
      .from("admins")
      .insert([
        {
          nombre: username,
          correo: email,
          password: password,
          id_rol: 1,
        },
      ])
      .select();

    if (insertError) {
      console.error("Error al insertar:", insertError);
      return Response.json({
        success: false,
        error: "Error al crear usuario",
      });
    }

    return Response.json({
      success: true,
      message: "Usuario creado correctamente",
      user: newUser,
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      { success: false, message: "Error interno del servidor" },
      { status: 500 },
    );
  }
}
