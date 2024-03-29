'use client'
import React from 'react'
import Section from '@/components/elements/Section'
import { Button, Input, Link, Textarea } from '@nextui-org/react'
import { Mail, Map, MapPin, Phone, Send } from 'react-feather'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useForm } from 'react-hook-form'

const Contact = ({}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm()
  const submitData = async (data: any) => {
    try {
      const res = await axios.post('/api/contact', data)
      reset()
      toast.success(
        'Your message has been sent successfully, we will make sure to get back to you soon'
      )
    } catch (error) {
      console.error(error)
      toast.error(
        'Something went wrong. Please check your connection and try again later.'
      )
    }
  }
  return (
    <>
      <Section sectionName='Contact' className='mt-10 space-y-10'>
        <h2 className='font-bold text-2xl text-center'>Contact Us</h2>
        <div className='flex lg:w-4/5 mx-auto gap-8 md:gap-5 flex-col md:flex-row'>
          <div className='space-y-4 flex-1 text-foreground-500'>
            <p>
              Connect with us! Whether you have questions, ideas, or simply want
              to get involved, use this form. We&apos;re excited to hear from
              you and explore the possibilities together. Your input matters!
            </p>
            <div className='flex items-center gap-4'>
              <MapPin size={20} className='text-primary' />
              <Link
                href='https://www.google.com/maps?q=9.29070,7.41642'
                rel='noreferrer'
                target='_blank'
                className='text-inherit hover:text-primary'
              >
                Multi Purpose Hall(MPH). <br /> Veritas University, Bwari,
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
          <form
            className='flex-1 space-y-4'
            onSubmit={handleSubmit(submitData)}
            noValidate
          >
            <div className='grid grid-cols-2 gap-4'>
              <Input
                label='First Name'
                variant='bordered'
                {...register('firstName', {
                  required: 'First name is required.',
                })}
                isInvalid={!!errors.firstName?.message as any}
                errorMessage={errors.firstName?.message as string}
              />
              <Input
                label='Last Name'
                variant='bordered'
                {...register('lastName', {
                  required: 'Last name is required.',
                })}
                isInvalid={!!errors.lastName?.message as any}
                errorMessage={errors.lastName?.message as string}
              />
              <Input
                className='col-span-2'
                label='Email Address'
                type='email'
                variant='bordered'
                {...register('email', {
                  required: 'Email address is required.',
                })}
                isInvalid={!!errors.email?.message as any}
                errorMessage={errors.email?.message as string}
              />
              <Textarea
                fullWidth
                className='col-span-2'
                label='Message'
                rows={10}
                variant='bordered'
                {...register('message', {
                  required: 'Please type in a message.',
                })}
                isInvalid={!!errors.message?.message as any}
                errorMessage={errors.message?.message as string}
              />
            </div>
            <Button
              color='primary'
              type='submit'
              fullWidth
              endContent={<Send size={15} />}
              isLoading={isSubmitting}
            >
              Send
            </Button>
          </form>
        </div>
      </Section>
    </>
  )
}
export default Contact
