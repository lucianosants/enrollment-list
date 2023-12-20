import { api } from '@/lib/api';
import { getDate } from './utils';
import { StudentBase, StudentProps } from '@/@types';

type AllStudentProps = StudentBase & {
    createdAt: string;
    course: {
        name: 'string';
    };
};

const url = '/student';

export async function getAllStudents(take: number, skip: number) {
    const { data } = await api.get(url, {
        params: { take, skip },
    });

    const students = data.students.map((student: AllStudentProps) => ({
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
}

export async function fetchStudentByName(id: string): Promise<StudentProps> {
    const { data } = await api.get(`${url}/${id}`);

    return data;
}
