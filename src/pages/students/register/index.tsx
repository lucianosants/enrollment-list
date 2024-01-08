import { Loader } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
    FormRoot,
    FormFieldName,
    FormFieldAge,
    FormFieldCourse,
    FormFieldCreatedAt,
} from '@/components';
import { ScrollToTop } from '@/routers';

import { studentSchema } from '@/services/utils';
import { StudentSchemaProps } from '@/@types';
import { useInsertStudent } from '@/hooks/student';
import { Button } from '@/components/ui/button';

export function RegisterStudent() {
    const form = useForm<StudentSchemaProps>({
        mode: 'onChange',
        defaultValues: {
            name: '',
            age: 18,
            course: '',
        },
        resolver: zodResolver(studentSchema),
    });

    const { mutate, status } = useInsertStudent();

    const onSubmit = (data: StudentSchemaProps) => mutate(data);

    return (
        <section className="px-4 mb-40">
            <ScrollToTop />

            <h2>Matricular um novo aluno</h2>
            <p>
                Faça a matricula de um novo aluno com os dados requisitados
                abaixo.
            </p>

            <div className="mt-10">
                <FormRoot form={form} onSubmit={onSubmit}>
                    <FormFieldName />
                    <FormFieldAge />
                    <FormFieldCourse />
                    <FormFieldCreatedAt />

                    <Button type="submit" disabled={status === 'pending'}>
                        {status === 'pending' ? (
                            <Loader className="animate-spin" />
                        ) : (
                            'Concluir'
                        )}
                    </Button>
                </FormRoot>
            </div>
        </section>
    );
}
