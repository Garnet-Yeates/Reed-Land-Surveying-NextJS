'use client'

import React, { useContext } from 'react'
import '../../styles/scss/AboutUs.scss';

import Navbar from '../Navbar'
import { fadeInShown, fadeInHidden } from '../../animations/FramerAnimations';
import { motion } from 'framer-motion';
import { RootContext } from '../layout';

export default function AboutUs() {

    const { scrollToBottom } = useContext(RootContext)

    return (
        <>
            <header className="about-page-header">
                <Navbar scrollToBottom={scrollToBottom} navFg="#FFFFFF" navBtnFg='#000000' />
                <motion.div className="container px-3 px-md-4 px-lg-5" initial={fadeInHidden} animate={fadeInShown({ delay: 0, duration: 0.75 })}>
                    <span className="heading-secondary">BASED IN MASSACHUSETTS</span>
                    <h1>
                        We are a fully licensed land surveying company serving areas around Massachusetts.
                    </h1>
                    <p>
                        Reed Land Surveying is a fully licensed land surveying company serving the greater Boston area, Worcester county, Bristol county, and even parts of Rhode Island
                        and New Hampshire. Our services are not neccessarily limited to Massachusetts. If you are unsure of whether we service your area, feel free to contact us to see if we can make it work.
                    </p>
                </motion.div>
            </header>
            <section>
                <div className="container px-3 px-md-4 px-lg-5">
                    <div className="row">
                        <motion.div className="col-xxl-10" initial={fadeInHidden} animate={fadeInShown({ delay: 0.5, duration: 0.75 })}>
                            <span className="heading-secondary">WHO WE ARE</span>
                            <h1>
                                Our experienced land surveying team delivers amazing results
                            </h1>
                            <p>
                                Our staff strives to continually improve our methods and procedures to provide our clients with the highest value for least cost. The latest
                                technology is utilized to provide fast and accurate delivery of our services.
                            </p>
                        </motion.div>
                    </div>
                </div>
                <div className="staff-cards-container container px-md-4 px-lg-5">
                    <div className="row">
                        <div className="col-6 col-lg-4 col-xl-3 d-flex justify-content-center">
                            <figure className="staff-card-figure">
                                <div className="staff-card">
                                    <div className="flip-card">
                                        <div className="flip-card-inner">
                                            <div className="flip-card-front">
                                                <img src="https://i.gyazo.com/159373b7e6f54bb456aaa0aaad066f4c.png" alt="" />
                                            </div>
                                            <div className="flip-card-back">
                                                <img src="https://c.tenor.com/Rn-_5B4Xx04AAAAd/eren-transform-eren-yeager.gif" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <figcaption className="staff-card-caption">
                                    <span className="heading-secondary mb-0">Glen Reed</span>
                                    <span className="heading-tertiary mb-0">Founder, CEO</span>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="col-6 col-lg-4 col-xl-3 d-flex justify-content-center">
                            <figure className="staff-card-figure">
                                <div className="staff-card">
                                    <div className="flip-card">
                                        <div className="flip-card-inner">
                                            <div className="flip-card-front">
                                                <img src="https://i.gyazo.com/77da5575e7646a0d6b564a1b69ababef.png" alt="" />
                                            </div>
                                            <div className="flip-card-back">
                                                <img src="https://i.pinimg.com/originals/f6/d6/c4/f6d6c43efe032097de2888795efd9e6a.gif" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <figcaption className="staff-card-caption">
                                    <span className="heading-secondary mb-0">Glen Reed</span>
                                    <span className="heading-tertiary mb-0">Founder, CEO</span>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="col-6 col-lg-4 col-xl-3 d-flex justify-content-center">
                            <figure className="staff-card-figure">
                                <div className="staff-card">
                                    <div className="flip-card">
                                        <div className="flip-card-inner">
                                            <div className="flip-card-front">
                                                <img src="https://i.gyazo.com/264a08a45146022d39827f94fe47d92f.png" alt="" />
                                            </div>
                                            <div className="flip-card-back">
                                                <img src="https://c.tenor.com/ct5VJb9nNtsAAAAC/armin-armin-arlert.gif" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <figcaption className="staff-card-caption">
                                    <span className="heading-secondary mb-0">Glen Reed</span>
                                    <span className="heading-tertiary mb-0">Founder, CEO</span>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="col-6 col-lg-4 col-xl-3 d-flex justify-content-center">
                            <figure className="staff-card-figure">
                                <div className="staff-card">
                                    <div className="flip-card">
                                        <div className="flip-card-inner">
                                            <div className="flip-card-front">
                                                <img src="https://i.gyazo.com/0257ce9230aa60d128e4aef02a380ec0.png" alt="" />
                                            </div>
                                            <div className="flip-card-back">
                                                <img src="https://i.pinimg.com/originals/6b/4f/42/6b4f428537b6ef486fd6754e1906ff15.gif" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <figcaption className="staff-card-caption">
                                    <span className="heading-secondary mb-0">Glen Reed</span>
                                    <span className="heading-tertiary mb-0">Founder, CEO</span>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
            <section className="alternate bottom-section">
                <div className="container px-3 px-md-4 px-lg-5">
                    <div className="row">
                        <motion.div className="col-xxl-10" initial={fadeInHidden} animate={fadeInShown({ delay: 0.5, duration: 0.75 })}>
                            <span className="heading-secondary">OUR MOTTO</span>
                            <h1>
                                We have been delivering high quality construction layout services since 2002
                            </h1>
                            <p>
                                Our company motto is to &quot;do it right the first time&quot;. Glen D. Reed founded the firm in order to provide surveys that are done correctly from start to finish.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    )
}