import Link from 'next/link'
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

interface ContactProps {
  data: {
    title: string
    subtitle: string
    email: string
    phone: string
    location: string
    availability: string
    socialLinks: {
      instagram: string
      linkedin: string
      twitter: string
    }
  }
}

export default function Contact({ data }: ContactProps) {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {data.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {data.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-gray-600" />
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <Link href={`mailto:${data.email}`} className="text-gray-600 hover:text-gray-900">
                    {data.email}
                  </Link>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-gray-600" />
                <div>
                  <p className="font-semibold text-gray-900">Phone</p>
                  <Link href={`tel:${data.phone}`} className="text-gray-600 hover:text-gray-900">
                    {data.phone}
                  </Link>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-gray-600" />
                <div>
                  <p className="font-semibold text-gray-900">Location</p>
                  <p className="text-gray-600">{data.location}</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Availability</h3>
              <p className="text-gray-600">{data.availability}</p>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                <Link 
                  href={data.socialLinks.instagram}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-6 w-6" />
                </Link>
                <Link 
                  href={data.socialLinks.linkedin}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-6 w-6" />
                </Link>
                <Link 
                  href={data.socialLinks.twitter}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <Input id="name" type="text" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <Input id="email" type="email" required />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <Input id="subject" type="text" required />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <Textarea id="message" rows={5} required />
              </div>

              <Button type="submit" size="lg" className="w-full bg-gray-900 hover:bg-gray-800">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
