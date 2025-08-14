'use client';

import { MenuIcon } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { Typography } from '@/components/typography';
import { Card } from '@/components/ui/card';
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

const { Header2 } = Typography;

export const PhoneNav = ({
    links,

}: {
    links: { text: string; url: string }[];
}) => {
    const [open, setOpen] = useState(false);

    return (
        <nav
            data-cy="phone-nav"
            className=" md:hidden w-full h-12 bg-(--background) fixed z-30 border-b-1 border-b-white/15 px-4 py-2 flex items-center justify-between"
        >
            <Link href="/">
                <Typography.Lead>IdeaToCode</Typography.Lead>
            </Link>
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild data-cy="phone-menu-input">
                    <MenuIcon className="size-6 " />
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
                            <Link className="first:pt-0 mt-2" key={index} href={url} scroll={true} onClick={() => setOpen(false)}>
                                <Typography.Text >{text}/</Typography.Text>
                            </Link>
                        ))}
                    </div>
                    <SheetClose data-cy="phone-menu-close" />
                </SheetContent>
            </Sheet>
        </nav>
    );
};

export default PhoneNav;