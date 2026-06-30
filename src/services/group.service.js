import { createClient } from "../lib/supabase/server";

export async function getGroup(id) {
    const supabase = await createClient();

    const { data : group, error : groupError } = await supabase
        .from("grupos").select("*").eq("id_grupo", id).single();

    console.log("Grupo recuperado: ", group);
    console.log("Error al recuperar grupo: ", groupError);

    if (!group || groupError) {
        return null;
    }

    const { data : groupAsset, error : assetError } = await supabase
        .from("grupos_assets").select("imagen_path").eq("id_grupo", id).single();

    let url = null;
    
    if (groupAsset?.imagen_path) {
        const { data : assetUrl } = await supabase
            .storage.from("GroupsPics").getPublicUrl(groupAsset.imagen_path);

        url = assetUrl.publicUrl;
    }

    return {
        groupData: group,
        assetUrl: url
    };
}

export async function getUsers(id) {
    const supabase = await createClient();

    const { data: users, error } = await supabase.from("vw_users_group").select("*").eq("id_grupo", id);

    console.log("Usuarios recuperados: ", users);
    console.log("Error al recuperar usuarios: ", error);

    const usersList= users.map((user) => {
        const { data } = supabase.storage.from("ProfilePics").getPublicUrl(user.imagen_path);

        return {
            user, pfp: data.publicUrl
        };
    }) 

    return {
        users: usersList
    }
}