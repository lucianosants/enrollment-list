import { api } from '@/lib/api';

type SubjectProps = {
    studentId: string;
    subjects:
        | {
              name: string;
              studentId: string;
          }[]
        | undefined;
};

const url = '/subject';

export async function insertSubjects(data: SubjectProps) {
    await api.post(url, data);
}
