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

import { useFetchStudentById } from '@/hooks/student';
import { StudentSchemaProps } from '@/@types';
import { studentSchema } from '@/services/utils';

export function EditStudentPage() {
    const { id } = useParams();

    const { student, status, isLoading } = useFetchStudentById(String(id));

    const form = useForm<StudentSchemaProps>({
        mode: 'onBlur',
        resolver: zodResolver(studentSchema),
        defaultValues: {
            status: undefined,
            age: 18,
        },
    });

    const onSubmit = (data: StudentSchemaProps) => {
        console.log(data);
    };

    useEffect(() => {
        form.setValue('name', String(student?.name));

        if (student?.age) {
            form.setValue('age', Number(student!.age));
        }

        if (student?.createdAt) {
            form.setValue('createdAt', new Date(String(student.createdAt)));
        }

        form.setValue('course', String(student?.course.name));
    }, [form, student]);

    if (isLoading) {
        return <p>Carregando...</p>;
    }

    return (
        <div className="px-4 mb-40">
            <ScrollToTop />
            <h2>
                AlteraçÕes de informações de{' '}
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
                            'Concluir'
                        )}
                    </Button>
                </FormRoot>
            </div>
        </div>
    );
}
