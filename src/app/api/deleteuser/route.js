import { supabase } from "@/app/lib/db";

export async function POST(req) {
  try {

    const id_user = await req.json();

    console.log("Id recibido: ", id_user);

    const { data, error } = await supabase
      .from("admins")
      .delete()
      .eq("id_admin", id_user);

    console.log("Respuesta servidor: ", data)

    if (error) {
      console.error(error);
      return Response.json(
        { success: false, message: "Error consultando la base" },
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
      message: "Usuario eliminado"
    });

  } catch (error) {

    console.error(error);

    return Response.json(
      { success: false, message: "Error interno del servidor" },
      { status: 500 }
    );

  }
}
