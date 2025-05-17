"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  MessageCircle,
} from "lucide-react";
import CountUp from "react-countup";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function LandingPage() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // Removing the scrollY and heroOpacity transform
  // const { scrollY } = useScroll()
  // const heroOpacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-gradient-to-b from-[#0F172A] to-[#1E293B] text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16">
        {init && (
          <Particles
            className="absolute inset-0 -z-10"
            options={{
              background: {
                color: {
                  value: "transparent",
                },
              },
              particles: {
                color: {
                  value: ["#3B82F6", "#22D3EE", "#6366F1"],
                },
                links: {
                  color: "#3B82F6",
                  distance: 150,
                  enable: true,
                  opacity: 0.2,
                },
                move: {
                  enable: true,
                  speed: 1,
                },
                size: {
                  value: { min: 1, max: 3 },
                },
                opacity: {
                  value: 0.3,
                },
              },
            }}
          />
        )}

        <motion.div
          className="container max-w-5xl mx-auto flex flex-col items-center text-center gap-8 z-10"
          // Removing the opacity style that was tied to scroll
          // style={{ opacity: heroOpacity }}
        >
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full flex justify-center"
          >
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
                ANGC <span className="text-[#3B82F6]">Group</span>
              </h1>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3B82F6] to-[#22D3EE]">
              360° Degree Business Consulting Solutions
            </span>
          </motion.h2>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl"
          >
            Helping startups and industries with licensing, subsidies, finance &
            growth strategies.
          </motion.p>

          {/* Contact Link Boxes */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-3xl mt-4"
          >
            <ContactLinkBox
              icon={<Facebook className="w-5 h-5" />}
              title="Facebook"
              subtitle="Join Our Page"
              href="https://www.facebook.com/profile.php?id=61575913509298"
              color="from-[#1D4ED8] to-[#1E3A8A]"
            />

            <ContactLinkBox
              icon={<Instagram className="w-5 h-5" />}
              title="Instagram"
              subtitle="Follow Us"
              href="https://www.instagram.com/angcgroupindia/"
              color="from-[#9333EA] to-[#7E22CE]"
            />

            <ContactLinkBox
              icon={<Linkedin className="w-5 h-5" />}
              title="LinkedIn"
              subtitle="Connect with Us"
              href="https://in.linkedin.com/company/angcgroup"
              color="from-[#0A66C2] to-[#0284C7]"
            />
            <ContactLinkBox
              icon={<MessageCircle className="w-5 h-5" />}
              title="WhatsApp Now"
              subtitle="Direct Message"
              href="https://wa.me/919111777571"
              color="from-[#22D3EE] to-[#06B6D4]"
            />

            <ContactLinkBox
              icon={<Phone className="w-5 h-5" />}
              title="Call Now"
              subtitle="+91 9111777571"
              href="tel:+919111777571"
              color="from-[#3B82F6] to-[#2563EB]"
            />

            <ContactLinkBox
              icon={<Phone className="w-5 h-5" />}
              title="Alternate"
              subtitle="+91 9475655555"
              href="tel:+919475655555"
              color="from-[#6366F1] to-[#4F46E5]"
            />

            <ContactLinkBox
              icon={<Mail className="w-5 h-5" />}
              title="Email Us"
              subtitle="info@angcgroup.com"
              href="mailto:info@angcgroup.com"
              color="from-[#EAB308] to-[#CA8A04]"
            />

            <ContactLinkBox
              icon={<MapPin className="w-5 h-5" />}
              title="Visit Our Office"
              subtitle="Bhopal, MP"
              href="https://maps.google.com/?q=T-9+%26+T-11,+3rd+Floor,+City+Center,+M.P+Nagar+Zone-1,+Bhopal+-+462011"
              color="from-[#F43F5E] to-[#E11D48]"
              className="sm:col-span-2"
            />
          </motion.div>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-wrap gap-4 justify-center mt-6"
          >
            <Link
              href="tel:+919111777571"
              className="flex items-center gap-2 bg-[#3B82F6] hover:bg-[#2563EB] px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#3B82F6]/20 hover:scale-105"
            >
              Get Free Consultation
            </Link>
            <Link
              href="#services"
              className="flex items-center gap-2 bg-white/10 backdrop-blur-md hover:bg-white/20 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-white/10 hover:scale-105"
            >
              Know More About Our Services
            </Link>
          </motion.div>

          {/* Removing the scroll to explore element
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
          >
            <span className="text-sm text-gray-400 mb-2">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1">
              <motion.div
                animate={{
                  y: [0, 12, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                }}
                className="w-2 h-2 bg-white rounded-full"
              />
            </div>
          </motion.div>
          */}
        </motion.div>
      </section>

      {/* About ANGC */}
      <AboutSection />

      {/* Core Services */}
      <ServicesSection />

      {/* How We Assist You */}
      <AssistanceSection />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </main>
  );
}

