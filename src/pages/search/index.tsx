import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

import { Input } from '@/components/ui/input';
import { DataTable } from '@/components/DataTable/DataTable';
import { columns } from '@/components/DataTable/Columns';
import { EmptyQuery, NotFound, Searching } from './loaders';

import { useDebounce } from '@/hooks/use-debounce';
import { useSearchStudent } from '@/hooks/student';

export function SearchPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const nameQuery = searchParams.get('name') || '';

    const { debounceValue } = useDebounce(nameQuery, 1000);
    const { students, status, isLoading } = useSearchStudent(debounceValue);

    const isShowTable = status === 'success' && nameQuery.length;
    const isSearching = status === 'pending' && nameQuery.length;
    const notFound = status === 'error' && nameQuery.length;

    const navigate = useNavigate();

    useEffect(() => {
        if (!nameQuery.length) {
            navigate('/students/search');
            return;
        }
    }, [nameQuery.length, navigate]);

    if (isLoading) null;

    return (
        <section className="mt-4 mb-40 md:px-4">
            <h2 className="mb-8">Busque por um ou mais alunos matriculados.</h2>

            <div className="flex items-center w-full max-w-sm space-x-2">
                <Input
                    type="search"
                    placeholder="Buscar aluno"
                    onChange={(e) =>
                        setSearchParams({
                            name: e.target.value,
                        })
                    }
                    value={nameQuery}
                />
            </div>

            {!nameQuery.length ? <EmptyQuery /> : null}

            {isSearching ? <Searching /> : null}

            {notFound ? <NotFound /> : null}

            {isShowTable ? (
                <div className="mt-16">
                    <DataTable columns={columns} data={students || []} />
                </div>
            ) : null}
        </section>
    );
}
