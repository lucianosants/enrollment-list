import dayjs from 'dayjs';

export const getDate = (
    date?: string | number | Date | dayjs.Dayjs | null | undefined,
) => {
    return dayjs(date).locale('pt-BR').format('DD/MM/YYYY');
};
