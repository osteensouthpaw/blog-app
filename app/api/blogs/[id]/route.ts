import { patchBlogSchema } from "@/app/validationSchemas";
import prisma from "@/prisma/client";
import { Blog } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(request: NextRequest, props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const body: Blog = await request.json();
  const validation = patchBlogSchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 });

  const blog = await prisma.blog.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!blog)
    return NextResponse.json(
      { error: "This id does not exist" },
      { status: 404 }
    );

  const updatedBlog = await prisma.blog.update({
    where: { id: blog.id },
    data: {
      title: body.title,
      content: body.content,
    },
  });

  return NextResponse.json(updatedBlog);
}

export async function DELETE(request: NextRequest, props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const blog = await prisma.blog.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!blog)
    return NextResponse.json(
      { error: "This blog does not exist" },
      { status: 404 }
    );

  await prisma.blog.delete({
    where: { id: blog.id },
  });

  return NextResponse.json({});
}
