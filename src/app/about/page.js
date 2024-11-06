import Link from "next/link"
import Image from "next/image"
import { Twitter, Instagram, Linkedin } from "lucide-react"
import { TopHeader } from "@/components/layout/TopHeader";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer"

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <TopHeader />
      <Header />
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500">
          <ol className="flex items-center space-x-2">
            <li>
              <Link href="/" className="hover:text-gray-700">
                Home
              </Link>
            </li>
            <li>/</li>
            <li><strong>About</strong></li>
          </ol>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-20">
            <h1 className="text-4xl font-bold">Our Story</h1>
            <div className="space-y-4">
              <p className="text-gray-600">
                Launched in 2015, Exclusive is South Asia's premier online shopping marketplace with an active presence in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 millions customers across the region.
              </p>
              <p className="text-gray-600">
                Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assortment in categories ranging from consumer.
              </p>
            </div>
          </div>
          <div className="relative h-[400px]">
            <Image
              src="https://res.cloudinary.com/dwqbouhmd/image/upload/v1730885031/oqucixqu7ciwosxypzut.png"
              alt="Shopping Experience"
              fill
              className="object-contain rounded-lg "
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-6 border rounded-lg text-center transition-colors duration-300 hover:bg-red-500 hover:text-white group">
            <div className="relative w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20">
              <Image
                src="https://res.cloudinary.com/dwqbouhmd/image/upload/v1730885625/l2dssem41e2sg299q35k.png"
                alt="Sellers Icon"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="text-3xl font-bold mb-2">10.5k</div>
            <div className="text-sm text-gray-600 group-hover:text-white">Sellers active on our site</div>
          </div>
          <div className="p-6 border rounded-lg text-center transition-colors duration-300 hover:bg-red-500 hover:text-white group">
            <div className="relative w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20">
              <Image
                src="https://res.cloudinary.com/dwqbouhmd/image/upload/v1730885625/rd4ap1vrer36kjnbtaqa.png"
                alt="Monthly Sales Icon"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="text-3xl font-bold mb-2">33k</div>
            <div className="text-sm text-gray-600 group-hover:text-white">Monthly Product Sale</div>
          </div>
          <div className="p-6 border rounded-lg text-center transition-colors duration-300 hover:bg-red-500 hover:text-white group">
            <div className="relative w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20">
              <Image
                src="https://res.cloudinary.com/dwqbouhmd/image/upload/v1730885625/qcav2i1sxfsrvtlls8ds.png"
                alt="Customers Icon"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="text-3xl font-bold mb-2">45.5k</div>
            <div className="text-sm text-gray-600 group-hover:text-white">Customers active on our site</div>
          </div>
          <div className="p-6 border rounded-lg text-center transition-colors duration-300 hover:bg-red-500 hover:text-white group">
            <div className="relative w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20">
              <Image
                src="https://res.cloudinary.com/dwqbouhmd/image/upload/v1730885625/lmzpnskeebvjejdgumb8.png"
                alt="Sales Icon"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="text-3xl font-bold mb-2">25k</div>
            <div className="text-sm text-gray-600 group-hover:text-white">Annual gross sale on our site</div>
          </div>
        </div>

      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Tom Cruise",
              role: "Founder & Chairman",
              image: "https://res.cloudinary.com/dwqbouhmd/image/upload/v1730885030/jgdsgp0e35jfocf3uenm.png"
            },
            {
              name: "Emma Watson",
              role: "Managing Director",
              image: "https://res.cloudinary.com/dwqbouhmd/image/upload/v1730885031/wpofojv7blmmnamfzryy.png"
            },
            {
              name: "Will Smith",
              role: "Product Designer",
              image: "https://res.cloudinary.com/dwqbouhmd/image/upload/v1730885030/pwhrwy6nqjxfap9aiznx.png"
            }
          ].map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative h-80 mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-600 mb-4">{member.role}</p>
              <div className="flex justify-center space-x-4">
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center space-x-2 mt-8">
          {[0, 1, 2, 3, 4].map((dot) => (
            <button
              key={dot}
              className={`h-2.5 w-2.5 rounded-full ${dot === 2 ? 'bg-red-500' : 'bg-gray-200'}`}
              aria-label={`Go to slide ${dot + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 py-10 border-t">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Free and Fast Delivery */}
          <div className="flex flex-col items-center space-y-2">
            <div className="relative w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
              <Image
                src="https://res.cloudinary.com/dwqbouhmd/image/upload/v1730880673/ngh3d6dsquie1jzzjz4i.png"
                alt="Delivery"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h3 className="font-semibold">FREE AND FAST DELIVERY</h3>
            <p className="text-sm text-gray-500">Free delivery for all orders over $140</p>
          </div>

          {/* 24/7 Customer Service */}
          <div className="flex flex-col items-center space-y-2">
            <div className="relative w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
              <Image
                src="https://res.cloudinary.com/dwqbouhmd/image/upload/v1730880672/tawwfcq54qmuoejavkvf.png"
                alt="Support"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h3 className="font-semibold">24/7 CUSTOMER SERVICE</h3>
            <p className="text-sm text-gray-500">Friendly 24/7 customer support</p>
          </div>

          {/* Money Back Guarantee */}
          <div className="flex flex-col items-center space-y-2">
            <div className="relative w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
              <Image
                src="https://res.cloudinary.com/dwqbouhmd/image/upload/v1730880673/bdvmu3nbmoxlu1bgpvst.png"
                alt="Guarantee"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h3 className="font-semibold">MONEY BACK GUARANTEE</h3>
            <p className="text-sm text-gray-500">We return money within 30 days</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default AboutPage;