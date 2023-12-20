import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

import { ScrollToTop } from '@/routers';
import { Skeleton } from '@/components/ui/skeleton';

import { getDate } from '@/services/utils';
import { fetchStudentByName } from '@/services';

export function StudentsPage() {
    const { id } = useParams();

    const { data, status, isFetching } = useQuery({
        queryKey: ['student'],
        queryFn: async () => fetchStudentByName(String(id)),
        refetchOnWindowFocus: false,
    });

    if (status === 'pending') {
        return (
            <>
                <Skeleton className="w-1/3 h-10 mb-6" />
                <Skeleton className="w-full h-96" />
            </>
        );
    }

    return (
        <div className="mb-56">
            <ScrollToTop />
            <h2 className="mb-6">Informações de aluno</h2>

            {isFetching ? (
                <Skeleton className="w-full h-96" />
            ) : (
                <Card>
                    <CardHeader>
                        <CardTitle>{data?.name}</CardTitle>
                        <CardDescription>
                            Aluno matriculado em {getDate(data?.createdAt)}
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        <p className="font-bold">
                            Idade:
                            <span className="ml-2 font-semibold text-muted-foreground">
                                {data?.age}
                            </span>
                        </p>

                        <p className="font-bold">
                            Cursando atualmente:
                            <span className="ml-2 font-semibold text-muted-foreground">
                                {data?.course.name}
                            </span>
                        </p>

                        <p className="font-bold">
                            Situação do aluno:
                            <span className="ml-2 font-semibold text-muted-foreground">
                                {data?.status === 'Approved'
                                    ? 'Aprovado'
                                    : null}
                                {data?.status === 'Pending'
                                    ? 'Em Andamento'
                                    : null}
                                {data?.status === 'Rejected'
                                    ? 'Reprovado'
                                    : null}
                            </span>
                        </p>

                        <div className="mt-4">
                            <h3>Disciplinas</h3>
                            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                                {!data?.subjects.length ? (
                                    <p className="text-muted-foreground">
                                        Ainda não há disciplinas cadastradas
                                    </p>
                                ) : null}

                                {data?.subjects.map((subject) => (
                                    <li key={subject.id}>{subject.name}</li>
                                ))}
                            </ul>
                        </div>
                    </CardContent>
                </Card>
            )}
        </div>
    );
}
