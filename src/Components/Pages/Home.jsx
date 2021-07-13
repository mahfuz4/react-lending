
import React from 'react'
import Burned from '../Burned'
import CompanyDetails from '../CompanyDetails/CompanyDetails'
import Employe from '../Employee/Employe'
import Hero from '../Hero'
import Nav from '../Nav/Nav'
import Footer from "../Footer/Footer";
import Input from "../Input/Input";
import WorkingUs from "../WorkingWithUs/WorkingUs";

export default function Home() {
  return (
    <>
      <Nav />
      <div className="bg-blue-50 pb-10 sm-css">
        <Hero />
        
        <Burned />
        <WorkingUs />
      </div>
      <CompanyDetails/>
      <Employe />

      <Input/>
      <Footer />
    </>

    
  );
}
