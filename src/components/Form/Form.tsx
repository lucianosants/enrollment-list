import { ReactNode } from 'react';
import { UseFormReturn } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select } from './Select';
import { DatePicker } from './DatePicker';

import { StudentSchemaProps } from '@/@types';

export type FormProps = {
    // eslint-disable-next-line
    form: UseFormReturn<StudentSchemaProps, any, undefined>;
    // eslint-disable-next-line
    onSubmit: (data: StudentSchemaProps) => void;
    children: ReactNode;
};

export function FormRoot(props: FormProps) {
    const { form, onSubmit, children } = props;

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {children}

                <Button type="submit">Concluir</Button>
            </form>
        </Form>
    );
}

export function FormFieldName(form: Partial<FormProps['form']>) {
    return (
        <>
            <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Nome</FormLabel>
                        <FormControl>
                            <Input placeholder="ex: John Due" {...field} />
                        </FormControl>
                        <FormDescription>Nome do aluno.</FormDescription>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </>
    );
}

export function FormFieldAge(form: Partial<FormProps['form']>) {
    return (
        <>
            <FormField
                control={form.control}
                name="age"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Idade</FormLabel>
                        <FormControl>
                            <Input
                                type="number"
                                placeholder="ex: 18"
                                {...field}
                            />
                        </FormControl>
                        <FormDescription>Idade do aluno.</FormDescription>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </>
    );
}

export function FormFieldCourse(form: Partial<FormProps['form']>) {
    return (
        <>
            <FormField
                control={form.control}
                name="course"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Curso</FormLabel>
                        <Select field={{ ...field }} />
                        <FormDescription>
                            Você pode escolher um curso na lista acima.
                        </FormDescription>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </>
    );
}

export function FormFieldCreatedAt(form: Partial<FormProps['form']>) {
    return (
        <>
            <FormField
                control={form.control}
                name="createdAt"
                render={({ field }) => (
                    <FormItem className="flex flex-col">
                        <FormLabel>Data de matricula</FormLabel>
                        <DatePicker field={{ ...field }} />
                        <FormDescription>
                            Você pode definir a data de matricula do aluno.
                        </FormDescription>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </>
    );
}
