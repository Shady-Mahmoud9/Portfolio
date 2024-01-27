import React from 'react'
import Navbar from './Navbar'
import First from './First'
import AboutME from './AboutME';
import Services from './Services'
import Skills from './Skills';

import Projects from './Projects';
import Contact from './Contact';
function Home() {
  return (
    <>
<Navbar/>
<First/>
<AboutME/>
<Services/>
<Skills/>
<Projects/>
<Contact/>
    </>
  )
}

export default Home
