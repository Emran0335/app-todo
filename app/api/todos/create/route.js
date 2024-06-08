import prisma from "@/utils/connect.js";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { text } = await req.json();

    if (!text) {
      return NextResponse.json({
        error: "Missing required fields",
        status: 400,
      });
    }

    if (text.length < 3) {
      return NextResponse.json({
        error: "Title must be at least 3 characters long",
        status: 400,
      });
    }

    const createdTodo = await prisma.todo.create({
      data: {
        text,
      },
    });
    console.log("created todo", createdTodo);
    return NextResponse.json(createdTodo);
  } catch (error) {
    console.log("Error creating: ", error);
    return NextResponse.json({ error: "Error creating todo", status: 500 });
  }
}
