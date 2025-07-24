import Image from 'next/image'
import Link from 'next/link'
import { Instagram, Linkedin, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface HeroProps {
  data: {
    name: string
    tagline: string
    description: string
    mainImage: string
    socialLinks: {
      instagram: string
      linkedin: string
      email: string
    }
  }
}

export default function Hero({ data }: HeroProps) {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-playfair text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                {data.name}
              </h1>
              <p className="text-xl text-gray-600 font-light">
                {data.tagline}
              </p>
              <p className="text-lg text-gray-700 max-w-lg">
                {data.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gray-900 hover:bg-gray-800">
                <Link href="#portfolio">View Portfolio</Link>
              </Button>
              <Button variant="outline" size="lg">
                <Link href="#contact">Get In Touch</Link>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6">
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
                href={`mailto:${data.socialLinks.email}`}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Mail className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[3/4] relative overflow-hidden rounded-lg shadow-2xl">
              <Image
                src={data.mainImage || "/placeholder.svg"}
                alt={data.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gray-100 rounded-full -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gray-50 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
