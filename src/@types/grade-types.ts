import { gradeSchema } from '@/services/utils';
import { z } from 'zod';

export type GradeProps = {
    id: string;
    value: number;
    studentId: string;
    subjectId: string;
    createdAt: Date;
    updatedAt: Date;
    subject: {
        name: string;
    };
};

export type GradeSchemaProps = z.infer<typeof gradeSchema>;
