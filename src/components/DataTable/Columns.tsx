import { ColumnDef } from '@tanstack/react-table';
import { Link } from 'react-router-dom';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { DotsHorizontalIcon } from '@radix-ui/react-icons';
import { Button } from '../ui/button';
import { StudentBase } from '@/@types';

export type Student = StudentBase & {
    course: string;
};

export const columns: ColumnDef<Student>[] = [
    {
        accessorKey: 'name',
        header: 'Nome',
        cell: ({ row }) => (
            <div className="min-w-[100px] lowercase">
                {row.getValue('name')}
            </div>
        ),
    },
    {
        accessorKey: 'age',
        header: () => <div className="text-left">Idade</div>,
        cell: ({ row }) => {
            const age = parseInt(row.getValue('age'));

            return <div className="font-medium text-left">{age} anos</div>;
        },
    },
    {
        accessorKey: 'course',
        header: () => <div className="hidden text-left md:inline">Curso</div>,
        cell: ({ row }) => (
            <div className="hidden capitalize md:inline-block">
                {row.getValue('course')}
            </div>
        ),
    },
    {
        accessorKey: 'createdAt',
        header: () => (
            <div className="hidden text-left md:inline">Matriculado Em</div>
        ),
        cell: ({ row }) => (
            <div className="hidden capitalize md:inline-block">
                {row.getValue('createdAt')}
            </div>
        ),
    },
    {
        accessorKey: 'status',
        header: 'Status',
        cell: ({ row }) => {
            const status = row.getValue('status');

            if (status === 'Approved') {
                return <div className="capitalize">Aprovado</div>;
            }

            if (status === 'Rejected') {
                return <div className="capitalize">Reprovado</div>;
            }

            return <div className="capitalize">Em Andamento</div>;
        },
    },
    {
        id: 'actions',
        enableHiding: false,
        cell: ({ row }) => {
            const student = row.original;

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="w-8 h-8 p-0">
                            <span className="sr-only">Abrir menu</span>
                            <DotsHorizontalIcon className="w-4 h-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Opções</DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={() =>
                                navigator.clipboard.writeText(student.name)
                            }
                        >
                            Copiar nome do aluno
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem asChild>
                            <Link to={`/students/${student.id}`}>
                                Ver detalhes
                            </Link>
                        </DropdownMenuItem>

                        <DropdownMenuItem>Editar</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-500">
                            Remover
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];
