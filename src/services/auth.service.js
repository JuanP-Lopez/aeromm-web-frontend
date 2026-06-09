import { createClient } from "../lib/supabase/server";

export async function getCurrentAdmin() {
  const supabase = await createClient();

  const { data: user, error : userError } = await supabase.auth.getUser();

  console.log("USER:", user);
  console.log("USER ID:", user?.id);
  console.log("USER ERROR:", userError);

  if (!user) {
    return null;
  }

  const { data: admin, error: adminError } = await supabase
    .from("admins")
    .select("*")
    .eq("auth_user_id", user.user.id)
    .single();

  console.log("ADMIN:", admin);
  console.log("ADMIN ERROR:", adminError);

  if (adminError || !admin) {
    return null;
  }

  const { data: asset } = await supabase
    .from("users_assets")
    .select("imagen_path")
    .eq("id_user", admin.id_admin)
    .single();

  let profilePic = null;

  if (asset?.imagen_path) {
    const { data: pfpUrl } = await supabase.storage
      .from("ProfilePics")
      .getPublicUrl(asset.imagen_path);

    profilePic = pfpUrl.publicUrl;
  }

  return {
    id: admin.id_admin,
    nombre: admin.nombre,
    correo: admin.correo,
    pfpUrl: profilePic,
  };
}

