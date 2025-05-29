import { db } from "@/lib/db";

export const getUserByEmail = async (email: string) => {
    try {
        const user = await db.user.findUnique({
            where: { email },
            select: {
                id: true,
                email: true,
                name: true,
                password: true,
                role: true, // Add this line - this was missing!
            },
        });
        console.log("getUserByEmail result:", user); // Debug log
        return user;
    } catch (error) {
        console.error("Error fetching user:", error);
        return null;
    }
}

export const getUserById = async (id: string) => {
    try {
        const user = await db.user.findUnique({ 
            where: { id },
            select: {
                id: true,
                email: true,
                name: true,
                role: true, // Make sure role is selected
            }
        });
        console.log("getUserById result:", user); // Debug log
        return user; // This return statement was completely missing!
    } catch (error) {
        console.error("Error fetching user by ID:", error);
        return null;
    }
}