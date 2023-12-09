import { Link } from 'react-router-dom';
import { IoLogoGithub } from 'react-icons/io';

import logo from '@/assets/logo.svg';

import { Button } from '../ui/button';

import { ModeToggle } from '..';
import { SearchBar } from './SearchBar';
import { MenuBar } from './MenuBar';

export function Header() {
    return (
        <div className="fixed left-0 w-full py-4 mx-auto border-b bg-background/80 backdrop-blur-lg">
            <header className="container flex items-center justify-between w-full h-full">
                <div className="flex">
                    <Link to={'/'} className="block w-fit">
                        <img
                            src={logo}
                            alt="Enrollment List"
                            className="w-fit hover:opacity-80"
                        />
                    </Link>

                    <MenuBar />
                </div>

                <div className="flex items-center gap-4">
                    <div className="hidden md:block">
                        <SearchBar />
                    </div>

                    <Button variant={'ghost'} size={'icon'} asChild>
                        <Link
                            to={
                                'https://github.com/lucianosants/enrollment-list-web'
                            }
                            target="_blank"
                        >
                            <IoLogoGithub size={24} />
                        </Link>
                    </Button>

                    <ModeToggle />
                </div>
            </header>
        </div>
    );
}
