import type { FC } from 'react'
import Section from '@/components/elements/Section'
import ParticlesSection from '../elements/ParticlesSection'
import Image from 'next/image'
import { Button } from '@nextui-org/react'

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <Section
      sectionName=''
      className='w-full h-[90vh] xl:h-[600px] bg-primary bg-no-repeat bg-center relative'
    >
      <ParticlesSection />
      <div className='flex w-full h-full absolute top-0 left-0 text-white items-center justify-center px-7 md:px-0 '>
        <div className='flex flex-col gap-7 lg:flex-row md:w-[90%] text-center lg:text-start'>
          <div className='flex flex-col space-y-2 flex-1'>
            <h1 className='text-[2.5rem] md:text-[3rem] font-bold'>
              TEDx Veritas University
            </h1>
            <p className='lgs:w-4/5'>
              Embark on a transformative journey with us, where inspiration and
              innovation collide. Secure your spot now to witness groundbreaking
              insights, captivating creativity, and a unique experience that
              transcends the ordinary.
            </p>
            <div>
              <Button
                className='bg-black transition-colors hover:bg-primary md:before:w-1/3 text-white hover:border hover:border-black'
                size='lg'
                variant='solid'
              >
                Buy Ticket
              </Button>
            </div>
          </div>
          <div className='flex-1 flex justify-center'>
            <Image
              src='/images/hero-image.jpg'
              alt='hero image'
              width={500}
              height={300}
            />
          </div>
        </div>
      </div>
    </Section>
  )
}
export default Hero
