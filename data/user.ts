import { db } from "@/lib/db";

// export const getUserByEmail = async (email: string) => {
//     try {
//         const user = await db.user.findUnique({ where: { email } });
        
//     } catch {
//         return null;
//     }
// }

export const getUserByEmail = async (email: string) => {
    try {
        const user = await db.user.findUnique({
            where: { email },
            select: {
                id: true,
                email: true,
                name: true,
                password: true, // Ensure you're selecting password
            },
        });
        return user;  // Add this return statement
    } catch (error) {
        console.error("Error fetching user:", error);
        return null;
    }
}


export const getUserById = async (id: string) => {
    try {
        const user = await db.user.findUnique({ where: { id } });
        
    } catch {
        return null;
    }
}