import {
    useQuery,
    useMutation,
    useQueryClient,
    keepPreviousData,
} from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { useToast } from '@/components/ui/use-toast';

import {
    fetchStudentByName,
    getAllStudents,
    insertStudent,
    removerStudent,
} from '@/services';
import { api } from '@/lib/api';
import { StudentSchemaProps } from '@/@types';
import { AxiosErrorProps } from '@/@types/axios-error';

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
        onError: (error: AxiosErrorProps) => {
            toast({
                variant: 'destructive',
                title: 'Ops! Algo deu errado!',
                description: error.response?.data.message,
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
            await insertStudent(data);
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
        onError: (error: AxiosErrorProps) => {
            toast({
                variant: 'destructive',
                title: 'Falha ao matricular aluno.',
                description: error.response?.data.message,
            });
        },
    });

    return { ...rest };
}

export function useEditStudent(id: string) {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const { toast } = useToast();

    const { ...rest } = useMutation({
        mutationFn: async (data: StudentSchemaProps) => {
            await api.patch(`/student/${id}`, data);
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({
                queryKey: ['students'],
            });

            await queryClient.refetchQueries({
                queryKey: ['students'],
            });

            toast({
                title: 'Aluno foi atualizado com sucesso.',
            });

            navigate('/');
        },
        onError: (error: AxiosErrorProps) => {
            toast({
                variant: 'destructive',
                title: 'Falha ao salvar alterações aluno.',
                description: error.response?.data.message,
            });
        },
    });

    return { ...rest };
}
