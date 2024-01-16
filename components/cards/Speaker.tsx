'use client'
import {
  Avatar,
  Card,
  CardBody,
  CardHeader,
  Button,
  Link,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  ModalFooter,
} from '@nextui-org/react'
import { Instagram, X, Facebook, Twitter } from 'react-feather'
import type { FC } from 'react'

interface SpeakerProps {}

const Speaker: FC<SpeakerProps> = ({}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
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
            <Button
              variant='ghost'
              color='primary'
              className='w-[100px]'
              onPress={onOpen}
            >
              see Bio
            </Button>
          </div>
        </CardBody>
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          backdrop='blur'
          placement='center'
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className='flex flex-col gap-1'>
                  Speaker Bio
                </ModalHeader>
                <ModalBody>
                  <div className='flex flex-col items-center gap-2'>
                    <Avatar
                      src='https://dummyimage.com/120x120'
                      className='w-[120px] h-[120px]'
                    />
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
                    <h2 className='font-bold text-xl'>Speaker Name</h2>
                    <p>
                      Magna exercitation reprehenderit magna aute tempor
                      cupidatat consequat elit dolor adipisicing. Mollit dolor
                      eiusmod sunt ex incididunt cillum quis. Velit duis sit
                      officia eiusmod Lorem aliqua enim laboris do dolor
                      eiusmod. Et mollit incididunt nisi consectetur esse
                      laborum eiusmod pariatur proident Lorem eiusmod et. Culpa
                      deserunt nostrud ad veniam.
                    </p>
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button color='primary' onPress={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </Card>
    </>
  )
}
export default Speaker
