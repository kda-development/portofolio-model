import Image from 'next/image'

interface AboutProps {
  data: {
    title: string
    description: string
    image: string
    stats: Array<{ number: string; label: string }>
    details: {
      height: string
      measurements: string
      hairColor: string
      eyeColor: string
      location: string
    }
  }
}

export default function About({ data }: AboutProps) {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] relative overflow-hidden rounded-lg">
              <Image
                src={data.image || "/placeholder.svg"}
                alt="About"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                {data.title}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {data.description}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {data.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="font-playfair text-3xl font-bold text-gray-900">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Details */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4">Model Details</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Height:</span>
                  <span className="ml-2 text-gray-900">{data.details.height}</span>
                </div>
                <div>
                  <span className="text-gray-600">Measurements:</span>
                  <span className="ml-2 text-gray-900">{data.details.measurements}</span>
                </div>
                <div>
                  <span className="text-gray-600">Hair:</span>
                  <span className="ml-2 text-gray-900">{data.details.hairColor}</span>
                </div>
                <div>
                  <span className="text-gray-600">Eyes:</span>
                  <span className="ml-2 text-gray-900">{data.details.eyeColor}</span>
                </div>
                <div className="col-span-2">
                  <span className="text-gray-600">Location:</span>
                  <span className="ml-2 text-gray-900">{data.details.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
