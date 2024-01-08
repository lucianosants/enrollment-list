import { ScrollToTop } from '@/routers';

import warningIndicator from '@/assets/warning.svg';
import { Skeleton } from '@/components/ui/skeleton';

export function StudentNotFound() {
    return (
        <div className="px-4">
            <ScrollToTop />
            <h2 className="mb-6">Informações de aluno</h2>

            <img
                src={warningIndicator}
                alt="Aluno não encontrado"
                className="mt-10"
            />

            <p>Ocorreu um erro ao buscar por aluno</p>
        </div>
    );
}

export function LoadingPage() {
    return (
        <div className="px-4">
            <ScrollToTop />
            <>
                <Skeleton className="w-1/3 h-10 mb-6" />
                <Skeleton className="w-full h-96" />
            </>
        </div>
    );
}
