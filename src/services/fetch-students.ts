import { api } from '@/lib/api';
import { getDate } from './utils';
import { StudentBase } from '@/@types';

type StudentProps = StudentBase & {
    createdAt: string;
    course: {
        name: 'string';
    };
};

export const getAllStudents = async (take: number, skip: number) => {
    const { data } = await api.get(`/student`, {
        params: { take, skip },
    });

    const students = data.students.map((student: StudentProps) => ({
        name: student.name,
        age: student.age,
        status: student.status,
        course: student.course.name,
        id: student.id,
        createdAt: getDate(student.createdAt),
    }));

    return {
        students,
        total: data.total,
        totalPage: data.totalPage,
    };
};
