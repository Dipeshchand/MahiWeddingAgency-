import React from 'react'
import Hero from "../components/home/Hero";
import Intro from "../components/home/Intro";
import GalleryPreview from "../components/home/GalleryPreview";
import Stories from "../components/home/Stories";
import AboutPreview from "../components/home/AboutPreview";
import CTA from "../components/home/CTA";

export default function Home() {
  return (
    <>
    <Hero />
    <CTA />
    <Intro />
    <GalleryPreview />
    </>
  )
}
