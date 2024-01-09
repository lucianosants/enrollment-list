import { useState } from 'react';
import { Loader, RotateCw } from 'lucide-react';

import { columns } from '@/components/DataTable/Columns';
import { DataTable } from '@/components/DataTable/DataTable';
import { Button } from '@/components/ui/button';
import { ErrorLoading, HomeLoading } from './loaders';
import { Tooltip } from '@/components';

import { useFetchStudents } from '@/hooks/student';
import { Link } from 'react-router-dom';
import { ScrollToTop } from '@/routers';

export function Home() {
    const [currentPage, setCurrentPage] = useState(0);
    const perPage = 20;

    const { students, isPlaceholderData, status, isFetching, refetchTable } =
        useFetchStudents({ currentPage, perPage });

    if (status == 'pending') {
        return <HomeLoading />;
    }

    return (
        <div className="mt-4 mb-40 md:px-4">
            <ScrollToTop />
            <section>
                <h2 className="pb-2 text-3xl tracking-tight border-b ont-semibold scroll-m-20 first:mt-0">
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
                <>
                    <ErrorLoading />

                    <Button
                        variant={'secondary'}
                        onClick={refetchTable}
                        className="mt-6"
                    >
                        Atualizar lista
                    </Button>
                </>
            ) : (
                <section>
                    <div className="flex gap-4 mb-6 mt-9">
                        <Tooltip.Root>
                            <Tooltip.Trigger>
                                <Button
                                    variant={'secondary'}
                                    size={'icon'}
                                    onClick={refetchTable}
                                    disabled={isFetching}
                                    aria-label="Atualizar lista"
                                >
                                    {isFetching ? (
                                        <Loader className="animate-spin" />
                                    ) : (
                                        <RotateCw />
                                    )}
                                </Button>
                            </Tooltip.Trigger>

                            <Tooltip.Content>Atualizar Lista</Tooltip.Content>
                        </Tooltip.Root>

                        <Button asChild>
                            <Link to={'/students/register'}>Novo aluno</Link>
                        </Button>
                    </div>

                    <DataTable columns={columns} data={students?.students} />

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
                                if (!isPlaceholderData || students?.students) {
                                    setCurrentPage((prev) => prev + perPage);
                                }
                            }}
                            disabled={
                                isPlaceholderData ||
                                students?.students.length < perPage
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
