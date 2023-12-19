import { courses } from '@/data';

export function CoursesPage() {
    return (
        <section className="px-4">
            <div className="mb-2">
                <h2>Cursos</h2>

                <p>
                    Esta página lista os courses disponíveis nas universidades
                    brasileiras. Os courses estão organizados por área de
                    conhecimento, para facilitar a navegação e serão listados na
                    matricula de um aluno.
                </p>
            </div>

            <div className="py-1">
                {courses.map((course, index) => {
                    return (
                        <div
                            key={index}
                            className="p-3 m-4 bg-gray-100 rounded-lg dark:bg-gray-900"
                        >
                            <h3 className="text-muted-foreground">
                                {course.area}
                            </h3>

                            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                                {course.courses.map((item, index) => {
                                    return (
                                        <li
                                            key={`${index} - ${item}`}
                                            className=""
                                        >
                                            {item}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
