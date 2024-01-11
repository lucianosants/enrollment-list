import { v4 as uuidv4 } from 'uuid';

type CourseProps = {
    id: string;
    area: string;
    courses: {
        id: string;
        name: string;
        subjects: string[];
    }[];
};

export const courses: CourseProps[] = [
    {
        id: uuidv4(),
        area: 'Ciências Biológicas',
        courses: [
            {
                id: uuidv4(),
                name: 'Biologia',
                subjects: [
                    'Biologia Celular',
                    'Genética',
                    'Ecologia',
                    'Anatomia Comparada',
                    'Fisiologia Animal',
                ],
            },
            {
                id: uuidv4(),
                name: 'Biomedicina',
                subjects: [
                    'Bioquímica Clínica',
                    'Imunologia',
                    'Patologia Molecular',
                    'Epidemiologia',
                    'Farmacologia',
                ],
            },
            {
                id: uuidv4(),
                name: 'Biotecnologia',
                subjects: [
                    'Engenharia Genética',
                    'Microbiologia Industrial',
                    'Biossegurança',
                    'Bioinformática',
                    'Bioprocessos',
                ],
            },
            {
                id: uuidv4(),
                name: 'Ciências Biológicas',
                subjects: [
                    'Botânica',
                    'Zoologia',
                    'Ecologia',
                    'Genética',
                    'Biologia Molecular',
                ],
            },
            {
                id: uuidv4(),
                name: 'Ciências Biológicas (Licenciatura)',
                subjects: [
                    'Educação Ambiental',
                    'Didática',
                    'Psicologia da Educação',
                    'Metodologia Científica',
                    'Estágio Supervisionado em Biologia',
                ],
            },
            {
                id: uuidv4(),
                name: 'Ciências da Saúde',
                subjects: [
                    'Anatomia Humana',
                    'Fisiologia Humana',
                    'Bioestatística',
                    'Epidemiologia',
                    'Saúde Pública',
                ],
            },
            {
                id: uuidv4(),
                name: 'Farmácia',
                subjects: [
                    'Farmacologia',
                    'Toxicologia',
                    'Química Farmacêutica',
                    'Farmácia Hospitalar',
                    'Legislação Farmacêutica',
                ],
            },
            {
                id: uuidv4(),
                name: 'Enfermagem',
                subjects: [
                    'Assistência de Enfermagem',
                    'Ética em Enfermagem',
                    'Enfermagem Obstétrica',
                    'Saúde Mental',
                    'Enfermagem Comunitária',
                ],
            },
        ],
    },
    {
        id: uuidv4(),
        area: 'Ciências Exatas',
        courses: [
            {
                id: uuidv4(),
                name: 'Engenharia Civil',
                subjects: [
                    'Mecânica dos Sólidos',
                    'Geotecnia',
                    'Construção Civil',
                    'Estruturas de Concreto',
                    'Topografia',
                ],
            },
            {
                id: uuidv4(),
                name: 'Engenharia de Produção',
                subjects: [
                    'Gestão da Produção',
                    'Pesquisa Operacional',
                    'Qualidade',
                    'Logística',
                    'Ergonomia',
                ],
            },
            {
                id: uuidv4(),
                name: 'Engenharia Elétrica',
                subjects: [
                    'Circuitos Elétricos',
                    'Sistemas de Controle',
                    'Eletrônica de Potência',
                    'Eletromagnetismo',
                    'Comunicações',
                ],
            },
            {
                id: uuidv4(),
                name: 'Engenharia Mecânica',
                subjects: [
                    'Termodinâmica',
                    'Mecânica dos Fluidos',
                    'Máquinas Térmicas',
                    'Elementos de Máquinas',
                    'Controle de Processos',
                ],
            },
            {
                id: uuidv4(),
                name: 'Engenharia de Computação',
                subjects: [
                    'Algoritmos e Estruturas de Dados',
                    'Redes de Computadores',
                    'Sistemas Operacionais',
                    'Inteligência Artificial',
                    'Programação Web',
                ],
            },
            {
                id: uuidv4(),
                name: 'Engenharia Ambiental',
                subjects: [
                    'Gestão Ambiental',
                    'Recursos Hídricos',
                    'Poluição Ambiental',
                    'Educação Ambiental',
                    'Sustentabilidade',
                ],
            },
            {
                id: uuidv4(),
                name: 'Matemática',
                subjects: [
                    'Cálculo Diferencial e Integral',
                    'Álgebra Linear',
                    'Geometria Analítica',
                    'Probabilidade e Estatística',
                    'Equações Diferenciais',
                ],
            },
            {
                id: uuidv4(),
                name: 'Física',
                subjects: [
                    'Mecânica Clássica',
                    'Eletromagnetismo',
                    'Óptica',
                    'Física Moderna',
                    'Termodinâmica',
                ],
            },
            {
                id: uuidv4(),
                name: 'Química',
                subjects: [
                    'Química Geral',
                    'Química Orgânica',
                    'Química Inorgânica',
                    'Físico-Química',
                    'Análise Química',
                ],
            },
        ],
    },
    {
        id: uuidv4(),
        area: 'Ciências Humanas',
        courses: [
            {
                id: uuidv4(),
                name: 'Direito',
                subjects: [
                    'Direito Civil',
                    'Direito Penal',
                    'Direito Constitucional',
                    'Direito do Trabalho',
                    'Processo Civil',
                ],
            },
            {
                id: uuidv4(),
                name: 'Administração',
                subjects: [
                    'Administração Financeira',
                    'Gestão de Recursos Humanos',
                    'Marketing',
                    'Estratégia Empresarial',
                    'Logística',
                ],
            },
            {
                id: uuidv4(),
                name: 'Ciências Contábeis',
                subjects: [
                    'Contabilidade Financeira',
                    'Auditoria Contábil',
                    'Controladoria',
                    'Perícia Contábil',
                    'Contabilidade Tributária',
                ],
            },
            {
                id: uuidv4(),
                name: 'Economia',
                subjects: [
                    'Microeconomia',
                    'Macroeconomia',
                    'Economia Internacional',
                    'Economia do Setor Público',
                    'Economia Brasileira',
                ],
            },
            {
                id: uuidv4(),
                name: 'Psicologia',
                subjects: [
                    'Psicologia Geral',
                    'Psicologia do Desenvolvimento',
                    'Psicopatologia',
                    'Psicologia Organizacional',
                    'Psicologia Clínica',
                ],
            },
            {
                id: uuidv4(),
                name: 'Sociologia',
                subjects: [
                    'Sociologia Geral',
                    'Sociologia Urbana',
                    'Sociologia Política',
                    'Sociologia da Educação',
                    'Sociologia do Trabalho',
                ],
            },
            {
                id: uuidv4(),
                name: 'Filosofia',
                subjects: [
                    'Filosofia Antiga',
                    'Filosofia Moderna',
                    'Ética',
                    'Filosofia Política',
                    'Filosofia da Mente',
                ],
            },
            {
                id: uuidv4(),
                name: 'Letras',
                subjects: [
                    'Literatura Brasileira',
                    'Linguística',
                    'Gramática',
                    'Tradução',
                    'Teoria Literária',
                ],
            },
            {
                id: uuidv4(),
                name: 'História',
                subjects: [
                    'História Antiga',
                    'História Medieval',
                    'História Moderna',
                    'História Contemporânea',
                    'História do Brasil',
                ],
            },
            {
                id: uuidv4(),
                name: 'Geografia',
                subjects: [
                    'Geografia Humana',
                    'Geografia Física',
                    'Geopolítica',
                    'Cartografia',
                    'Climatologia',
                ],
            },
        ],
    },
    {
        id: uuidv4(),
        area: 'Ciências Sociais Aplicadas',
        courses: [
            {
                id: uuidv4(),
                name: 'Comunicação Social',
                subjects: [
                    'Teorias da Comunicação',
                    'Jornalismo',
                    'Produção Audiovisual',
                    'Comunicação Empresarial',
                    'Ética na Comunicação',
                ],
            },
            {
                id: uuidv4(),
                name: 'Publicidade e Propaganda',
                subjects: [
                    'Criação Publicitária',
                    'Planejamento de Mídia',
                    'Marketing Digital',
                    'Pesquisa de Mercado',
                    'Ética na Publicidade',
                ],
            },
            {
                id: uuidv4(),
                name: 'Marketing',
                subjects: [
                    'Comportamento do Consumidor',
                    'Gestão de Marcas',
                    'Marketing Estratégico',
                    'Pesquisa de Marketing',
                    'Marketing de Conteúdo',
                ],
            },
            {
                id: uuidv4(),
                name: 'Relações Públicas',
                subjects: [
                    'Assessoria de Imprensa',
                    'Eventos Corporativos',
                    'Comunicação Interna',
                    'Gestão de Crises',
                    'Ética nas Relações Públicas',
                ],
            },
            {
                id: uuidv4(),
                name: 'Turismo',
                subjects: [
                    'Planejamento Turístico',
                    'Gestão Hoteleira',
                    'Ecoturismo',
                    'Turismo Cultural',
                    'Marketing Turístico',
                ],
            },
            {
                id: uuidv4(),
                name: 'Secretariado Executivo',
                subjects: [
                    'Técnicas Secretariais',
                    'Gestão de Documentos',
                    'Comunicação Empresarial',
                    'Organização de Eventos',
                    'Ética Profissional',
                ],
            },
            {
                id: uuidv4(),
                name: 'Recursos Humanos',
                subjects: [
                    'Gestão de Pessoas',
                    'Recrutamento e Seleção',
                    'Treinamento e Desenvolvimento',
                    'Legislação Trabalhista',
                    'Relações Trabalhistas',
                ],
            },
            {
                id: uuidv4(),
                name: 'Logística',
                subjects: [
                    'Logística Empresarial',
                    'Gestão de Estoques',
                    'Cadeia de Suprimentos',
                    'Logística Reversa',
                    'Tecnologia da Informação em Logística',
                ],
            },
        ],
    },
    {
        id: uuidv4(),
        area: 'Tecnologia da Informação',
        courses: [
            {
                id: uuidv4(),
                name: 'Ciência da Computação',
                subjects: [
                    'Algoritmos e Estruturas de Dados',
                    'Programação Orientada a Objetos',
                    'Banco de Dados',
                    'Inteligência Artificial',
                    'Sistemas Distribuídos',
                ],
            },
            {
                id: uuidv4(),
                name: 'Sistemas de Informação',
                subjects: [
                    'Análise de Sistemas',
                    'Desenvolvimento Web',
                    'Engenharia de Requisitos',
                    'Gestão de Projetos de TI',
                    'Banco de Dados para Sistemas de Informação',
                ],
            },
            {
                id: uuidv4(),
                name: 'Análise e Desenvolvimento de Sistemas',
                subjects: [
                    'Desenvolvimento Mobile',
                    'Testes de Software',
                    'Arquitetura de Software',
                    'Programação Funcional',
                    'Qualidade de Software',
                ],
            },
            {
                id: uuidv4(),
                name: 'Engenharia de Software',
                subjects: [
                    'Engenharia de Requisitos',
                    'Modelagem de Software',
                    'Padrões de Projeto',
                    'Desenvolvimento Ágil',
                    'Manutenção de Software',
                ],
            },
            {
                id: uuidv4(),
                name: 'Segurança da Informação',
                subjects: [
                    'Criptografia',
                    'Segurança em Redes',
                    'Auditoria de Sistemas',
                    'Ética em Segurança da Informação',
                    'Gestão de Incidentes',
                ],
            },
            {
                id: uuidv4(),
                name: 'Redes de Computadores',
                subjects: [
                    'Protocolos de Comunicação',
                    'Administração de Redes',
                    'Segurança em Redes',
                    'Redes sem Fio',
                    'Virtualização de Redes',
                ],
            },
            {
                id: uuidv4(),
                name: 'Design de Software',
                subjects: [
                    'Usabilidade',
                    'Design Centrado no Usuário',
                    'Arquitetura de Informação',
                    'Prototipação',
                    'Design Responsivo',
                ],
            },
        ],
    },
    {
        id: uuidv4(),
        area: 'Artes e Humanidades',
        courses: [
            {
                id: uuidv4(),
                name: 'Artes Visuais',
                subjects: [
                    'História da Arte',
                    'Pintura',
                    'Escultura',
                    'Desenho Artístico',
                    'Arte Contemporânea',
                ],
            },
            {
                id: uuidv4(),
                name: 'Música',
                subjects: [
                    'Teoria Musical',
                    'História da Música',
                    'Composição',
                    'Prática Instrumental',
                    'Música Popular Brasileira',
                ],
            },
            {
                id: uuidv4(),
                name: 'Dança',
                subjects: [
                    'Técnica de Dança',
                    'História da Dança',
                    'Improvisação',
                    'Coreografia',
                    'Dança Contemporânea',
                ],
            },
            {
                id: uuidv4(),
                name: 'Teatro',
                subjects: [
                    'Interpretação Teatral',
                    'História do Teatro',
                    'Direção Teatral',
                    'Dramaturgia',
                    'Teatro Experimental',
                ],
            },
            {
                id: uuidv4(),
                name: 'Design',
                subjects: [
                    'Design Gráfico',
                    'Design de Produto',
                    'Design de Interface',
                    'Design Thinking',
                    'Ergonomia e Usabilidade',
                ],
            },
            {
                id: uuidv4(),
                name: 'Arquitetura e Urbanismo',
                subjects: [
                    'História da Arquitetura',
                    'Projeto Arquitetônico',
                    'Urbanismo',
                    'Paisagismo',
                    'Tecnologia da Construção',
                ],
            },
        ],
    },
    {
        id: uuidv4(),
        area: 'Saúde',
        courses: [
            {
                id: uuidv4(),
                name: 'Medicina',
                subjects: [
                    'Anatomia Humana',
                    'Fisiologia',
                    'Bioquímica',
                    'Patologia',
                    'Semiologia Médica',
                ],
            },
            {
                id: uuidv4(),
                name: 'Odontologia',
                subjects: [
                    'Anatomia Dental',
                    'Cirurgia Oral',
                    'Periodontia',
                    'Endodontia',
                    'Odontopediatria',
                ],
            },
            {
                id: uuidv4(),
                name: 'Fonoaudiologia',
                subjects: [
                    'Audiologia',
                    'Linguagem',
                    'Motricidade Orofacial',
                    'Disfagia',
                    'Psicoeducação',
                ],
            },
            {
                id: uuidv4(),
                name: 'Terapia Ocupacional',
                subjects: [
                    'Saúde Mental',
                    'Reabilitação Neurológica',
                    'Terapia Ocupacional Pediátrica',
                    'Ergonomia',
                    'Intervenção em Gerontologia',
                ],
            },
            {
                id: uuidv4(),
                name: 'Fisioterapia',
                subjects: [
                    'Fisioterapia Respiratória',
                    'Fisioterapia Ortopédica',
                    'Fisioterapia Neurológica',
                    'Fisioterapia Desportiva',
                    'Fisioterapia Cardiovascular',
                ],
            },
            {
                id: uuidv4(),
                name: 'Nutrição',
                subjects: [
                    'Nutrição Clínica',
                    'Dietoterapia',
                    'Nutrição Esportiva',
                    'Saúde Pública',
                    'Alimentação e Cultura',
                ],
            },
        ],
    },
    {
        id: uuidv4(),
        area: 'Educação',
        courses: [
            {
                id: uuidv4(),
                name: 'Pedagogia',
                subjects: [
                    'Psicologia da Educação',
                    'Didática',
                    'Sociologia da Educação',
                    'Gestão Escolar',
                    'Educação Inclusiva',
                ],
            },
            {
                id: uuidv4(),
                name: 'Educação Física',
                subjects: [
                    'Teoria do Movimento Humano',
                    'Anatomia Humana',
                    'Fisiologia do Exercício',
                    'Metodologia do Ensino da Educação Física',
                    'Esportes e Lazer',
                ],
            },
            {
                id: uuidv4(),
                name: 'Letras (Português)',
                subjects: [
                    'Gramática',
                    'Literatura Brasileira',
                    'Redação e Composição',
                    'Linguística',
                    'Didática do Português',
                ],
            },
            {
                id: uuidv4(),
                name: 'Letras (Inglês)',
                subjects: [
                    'Gramática Inglesa',
                    'Literatura Inglesa',
                    'Tradução',
                    'Fonética e Fonologia',
                    'Metodologia do Ensino de Inglês',
                ],
            },
        ],
    },
];
