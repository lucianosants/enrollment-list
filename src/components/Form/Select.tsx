import {
    Select as SelectInput,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
    SelectLabel,
} from '@/components/ui/select';
import { ControllerRenderProps } from 'react-hook-form';

import { FormControl } from '../ui/form';

import { StudentSchemaProps } from '@/@types';
import { courses } from '@/data';

type SelectFormProps = {
    field: ControllerRenderProps<StudentSchemaProps>;
};

export function SelectCourses(props: Partial<SelectFormProps>) {
    const { field } = props;

    return (
        <>
            <SelectInput
                onValueChange={field!.onChange}
                defaultValue={String(field!.value)}
            >
                <FormControl>
                    <SelectTrigger>
                        <SelectValue placeholder="Selecione um curso da lista" />
                    </SelectTrigger>
                </FormControl>
                <SelectContent>
                    {courses.map((course) => (
                        <SelectGroup key={course.id}>
                            <SelectLabel>{course.area}</SelectLabel>

                            {course.courses.map((course) => (
                                <SelectItem value={course.name} key={course.id}>
                                    {course.name}
                                </SelectItem>
                            ))}
                        </SelectGroup>
                    ))}
                </SelectContent>
            </SelectInput>
        </>
    );
}

export function SelectStatus(props: Partial<SelectFormProps>) {
    const { field } = props;

    const status = [
        { value: 'Pending', label: 'Em Andamento' },
        { value: 'Approved', label: 'Aprovado' },
        { value: 'Rejected', label: 'Reprovado' },
    ];

    return (
        <>
            <SelectInput
                onValueChange={field!.onChange}
                defaultValue={'Pending'}
            >
                <FormControl>
                    <SelectTrigger>
                        <SelectValue placeholder="Selecione um status" />
                    </SelectTrigger>
                </FormControl>
                <SelectContent>
                    {status.map((status, index) => (
                        <SelectItem key={index} value={status.value}>
                            {status.label}
                        </SelectItem>
                    ))}
                </SelectContent>
            </SelectInput>
        </>
    );
}
