"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import { MapPin, Phone, Mail } from "lucide-react"

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

const Contact = () => {
  const { toast } = useToast()
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "We'll get back to you as soon as possible.",
          variant: "default",
        })
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      } else {
        toast({
          title: "Something went wrong",
          description: "Please try again later.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="bg-black text-white section" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-primary">Get In Touch</h2>
        <div className="flex flex-wrap gap-12">
          <div className="flex-1 min-w-[300px]">
            <h3 className="text-2xl font-bold text-primary mb-6">Let's Talk</h3>
            <p className="mb-8">
              Ready to take your business to the next level? Contact us today to discuss how we can help you achieve
              your marketing goals.
            </p>
            <div className="flex items-start mb-6">
              <div className="text-primary mr-4">
                <MapPin size={24} />
              </div>
              <p>123 Marketing Street, Business District, NY 10001</p>
            </div>
            <div className="flex items-start mb-6">
              <div className="text-primary mr-4">
                <Phone size={24} />
              </div>
              <p>+1 (555) 123-4567</p>
            </div>
            <div className="flex items-start mb-6">
              <div className="text-primary mr-4">
                <Mail size={24} />
              </div>
              <p>info@buzzmarketing.com</p>
            </div>
          </div>
          <div className="flex-1 min-w-[300px]">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="mb-4">
                <Label htmlFor="name" className="text-primary font-semibold">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-black/50 border-primary text-white focus:ring-primary"
                />
              </div>
              <div className="mb-4">
                <Label htmlFor="email" className="text-primary font-semibold">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-black/50 border-primary text-white focus:ring-primary"
                />
              </div>
              <div className="mb-4">
                <Label htmlFor="subject" className="text-primary font-semibold">
                  Subject
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-black/50 border-primary text-white focus:ring-primary"
                />
              </div>
              <div className="mb-6">
                <Label htmlFor="message" className="text-primary font-semibold">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-black/50 border-primary text-white focus:ring-primary min-h-[120px]"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black text-primary border-2 border-primary hover:bg-primary hover:text-black font-semibold uppercase tracking-wider"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

