import {
    useQuery,
    useMutation,
    useQueryClient,
    keepPreviousData,
} from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { useToast } from '@/components/ui/use-toast';

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

    const { toast } = useToast();

    const refetchTable = async () => {
        const { isError } = await rest.refetch();

        if (isError) {
            return toast({
                variant: 'destructive',
                title: 'Ops! Lista de alunos não atualizada!',
                description:
                    'Ocorreu um erro durante a atualização da lista de alunos.',
            });
        }

        toast({
            title: 'Lista de alunos atualizada!',
        });
    };

    return { students, refetchTable, ...rest };
}

export function useFetchStudentById(id: string) {
    const { data: student, ...rest } = useQuery({
        queryKey: ['student'],
        queryFn: async () => fetchStudentByName(id),
        refetchOnWindowFocus: false,
    });

    return { student, ...rest };
}

export function useRemoveStudent(name: string) {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const { toast } = useToast();

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

            toast({
                title: `${name} foi removido com sucesso.`,
            });

            navigate('/');
        },
        onError: () => {
            toast({
                variant: 'destructive',
                title: 'Ops! Algo deu errado!',
                description: `Não foi possível remover ${name}.`,
            });
        },
    });

    return { ...rest };
}

export function useInsertStudent() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const { toast } = useToast();

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

            toast({
                title: 'Aluno cadastrado com sucesso.',
            });

            navigate('/');
        },
        onError: () => {
            toast({
                variant: 'destructive',
                title: 'Falha ao matricular aluno.',
                description: `Não foi possível matricular esse aluno.`,
            });
        },
    });

    return { ...rest };
}
