import { getCurrentAdmin } from "../../../services/auth.service";

export async function GET() {

    const admin = await getCurrentAdmin();

    console.log("Admin encontrado:", admin);

    if (!admin) {
        return Response.json(
            {
                success: false,
            },
            {
                status: 401,
            }
        );
    }

    return Response.json(
        {
            success: true,
            admin
        }
    )

}