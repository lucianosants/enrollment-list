import { Input } from '@/components/ui/input';
import { useSearchParams } from 'react-router-dom';

export function SearchBar() {
    const [, setSearchParams] = useSearchParams();

    return (
        <div className="flex items-center w-full max-w-sm space-x-2">
            <Input
                type="search"
                placeholder="Buscar aluno"
                onChange={(e) =>
                    setSearchParams({
                        search: e.target.value,
                    })
                }
            />
        </div>
    );
}
