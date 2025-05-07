import { RequestHandler } from 'express';
import { excludeUser, takeUsers, updateUser } from '../services/user';

export const ping: RequestHandler = (req, res) => {
    res.json({ pong: true });
};

export const getUsers: RequestHandler = async (req, res) => {
    const users = await takeUsers();

    res.json({ users: users });
};

export const deleteUser: RequestHandler = async (req, res) => {
    const id = req.params.id;
    if(!id) {
        res.json({ error: "Id is required" })
    }

    const user = await excludeUser(parseInt(id));
    
    res.json({ user: user });
};

export const putUser: RequestHandler = async (req, res) => {
    const id = req.params.id;
    if(!id) {
        res.json({ error: "Id is required" })
    };

    const { email, password } = req.body;

    const user = await updateUser(parseInt(id), email, password);
    
    res.json({ user: user });
};