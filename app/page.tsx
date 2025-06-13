"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Hero from "@/components/hero"
import Carousel from "@/components/carousel"
import Portfolio from "@/components/portfolio"
import Services from "@/components/services"
import Contact from "@/components/contact"

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8])

  return (
    <div ref={containerRef} className="min-h-screen bg-white">
      <motion.div style={{ opacity }}>
        <Hero />
      </motion.div>
      <Portfolio />
      <Carousel />
      <Services />
      <Contact />
    </div>
  )
}
