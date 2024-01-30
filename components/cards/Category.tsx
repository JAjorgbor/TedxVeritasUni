'use client'
import type { FC } from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from '@nextui-org/react'
import Image from 'next/image'

const Category = ({ title, imageSrc }: { title: string; imageSrc: string }) => {
  return (
    <>
      <Card className='w-[150px] md:w-[200px] h-[300px] category-card text-white hover:text-primary transition-colors group'>
        <Image
          alt={title}
          className='z-0 w-full h-full object-cover transform transition-transform delay-300 group-hover:scale-[1.3]'
          // src="https://dummyimage.com/200x400"
          src={imageSrc}
          width={1000}
          height={1000}
          // isZoomed
        />
        <CardHeader className='absolute z-10 bottom-1 flex-col !items-start text-inherit'>
          <h4 className='font-bold text-large'>{title}</h4>
        </CardHeader>
      </Card>
    </>
  )
}
export default Category
