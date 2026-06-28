import '../styles/sections.css'
import AssociationSection from './sections/AssociationSection.jsx'
import ContactSection from './sections/ContactSection.jsx'
import HomeSection from './sections/HomeSection.jsx'
import PreparationSection from './sections/PreparationSection.jsx'
import SupportSection from './sections/SupportSection.jsx'
import TeamSection from './sections/TeamSection.jsx'
import TrekSection from './sections/TrekSection.jsx'

function Main() {
  return (
    <main id="main-content">
      <HomeSection />
      <TeamSection />
      <TrekSection />
      <AssociationSection />
      <PreparationSection />
      <SupportSection />
      <ContactSection />
    </main>
  )
}

export default Main
