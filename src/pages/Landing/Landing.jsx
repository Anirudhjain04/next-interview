import React from 'react'
import Button from '../../components/ui/Button'
import Card from '../../components/ui/Card'
import Navbar from '../../components/layout/Navbar'
import Hero from '../../components/section/Hero'
import HowItWorks from '../../components/section/HowItWorks'
import Features from '../../components/section/Features'
import CTA from '../../components/section/CTA'

const Landing = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Features />
      <CTA />
    </>
  )
}

export default Landing