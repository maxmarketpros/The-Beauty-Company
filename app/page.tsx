"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Menu, X, Sparkles, Award, Shield, MapPin, Phone } from "lucide-react"

const BOOKING_URL =
  "https://www.vagaro.com/us02/Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVEpBH18rj4P26th7U4D2yKUtMt8yk0mQuK6XvhNun4reHB/lPp6XUsWyfuD+0yDQ0mUzxjeParQuh0deQQm+hIjEfiT7HdHX68yu439kFI17WHZD4ZnLKHRMKFvWvW4kKMGGIFI/w0l7lbTfG//DCG6ANe5plxxUgvcg3ovkdtK2Uv75Heo1ZuPSDwl4QAGCHfISDGBWZ3fCqKD4kGE7aBdQDH89ctzl+niIgTUz7nJXR+fKP8mw1PY/Rb99w0GTUCop5v9+L/UdN7WIxrj4ay2rMBks/SP51E6GaQ9Ui/CybAkARBBGRBei7Xo3a0UvcQZxyo65Jha1e/wLedsFcj7SmKKN2dKa0YXSx+CZUhZPNrbCDzJTRctq717lxIfY5EdkMfUPoag3JbiwGFjg2BC3bGQyCCpXaqFpdulXxd5+"

export default function Home() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-cream/95 backdrop-blur-md shadow-md" : "bg-cream"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button onClick={() => scrollToSection("home")} className="flex items-center">
              <Image
                src="/images/png-logo.avif"
                alt="The Beauty Company"
                width={160}
                height={64}
                className="h-16 w-auto"
              />
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-charcoal hover:text-aqua transition-colors text-sm font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-charcoal hover:text-aqua transition-colors text-sm font-medium"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-charcoal hover:text-aqua transition-colors text-sm font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="text-charcoal hover:text-aqua transition-colors text-sm font-medium"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-charcoal hover:text-aqua transition-colors text-sm font-medium"
              >
                FAQ
              </button>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-cream rounded-full bg-transparent"
              >
                <a href="tel:+17204475863" className="flex items-center gap-2">
                  <Phone size={16} />
                  <span className="hidden lg:inline">(720) 447-5863</span>
                </a>
              </Button>
              <Button
                onClick={() => window.open(BOOKING_URL, "_blank")}
                className="bg-aqua hover:bg-aqua/90 text-charcoal font-medium rounded-full px-6"
              >
                Book Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-charcoal">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-cream border-t border-light-gray">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-charcoal hover:text-aqua transition-colors text-sm font-medium text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-charcoal hover:text-aqua transition-colors text-sm font-medium text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-charcoal hover:text-aqua transition-colors text-sm font-medium text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="text-charcoal hover:text-aqua transition-colors text-sm font-medium text-left"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-charcoal hover:text-aqua transition-colors text-sm font-medium text-left"
              >
                FAQ
              </button>
              <Button
                asChild
                variant="outline"
                className="border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-cream rounded-full bg-transparent"
              >
                <a href="tel:+17204475863" className="flex items-center justify-center gap-2">
                  <Phone size={16} />
                  (720) 447-5863
                </a>
              </Button>
              <Button
                onClick={() => window.open(BOOKING_URL, "_blank")}
                className="bg-aqua hover:bg-aqua/90 text-charcoal font-medium rounded-full"
              >
                Book Now
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-16 md:pb-24 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <div className="order-2 md:order-1 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/1.jpg"
                  alt="Professional lash extension application"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
                <div className="absolute top-6 right-6 bg-charcoal/90 backdrop-blur-sm text-cream px-4 py-2 rounded-full text-xs font-medium">
                  Lash Extensions • Microneedling • Brows
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="order-1 md:order-2 space-y-6">
              <div className="flex items-center gap-2 text-xs text-charcoal/70 uppercase tracking-wider">
                <div className="w-2 h-2 rounded-full bg-aqua"></div>
                <span>Achieve Your Beauty Goals</span>
              </div>

              <h1 className="font-serif text-5xl sm:text-5xl lg:text-6xl text-charcoal leading-tight text-balance">
                Lash Extensions in Northglenn & Westminster, CO
              </h1>

              <p className="text-lg text-charcoal/80 leading-relaxed text-pretty">
                The Beauty Company specializes in lash extensions, microneedling and advanced beauty treatments that
                enhance your natural features.
              </p>

              <p className="text-charcoal/70 leading-relaxed">
                Experience confidence and natural-looking results with our local expertise in Northglenn, Westminster &
                nearby Colorado areas.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  onClick={() => window.open(BOOKING_URL, "_blank")}
                  size="lg"
                  className="bg-aqua hover:bg-aqua/90 text-charcoal font-medium rounded-full px-8 text-base"
                >
                  Book Your Appointment
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-cream rounded-full px-8 text-base bg-transparent"
                >
                  <a href="tel:+17204475863">(720) 447-5863</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="py-12 bg-charcoal text-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-cream/70 uppercase tracking-wider mb-8">
            Why Clients Love The Beauty Company
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <Sparkles className="w-8 h-8 text-aqua mb-3" />
              <p className="text-sm font-medium">15+ Years of Beauty Experience</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Award className="w-8 h-8 text-aqua mb-3" />
              <p className="text-sm font-medium">Licensed & Professional</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Shield className="w-8 h-8 text-aqua mb-3" />
              <p className="text-sm font-medium">Clean, Safe, Hygienic Studio</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <MapPin className="w-8 h-8 text-aqua mb-3" />
              <p className="text-sm font-medium">Serving Northglenn, Westminster & Nearby</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-4 text-balance">
              Lash Extensions and Advanced Beauty Services
            </h2>
            <p className="text-charcoal/70 text-lg leading-relaxed text-pretty">
              Explore the lash extensions, microneedling and beauty treatments we offer in Northglenn & Westminster, CO.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Service 1 */}
            <Card className="border-0 shadow-lg rounded-3xl overflow-hidden bg-white hover:shadow-xl transition-shadow">
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src="/images/2.jpg"
                  alt="Lash Extensions"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-serif text-2xl text-charcoal mb-3">Lash Extensions</h3>
                <p className="text-charcoal/70 text-sm leading-relaxed">
                  Classic, hybrid and volume lash extensions customized to your eye shape and style.
                </p>
              </CardContent>
            </Card>

            {/* Service 2 */}
            <Card className="border-0 shadow-lg rounded-3xl overflow-hidden bg-white hover:shadow-xl transition-shadow">
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src="/images/3.jpg"
                  alt="Lash Lifts & Brows"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-serif text-2xl text-charcoal mb-3">Lash Lifts & Brows</h3>
                <p className="text-charcoal/70 text-sm leading-relaxed">
                  Keratin lash lifts and brow grooming for a polished, low-maintenance look.
                </p>
              </CardContent>
            </Card>

            {/* Service 3 */}
            <Card className="border-0 shadow-lg rounded-3xl overflow-hidden bg-white hover:shadow-xl transition-shadow">
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src="/images/4.jpg"
                  alt="Microneedling & Skin Treatments"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-serif text-2xl text-charcoal mb-3">Microneedling & Skin Treatments</h3>
                <p className="text-charcoal/70 text-sm leading-relaxed">
                  Target texture, fine lines and scarring with professional microneedling and skin services.
                </p>
              </CardContent>
            </Card>

            {/* Service 4 */}
            <Card className="border-0 shadow-lg rounded-3xl overflow-hidden bg-white hover:shadow-xl transition-shadow">
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src="/images/microblading.jpg"
                  alt="Permanent Makeup & Microblading"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-serif text-2xl text-charcoal mb-3">Permanent Makeup & Microblading</h3>
                <p className="text-charcoal/70 text-sm leading-relaxed">
                  Wake up with ready-to-go brows and defined features every day.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button
              onClick={() => window.open(BOOKING_URL, "_blank")}
              size="lg"
              className="bg-aqua hover:bg-aqua/90 text-charcoal font-medium rounded-full px-8"
            >
              Book Lash or Beauty Service
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-serif text-4xl md:text-5xl text-charcoal text-balance">About The Beauty Company</h2>

              <p className="text-charcoal/80 leading-relaxed">
                With over 15 years of beauty experience and several years focused specifically on lash extensions,
                microneedling and cosmetic treatments, The Beauty Company serves clients throughout Northglenn,
                Westminster, Broomfield and surrounding Colorado communities.
              </p>

              <p className="text-charcoal/80 leading-relaxed">
                We pride ourselves on providing one-on-one care with customized looks ranging from natural to glam.
                Every service prioritizes your comfort, cleanliness and long-lasting results.
              </p>

              <div className="bg-aqua/10 border-l-4 border-aqua p-6 rounded-r-2xl">
                <p className="font-serif text-xl text-charcoal italic">
                  "Beauty should feel effortless, comfortable and uniquely you."
                </p>
              </div>

              <button
                onClick={() => window.open(BOOKING_URL, "_blank")}
                className="text-aqua hover:text-aqua/80 font-medium inline-flex items-center gap-2 transition-colors"
              >
                Meet Your Lash Artist →
              </button>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/4.jpg"
                  alt="Beautiful lash extensions result"
                  width={600}
                  height={700}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 md:py-32 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-4 text-balance">
              How Your Lash Extension Appointment Works
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Step 1 */}
            <Card className="border-0 shadow-lg rounded-3xl p-8 bg-white text-center">
              <div className="w-16 h-16 bg-aqua/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="font-serif text-2xl text-charcoal font-bold">1</span>
              </div>
              <h3 className="font-serif text-2xl text-charcoal mb-4">Consultation</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Share your goals, lifestyle and style preferences. We recommend the best lash extension or treatment for
                you.
              </p>
            </Card>

            {/* Step 2 */}
            <Card className="border-0 shadow-lg rounded-3xl p-8 bg-white text-center">
              <div className="w-16 h-16 bg-aqua/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="font-serif text-2xl text-charcoal font-bold">2</span>
              </div>
              <h3 className="font-serif text-2xl text-charcoal mb-4">Custom Application</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Relax in our Northglenn studio while we carefully apply each lash for a comfortable, precise result.
              </p>
            </Card>

            {/* Step 3 */}
            <Card className="border-0 shadow-lg rounded-3xl p-8 bg-white text-center">
              <div className="w-16 h-16 bg-aqua/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="font-serif text-2xl text-charcoal font-bold">3</span>
              </div>
              <h3 className="font-serif text-2xl text-charcoal mb-4">Aftercare & Maintenance</h3>
              <p className="text-charcoal/70 leading-relaxed">
                We provide easy aftercare tips and recommend fill appointments to keep your lash extensions full and
                beautiful.
              </p>
            </Card>
          </div>

          <div className="text-center">
            <Button
              onClick={() => window.open(BOOKING_URL, "_blank")}
              size="lg"
              className="bg-aqua hover:bg-aqua/90 text-charcoal font-medium rounded-full px-8"
            >
              Book Your Lash Appointment
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-12 text-center text-balance">
              Lash Extension FAQs
            </h2>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-light-gray rounded-2xl px-6">
                <AccordionTrigger className="text-left font-medium text-charcoal hover:no-underline hover:text-aqua">
                  How long do lash extensions last?
                </AccordionTrigger>
                <AccordionContent className="text-charcoal/70 leading-relaxed">
                  Lash extensions in Northglenn & Westminster, CO typically last 3-4 weeks with proper care. We
                  recommend fill appointments every 2-3 weeks to maintain a full, beautiful look as your natural lashes
                  shed through their growth cycle.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-light-gray rounded-2xl px-6">
                <AccordionTrigger className="text-left font-medium text-charcoal hover:no-underline hover:text-aqua">
                  Can I wear makeup with my lash extensions?
                </AccordionTrigger>
                <AccordionContent className="text-charcoal/70 leading-relaxed">
                  Yes! However, we recommend oil-free makeup and makeup removers. Avoid waterproof mascara and oil-based
                  products, as they can break down the lash adhesive. Most clients find they don't need mascara with
                  their lash extensions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-light-gray rounded-2xl px-6">
                <AccordionTrigger className="text-left font-medium text-charcoal hover:no-underline hover:text-aqua">
                  How long does a full set appointment take?
                </AccordionTrigger>
                <AccordionContent className="text-charcoal/70 leading-relaxed">
                  A full set of lash extensions typically takes 1.5 to 2.5 hours, depending on the style you choose.
                  Fill appointments usually take 45 minutes to 1.5 hours. We ensure you're comfortable throughout the
                  entire process at our Northglenn studio.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-light-gray rounded-2xl px-6">
                <AccordionTrigger className="text-left font-medium text-charcoal hover:no-underline hover:text-aqua">
                  Do you offer lash fills and touch-ups?
                </AccordionTrigger>
                <AccordionContent className="text-charcoal/70 leading-relaxed">
                  We offer lash fills every 2-3 weeks to maintain your gorgeous look. Regular fills ensure your lash
                  extensions in Northglenn & Westminster, CO always look fresh and full. We'll remind you when it's time
                  for your next appointment.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border border-light-gray rounded-2xl px-6">
                <AccordionTrigger className="text-left font-medium text-charcoal hover:no-underline hover:text-aqua">
                  Is microneedling safe for all skin types?
                </AccordionTrigger>
                <AccordionContent className="text-charcoal/70 leading-relaxed">
                  Microneedling is safe for most skin types and concerns. During your consultation, we'll assess your
                  skin and discuss any conditions or medications that might affect treatment. Our professional
                  microneedling services target texture, fine lines, and scarring with minimal downtime.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <p className="text-center mt-12 text-charcoal/70">
              Still have questions?{" "}
              <button
                onClick={() => window.open(BOOKING_URL, "_blank")}
                className="text-aqua hover:text-aqua/80 font-medium underline"
              >
                Book a consultation
              </button>{" "}
              and we'll walk you through every step.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-aqua/20 via-cream to-aqua/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-serif text-4xl md:text-5xl text-charcoal mb-6 text-balance">
            Ready for Gorgeous Lashes?
          </h3>
          <p className="text-lg text-charcoal/80 mb-8 max-w-2xl mx-auto text-pretty">
            Click below to book your lash extensions, microneedling or beauty treatment in Northglenn & Westminster, CO.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => window.open(BOOKING_URL, "_blank")}
              size="lg"
              className="bg-aqua hover:bg-aqua/90 text-charcoal font-medium rounded-full px-8"
            >
              Book Now
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-aqua text-aqua hover:bg-aqua hover:text-charcoal rounded-full px-8 bg-transparent"
            >
              <a href="tel:+17204475863">
                <Phone className="w-4 h-4 mr-2" />
                (720) 447-5863
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-cream py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <Image
              src="/images/png-logo.avif"
              alt="The Beauty Company"
              width={100}
              height={40}
              className="h-10 w-auto mx-auto invert opacity-90"
            />
          </div>
          <h4 className="font-serif text-2xl mb-2">The Beauty Company</h4>
          <p className="text-cream/70 text-sm mb-4">
            Serving Northglenn, Westminster, Broomfield and nearby Colorado areas.
          </p>
          <p className="text-cream/50 text-xs">© {new Date().getFullYear()} The Beauty Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
