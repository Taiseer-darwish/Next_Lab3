import { dbConnection } from "@/app/_lib/dbConnection";
import todosModel from "@/app/_lib/schema/usermodel";

dbConnection()

export async function GET() {

  try {
    const posts = await todosModel.find()
    return new Response(JSON.stringify(posts), { status: 200 })
  } catch (err) {
    console.log(err);

    return new Response(err.message, { status: 500 })
  }

}

export async function POST(req) {

  try {
    let todo = await req.json()
    //zod 
    let newTodo = await todosModel.create(todo)
    return new Response(JSON.stringify({ data: newTodo }), { status: 201 })
  } catch (err) {
    return new Response(err.mcxessage, { status: 500 })
  }
}


export async function PUT(req, { params }) {
  await dbConnection();
  const body = await req.json();
  const updated = await todosModel.findByIdAndUpdate(params.id, body, { new: true });
  return NextResponse.json(updated);
}

export async function DELETE(req, { params }) {
  await dbConnection();
  await todosModel.findByIdAndDelete(params.id);
  return NextResponse.json({ message: "Deleted" });
}