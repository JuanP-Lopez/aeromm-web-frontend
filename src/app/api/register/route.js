import { supabase } from "../../../lib/db";

export async function POST(req) {
  try {
    const formData = await req.formData();

    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");
    const pic = formData.get("image");

    console.log("Nombre recibido: ", username);
    console.log("Email recibido: ", email);
    console.log("Contraseña recibida: ", password);
    console.log("Confirmación de contraseña: ", confirmPassword);
    console.log("Imagen: ", pic);

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

    console.log("id: ", newUser[0].id_admin);
    const userId = newUser[0].id_admin;

    const fileName = `userspfp/id-${userId}-${Date.now()}`;
    console.log("nombre archivo: ", fileName);

    const { data: fileData, error: fileError } = await supabase.storage
      .from("ProfilePics")
      .upload(fileName, pic);

    if (fileError) {
      console.error("Error subiendo imagen del grupo: ", fileError);
      return Response.json({
        success: false,
        error: "Error al subir imagen del grupo",
      });
    }

    const { data: pathData, error: pathError } = await supabase
      .from("users_assets")
      .insert([
        {
          imagen_path: fileName,
          categoria: "PFP",
          id_user: userId,
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
