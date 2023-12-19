import { Skeleton } from '@/components/ui/skeleton';

export function HomeLoading() {
    return (
        <div>
            <Skeleton className="w-40 h-10 mb-5" />

            <Skeleton className="w-1/2 h-10 mb-5" />
            <Skeleton className="w-full min-h-[10.5rem]" />

            <div className="flex justify-end gap-2 mt-4">
                <Skeleton className="w-24 h-9" />
                <Skeleton className="w-24 h-9" />
            </div>
        </div>
    );
}

export function ErrorLoading() {
    return (
        <div className="">
            <p>Não foi possível buscar por alunos.</p>
        </div>
    );
}
