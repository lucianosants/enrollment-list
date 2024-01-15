import { Link } from 'react-router-dom';

import page_not_found from '@/assets/page_not_found.svg';
import { Button } from '@/components/ui/button';

export function ErrorPage() {
    return (
        <section className="flex items-center justify-center h-screen">
            <div className="flex flex-col items-center w-full gap-4 px-6">
                <img
                    src={page_not_found}
                    alt="Página não encontrada"
                    className="w-full md:w-1/2"
                />
                <h2 className="border-none">Ops! Esta página não existe.</h2>

                <Button asChild>
                    <Link to="/">Voltar ao inicio</Link>
                </Button>
            </div>
        </section>
    );
}
