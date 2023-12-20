import { GradeProps, SubjectProps, CourseProps } from '.';

export type StudentBase = {
    id: string;
    name: string;
    age: number;
    status: 'Pending' | 'Approved' | 'Rejected';
};

export type StudentProps = StudentBase & {
    courseId: string;
    createdAt: Date;
    updatedAt: Date;
    Grades: GradeProps[];
    subjects: SubjectProps[];
    course: CourseProps;
};
