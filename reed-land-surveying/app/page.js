'use client'

import { motion } from 'framer-motion'
import React, { useContext } from 'react'

import Navbar from './Navbar'
import Link from 'next/link'
import '../styles/scss/Home.scss';
import { fadeUpShown, fadeUpHidden, fadeInShown, fadeInHidden, fadeRightHidden, fadeRightShown, fadeLeftShown, fadeLeftHidden } from '../animations/FramerAnimations';
import useBreakpoint from 'bootstrap-5-breakpoint-react-hook';

import UtilitySurveyIcon from '../public/UtilitySurveyIcon.png'
import SiteLayoutIcon from '../public/SiteSurveyIcon.png'
import BuildingLayoutIcon from '../public/BuildingLayoutIcon.png';
import AsBuiltSurveyIcon from '../public/AsBuiltSurveyIcon.png'
import { RootContext } from './layout';
import Image from 'next/image'

export default function Home() {

    const { scrollToBottom } = useContext(RootContext)

    const bp = useBreakpoint();

    return (
        <>
            <header className="home-page-header">
                <Navbar scrollToBottom={scrollToBottom} navFg="#FFFFFF" navBtnFg='#000000' />
                <motion.div className="container px-3 px-md-4 px-lg-5 pb-5 overflow-hidden" initial={fadeInHidden} animate={fadeInShown({ delay: 0, duration: 0.75 })}>
                    <div className="row gx-5 gy-5">
                        <div className="col-xl-7">
                            <div className="home-header-left-section d-flex flex-column justify-content-center h-100">
                                <h1>
                                    Need construction layout services? You need Reed
                                </h1>
                                <p>
                                    We are dedicated to providing quality survey services to clients in the Eastern Massachusetts
                                    area. Our main focus is Construction Layout Survey services for contractors. We strive to exceed all expectations and
                                    accelerate the development of any project.
                                </p>
                            </div>

                        </div>
                        <div className="col-xl-5">
                            <h1 className='text-center'>
                                Our Services
                            </h1>
                            <div className="container-fluid px-5 px-md-0">
                                <div className="row gy-3 gx-3">
                                    <div className="col-6 col-md-3 col-lg-3 col-xl-6">
                                        <MiniServiceCard title="Building Layout" delay={0.15} icon={BuildingLayoutIcon} />
                                    </div>
                                    <div className="col-6 col-md-3 col-lg-3 col-xl-6">
                                        <MiniServiceCard title="Site Layout" delay={0.3} icon={SiteLayoutIcon} />

                                    </div>
                                    <div className="col-6 col-md-3 col-lg-3 col-xl-6">
                                        <MiniServiceCard title="Utility Layout" delay={0.45} icon={UtilitySurveyIcon} />

                                    </div>
                                    <div className="col-6 col-md-3 col-lg-3 col-xl-6">
                                        <MiniServiceCard title="As-Built Survey" delay={0.6} icon={AsBuiltSurveyIcon} />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </header>
            <section>
                <div className="container px-3 px-md-4 px-lg-5">
                    <motion.div initial={fadeInHidden} whileInView={fadeInShown({ delay: 0.5, duration: 1 })} viewport={{ once: "true", amount: 0 }}>
                        <h1 className="text-center heading-with-underline">
                            We Cover Eastern Massachusetts
                        </h1>
                        <p className="text-center">
                            Reed Land Surveying is dedicated to providing quality survey services to clients in Eastern
                            Massachusetts. This includes the Greater Boston area, Worcester county, Bristol county, and even parts of Rhode Island
                            and New Hampshire. Our services are not neccessarily limited to Massachusetts. If you are unsure of whether we service your area, feel free to contact us to see if we can make it work.
                        </p>
                    </motion.div>
                    <div className="row">
                        <div className="col-12">
                            <div className="map-wrapper">
                                <div className="massachusetts-background-container" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

function MiniServiceCard({ icon, title, delay }) {
    return (
        <Link href="/services" className="mini-service-card-link">
            <motion.div className={"mini-service-card"} initial={fadeUpHidden} animate={fadeUpShown({ delay, duration: 0.75 })}>
                <Image src={icon} className="mini-service-card-icon" />
                <div className="mini-service-card-heading">
                    {title}
                </div>
            </motion.div>
        </Link>
    )
}