function ContactLinkBox({
  icon,
  title,
  subtitle,
  href,
  color,
  className = "",
}) {
  return (
    <Link
      href={href}
      target={href.startsWith("http") ? "_blank" : "_self"}
      rel={href.startsWith("http") ? "noopener noreferrer" : ""}
      className={`bg-gradient-to-r ${color} p-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg group ${className}`}
    >
      <div className="flex items-center gap-3">
        <div className="bg-white/20 p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <div className="text-left">
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm text-white/80">{subtitle}</p>
        </div>
      </div>
    </Link>
  );
}

function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section ref={ref} className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#0F172A]/90"></div>
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          className="absolute -top-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-r from-[#3B82F6]/30 to-[#6366F1]/30 blur-3xl"
        />
      </div>

      <div className="container max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-[#3B82F6]">ANGC</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            ANGC is a next-generation business consulting firm offering
            360-degree solutions in industrial licensing, government subsidies,
            financial advisory, compliance, startup support, and more. Over
            1000+ MSME and industrial clients served across India.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <CounterCard
            isInView={isInView}
            delay={0.1}
            icon="🏢"
            value={1000}
            label="MSME Clients"
            description="Businesses successfully served"
          />
          <CounterCard
            isInView={isInView}
            delay={0.3}
            icon="👥"
            value={200}
            label="Consulting Experts"
            description="Professional consultants"
          />
          <CounterCard
            isInView={isInView}
            delay={0.5}
            icon="⏱️"
            value={12}
            label="Years of Experience"
            description="Industry expertise"
          />
          <CounterCard
            isInView={isInView}
            delay={0.7}
            icon="🏆"
            value={75}
            label="Business Awards"
            description="Recognition of excellence"
          />
        </div>
      </div>
    </section>
  );
}

function CounterCard({ isInView, delay, icon, value, label, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.7, delay }}
      className="bg-white/5 backdrop-blur-md rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:bg-white/10 transition-all duration-500"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-3xl md:text-4xl font-bold text-[#22D3EE] mb-2">
        {isInView ? (
          <>
            <CountUp end={value} duration={2.5} />
            {value >= 100 ? "+" : ""}
          </>
        ) : (
          "0"
        )}
      </h3>
      <h4 className="text-xl font-semibold mb-2">{label}</h4>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
}

