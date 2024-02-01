import { Link } from '@nextui-org/react'
import moment from 'moment'
import Image from 'next/image'
import { Instagram, Twitter, Youtube } from 'react-feather'

const Footer = () => {
  return (
    <>
      <footer className='bg-black text-white mt-16'>
        <div className='mx-auto max-w-5xl px-4 pt-10 pb-5 sm:px-6 lg:px-8'>
          <div className='flex justify-center font-bold'>
            <Image
              src='/images/logo-white.png'
              alt='logo white'
              width={300}
              height={200}
            />
          </div>
          <p className='mx-auto mt-6 max-w-md text-center leading-relaxed'>
            Stay Connected with us! Explore our journey of ideas, innovation,
            and inspiration. Follow us on social media for updates, insights,
            and behind-the-scenes moments.
          </p>
          <ul className='mt-12 flex justify-center gap-5'>
            <li>
              <Link
                href='https://x.com/TEDxVuna'
                rel='noreferrer'
                target='_blank'
                className='text-inherit hover:text-primary'
              >
                <Twitter size={18} />
              </Link>
            </li>
            <li>
              <Link
                href='https://instagram.com/TEDxVuna'
                rel='noreferrer'
                target='_blank'
                className='text-inherit hover:text-primary'
              >
                <Instagram size={18} />
              </Link>
            </li>
            <li>
              <Link
                href='/#'
                rel='noreferrer'
                target='_blank'
                className='text-inherit hover:text-primary'
              >
                <Youtube size={18} />
              </Link>
            </li>
          </ul>
          <div className='flex justify-center text-xs text-center mt-10'>
            &copy; TEDxVeritasUni {moment().year()}. <br />
            Powered By The Department Of Computer Science.
          </div>
        </div>
      </footer>
    </>
  )
}
export default Footer
