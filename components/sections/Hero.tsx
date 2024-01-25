import type { FC } from 'react'
import Section from '@/components/elements/Section'
import ParticlesSection from '../elements/ParticlesSection'
import Image from 'next/image'

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
          <div className='flex flex-col gap-2 flex-1 font-bold'>
            <h1 className='text-[2.5rem] md:text-[3rem]'>
              TEDx Veritas University
            </h1>
            <h2 className='text-[1.5rem]'>Beyond Brilliance</h2>
          </div>
          <div className='flex-1'>
            <Image
              src='https://dummyimage.com/500x300'
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
