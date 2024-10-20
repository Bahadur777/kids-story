"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { Button } from '@nextui-org/react';
import Logo from './../public/logo.jpg'
import {  Navbar,   NavbarBrand,   NavbarContent,   NavbarItem,   NavbarMenuToggle,  NavbarMenu,  NavbarMenuItem} from "@nextui-org/navbar";
import Link from 'next/link';
import {useUser} from '@clerk/nextjs'

const Header = () => {
    const {user, isSignedIn} = useUser();
    const MenuList = [
        {
            name: 'Home',
            path: '/'
        },
        {
            name: 'Create story',
            path: '/Create-story'
        },
        {
            name: 'Explore story',
            path: '/explore-story'
        },
        {
            name: 'Contact us',
            path: '/contact-us'
        },
    ];

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <Navbar className='flex justify-center bg-[#cad3ff]' maxWidth='full' onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle className='sm:hidden' aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
                <NavbarBrand>
                    <Image src={Logo} alt="brand logo" width={40} height={40} />
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent justify='center' className='hidden sm:flex'>
                {MenuList.map((item, index) => (
                    <NavbarItem key={index} className='text-xl text-primary-50 hover:underline hover:text-black gap-3'>
                        <Link href={item.path}>
                            {item.name}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>
            <NavbarContent justify='end'>
                <Link href={'/get-story'}>
                <Button color='primary'>
                    {isSignedIn ? 'Dashboard':'Get Start'}
                    </Button>
                </Link>
            </NavbarContent>
            <NavbarMenu className='bg-primary-50'>
                {MenuList.map((item, index) => (
                    <NavbarMenuItem key={index} className='gap-3 '>
                        <Link href={item.path} className='hover:underline hover:text-black text-xl'>
                            {item.name}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
};

export default Header;
