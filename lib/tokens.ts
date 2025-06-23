import { getVerificationTokenByEmail } from "@/data/verification-token";
import { db } from "@/lib/db";
import { v4 as uuidv4 } from "uuid";

export const generateVerificationToken = async (email: string) => {
    const token = uuidv4();
    const expires = new Date(new Date().getTime() + 3600 * 1000); // 1 hour from now

    const existingToken = await getVerificationTokenByEmail(email);

    if (existingToken) {
        await db.verficationToken.delete({
            where: {
                id: existingToken.id,
            },
        });
    }

    const verificationToken = await db.verficationToken.create({
        data: {
            email,
            token,
            expires,
        }
    });

    return verificationToken;
};