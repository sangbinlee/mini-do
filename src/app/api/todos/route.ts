import { prisma } from "@/lib/db";
import { todo, todos } from "@/schema/todo";
import { getToken } from "next-auth/jwt";
import { NextResponse, type NextRequest } from "next/server";
import { z } from "zod";

export const GET = async (req: NextRequest) => {
    const token = await getToken({ req });


    console.log('999★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★ req=',req);
    console.log('999★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★ token=',token);

    if (!token || !token?.sub) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }
    try {
        const data = await prisma.todo.findMany({
            where: {
                userId: token.sub,
            },
        });
        const validatedData = todos.parse(data);
        return NextResponse.json(validatedData, { status: 200 });
    } catch (err) {
        return NextResponse.error();
    } finally {
        await prisma.$disconnect();
    }
};

export const POST = async (req: NextRequest) => {
    const token = await getToken({ req });
    if (!token || !token?.sub) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }
    const json = await req.json();
    if (typeof json !== "object" || json === null || !("title" in json)) {
        return NextResponse.error();
    }
    const { title } = json;
    const validatedTitle = z.string().min(5).parse(title);

    try {
        const data = await prisma.todo.create({
            data: { title: validatedTitle, userId: token.sub},
        });
        const validatedData = todo.parse(data);
        return NextResponse.json(validatedData, { status: 200 });
    } catch (err) {
        return NextResponse.error();
    } finally {
        await prisma.$disconnect();
    }
};
