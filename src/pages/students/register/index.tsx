import { ScrollToTop } from '@/routers';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { CalendarCheck2 } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import { ptBR } from 'date-fns/locale';

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
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { courses } from '@/data';
import { SelectLabel } from '@radix-ui/react-select';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';

const studentSchema = z.object({
    name: z.string().min(3, 'Nome precisa ter no mínimo 3 caracteres.'),
    age: z
        .number()
        .min(18, 'Idade precisa ser maior que 18.')
        .max(90, 'Por favor, informe uma idade válida.'),
    course: z.string().min(3, 'Curso precisa ter no mínimo 3 caracteres.'),
    status: z
        .enum(['Approved', 'Rejected', 'Pending'])
        .optional()
        .default('Pending'),
    createdAt: z.date(),
});

type StudentSchemaProps = z.infer<typeof studentSchema>;

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

    const onSubmit = (data: StudentSchemaProps) => {
        console.log('Cadastrado com sucesso.', data);
    };

    console.log(form.formState.errors);

    return (
        <div className="px-4">
            <ScrollToTop />

            <h2>Matricular um novo aluno</h2>
            <p>
                Faça a matricula de um novo aluno com os dados requisitados
                abaixo.
            </p>

            <div className="mt-10">
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-8"
                    >
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Nome</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="ex: John Due"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        Nome completo do aluno.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="age"
                            render={() => (
                                <FormItem>
                                    <FormLabel>Idade</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="number"
                                            placeholder="ex: 18"
                                            {...form.register('age', {
                                                valueAsNumber: true,
                                            })}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        Idade do aluno.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="course"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Curso</FormLabel>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Selecione um curso da lista" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {courses.map((course) => (
                                                <SelectGroup key={course.id}>
                                                    <SelectLabel>
                                                        {course.area}
                                                    </SelectLabel>

                                                    {course.courses.map(
                                                        (course) => (
                                                            <SelectItem
                                                                value={
                                                                    course.name
                                                                }
                                                                key={course.id}
                                                            >
                                                                {course.name}
                                                            </SelectItem>
                                                        ),
                                                    )}
                                                </SelectGroup>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <FormDescription>
                                        Você pode escolher um curso na lista
                                        acima.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="createdAt"
                            render={({ field }) => (
                                <FormItem className="flex flex-col">
                                    <FormLabel>Data de matricula</FormLabel>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <FormControl>
                                                <Button
                                                    variant={'outline'}
                                                    className={cn(
                                                        'w-[240px] pl-3 text-left font-normal',
                                                        !field.value &&
                                                            'text-muted-foreground',
                                                    )}
                                                >
                                                    {field.value ? (
                                                        format(
                                                            field.value,
                                                            'PPP',
                                                        )
                                                    ) : (
                                                        <span>
                                                            Selecionar data
                                                        </span>
                                                    )}
                                                    <CalendarCheck2 className="w-4 h-4 ml-auto opacity-50" />
                                                </Button>
                                            </FormControl>
                                        </PopoverTrigger>
                                        <PopoverContent
                                            className="w-auto p-0"
                                            align="start"
                                        >
                                            <Calendar
                                                mode="single"
                                                locale={ptBR}
                                                selected={field.value}
                                                onSelect={field.onChange}
                                                disabled={(date) =>
                                                    date > new Date() ||
                                                    date <
                                                        new Date('1900-01-01')
                                                }
                                                initialFocus
                                            />
                                        </PopoverContent>
                                    </Popover>
                                    <FormDescription>
                                        Você pode definir a data de matricula do
                                        aluno.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="submit">Submit</Button>
                    </form>
                </Form>
            </div>
        </div>
    );
}
