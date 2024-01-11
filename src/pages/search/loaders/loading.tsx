import voidImage from '@/assets/void.svg';
import search from '@/assets/search.svg';

import { Skeleton } from '@/components/ui/skeleton';

export function NotFound() {
    return (
        <div className="flex flex-col justify-center w-full mt-16">
            <img
                src={voidImage}
                alt="Nenhum aluno encontrado"
                className="self-center w-full md:w-1/3"
            />

            <p>Ops! Não foi possível encontrar nenhum aluno com este nome.</p>
        </div>
    );
}

export function Searching() {
    return <Skeleton className="w-full mt-16 h-60" />;
}

export function EmptyQuery() {
    return (
        <div className="flex justify-center w-full mt-16">
            <img
                src={search}
                alt="Buscar por aluno"
                className="w-full md:w-1/3"
            />
        </div>
    );
}
