import {
    useQuery,
    useMutation,
    useQueryClient,
    keepPreviousData,
} from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { fetchStudentByName, getAllStudents, removerStudent } from '@/services';
import { api } from '@/lib/api';
import { StudentSchemaProps } from '@/@types';

type UseFetchStudentsProps = {
    currentPage: number;
    perPage: number;
};

export function useFetchStudents(props: UseFetchStudentsProps) {
    const { currentPage, perPage } = props;

    const { data: students, ...rest } = useQuery({
        queryKey: ['students', currentPage],
        queryFn: () => getAllStudents(perPage, currentPage),
        placeholderData: keepPreviousData,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
    });

    return { students, ...rest };
}

export function useFetchStudentById(id: string) {
    const { data: student, ...rest } = useQuery({
        queryKey: ['student'],
        queryFn: async () => fetchStudentByName(id),
        refetchOnWindowFocus: false,
    });

    return { student, ...rest };
}

export function useRemoveStudent() {
    const queryClient = useQueryClient();

    const navigate = useNavigate();

    const { ...rest } = useMutation({
        mutationFn: async (id: string) => {
            return await removerStudent(id);
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({
                queryKey: ['students'],
            });

            await queryClient.cancelQueries({
                queryKey: ['student'],
            });

            await queryClient.refetchQueries({
                queryKey: ['students'],
            });

            navigate('/');
        },
    });

    return { ...rest };
}

export function useInsertStudent() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const { ...rest } = useMutation({
        mutationFn: async (data: Partial<StudentSchemaProps>) => {
            const { data: student } = await api.post('/student', {
                ...data,
                createdAt: data.createdAt?.toISOString(),
            });

            return { student };
        },

        onSuccess: async () => {
            await queryClient.invalidateQueries({
                queryKey: ['students'],
            });

            await queryClient.refetchQueries({
                queryKey: ['students'],
            });

            navigate('/');
        },
    });

    return { ...rest };
}
