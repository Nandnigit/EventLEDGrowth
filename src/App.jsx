import { useState } from 'react'

import './App.css'
import Card from './Components/CraftCard/Card'
import Testinomial from './Components/Testimonial/Testimonial'
import Session from './Components/SessionCards/Session'
import Video from './Components/VideoSection/Video'
import Footer from './Components/Footer/Footer'
import FAQ from './Components/FAQ/FAQ'

function App() {

  return (
    <>
      <Card />
      <Testinomial />
      <Session />
      <Video />
      <FAQ />
      <Footer />
    </>
  )
}

export default App
