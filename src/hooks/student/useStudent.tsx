import {
    useQuery,
    useMutation,
    useQueryClient,
    keepPreviousData,
} from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { useToast } from '@/components/ui/use-toast';

import {
    editStudent,
    fetchStudentByName,
    getAllStudents,
    insertStudent,
    insertSubjects,
    removerStudent,
    searchStudents,
} from '@/services';
import { StudentSchemaProps } from '@/@types';
import { AxiosErrorProps } from '@/@types/axios-error';
import { filterSubjects } from '@/services/utils';

type UseFetchStudentsProps = {
    currentPage: number;
    perPage: number;
};

export function useLocalHooks() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const { ...toast } = useToast();

    return { queryClient, navigate, ...toast };
}

export function useFetchStudents(props: UseFetchStudentsProps) {
    const { currentPage, perPage } = props;

    const { data: students, ...rest } = useQuery({
        queryKey: ['students', currentPage],
        queryFn: () => getAllStudents(perPage, currentPage),
        placeholderData: keepPreviousData,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
    });

    const { toast } = useLocalHooks();

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
    const { queryClient, navigate, toast } = useLocalHooks();

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
    const { queryClient, navigate, toast } = useLocalHooks();

    const { ...rest } = useMutation({
        mutationFn: async (data: Partial<StudentSchemaProps>) => {
            const { student } = await insertStudent(data);
            const { subjects } = filterSubjects(String(data.course));

            const subjectData = {
                studentId: student.id,
                subjects: subjects?.map((subject) => ({
                    name: subject,
                    studentId: student.id,
                })),
            };

            await insertSubjects(subjectData);

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
    const { queryClient, navigate, toast } = useLocalHooks();

    const { ...rest } = useMutation({
        mutationFn: async (data: StudentSchemaProps) => {
            await editStudent(id, data);
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

export function useSearchStudent(name: string) {
    const { data: students, ...rest } = useQuery({
        queryKey: ['students_search', name],
        queryFn: () => searchStudents(name),
        refetchOnWindowFocus: false,
    });

    return { students, ...rest };
}
