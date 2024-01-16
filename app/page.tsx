import Category from '@/components/cards/Category'
import Section from '@/components/elements/Section'
import Contact from '@/components/sections/Contact'
import FAQs from '@/components/sections/FAQs'
import Speakers from '@/components/sections/Speakers'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      {/* Start Hero Section */}
      <Section
        sectionName=''
        className="w-full h-[60vh] xl:h-[600px] bg-[url('https://dummyimage.com/1600x600')] bg-no-repeat bg-center"
      ></Section>
      {/* End Hero Section */}
      <Section sectionName='About' className='py-5 space-y-10'>
        <div className='space-y-5'>
          <h2 className='text-center text-2xl font-bold'>Theme</h2>
          <p className='mt-0'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
            vero repellendus optio facere molestiae magnam, esse nostrum,
            aspernatur temporibus eos quas vel nemo! Quam iste praesentium,
            iusto veniam quas dolorum! Optio quod hic adipisci et veniam a omnis
            saepe facilis debitis recusandae blanditiis voluptates ea fugit
            aliquid dolorem animi deleniti, excepturi rerum obcaecati id in
            eligendi! Possimus laudantium consectetur a!
          </p>
        </div>
        <div className='flex gap-6 flex-wrap justify-center'>
          <Category title='Entrepeneuship' />
          <Category title='Technology' />
          <Category title='Education' />
          <Category title='Entertainment' />
          <Category title='Talent' />
        </div>
        <div className='flex flex-col lg:flex-row gap-6'>
          <div className='flex-1 space-y-5 order-2 lg:-order-1'>
            <h2 className='text-center font-bold text-xl'>About TED</h2>
            <p className=''>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              possimus odio saepe nobis natus esse est, magnam hic error
              sapiente a dolores perspiciatis fugit deleniti tenetur quod
              similique repellat exercitationem. Voluptas laborum facilis eaque
              autem inventore quis aliquid minus eveniet eos nam reiciendis quae
              aut eum natus, fugit accusamus corporis odit placeat consequuntur
              adipisci laboriosam impedit consectetur sit. Maiores, aliquid.
              Adipisci laborum ut, excepturi illo cumque autem aspernatur
              eveniet neque suscipit similique odio itaque tempore aliquam,
              optio assumenda repellendus dolores quod quasi recusandae!
              Incidunt earum amet ullam nulla ratione officia!
            </p>
          </div>
          <div className='flex-1'>
            <Image
              alt='tedx-image'
              src='https://dummyimage.com/500x250'
              width={500}
              height={300}
              className='w-full h-[300px]'
            />
          </div>
        </div>
        <div className='flex flex-col lg:flex-row gap-6  '>
          <div className='flex-1'>
            <Image
              alt='tedx-image'
              src='https://dummyimage.com/500x250'
              width={500}
              height={300}
              className='w-full h-[300px]'
            />
          </div>
          <div className='flex-1'>
            <h2 className='text-center font-bold text-xl'>
              About TEDx, x = independently organized event
            </h2>
            <p className=''>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              possimus odio saepe nobis natus esse est, magnam hic error
              sapiente a dolores perspiciatis fugit deleniti tenetur quod
              similique repellat exercitationem. Voluptas laborum facilis eaque
              autem inventore quis aliquid minus eveniet eos nam reiciendis quae
              aut eum natus, fugit accusamus corporis odit placeat consequuntur
              adipisci laboriosam impedit consectetur sit. Maiores, aliquid.
              Adipisci laborum ut, excepturi illo cumque autem aspernatur
              eveniet neque suscipit similique odio itaque tempore aliquam,
              optio assumenda repellendus dolores quod quasi recusandae!
              Incidunt earum amet ullam nulla ratione officia!
            </p>
          </div>
        </div>
        <div className='flex flex-col lg:flex-row gap-6'>
          <div className='flex-1 space-y-5 order-2 lg:-order-1'>
            <h2 className='text-center font-bold text-xl'>
              About TEDxVeritasUniversity
            </h2>
            <p className=''>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              possimus odio saepe nobis natus esse est, magnam hic error
              sapiente a dolores perspiciatis fugit deleniti tenetur quod
              similique repellat exercitationem. Voluptas laborum facilis eaque
              autem inventore quis aliquid minus eveniet eos nam reiciendis quae
              aut eum natus, fugit accusamus corporis odit placeat consequuntur
              adipisci laboriosam impedit consectetur sit. Maiores, aliquid.
              Adipisci laborum ut, excepturi illo cumque autem aspernatur
              eveniet neque suscipit similique odio itaque tempore aliquam,
              optio assumenda repellendus dolores quod quasi recusandae!
              Incidunt earum amet ullam nulla ratione officia!
            </p>
          </div>
          <div className='flex-1'>
            <Image
              alt='tedx-image'
              src='https://dummyimage.com/500x250'
              width={500}
              height={300}
              className='w-full h-[300px] object-cover'
            />
          </div>
        </div>
      </Section>
      <Section sectionName='Sponsors' className='py-5 space-y-10'>
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
      </Section>

      {/* Start Speakers Section */}
      <Speakers />
      {/*End Speakers Section */}

      {/* Start FAQs Section */}
      <FAQs />
      {/*End FAQs Section */}

      {/* Start Contact Section */}
      <Contact />
      {/*End Contact Section */}
    </>
  )
}
