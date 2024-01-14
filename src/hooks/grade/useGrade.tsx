import { useMutation } from '@tanstack/react-query';
import { useLocalHooks } from '../student';
import { GradeProps } from '@/@types';
import { api } from '@/lib/api';
import { AxiosErrorProps } from '@/@types/axios-error';

export function useInsertGrade() {
    const { queryClient, toast } = useLocalHooks();

    const { mutate: insertGrade, ...rest } = useMutation({
        mutationFn: async (data: Partial<GradeProps>) => {
            await api.post('/grade', data);
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({
                queryKey: ['student'],
            });

            await queryClient.refetchQueries({
                queryKey: ['student'],
            });

            toast({
                title: 'Nota adicionada com sucesso.',
            });
        },
        onError: (error: AxiosErrorProps) => {
            toast({
                variant: 'destructive',
                title: 'Falha ao adicionar nota.',
                description: error.response?.data.message,
            });
        },
    });

    return { insertGrade, ...rest };
}

export function useEditGrade(id: string | undefined) {
    const { queryClient, toast } = useLocalHooks();

    const { mutate: editGrade, ...rest } = useMutation({
        mutationFn: async (data: Partial<GradeProps>) => {
            await api.patch(`/grade/${id}`, data);
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({
                queryKey: ['student'],
            });

            await queryClient.refetchQueries({
                queryKey: ['student'],
            });

            toast({
                title: 'Nota editada com sucesso.',
            });
        },
        onError: (error: AxiosErrorProps) => {
            toast({
                variant: 'destructive',
                title: 'Falha ao editar nota.',
                description: error.response?.data.message,
            });
        },
    });

    return { editGrade, ...rest };
}

export function useRemoveGrade() {
    const { queryClient, toast } = useLocalHooks();

    const { mutate: removeGrade, ...rest } = useMutation({
        mutationFn: async (id: string | undefined) => {
            await api.delete(`/grade/${id}`);
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({
                queryKey: ['student'],
            });

            await queryClient.refetchQueries({
                queryKey: ['student'],
            });

            toast({
                title: 'Nota Removida com sucesso.',
            });
        },
        onError: (error: AxiosErrorProps) => {
            toast({
                variant: 'destructive',
                title: 'Falha ao remover nota.',
                description: error.response?.data.message,
            });
        },
    });

    return { removeGrade, ...rest };
}
