
import { dbConnection } from "@/app/_lib/dbConnection";
import userModel from "@/app/_lib/schema/usermodel";

await dbConnection();



export async function GET(req, { params }) {

  try {
    let resolvedParams = await params
    let todo = await userModel.findById(resolvedParams.id)
    if (!todo) {
      return new Response('not found', { status: 404 })
    }
    return new Response(JSON.stringify(todo), { status: 200 })
  } catch (err) {
    return new Response(err.message, { status: 500 })

  }
}
export async function PUT(req, { params }) {
  await dbConnection();
  const body = await req.json();
  const user = await userModel.findByIdAndUpdate(params.id, body, { new: true });
  return Response.json(user);
}

export async function DELETE(_, { params }) {
  await userModel.findByIdAndDelete(params.id);
  return Response.json({ message: "Deleted" });
}
