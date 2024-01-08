import { AxiosError } from 'axios';

export type AxiosErrorProps = AxiosError<{ message: string }>;
