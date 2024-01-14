import { useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

import {
    FormFieldAge,
    FormFieldCreatedAt,
    FormFieldName,
    FormFieldStatus,
    FormRoot,
} from '@/components';
import { ScrollToTop } from '@/routers';
import { Button } from '@/components/ui/button';

import { useEditStudent, useFetchStudentById } from '@/hooks/student';
import { StudentSchemaProps } from '@/@types';
import { studentSchema } from '@/services/utils';
import { LoadingPage } from '../loaders';

export function EditStudentPage() {
    const { id } = useParams();

    const { student, isLoading } = useFetchStudentById(String(id));
    const { mutate, status } = useEditStudent(String(id));

    const form = useForm<StudentSchemaProps>({
        mode: 'onBlur',
        resolver: zodResolver(studentSchema),
        defaultValues: {
            status: undefined,
            age: 18,
            createdAt: new Date(),
            name: '',
        },
    });

    const onSubmit = (data: StudentSchemaProps) => mutate(data);

    useEffect(() => {
        form.setValue('name', String(student?.name));

        if (student?.age) {
            form.setValue('age', Number(student!.age));
        }

        if (student?.createdAt) {
            form.setValue('createdAt', new Date(String(student.createdAt)));
        }

        form.setValue('course', String(student?.course?.name));
    }, [form, student]);

    if (isLoading) {
        return <LoadingPage />;
    }

    return (
        <section className="mt-4 mb-40 md:px-4">
            <ScrollToTop />
            <h2>
                Alterações de informações de{' '}
                <span className="text-primary-alt">{student?.name}</span>
            </h2>

            <div className="mt-10">
                <FormRoot form={form} onSubmit={onSubmit}>
                    <FormFieldName />
                    <FormFieldAge />
                    <FormFieldCreatedAt />
                    <FormFieldStatus />

                    <Button type="submit" disabled={status === 'pending'}>
                        {status === 'pending' ? (
                            <Loader className="animate-spin" />
                        ) : (
                            'Salvar'
                        )}
                    </Button>
                </FormRoot>
            </div>
        </section>
    );
}
