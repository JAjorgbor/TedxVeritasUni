'use client'
import type { FC } from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from '@nextui-org/react'

const Category = ({ title }: { title: string }) => {
  return (
    <>
      <Card className='w-[150px] md:w-[200px] h-[300px] category-card text-white hover:text-primary transition-colors group'>
        <Image
          removeWrapper
          alt='Card background'
          className='z-0 w-full h-full object-cover transform transition-transform delay-300 group-hover:scale-[1.3]'
          // src="https://dummyimage.com/200x400"
          src='/images/dancing-man.jpg'
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
