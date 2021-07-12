import React from 'react'
import Burned from '../Burned'
import Hero from '../Hero'
import Nav from '../Nav/Nav'
import WorkingUs from '../WorkingWithUs/WorkingUs'

export default function Home() {
    return (
        <>
            <Nav />
            <div className="bg-blue-50 pb-10 sm-css">
                <Hero />
                <Burned />
                <WorkingUs />
            </div>
        </>
    )
}
