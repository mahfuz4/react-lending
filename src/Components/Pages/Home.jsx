
import CompanyDetails from '../CompanyDetails/CompanyDetails'
import Employe from '../Employee/Employe'
import React from "react";
import Burned from "../Burned";
import Footer from "../Footer/Footer";
import Hero from "../Hero";
import Input from "../Input/Input";
import Nav from "../Nav/Nav";
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
            <CompanyDetails />

            <Employe />
            <Input/>
            <Footer/>
        </>
    )
}
