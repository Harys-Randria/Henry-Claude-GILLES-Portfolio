import Header from '@/components/header'
import Hero from '@/components/hero'
import About from '@/components/about'
import Expertise from '@/components/expertise'
import Skills from '@/components/skills'
import Experience from '@/components/experience'
import Education from '@/components/education'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <About />
      <Expertise />
      <Skills />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </main>
  )
}
