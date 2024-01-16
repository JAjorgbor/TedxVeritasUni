'use client'
import {
  Avatar,
  Card,
  CardBody,
  CardHeader,
  Button,
  Link,
} from '@nextui-org/react'
import { Instagram, X, Facebook, Twitter } from 'react-feather'
import type { FC } from 'react'

interface SpeakerProps {}

const Speaker: FC<SpeakerProps> = ({}) => {
  return (
    <>
      <Card className='w-[250px] shadow-none text-center'>
        <div className='text-center flex justify-center'>
          <Avatar
            src='https://dummyimage.com/200x200'
            className='w-[200px] h-[200px]'
          />
        </div>
        <CardHeader className='font-bold justify-center'>
          Speaker Name
        </CardHeader>
        <CardBody className='text-center space-y-5'>
          <p>Lorem ipsum, dolor sit amet consectetur</p>
          <div className='flex justify-center gap-3'>
            <Link
              href='#'
              size='sm'
              className='text-foreground-500 hover:text-primary'
              target='_blank'
            >
              <Twitter size={18} />
            </Link>
            <Link
              href='#'
              size='sm'
              className='text-foreground-500 hover:text-primary'
              target='_blank'
            >
              <Instagram size={18} />
            </Link>
            <Link
              href='#'
              size='sm'
              className='text-foreground-500 hover:text-primary'
              target='_blank'
            >
              <Facebook size={18} />
            </Link>
          </div>
          <div className='flex justify-center'>
            <Button variant='ghost' color='primary' className='w-[100px]'>
              see Bio
            </Button>
          </div>
        </CardBody>
      </Card>
    </>
  )
}
export default Speaker
