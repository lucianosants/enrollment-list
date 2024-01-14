import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader, Pen } from 'lucide-react';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

import { GradeSchemaProps, SubjectProps } from '@/@types';
import { gradeSchema } from '@/services/utils';
import { useEditGrade, useInsertGrade } from '@/hooks/grade';

type ModalGradeProps = {
    subjects?: SubjectProps[];
    action?: 'create' | 'edit';
    grade?: { id: string; value: number };
    subjectId?: string;
    studentId: string;
};

export function ModalGrade(props: ModalGradeProps) {
    const { subjects, action = 'create', grade, subjectId, studentId } = props;
    const actionDefault = action === 'create' ? 'Adicionar' : 'Editar';

    const { insertGrade, status: insertingStatus } = useInsertGrade();
    const { editGrade, status: editingStatus } = useEditGrade(grade?.id);

    const status = insertingStatus === 'pending' || editingStatus === 'pending';

    const form = useForm<GradeSchemaProps>({
        resolver: zodResolver(gradeSchema),
        mode: 'onBlur',
        defaultValues: {
            studentId: studentId,
            subjectId: subjectId || '',
            value: grade?.value || 0,
        },
    });

    const onSubmit = (data: GradeSchemaProps) => {
        if (action === 'create') {
            insertGrade(data);
            return;
        }

        editGrade(data);
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                {action === 'create' ? (
                    <Button variant="outline">Adicionar Nota</Button>
                ) : (
                    <Button
                        size={'icon'}
                        variant={'outline'}
                        aria-label="Editar nota"
                    >
                        <Pen size={14} />
                    </Button>
                )}
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{actionDefault} nota</DialogTitle>
                    <DialogDescription>
                        Adicione uma nova nota ou edite uma existente.
                    </DialogDescription>
                </DialogHeader>

                <div className="flex flex-col gap-4 py-4">
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-8"
                        >
                            <FormField
                                control={form.control}
                                name="value"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Nota</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="number"
                                                max={10}
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormDescription>
                                            Nota do aluno
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {action === 'create' && subjects?.length ? (
                                <FormField
                                    control={form.control}
                                    name="subjectId"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Disciplina</FormLabel>
                                            <Select
                                                onValueChange={field.onChange}
                                                defaultValue={field.value}
                                            >
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Selecione uma disciplina" />
                                                    </SelectTrigger>
                                                </FormControl>

                                                <SelectContent>
                                                    {subjects?.map(
                                                        (subject) => (
                                                            <SelectItem
                                                                key={subject.id}
                                                                value={
                                                                    subject.id
                                                                }
                                                            >
                                                                {subject.name}
                                                            </SelectItem>
                                                        ),
                                                    )}
                                                </SelectContent>
                                            </Select>

                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            ) : null}

                            <DialogFooter>
                                <Button type="submit" disabled={status}>
                                    {status ? (
                                        <Loader className="animate-spin" />
                                    ) : (
                                        'Salvar'
                                    )}
                                </Button>
                            </DialogFooter>
                        </form>
                    </Form>
                </div>
            </DialogContent>
        </Dialog>
    );
}
