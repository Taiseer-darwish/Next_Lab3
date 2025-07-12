"use server"
import { redirect } from "next/navigation"
import userModel from "./schema/usermodel"
import { dbConnection } from "./dbConnection"

export async function saveuser(formData) {
    await dbConnection();

    let title = formData.get("title");
    let status = formData.get("status");

    await userModel.create({ title, status });

    redirect('/adduser');
}
