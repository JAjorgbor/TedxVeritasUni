'use client'
import React, { useEffect, useState } from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from '@nextui-org/react'
import { usePathname, useRouter } from 'next/navigation'
import { HashValueContext } from '@/app/Providers'
import Image from 'next/image'

const Header = () => {
  const pathname = usePathname()

  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const router = useRouter()
  // console.log(hashValue)
  const { hashValue, setHashValue } = React.useContext(HashValueContext)
  const menuItems = [
    { label: 'Theme', route: '#theme' },
    { label: 'About', route: '#About' },
    // { label: 'Sponsors', route: '#Sponsors' },
    // { label: 'Speakers', route: '#Speakers' },
    // { label: 'FAQs', route: '#FAQs' },
    { label: 'Contact', route: '#Contact' },
  ]

  return (
    <>
      <Navbar
        className={`backdrop-blur-sm ${
          isScrolled ? 'fixed' : ''
        } lg:fixed top-0 px-3 md:px-0`}
        onScrollPositionChange={(position) => {
          if (position > 50) {
            setIsScrolled(true)
          } else {
            setIsScrolled(false)
          }
        }}
      >
        <NavbarContent>
          <NavbarMenuToggle className='md:hidden hover:text-primary' />
          <NavbarBrand>
            <Link href='#' size='lg'>
              {/* <p className='font-bold text-inherit'>TEDxVeritasUni</p> */}
              <Image
                src='/images/logo-black.png'
                alt='logo black'
                width={200}
                height={100}
              />
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className='hidden md:flex gap-4' justify='center'>
          {menuItems.map((item, index) => (
            <NavbarItem
              key={`${item}-${index}`}
              isActive={hashValue == item.route}
            >
              <Link
                className={`hover:text-primary text-foreground ${
                  hashValue == item.route ? 'text-primary' : ''
                }`}
                href={item.route}
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>
        <NavbarContent justify='end'>
          <NavbarItem>
            <Button
              as={Link}
              href='#'
              color='primary'
              onClick={() => {
                router.replace('#Speakers')
              }}
            >
              Buy Ticket
            </Button>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu className='top-16'>
          {menuItems.map((item, index) => (
            <NavbarMenuItem
              key={`${item}-${index}`}
              isActive={hashValue == item.route}
            >
              <Link
                className={`hover:text-primary text-foreground ${
                  hashValue == item.route ? 'text-primary' : ''
                }`}
                href={item.route}
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </>
  )
}
export default Header
