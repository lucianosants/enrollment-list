import * as z from 'zod';

export const studentSchema = z.object({
    name: z.string().min(3, 'Nome precisa ter no mínimo 3 caracteres.'),
    age: z.coerce
        .number()
        .min(18, 'Idade precisa ser maior que 18.')
        .max(90, 'Por favor, informe uma idade válida.'),
    course: z
        .string()
        .min(3, 'Curso não pode ser vazio. Por favor, informe um da lista.'),
    status: z
        .enum(['Approved', 'Rejected', 'Pending'])
        .optional()
        .default('Pending'),
    createdAt: z.date({
        required_error:
            'Data de matricula é obrigatória. Por favor, informe uma data válida.',
    }),
});

export const gradeSchema = z.object({
    value: z.coerce
        .number()
        .min(0, 'Nota não pode ser negativa.')
        .max(10, 'Nota não pode ser maior que 10.'),
    studentId: z.string().min(3),
    subjectId: z.string().min(3, 'Informe uma disciplina.'),
});
