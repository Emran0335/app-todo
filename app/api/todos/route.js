import prisma from "@/utils/connect.js";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const todos = await prisma.todo.findMany();
    if (!todos) {
      return NextResponse.json({
        error: "data is not fetched properly!",
        status: 401,
      });
    }
    return NextResponse.json(todos);
  } catch (error) {
    console.log("Error getting: ", error);
    return NextResponse.json({
      error: "Error getting todos",
      status: 500,
    });
  }
}
