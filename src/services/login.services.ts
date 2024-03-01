import 'dotenv/config';
import { compare } from "bcryptjs";
import { User } from "../entities";
import AppError from "../errors/AppError.error";
import { UserLoginInterface, UserLoginReturnInterface } from "../interfaces/user.interfaces";
import { userRepo } from "../repository";
import { sign } from "jsonwebtoken";


export const loginService = async (payload: UserLoginInterface): Promise<UserLoginReturnInterface> => {
    const { email } = payload;
    const user: User | null = await userRepo.findOneBy({ email });

    if (!user) throw new AppError('Invalid credentials', 401);

    const comparePass = await compare(payload.password, user.password);

    if (!comparePass) throw new AppError('Invalid credentials', 401);

    const token: string = sign(
        { email: user.email, admin: user.admin },
        process.env.SECRET_KEY!,
        { subject: user.id.toString(), expiresIn: process.env.EXPIRES_IN! }
    );

    return { token };
};