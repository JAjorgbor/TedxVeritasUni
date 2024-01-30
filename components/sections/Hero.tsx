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
      className='w-full h-[90vh] md:h-[60vh] xl:h-[600px] bg-primary bg-no-repeat bg-center relative'
    >
      <ParticlesSection />
      <div className='flex w-full h-full absolute top-0 left-0 text-white items-center justify-center px-7 md:px-0 '>
        <div className='flex flex-col gap-7 md:flex-row md:w-[90%] '>
          <div className='flex flex-col space-y-2 flex-1'>
            <h1 className='text-[2.5rem] md:text-[3rem] font-bold'>
              TEDx Veritas University
            </h1>
            <p className='w-4/5'>
              Embark on a transformative journey with us, where inspiration and
              innovation collide. Secure your spot now to witness groundbreaking
              insights, captivating creativity, and a unique experience that
              transcends the ordinary. Don&apos;t miss out on this extraordinary
              odyssey of knowledge and inspiration!
            </p>
            <div>
              <Button color='primary' variant='solid'>
                Buy Ticket
              </Button>
            </div>
          </div>
          <div className='flex-1'>
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
