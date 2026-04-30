import { supabase } from "../../../../lib/db";

export async function POST(req) {
  try {
    const { idAdmin } = await req.json();

    const { data, error } = await supabase
      .from("grupos")
      .select("*")
      .eq("id_admin", idAdmin)
      .order("id_grupo", { ascending: false });

    if (error) throw error;

    return Response.json({
      success: true,
      groups: data,
    });

  } catch (error) {
    return Response.json({
      success: false,
      error: "No se pudieron recuperar grupos",
    });
  }
}