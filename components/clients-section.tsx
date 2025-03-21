import Image from "next/image"
import { Button } from "@/components/ui/button"

const clients = [
  { name: "Mahindra", logo: "/mahindra-logo.jpg" },
  { name: "ACMA", logo: "/acma-logo.jpg" },
  { name: "Ford", logo: "/ford-logo-generic.png" },
  { name: "IIHT", logo: "/iiht-logo.jpg" },
  { name: "CBRE", logo: "/cbre-logo-green.jpg" },
  { name: "MTV", logo: "/mtv-logo.jpg" },
  { name: "Messe Frankfurt", logo: "/messe-frankfurt-logo.jpg" },
  { name: "DuPont", logo: "/dupont-logo.jpg" },
  { name: "USAID", logo: "/usaid-logo.jpg" },
  { name: "Shell", logo: "/stylized-seashell-logo.png" },
]

export default function ClientsSection() {
  return (
    <section className="py-20 lg:py-32 bg-[#f5f5f5]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light">
            Our<span className="italic font-serif">Clients</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center mb-12">
          {clients.map((client) => (
            <div
              key={client.name}
              className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <Image
                src={client.logo || "/placeholder.svg"}
                alt={client.name}
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-[#1a1a1a] text-white hover:bg-[#333] px-8 py-3 text-sm font-semibold">LOAD MORE</Button>
        </div>
      </div>
    </section>
  )
}
