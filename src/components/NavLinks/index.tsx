import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function NavLinks() {
    const links = [
        { label: 'Alunos Matriculados', href: '/' },
        { label: 'Cursos Cadastrados', href: '/courses' },
    ];

    return (
        <>
            <div className="flex flex-col items-start gap-5 px-6">
                <h4 className="pl-4 text-xl font-semibold tracking-tight scroll-m-20">
                    Menu
                </h4>

                <div className="flex flex-col">
                    {links.map((link, index) => (
                        <Button
                            key={index}
                            asChild
                            variant={'link'}
                            className="text-muted-foreground"
                        >
                            <Link to={link.href}>{link.label}</Link>
                        </Button>
                    ))}
                </div>
            </div>
        </>
    );
}
