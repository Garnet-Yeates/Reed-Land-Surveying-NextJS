'use client'

import { Barlow } from 'next/font/google'
import { createContext, useRef } from 'react'
import Footer from './Footer'

const barlow = Barlow({ subsets: ['latin'], weight: '500' })

export const RootContext = createContext(null);

export default function RootLayout({ children }) {

    const topOfPageRef = useRef(null);
    const bottomOfPageRef = useRef(null);

    const scrollToBottom = (delay) => {
        if (delay) {
            setTimeout(() => bottomOfPageRef.current?.scrollIntoView({ behavior: "smooth" }), delay);
            return;
        }
        bottomOfPageRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    const scrollToTop = (delay) => {
        if (delay) {
            setTimeout(() => topOfPageRef.current?.scrollIntoView({ behavior: "smooth" }), delay);
            return;
        }
        topOfPageRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <html lang="en">
            <body className={barlow.className}>
                <RootContext.Provider value={{scrollToTop, scrollToBottom}}>
                    <div id="top-of-page-div" ref={topOfPageRef}></div>
                    {children}
                    <Footer bottomOfPageRef={bottomOfPageRef} />
                </RootContext.Provider>
            </body>
        </html>
    )
}