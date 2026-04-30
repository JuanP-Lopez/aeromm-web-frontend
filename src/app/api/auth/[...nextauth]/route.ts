import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        })],

    callbacks: {
        async signIn({ user }) {
            console.log(user);
            try {
                const { data: existing, error } = await supabase
                    .from("admins")
                    .select("*")
                    .eq("correo", user?.email)
                    .maybeSingle();
                console.log("Existente: ", existing);
                console.log("Error: ", error);
                if (!existing) {
                    await supabase.from("admins").insert({  
                        nombre: user?.name,
                        correo: user?.email,
                        id_rol: 1
                    })
                }

                return true;
            } catch (error) {
                console.log(error);
                return false;
            }
        },

        async redirect({ baseUrl}) {
            return `${baseUrl}/dashboard`
        },
    },
});

export { handler as GET, handler as POST };