'use client'
import React from 'react'
import { Accordion, AccordionItem } from '@nextui-org/react'
import Section from '@/components/elements/Section'

const FAQs = () => {
  const defaultContent =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

  return (
    <>
      <Section sectionName='FAQs' className='mt-10'>
        <h2 className='text-2xl text-center font-bold'>
          Frequently Asked Questions
        </h2>
        <div className='lg:w-3/5 mx-auto'>
          <Accordion>
            <AccordionItem key='1' title='How do I register for the event'>
              {defaultContent}
            </AccordionItem>
            <AccordionItem
              key='2'
              title='What are the registration fees and what is included'
            >
              {defaultContent}
            </AccordionItem>
            <AccordionItem key='3' title='Will there be onsite registratiopn'>
              {defaultContent}
            </AccordionItem>
          </Accordion>
        </div>
      </Section>
    </>
  )
}
export default FAQs
