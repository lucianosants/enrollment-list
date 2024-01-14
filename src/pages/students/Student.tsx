import { useParams } from 'react-router-dom';
import { Skeleton } from '@/components/ui/skeleton';
import { LoadingPage, StudentNotFound } from './loaders';

import { ScrollToTop } from '@/routers';
import { StudentCard } from '@/components/StudentCard';

import { useFetchStudentById, useRemoveStudent } from '@/hooks/student';

export function StudentsPage() {
    const { id } = useParams();

    const { student, status, isFetching } = useFetchStudentById(String(id));
    const { mutate, status: removeStatus } = useRemoveStudent(
        String(student?.name),
    );

    if (status === 'pending') {
        return <LoadingPage />;
    }

    if (status === 'error') {
        return <StudentNotFound />;
    }

    return (
        <div className="mt-4 mb-56 md:px-4">
            <ScrollToTop />
            <h2 className="mb-6">Informações de aluno</h2>

            {isFetching ? (
                <Skeleton className="w-full h-96" />
            ) : (
                <StudentCard
                    student={student}
                    status={removeStatus}
                    removeStudent={() => mutate(String(id))}
                />
            )}
        </div>
    );
}
