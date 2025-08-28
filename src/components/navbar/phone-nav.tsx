'use client';

import { MenuIcon } from 'lucide-react';
import { useState } from 'react';
import { Typography } from '@/components/typography';
import i2cLogo from "@/../public/i2c-Logo.svg"
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import Image from 'next/image';
import { LinkTrack } from '../link-track';

export const PhoneNav = ({
    links,

}: {
    links: { text: string; url: string }[];
}) => {
    const [open, setOpen] = useState(false);

    return (
        <nav
            data-cy="phone-nav"
            className=" md:hidden w-full bg-(--background) fixed z-30 border-b-1 border-b-white/15 px-4 py-2 flex items-center justify-between"
        >
            <LinkTrack eventName='navigation' href="/">
                <Image src={i2cLogo} alt="IdeaToCode logo" className="max-h-10 rounded w-auto"/>
            </LinkTrack>
            <Sheet open={open} defaultOpen={false} onOpenChange={setOpen}>
                <SheetTrigger asChild data-cy="phone-menu-input">
                    <MenuIcon className="size-8 " />
                </SheetTrigger>

                <SheetContent
                    data-cy="phone-menu"
                    onOpenAutoFocus={(e) => e.preventDefault()}
                    className="flex flex-col items-start justify-between"
                >
                    <SheetHeader className='hidden'>
                        <SheetTitle className='hidden'>
                            Nav
                        </SheetTitle>
                    </SheetHeader>
                    <div className=" flex w-full flex-col items-start justify-center text-left p-4">
                        {links.map(({ text, url }, index) => (
                            <LinkTrack className="first:pt-0 first:mt-0 mt-2" eventName="navigation" key={index} href={url} scroll={true} onClick={() => setOpen(false)}>
                                <Typography.Text className='text-xl'>{text}/</Typography.Text>
                            </LinkTrack>
                        ))}
                    </div>
                    <SheetClose data-cy="phone-menu-close"/>
                </SheetContent>
            </Sheet>
        </nav>
    );
};

export default PhoneNav;