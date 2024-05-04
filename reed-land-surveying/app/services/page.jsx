
'use client'

import { motion } from 'framer-motion';
import React, { useContext } from 'react'
import { useState } from 'react';
import { fadeUpShown, fadeUpHidden, fadeInShown, fadeInHidden, fadeLeftShown, fadeLeftHidden } from '../../animations/FramerAnimations';
import UtilitySurveyIcon from '../../public/UtilitySurveyIcon.png'
import SiteLayoutIcon from '../../public/SiteSurveyIcon.png'
import BuildingLayoutIcon from '../../public/BuildingLayoutIcon.png';
import AsBuiltSurveyIcon from '../../public/AsBuiltSurveyIcon.png';
import useBreakpoint from 'bootstrap-5-breakpoint-react-hook';
import Navbar from '../Navbar';
import '../../styles/scss/Services.scss';
import Image from 'next/image';
import { RootContext } from '../layout';

export default function Services() {

    const { scrollToBottom } = useContext(RootContext)

    return (
        <>
            <header className="services-page-header">
                <Navbar scrollToBottom={scrollToBottom} navFg="#000000" navBtnFg='#FFFFFF' />
                <motion.div className="container px-3 px-md-4 px-lg-5 text-center" initial={fadeInHidden} animate={fadeInShown({ delay: 0, duration: 0.75 })}>
                    <h1>
                        We provide high quality construction layout services that are done correctly from start to finish
                    </h1>
                    <p>
                        Reed Land Surveying is dedicated to providing quality Construction Layout services to our clients. We have the knowledge
                        and experience to layout your proposed building. We understand the importance of being able to provide services when you
                        need them and keep your project on track to meet your deadlines
                    </p>
                </motion.div>
            </header>
            <section>
                <motion.div className="container px-3 px-md-4 px-lg-5" initial={fadeInHidden} animate={fadeInShown({ delay: 0.5, duration: 1 })}>
                    <h1 className="heading-with-underline">
                        Our Construction Layout Services
                    </h1>
                    <p className="text-center">
                        Our crew is safety trained for construction layout services, and our field crew can be scheduled with 24-48 hour
                        notice
                    </p>
                </motion.div>
                <div className="container px-3 px-md-4 px-lg-5 max-xl pt-4">
                    <div className="row gx-3 gy-3 justify-content-center">
                        <div className="col-md-6 col-lg-4 col-xl-3">
                            <ServiceCard title="Building Layout" delay={0} icon={BuildingLayoutIcon}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia expedita repellat aperiam eius consectetur.
                                Natus facere iusto aut, consequatur vitae totam voluptatibus quaerat
                            </ServiceCard>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl-3">
                            <ServiceCard title="Site Layout" delay={0.15} icon={SiteLayoutIcon}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia expedita repellat aperiam eius consectetur.
                                Natus facere iusto aut, consequatur vitae totam voluptatibus quaerat
                            </ServiceCard>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl-3">
                            <ServiceCard title="Utility Layout" delay={0.3} icon={UtilitySurveyIcon}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia expedita repellat aperiam eius consectetur.
                                Natus facere iusto aut, consequatur vitae totam voluptatibus quaerat
                            </ServiceCard>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl-3">
                            <ServiceCard title="As-Built Survey" delay={0.45} icon={AsBuiltSurveyIcon}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia expedita repellat aperiam eius consectetur.
                                Natus facere iusto aut, consequatur vitae totam voluptatibus quaerat
                            </ServiceCard>
                        </div>
                    </div>
                </div>

            </section>
            <section className="alternate">
                <motion.div className="container px-3 px-md-4 px-lg-5" initial={fadeInHidden} whileInView={fadeInShown({ delay: 0, duration: 1 })} viewport={{ once: "true", amount: 0 }}>
                    <h1 className="text-center heading-with-underline">
                        Our Procedures
                    </h1>
                    <p className="text-center">
                        Our staff are experienced in communicating with legal counsel regarding the survey product and any issues that are discovered in the course of the survey
                    </p>
                </motion.div>
                <div className="container px-3 px-md-4 px-lg-5 pt-4 pb-2 max-xl overflow-hidden">
                    <div className="row gx-0 gy-3">
                        <div className="col-12">
                            <motion.div initial={fadeLeftHidden} whileInView={fadeLeftShown({ delay: 0, duration: 1 })} viewport={{ once: "true", amount: 0 }}>
                                <FlippableProcedureCard>
                                    <div className="procedure-card">
                                        <div className="procedure-card-front d-flex flex-column justify-content-between">
                                            <div className="procedure-info">
                                                When you retain our services for your project we request a full set of drawings and any CAD design files that are available for the project from you. Once we have the plans we review them and perform the necessary calculations to be sure all the dimensions shown will work and will close mathematically
                                            </div>
                                            <div className="procedure-special-text">
                                                What happens if we discover problems in the plans?
                                            </div>
                                        </div>
                                        <div className="procedure-card-back procedure-card-size-controller d-flex flex-column justify-content-between">
                                            <div className="procedure-info">
                                                If we discover problems we will write up a request for information (RFI) to get clarification and to document any discrepancies. We know the importance of a good “paper trail” and proper lines of communication on your project. Once we have resolved any issues we find in the plans: we can then mobilize our crew into the field to layout the proposed improvements
                                            </div>
                                            <div className="procedure-special-text">
                                                Go back
                                            </div>
                                        </div>
                                    </div>
                                </FlippableProcedureCard>
                            </motion.div>
                        </div>
                        <div className="col-12">
                            <motion.div initial={fadeLeftHidden} whileInView={fadeLeftShown({ delay: 0, duration: 1 })} viewport={{ once: "true", amount: 0 }}>
                                <div className="procedure-card-container d-flex flex-column justify-content-between">
                                    <div className="procedure-card">
                                        <div className="procedure-info">
                                            We communicate with you to before we proceed to the job site to determine what you would like set for control points. This allows us to precalulate any offsets you want before we go to the site to avoid on site field calculations. We then upload a computer file into our data collectors (hand held field computers) before we go to your site. When we get a job site we come equipped with a robotic total station, a data collector, and a digital level to provide efficient and accurate layout by our field crew
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                        <div className="col-12">
                            <motion.div initial={fadeLeftHidden} whileInView={fadeLeftShown({ delay: 0, duration: 1 })} viewport={{ once: "true", amount: 0 }}>
                                <div className="procedure-card-container d-flex flex-column justify-content-between">
                                    <div className="procedure-card">
                                        <div className="procedure-info">
                                            After we stake out you project we return to our office and promptly provide a control sketch depicting the points we set for you using AutoCAD. We can convert AutoCAD drawings to PDF files to enable transfer of drawings and sketches to anyone involved in the project that does not have AutoCAD. Upon completion of your project we can provide the as-built surveys you need
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container px-3 px-md-4 px-lg-5t">
                    <motion.div initial={fadeInHidden} whileInView={fadeInShown({ delay: 0, duration: 1 })} viewport={{ once: "true", amount: 0 }}>
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

            <div className="d-none">
                <section>
                    <div className="container px-3 px-md-4 px-lg-5">
                        <div className="d-flex align-items-start max-lg">
                            <div className="container-fluid px-0">
                                <h1>
                                    Construction Layout Services
                                </h1>
                                <p>
                                    Reed Land Surveying is dedicated to providing quality Construction Layout services to our clients. We have the
                                    knowledge and experience to layout your proposed building. We understand the importance of being able to
                                    provide services when you need them and keep your project on track to meet your deadlines. Our services include:
                                </p>
                                <ul className="my-2 circle-list">
                                    <li>Building layout</li>
                                    <li>Site layout</li>
                                    <li>Utility layout</li>
                                    <li>As-built surveys</li>
                                </ul>
                                <p>
                                    Our crew is safety trained for construction layout services, and our field crew can be scheduled with 24-48 hour
                                    notice
                                </p>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="alternate">
                    <div className="container px-3 px-md-4 px-lg-5">
                        <div className="d-flex align-items-start max-lg">
                            <div className="container-fluid px-0">
                                <h1>
                                    Boundary Retracement Surveys
                                </h1>
                                <p>
                                    A boundary retracement survey consists of research at the municipal offices and at the registry of deeds, survey
                                    calculations, data reduction, field reconnaissance, field measurements, and analysis necessary to render an
                                    opinion regarding the location of the existing boundary lines of the parcels of land. The measurements for the
                                    survey are made on the ground with survey instruments. Typically iron rods are set at the corners of the property
                                    and the lines between the corners are marked with wooden stakes. A plan can be prepared to depict the results of
                                    the survey that can be recorded at a registry of deeds. Developers, homeowners and commercial land owners are
                                    typical clients.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container px-3 px-md-4 px-lg-5">
                        <div className="d-flex align-items-start max-lg">
                            <div className="container-fluid px-0">
                                <h1>
                                    Boundary Retracement Surveys
                                </h1>
                                <p>
                                    A boundary retracement survey consists of research at the municipal offices and at the registry of deeds, survey
                                    calculations, data reduction, field reconnaissance, field measurements, and analysis necessary to render an
                                    opinion regarding the location of the existing boundary lines of the parcels of land. The measurements for the
                                    survey are made on the ground with survey instruments. Typically iron rods are set at the corners of the property
                                    and the lines between the corners are marked with wooden stakes. A plan can be prepared to depict the results of
                                    the survey that can be recorded at a registry of deeds. Developers, homeowners and commercial land owners are
                                    typical clients.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="alternate">
                    <div className="container px-3 px-md-4 px-lg-5">
                        <div className="d-flex align-items-start max-lg">
                            <div className="container-fluid px-0">
                                <h1>
                                    Existing Conditions Surveys
                                </h1>
                                <p>
                                    An existing conditions survey consists of the integration of a boundary retracement survey, resource area mapping
                                    (wetlands, riverfront areas, and flood zones), a utility survey, and a topographic survey into one survey plan.
                                    These plans are used by design professionals as a base map for their design. Typical clients include architects,
                                    civil engineers, developers, homeowners and landscape architects.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container px-3 px-md-4 px-lg-5">
                        <div className="d-flex align-items-start max-lg">
                            <div className="container-fluid px-0">
                                <h1>
                                    Approval Not Required Plans
                                </h1>
                                <p>
                                    An Approval Not Required Plan is a plan created to divide land on existing ways. These plans are prepared after a
                                    boundary retracement survey has been performed to render an opinion of where existing boundaries of a parcel of land.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="alternate">
                    <div className="container px-3 px-md-4 px-lg-5">
                        <div className="d-flex align-items-start max-lg">
                            <div className="container-fluid px-0">
                                <h1>
                                    Easement Surveys
                                </h1>
                                <p>
                                    An easement is an interest in a property that grants a right of use to another person (easement in gross) or that
                                    benefits another property (appurtenant easement). Easement plans are used to describe the portion of a property
                                    subject to an easement and to enable a land surveyor to mark the location of an easement on the ground.
                                    Easements can be for many purposes, some typical examples are:
                                </p>
                                <ul className="my-2 circle-list">
                                    <li>Access easements</li>
                                    <li>Drainage easements</li>
                                    <li>Driveway easements</li>
                                    <li>Exclusive easements</li>
                                    <li>Flowage easements</li>
                                    <li>Light and air easements</li>
                                    <li>Utility easements</li>
                                    <li>View easements</li>
                                    <li>Water easements</li>
                                    <li>Right of ways</li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container px-3 px-md-4 px-lg-5">
                        <div className="d-flex align-items-start max-lg">
                            <div className="container-fluid px-0">
                                <h1>
                                    ALTA/ACSM Land Title Surveys
                                </h1>
                                <p>
                                    An ALTA/ACSM (American Land Title Association and American Congress on Surveying and Mapping) Land Title
                                    Survey is a boundary retracement survey with a plan prepared depicting specific features (buildings, parking,
                                    etc.) and encroachments on the property. These plans are used by owners, title insurance companies, and
                                    banks in preparing title insurance policies that are issued for commercial properties.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

function FlippableProcedureCard({ children }) {
    const [isFlipped, setIsFlipped] = useState(false);
    return (
        <div className={"procedure-card-container flippable" + (isFlipped ? " flipped" : "")} onClick={() => setIsFlipped(currValue => !currValue)}>
            {children}
        </div>
    )
}

function ServiceCard({ icon, title, children, delay }) {

    const [detailedView, setDetailedView] = useState(false);

    const bp = useBreakpoint();

    return (
        <div className="service-card-container"
            onClick={() => { console.log("mouse up and bp is" + bp + "bp === xl ? " + (bp === "xl")); return ((bp === "xl" || bp === "xxl") ? null : setDetailedView(currValue => !currValue)) }}
            onMouseEnter={() => { console.log("mouseenter"); return ((bp === "xl" || bp === "xxl") ? setDetailedView(true) : null) }}
            onMouseLeave={() => { console.log("mouseleave"); return ((bp === "xl" || bp === "xxl") ? setDetailedView(false) : null) }}>
            <motion.div className={"service-card" + (detailedView ? " detailed" : "")} initial={fadeUpHidden} whileInView={fadeUpShown({ delay, duration: 0.75 })} viewport={{ once: true, amount: 0, }}>
                <div className="service-card-slider">
                    <div className="service-card-icon-container">
                        <Image src={icon} className="service-card-icon" />
                    </div>
                    <div className="service-card-heading">
                        {title}
                    </div>
                    <p className="service-card-info">
                        {children}
                    </p>
                </div>

            </motion.div>
        </div>)
}