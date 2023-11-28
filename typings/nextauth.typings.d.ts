import { ObjectId } from "mongoose";
import { DefaultSession } from "next-auth";

declare module "next-auth" {
    interface Session {
        user: {
            _id?: ObjectId;
        } & DefaultSession["user"];
    }
}
