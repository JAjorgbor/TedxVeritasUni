'use client'
import { HashValueContext } from '@/app/Providers'
import { ReadStream } from 'fs'
import { useRouter } from 'next/navigation'
import React from 'react'
import { InView } from 'react-intersection-observer'

interface SectionPropsBase {
    children?: React.ReactNode
    sectionName?: string
    className?: string
}
type SectionProps = SectionPropsBase & React.ComponentPropsWithRef<'section'>

const Section: React.FC<SectionProps> = ({ children, sectionName, className }) => {
    const { hashValue, setHashValue } = React.useContext(HashValueContext)
    const router = useRouter()
    return (
        <>
            <InView
                as='section'
                id={`${sectionName}`}
                rootMargin='0px 0px -90% 0px'
                onChange={(inView, entry) => {
                    if (inView) {
                        setHashValue(`#${sectionName}`)
                        router.replace(`/${sectionName ? '#' + sectionName : ''}`, { scroll: false })
                    }
                }}
                className={'mx-auto w-5/6 ' + className}
            >
                {children}
            </InView>
        </>
    )
}
export default Section
