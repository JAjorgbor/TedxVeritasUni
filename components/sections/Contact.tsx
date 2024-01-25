'use client'
import React from 'react'
import Section from '@/components/elements/Section'
import { Button, Input, Link, Textarea } from '@nextui-org/react'
import { Mail, Map, MapPin, Phone, Send } from 'react-feather'

const Contact = ({}) => {
  return (
    <>
      <Section sectionName='Contact' className='mt-10 space-y-10'>
        <h2 className='font-bold text-2xl text-center'>Contact Us</h2>
        <div className='flex lg:w-4/5 mx-auto gap-8 md:gap-5 flex-col md:flex-row'>
          <div className='space-y-4 flex-1 text-foreground-500'>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
              modi quis ex perferendis blanditiis, sapiente, similique aperiam
              corrupti asperiores illum optio
            </p>
            <div className='flex items-center gap-4'>
              <MapPin size={20} className='text-primary' />
              <Link
                href='https://www.google.com/maps?q=9.29070,7.41642'
                rel='noreferrer'
                target='_blank'
                className='text-inherit hover:text-primary'
              >
                Multi Purpose Hall(MPH), <br /> Veritas University, Bwari,
                Abuja.{' '}
              </Link>
            </div>
            <div className='flex items-center gap-4'>
              <Phone size={20} className='text-primary' />
              <div className='space-y-1'>
                <Link
                  href='tel:+2348099281429'
                  className='text-foreground-500 hover:text-primary'
                >
                  <p>+234 8099 281429</p>
                </Link>
              </div>
            </div>
            <div className='flex items-center gap-4'>
              <Mail size={20} className='text-primary' />
              <div className='space-y-1'>
                <Link
                  href='mailto:tedxveritasuni@gmail.com'
                  className='text-foreground-500 hover:text-primary'
                >
                  tedxveritasuni@gmail.com
                </Link>
              </div>
            </div>
          </div>
          <form className='flex-1 space-y-4'>
            <div className='grid grid-cols-2 gap-4'>
              <Input label='First Name' variant='bordered' />
              <Input label='Last Name' variant='bordered' />
              <Input
                className='col-span-2'
                label='Email Address'
                type='email'
                variant='bordered'
              />
              <Textarea
                fullWidth
                className='col-span-2'
                label='Message'
                rows={10}
                variant='bordered'
              />
            </div>
            <Button color='primary' fullWidth endContent={<Send size={15} />}>
              Send
            </Button>
          </form>
        </div>
      </Section>
    </>
  )
}
export default Contact
