"use server";

import { hash } from "bcrypt";
import User from "../models/user.model";
import { connectWithMongoDB } from "../mongodb";
import { useRouter } from "next/navigation";

const createUser = async (userData: any) => {
    try {
        await connectWithMongoDB();
        const hashedPassword = await hash(userData.password, 10);

        const userExist = await User.findOne({ email: userData.email });

        if (userExist) {
            return console.log({ message: "User already exist: Please choose different email." });
        }

        const newUser = await User.create({
            email: userData.email,
            password: hashedPassword,
        });

        console.log({
            message: `User has been created: ${newUser}`,
            newUser: newUser.toObject(),
        });
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(`Unable to create user: ${error.message}`);
        }
        throw new Error("Unable to create user: No error message");
    }
};

export { createUser };
