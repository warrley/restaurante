import jwt from "jsonwebtoken";

export const createJWT = (email: string) => {
    const token = jwt.sign(
        { email },
        "10",
        { expiresIn: "2h" }
    );
    return token;
};

export const verifyJWT = (token: string) => {
    const validToken = jwt.verify(
        token,
        "10"
    );
    
}