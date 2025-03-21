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

    const clients = await db.client.findMany({
      orderBy: {
        createdAt: "desc",
      },
    })

    return NextResponse.json(clients)
  } catch (error) {
    console.error("Error fetching clients:", error)
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    const { name, email, phone, company, address, notes } = await req.json()

    if (!name || !email) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 })
    }

    const client = await db.client.create({
      data: {
        name,
        email,
        phone,
        company,
        address,
        notes,
      },
    })

    return NextResponse.json(
      {
        message: "Client created successfully",
        client,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Error creating client:", error)
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 })
  }
}

