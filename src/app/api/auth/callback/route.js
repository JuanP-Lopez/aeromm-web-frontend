import { NextResponse } from "next/server";

import { createClient } from "../../../../lib/supabase/server";
import { supabaseAdmin } from "../../../../lib/supabase/admin";

export async function GET(request) {
  const requestUrl = new URL(request.url);

  const code = requestUrl.searchParams.get("code");

  if (code) {
    const supabase = await createClient();

    await supabase.auth.exchangeCodeForSession(code);

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      return NextResponse.redirect(new URL("/", request.url));
    }

    console.log(user);

    if (user) {
      const { data: admin } = await supabase
        .from("admins")
        .select("id_admin")
        .eq("auth_user_id", user.id)
        .maybeSingle();

      if (!admin) {
        await supabase.from("admins").insert({
          auth_user_id: user.id,
          nombre: user.user_metadata.full_name,
          correo: user.user_metadata.email,
          id_rol: 1,
        });

        const pfpGoogleUrl = user.user_metadata.avatar_url;

        console.log("Ruta google imagen: ", pfpGoogleUrl);

        const res = await fetch(pfpGoogleUrl);
        const imageBuffer = await res.arrayBuffer();

        const buffer = Buffer.from(imageBuffer);

        console.log("Tipo: ", typeof imageBuffer);
        console.log("Longitud: ", imageBuffer.byteLength);

        const fileName = `userspfp/id-${user.id}-${Date.now()}.jpg`;
        console.log("nombre archivo: ", fileName);

        const {
          data: { session },
        } = await supabase.auth.getSession();

        console.log("SESSION:", session);

        const { data: fileData, error: fileError } = await supabaseAdmin.storage
          .from("ProfilePics")
          .upload(fileName, buffer, {
            contentType: "image/jpeg",
            upsert: true,
          });

        if (fileError) {
          console.error("Error subiendo imagen del usuario: ", fileError);
          return Response.json({
            success: false,
            error: "Error al subir imagen del usuario",
          });
        }

        const { data: userData, error: userDataError } = await supabase
          .from("admins")
          .select("*")
          .eq("auth_user_id", user.id)
          .single();

        if (userError || !user) {
          return Response.json(
            {
              success: false,
              message: "Perfil no encontrado",
            },
            {
              status: 404,
            },
          );
        }

        const { data: pathData, error: pathError } = await supabase
          .from("users_assets")
          .insert([
            {
              imagen_path: fileName,
              categoria: "PFP",
              id_user: userData.id_admin,
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
      }
    }
  }

  return NextResponse.redirect(new URL("/dashboard", request.url));
}
