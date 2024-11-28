import { createBlogSchema } from "@/app/validationSchemas";
import { auth } from "@/auth";
import prisma from "@/prisma/client";
import { Blog } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const session = await auth();
  if (!session || !session.user)
    return NextResponse.json({ error: "user not logged In" }, { status: 401 });

  const body: Blog = await request.json();
  const validation = createBlogSchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 401 });

  const newBlog = await prisma.blog.create({
    data: {
      title: body.title,
      content: body.content,
      user: {
        connect: { email: session.user.email! },
      },
    },
  });

  return NextResponse.json(newBlog, { status: 201 });
}