function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const services = [
    {
      title: "Industrial Permissions & Licensing",
      description:
        "Comprehensive assistance for all industrial permissions and licensing requirements",
      icon: "🏭",
    },
    {
      title: "Business Finance (Bank/NBFC Loans)",
      description:
        "Expert guidance on securing business financing through banks and NBFCs",
      icon: "💰",
    },
    {
      title: "Government Subsidies & Grants",
      description:
        "Assistance in identifying and applying for government subsidies and grants",
      icon: "🏛️",
    },
    {
      title: "Industrial Land Assistance",
      description:
        "Support in acquiring and developing industrial land for your business",
      icon: "🏞️",
    },
    {
      title: "Project Report & Compliance",
      description:
        "Detailed project reports and compliance management services",
      icon: "📊",
    },
    {
      title: "Market Linkages (GEM, Exports)",
      description:
        "Connecting businesses with market opportunities through GEM and exports",
      icon: "🌐",
    },
    {
      title: "Startup Support (DPIIT, Pitch Decks)",
      description:
        "Comprehensive support for startups including DPIIT registration and pitch decks",
      icon: "🚀",
    },
  ];

  return (
    <section
      id="services"
      ref={ref}
      className="py-20 px-4 bg-gradient-to-b from-[#1E293B] to-[#0F172A]"
    >
      <div className="container max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Core <span className="text-[#6366F1]">Services</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Comprehensive business solutions tailored to your specific industry
            needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              isInView={isInView}
              delay={0.1 * index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ isInView, delay, icon, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5, scale: 1.03 }}
      className="bg-white/5 backdrop-blur-md rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-[#6366F1]/10 group"
    >
      <div className="flex items-start gap-4">
        <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 text-[#6366F1]">{title}</h3>
          <p className="text-gray-300">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

function AssistanceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const assistanceSteps = [
    {
      title: "Touchbase & Planning",
      description:
        "Initial consultation to understand your business needs and develop a strategic plan",
      icon: "🤝",
      color: "from-[#3B82F6] to-[#2563EB]",
    },
    {
      title: "Documentation Help",
      description:
        "Comprehensive assistance with all necessary documentation and paperwork",
      icon: "📄",
      color: "from-[#22D3EE] to-[#06B6D4]",
    },
    {
      title: "Permissions & Approvals",
      description:
        "Expert guidance through the permissions and approvals process",
      icon: "✅",
      color: "from-[#6366F1] to-[#4F46E5]",
    },
    {
      title: "3-Year Handholding",
      description:
        "Continuous support and guidance for three years to ensure business success",
      icon: "🔄",
      color: "from-[#EAB308] to-[#CA8A04]",
    },
  ];

  return (
    <section ref={ref} className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#0F172A]/90"></div>
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -5, 0],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          className="absolute -bottom-[30%] -left-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-r from-[#22D3EE]/30 to-[#3B82F6]/30 blur-3xl"
        />
      </div>

      <div className="container max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How We <span className="text-[#22D3EE]">Assist You</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our comprehensive approach to ensure your business success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {assistanceSteps.map((step, index) => (
            <AssistanceCard
              key={index}
              isInView={isInView}
              delay={0.15 * index}
              icon={step.icon}
              title={step.title}
              description={step.description}
              color={step.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function AssistanceCard({ isInView, delay, icon, title, description, color }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay }}
      className={`bg-gradient-to-br ${color} rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 text-white`}
    >
      <div className="flex items-start gap-4">
        <div className="text-3xl bg-white/20 p-3 rounded-full">{icon}</div>
        <div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-white/80">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote:
        "ANGC Group helped us navigate the complex process of industrial licensing and securing government subsidies. Their expertise saved us both time and resources.",
      name: "Rajesh Kumar",
      position: "CEO, Innovate Manufacturing",
    },
    {
      quote:
        "The team at ANGC provided exceptional support for our startup. From DPIIT registration to creating a compelling pitch deck, they were with us every step of the way.",
      name: "Priya Sharma",
      position: "Founder, TechStart Solutions",
    },
    {
      quote:
        "Their 3-year handholding approach ensured that our business not only got off the ground but continued to thrive. Highly recommend their services to any business.",
      name: "Amit Patel",
      position: "Director, GreenEnergy Systems",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section
      ref={ref}
      className="py-20 px-4 bg-gradient-to-b from-[#1E293B] to-[#0F172A]"
    >
      <div className="container max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Client <span className="text-[#EAB308]">Testimonials</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Hear what our clients have to say about our services
          </p>
        </motion.div>

        <div className="relative">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{
                opacity: currentTestimonial === index ? 1 : 0,
                x: currentTestimonial === index ? 0 : 100,
                display: currentTestimonial === index ? "block" : "none",
              }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-8 shadow-xl"
            >
              <div className="text-4xl text-[#EAB308] mb-4">"</div>
              <p className="text-lg text-gray-200 italic mb-6">
                {testimonial.quote}
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-[#EAB308] to-[#F59E0B] rounded-full flex items-center justify-center text-xl font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentTestimonial === index
                    ? "bg-[#EAB308] scale-125"
                    : "bg-white/30"
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustedAssociatesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section ref={ref} className="py-20 px-4">
      <div className="container max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted <span className="text-[#3B82F6]">Associates</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We collaborate with leading organizations to provide the best
            solutions
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-6"
        >
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md rounded-xl p-6 flex items-center justify-center h-24"
            >
              <div className="w-full h-full flex items-center justify-center bg-white/10 rounded-lg">
                <span className="text-gray-400 font-medium">Partner Logo</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.4 });

  return (
    <section ref={ref} className="py-20 px-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] to-[#1E293B] opacity-90"></div>
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          className="absolute -top-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-r from-[#3B82F6]/30 to-[#6366F1]/30 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -5, 0],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          className="absolute -bottom-[30%] -left-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-r from-[#22D3EE]/30 to-[#3B82F6]/30 blur-3xl"
        />
      </div>

      <div className="container max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
          }
          transition={{ duration: 0.7 }}
          className="bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-white/10 text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            Need help starting or growing your{" "}
            <span className="text-[#EAB308]">business</span>?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Book a free consultation with our experts today.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <Link
              href="tel:+919111777571"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#EAB308] to-[#F59E0B] text-black px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#EAB308]/30 hover:scale-105 group"
            >
              <Phone size={20} className="group-hover:animate-pulse" />
              📲 Book Now
              <motion.span
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
                className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#EAB308]/20 to-[#F59E0B]/20 blur-xl -z-10"
              />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-white/10">
      <div className="container max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-6">
              ANGC <span className="text-[#3B82F6]">Group</span>
            </h3>
            <p className="text-gray-400 max-w-md">
              A 360-degree business consulting firm dedicated to empowering
              businesses with strategic solutions and expert guidance.
            </p>

            <div className="flex gap-4 mt-6">
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-gradient-to-tr hover:from-[#FD5949] hover:to-[#D6249F] p-2 rounded-full transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-[#0A66C2] p-2 rounded-full transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-[#1877F2] p-2 rounded-full transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#3B82F6] mt-1" />
                <div>
                  <p className="font-medium">Phone</p>
                  <a
                    href="tel:+919111777571"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    +91 9111777571
                  </a>
                  <br />
                  <a
                    href="tel:+919475655555"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    +91 9475655555
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#3B82F6] mt-1" />
                <div>
                  <p className="font-medium">Email</p>
                  <a
                    href="mailto:info@angcgroup.com"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    info@angcgroup.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#3B82F6] mt-1" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-gray-400">
                    T-9 & T-11, 3rd Floor, City Center, M.P Nagar Zone-1, Bhopal
                    - 462011
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 flex items-center justify-center text-[#3B82F6] mt-1">
                  🕒
                </div>
                <div>
                  <p className="font-medium">Office Hours</p>
                  <p className="text-gray-400">9:00 AM – 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 text-center">
          <p className="text-gray-400 text-sm">
            &copy; 2022 ANGC Group India Pvt. Ltd. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
