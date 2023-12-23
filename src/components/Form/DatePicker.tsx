import { ControllerRenderProps } from 'react-hook-form';
import { CalendarCheck2 } from 'lucide-react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { Calendar } from '@/components/ui/calendar';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import { FormControl } from '../ui/form';
import { Button } from '../ui/button';

import { cn } from '@/lib/utils';
import { StudentSchemaProps } from '@/@types';

type DatePickerFormProps = {
    field: ControllerRenderProps<StudentSchemaProps>;
};

export function DatePicker(props: Partial<DatePickerFormProps>) {
    const { field } = props;

    return (
        <>
            <Popover>
                <PopoverTrigger asChild>
                    <FormControl>
                        <Button
                            variant={'outline'}
                            className={cn(
                                'w-[240px] pl-3 text-left font-normal',
                                !field!.value && 'text-muted-foreground',
                            )}
                        >
                            {field!.value ? (
                                format(field!.value, 'PPP')
                            ) : (
                                <span>Selecionar data</span>
                            )}
                            <CalendarCheck2 className="w-4 h-4 ml-auto opacity-50" />
                        </Button>
                    </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                        mode="single"
                        locale={ptBR}
                        selected={new Date(field!.value)}
                        onSelect={field!.onChange}
                        disabled={(date) =>
                            date > new Date() || date < new Date('1900-01-01')
                        }
                        initialFocus
                    />
                </PopoverContent>
            </Popover>
        </>
    );
}
