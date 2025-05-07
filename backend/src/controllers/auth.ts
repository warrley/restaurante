import { RequestHandler } from "express";
import bcrypt from "bcrypt";
import { createUser, getUserByEmail  } from "../services/auth";
import { createUserSchema } from "../schemas/auth";
import { createJWT } from "../libs/jwt";

export const signup: RequestHandler = async (req, res) => {
    const data = req.body;
    if(!data) {
        res.json({ error: "Invalid data" });
        return;
    }

    const safeData = createUserSchema.safeParse(data);
    if(!safeData.success) {
        res.json({ error: safeData.error.flatten().fieldErrors });
        return;
    };

    const { email, password } = req.body;

    const hasUser = await getUserByEmail(email);
    if(hasUser) {
        res.json({ error: "Alreay have a user with that email" });
        return;
    };

    const hashPassword = await bcrypt.hash(password, 10);

    const token = createJWT(email);

    const user = await createUser(email, hashPassword);

    res.json({ user: user, token: token });
};

export const signin: RequestHandler = async (req, res) => {
    const data = req.body;
    if(!data) {
        res.json({ error: "Invalid data" });
        return;
    }

    const safeData = createUserSchema.safeParse(data);
    if(!safeData.success) {
        res.json({ error: safeData.error.flatten().fieldErrors });
        return;
    };

    const { email, password } = req.body;

    const user = await getUserByEmail(email);
    if(!user) {
        res.json({ error: "User does exist" });
        return;
    }

    if(!await bcrypt.compare(password, user.password as string)) {
        res.json("Wrong password");
        return;
    }

    const token = createJWT(email);

    res.json({ user: user, token: token });
};