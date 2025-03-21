import { NextResponse } from "next/server"
import { db } from "@/lib/db"

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json()

    // Validate input
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 })
    }

    // Save contact message to database
    const contact = await db.contact.create({
      data: {
        name,
        email,
        subject,
        message,
      },
    })

    // Here you would typically send an email notification
    // This is where you'd integrate with an email service like SendGrid, Mailgun, etc.

    return NextResponse.json(
      {
        message: "Message sent successfully",
        contact,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 })
  }
}

