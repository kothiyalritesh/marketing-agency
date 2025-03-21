import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db"

export async function GET(req: Request) {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    const projects = await db.project.findMany({
      orderBy: {
        createdAt: "desc",
      },
    })

    return NextResponse.json(projects)
  } catch (error) {
    console.error("Error fetching projects:", error)
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    const { title, description, imageUrl, category, clientName, startDate, endDate, status } = await req.json()

    if (!title || !category || !startDate) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 })
    }

    const project = await db.project.create({
      data: {
        title,
        description,
        imageUrl,
        category,
        clientName,
        startDate: new Date(startDate),
        endDate: endDate ? new Date(endDate) : undefined,
        status,
      },
    })

    return NextResponse.json(
      {
        message: "Project created successfully",
        project,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Error creating project:", error)
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 })
  }
}

