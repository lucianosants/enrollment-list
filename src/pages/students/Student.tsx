import { useParams } from 'react-router-dom';
import { Loader } from 'lucide-react';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';

import { getDate } from '@/services/utils';
import { ScrollToTop } from '@/routers';

import { useFetchStudentById, useRemoveStudent } from '@/hooks/student';

export function StudentsPage() {
    const { id } = useParams();

    const { student, status, isFetching } = useFetchStudentById(String(id));
    const { mutate, status: removeStatus } = useRemoveStudent();

    const handleRemoveStudent = () => mutate(String(id));

    if (status === 'pending') {
        return (
            <>
                <Skeleton className="w-1/3 h-10 mb-6" />
                <Skeleton className="w-full h-96" />
            </>
        );
    }

    if (status === 'error') {
        return (
            <>
                <ScrollToTop />
                <h2 className="mb-6">Informações de aluno</h2>

                <p>Ocorreu um erro ao buscar por aluno</p>
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
                        <CardTitle>{student?.name}</CardTitle>
                        <CardDescription>
                            Aluno matriculado em {getDate(student?.createdAt)}
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        <p className="font-bold">
                            Idade:
                            <span className="ml-2 font-semibold text-muted-foreground">
                                {student?.age}
                            </span>
                        </p>

                        <p className="font-bold">
                            Cursando atualmente:
                            <span className="ml-2 font-semibold text-muted-foreground">
                                {student?.course.name}
                            </span>
                        </p>

                        <p className="font-bold">
                            Situação do aluno:
                            <span className="ml-2 font-semibold text-muted-foreground">
                                {student?.status === 'Approved'
                                    ? 'Aprovado'
                                    : null}
                                {student?.status === 'Pending'
                                    ? 'Em Andamento'
                                    : null}
                                {student?.status === 'Rejected'
                                    ? 'Reprovado'
                                    : null}
                            </span>
                        </p>

                        <div className="mt-4">
                            <h3>Disciplinas</h3>
                            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                                {!student?.subjects.length ? (
                                    <p className="text-muted-foreground">
                                        Ainda não há disciplinas cadastradas
                                    </p>
                                ) : null}

                                {student?.subjects.map((subject) => (
                                    <li key={subject.id}>{subject.name}</li>
                                ))}
                            </ul>
                        </div>
                    </CardContent>

                    <CardFooter>
                        <div className="flex gap-4">
                            <Button>Editar</Button>
                            <Button
                                variant={'destructive'}
                                onClick={handleRemoveStudent}
                                disabled={removeStatus === 'pending'}
                            >
                                {removeStatus === 'pending' ? (
                                    <Loader className="animate-spin" />
                                ) : (
                                    'Remover'
                                )}
                            </Button>
                        </div>
                    </CardFooter>
                </Card>
            )}
        </div>
    );
}
