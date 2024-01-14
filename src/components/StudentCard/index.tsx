import { Link } from 'react-router-dom';
import { Loader, Trash } from 'lucide-react';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Button } from '../ui/button';
import { ModalGrade } from '../ModalGrade';
import { Tooltip } from '..';

import { StudentProps } from '@/@types';
import { getDate } from '@/services/utils';
import { useRemoveGrade } from '@/hooks/grade';

type StudentCardProps = {
    student?: StudentProps;
    status: 'pending' | 'error' | 'success' | 'idle';
    // eslint-disable-next-line
    removeStudent: (id?: string) => void;
};

export function StudentCard(props: StudentCardProps) {
    const { student, status, removeStudent } = props;

    const { removeGrade, status: removingStatus } = useRemoveGrade();

    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-primary-alt">
                    {student?.name}
                </CardTitle>
                <CardDescription>
                    Aluno matriculado em {getDate(student?.createdAt)}
                </CardDescription>
            </CardHeader>

            <CardContent>
                <p className="font-bold">
                    Idade:
                    <span className="ml-2 font-semibold text-muted-foreground">
                        {student?.age} anos
                    </span>{' '}
                </p>

                <p className="font-bold">
                    Cursando atualmente:
                    <span className="ml-2 font-semibold text-muted-foreground">
                        {student?.course?.name}
                    </span>
                </p>

                <p className="font-bold">
                    Situação do aluno:
                    <span className="ml-2 font-semibold text-muted-foreground">
                        {student?.status === 'Approved' ? 'Aprovado' : null}
                        {student?.status === 'Pending' ? 'Em Andamento' : null}
                        {student?.status === 'Rejected' ? 'Reprovado' : null}
                    </span>
                </p>

                <div className="mt-4">
                    <h3>Disciplinas</h3>
                    <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                        {!student?.subjects?.length ? (
                            <p className="text-muted-foreground">
                                Ainda não há disciplinas cadastradas
                            </p>
                        ) : null}

                        {student?.subjects?.map((subject) => (
                            <li key={subject.id}>{subject.name}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3>Notas</h3>

                    {student?.Grades?.length ? (
                        <div className="flex flex-col gap-4 my-6 md:ml-6">
                            {student.Grades.map((grade) => (
                                <div
                                    key={grade.id}
                                    className="flex items-center justify-between gap-5 py-3 border-b"
                                >
                                    <p className="mt-0">
                                        <span className="mt-0">
                                            {grade.subject.name} |{' '}
                                        </span>
                                        <span className="mt-0 font-bold text-primary-alt">
                                            {grade.value}
                                        </span>{' '}
                                    </p>

                                    <div className="flex items-center gap-3">
                                        <ModalGrade
                                            studentId={student.id}
                                            action="edit"
                                            grade={grade}
                                            subjectId={grade.id}
                                        />

                                        <Tooltip.Root>
                                            <Tooltip.Trigger>
                                                <Button
                                                    size={'icon'}
                                                    variant={'destructive'}
                                                    onClick={() =>
                                                        removeGrade(grade.id)
                                                    }
                                                    disabled={
                                                        removingStatus ===
                                                        'pending'
                                                    }
                                                >
                                                    <Trash size={14} />
                                                </Button>
                                            </Tooltip.Trigger>
                                            <Tooltip.Content>
                                                Remover nota
                                            </Tooltip.Content>
                                        </Tooltip.Root>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div>
                            <p>
                                Ainda não há notas cadastradas para{' '}
                                {student?.name}
                            </p>
                        </div>
                    )}
                </div>
            </CardContent>

            <CardFooter>
                <div className="flex flex-wrap gap-4">
                    <ModalGrade
                        subjects={student?.subjects}
                        studentId={student!.id}
                    />
                    <Button asChild>
                        <Link to={`/students/edit/${student?.id}`}>Editar</Link>
                    </Button>

                    <Button
                        variant={'destructive'}
                        onClick={() => removeStudent(student?.id)}
                        disabled={status === 'pending'}
                    >
                        {status === 'pending' ? (
                            <Loader className="animate-spin" />
                        ) : (
                            'Remover'
                        )}
                    </Button>
                </div>
            </CardFooter>
        </Card>
    );
}
