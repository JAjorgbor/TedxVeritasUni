import Category from '@/components/cards/Category'
import ParticlesSection from '@/components/elements/ParticlesSection'
import Section from '@/components/elements/Section'
import Contact from '@/components/sections/Contact'
import FAQs from '@/components/sections/FAQs'
import Hero from '@/components/sections/Hero'
import Speakers from '@/components/sections/Speakers'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      {/* Start Hero Section */}
      <Hero />
      {/* Start Theme Section */}

      {/* End Theme Section */}
      <Section className='py-5 space-y-10' sectionName='theme'>
        <div className='space-y-5'>
          <div className='bg-black text-white py-5 rounded-xl space-y-5'>
            <h2 className='text-center text-2xl font-bold flex flex-col md:flex-row gap-2 items-center justify-center'>
              Theme:
              <span className='text-primary font-bold text-[2rem] lg:text-[3rem]'>
                BEYOND BRILLIANCE
              </span>
            </h2>
            <div className='w-4/5 mx-auto flex flex-col lg:flex-row gap-5 lg:gap-3 items-center '>
              <ul className='space-y-3 list-disc lg:w-2/3'>
                <li>
                  <strong className='font-bold'>
                    Celebrate the Depth of Talents:
                  </strong>{' '}
                  Spotlighting and honoring the multifaceted brilliance that
                  goes beyond individual abilities.
                </li>
                <li>
                  <strong className='font-bold'>
                    Revolutionize Education:
                  </strong>{' '}
                  Showcasing and promoting pioneering approaches that redefine
                  the educational landscape.
                </li>
                <li>
                  <strong className='font-bold'>Ignite Tech Innovation:</strong>{' '}
                  Unveiling and fostering transformative technologies that shape
                  the future.
                </li>
                <li>
                  <strong className='font-bold'>
                    Enchant through Entertainment:
                  </strong>{' '}
                  Providing a platform for captivating and impactful
                  entertainment experiences that resonate with diverse
                  audiences.
                </li>
              </ul>
              <div className='lg:w-1/3'>
                <Image
                  src='/images/thinking-man.png'
                  className='object-cover'
                  width={500}
                  height={500}
                  alt='thinking man'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='gap-4'>
          <h3 className='text-2xl font-bold text-center '>
            <span className='text-primary'>Ripples of Insight:</span>
            Unveiling the Canvas
          </h3>
          <p className='text-center'>
            Categories in the Spotlight at{' '}
            <strong className='font-bold text-primary'>TEDxVeritasUni</strong>
          </p>
        </div>
        <div className='grid grid-cols-2 sm:flex gap-3 sm:gap-6 flex-wrap justify-center'>
          <div className='flex justify-center'>
            <Category
              title='Entrepreneuship'
              imageSrc='/images/entrepreneuship.jpg'
            />
          </div>
          <div className='flex justify-center'>
            <Category title='Technology' imageSrc='/images/technology.jpg' />
          </div>
          <div className='flex justify-center'>
            <Category title='Education' imageSrc='/images/education.jpg' />
          </div>
          <div className='flex justify-center'>
            <Category
              title='Entertainment'
              imageSrc='/images/entertainment.jpg'
            />
          </div>
          <div className='flex justify-center'>
            <Category title='Talent' imageSrc='/images/talent.jpg' />
          </div>
        </div>
      </Section>
      {/* End Hero Section */}
      <Section sectionName='About' className='py-5 space-y-10'>
        <div className='flex flex-col lg:flex-row gap-6 items-center'>
          <div className='flex-1 space-y-5 order-2 lg:-order-1'>
            <h2 className='text-center font-bold text-xl'>About TED</h2>
            <p className=''>
              TED (Technology, Entertainment, Design) is a global nonprofit
              organization that is renowned for its conferences and the TED
              Talks platform. The organization&apos;s mission is to spread ideas
              and knowledge from experts in various fields to a worldwide
              audience. TED conferences bring together thought leaders,
              innovators, and visionaries to share their insights and
              discoveries in engaging, concise presentations, often limited to
              18 minutes. The diverse range of topics covered in TED Talks
              includes science, technology, psychology, business, art, and more.
              The talks are known for their ability to inspire, inform, and
              provoke thought, contributing to TED&apos;s impact on shaping
              intellectual conversations globally.
            </p>
            <p>
              TED Talks have become a cultural phenomenon, with millions of
              viewers accessing them online for free. TED continues to serve as
              a platform for fostering the exchange of ideas and promoting
              innovation, with a commitment to making valuable knowledge
              accessible to a broad and diverse audience around the world.
            </p>
          </div>
          <div className='flex-1'>
            <Image
              alt='tedx-image'
              src='/images/ted-logo.jpg'
              width={500}
              height={300}
              className='w-full h-[400px]'
            />
          </div>
        </div>
        <div className='flex flex-col lg:flex-row gap-6 '>
          <div className='flex-1'>
            <Image
              alt='tedx-image'
              src='/images/tedx-logo.jpg'
              width={500}
              height={300}
              className='w-full h-[300px]'
            />
          </div>
          <div className='flex-1 space-y-3'>
            <h2 className='text-center font-bold text-xl'>
              About TEDx, x = independently organized TED event
            </h2>
            <p className=''>
              TEDx is a grassroots initiative, created in the spirit of
              TED&apos;s overall mission to research and discover “ideas worth
              spreading.” TEDx brings the spirit of TED to local communities
              around the globe through TEDx events. These events are organized
              by passionate individuals who seek to uncover new ideas and to
              share the latest research in their local areas that spark
              conversations in their communities. TEDx events include live
              speakers and recorded TED Talks, and are organized independently
              under a free license granted by TED.
            </p>
            <p>
              These events are not controlled by TED, but event organizers agree
              to abide by our format, and are offered guidelines for curation,
              speaker coaching, event organizing and more. They learn from us
              and from each other. More than 3000 events are now held annually.
            </p>
          </div>
        </div>
        <div className='flex flex-col lg:flex-row gap-6'>
          <div className='flex-1 space-y-3 order-2 lg:-order-1'>
            <h2 className='text-center font-bold text-xl'>
              About TEDxVeritasUniversity
            </h2>
            <p className=''>
              Welcome to TEDx Veritas University, where we invite you to embark
              on a transformative journey into the realms of brilliance,
              education, tech, and entertainment. Our upcoming event revolves
              around the compelling theme, &quot;Beyond Brilliance: Navigating
              the Nexus of Talent, Education, Tech, and Entertainment.&quot;
            </p>
            <p>
              <strong className='font-bold'>Vision:</strong>
              At TEDx Veritas University, we envision exploring the limitless
              frontiers where brilliance extends beyond individual talents,
              creating a dynamic nexus that seamlessly integrates innovative
              education, transformative technology, and immersive entertainment.
            </p>
          </div>
          <div className='flex-1'>
            <Image
              alt='tedx-image'
              src='/images/veritas-logo.jpg'
              width={500}
              height={300}
              className='w-full h-[300px] object-cover'
            />
          </div>
        </div>
      </Section>
      {/* Start Sponsors */}
      {/* <Section sectionName='Sponsors' className='py-5 space-y-10'>
        <div className='space-y-5'>
          <h2 className='text-xl text-center font-bold'>Sponsors</h2>
          <div className='flex flex-wrap gap-6 justify-center'>
            <Image
              src='https://dummyimage.com/150x100'
              alt='sponsor'
              width={150}
              height={100}
            />
            <Image
              src='https://dummyimage.com/150x100'
              alt='sponsor'
              width={150}
              height={100}
            />
            <Image
              src='https://dummyimage.com/150x100'
              alt='sponsor'
              width={150}
              height={100}
            />
            <Image
              src='https://dummyimage.com/150x100'
              alt='sponsor'
              width={150}
              height={100}
            />
            <Image
              src='https://dummyimage.com/150x100'
              alt='sponsor'
              width={150}
              height={100}
            />
          </div>
        </div>
      </Section> */}
      {/* End Sponsors */}

      {/* Start Speakers Section */}
      {/* <Speakers /> */}
      {/*End Speakers Section */}

      {/* Start FAQs Section */}
      {/* <FAQs /> */}
      {/*End FAQs Section */}

      {/* Start Contact Section */}
      <Contact />
      {/*End Contact Section */}
    </>
  )
}
