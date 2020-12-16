import React from 'react'
import Hero from '../../Components/Home/Hero'
import EventBlock from '../../Components/Home/EventBlock'
import CommunityBlock from '../../Components/Home/CommunityBlock'
import HangoutBlock from '../../Components/Home/HangoutBlock'
import Navbar from '../../layouts/Header/Header'

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <EventBlock />
            <CommunityBlock />
            <HangoutBlock />
        </>
    )
}
