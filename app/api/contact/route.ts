import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, company, service, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Store in database (optional)
    const supabase = await createClient()
    
    // Create contacts table entry
    const { error: dbError } = await supabase
      .from('contacts')
      .insert({
        name,
        email,
        phone,
        company,
        service,
        message,
        created_at: new Date().toISOString()
      })

    if (dbError) {
      console.error('Database error:', dbError)
      // Continue even if DB fails
    }

    // Here you would typically send an email
    // For now, we'll just return success
    console.log('Contact form submission:', { name, email, phone, company, service, message })

    return NextResponse.json(
      { message: 'Thank you for your message! We will get back to you within 24 hours.' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}