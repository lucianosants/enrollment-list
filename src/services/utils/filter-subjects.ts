import { courses } from '@/data';

export function filterSubjects(courseName: string) {
    const courseByArea = courses.find(({ courses }) =>
        courses.find((course) => course.name === courseName),
    );

    const subjectsByCourse = courseByArea?.courses.find(
        ({ name }) => name === courseName,
    );

    const subjects = subjectsByCourse?.subjects;

    return { subjects };
}
