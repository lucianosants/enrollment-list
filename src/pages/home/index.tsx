import { useState } from 'react';
import { useQuery, keepPreviousData } from '@tanstack/react-query';
import { Loader } from 'lucide-react';

import { columns } from '@/components/DataTable/Columns';
import { DataTable } from '@/components/DataTable/DataTable';
import { Button } from '@/components/ui/button';

import { ErrorLoading, HomeLoading } from './loaders';
import { getAllStudents } from '@/services';

export function Home() {
    const [currentPage, setCurrentPage] = useState(0);
    const perPage = 20;

    const { data, isPlaceholderData, status, isFetching } = useQuery({
        queryKey: ['students', currentPage],
        queryFn: () => getAllStudents(perPage, currentPage),
        placeholderData: keepPreviousData,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
    });

    if (status == 'pending') {
        return <HomeLoading />;
    }

    return (
        <div className="px-4">
            <section>
                <h2 className="pb-2 text-3xl font-semibold tracking-tight border-b scroll-m-20 first:mt-0">
                    Lista de Alunos
                </h2>
                <div className="my-4">
                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                        Veja um resumo geral dos alunos matriculados e gerencie
                        cada um.
                    </p>
                </div>
            </section>

            {status === 'error' ? (
                <ErrorLoading />
            ) : (
                <section>
                    <DataTable columns={columns} data={data?.students} />
                    <div className="flex items-center justify-end py-4 space-x-2">
                        {isFetching && <Loader className="animate-spin" />}

                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() =>
                                setCurrentPage((prev) => prev - perPage)
                            }
                            disabled={currentPage === 0}
                        >
                            Anterior
                        </Button>

                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => {
                                if (!isPlaceholderData || data?.students) {
                                    setCurrentPage((prev) => prev + perPage);
                                }
                            }}
                            disabled={
                                isPlaceholderData ||
                                data?.students.length < perPage
                            }
                        >
                            Proximo
                        </Button>
                    </div>
                </section>
            )}
        </div>
    );
}
