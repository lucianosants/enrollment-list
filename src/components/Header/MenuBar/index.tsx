import { NavLinks } from '@/components';
import { Button } from '@/components/ui/button';

import logo from '@/assets/logo.svg';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

export function MenuBar() {
    return (
        <div className="grid grid-cols-2 gap-2 md:hidden">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost" size={'icon'}>
                        <Menu />
                    </Button>
                </SheetTrigger>

                <SheetContent side={'left'}>
                    <img
                        src={logo}
                        alt="Enrollment List"
                        className="pb-8 w-fit hover:opacity-80"
                    />

                    <NavLinks />
                </SheetContent>
            </Sheet>
        </div>
    );
}
