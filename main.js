// ========== CONFIGURAÇÕES E CONSTANTES ==========
const areas = {
    agrarias: {
        nome: "Ciências Agrárias",
        profissoes: ["Agronomia", "Biotecnologia","Engenharia Agrícola","Medicina Veterinária",  "Zootecnia"]
    },
    ambiental: {
        nome: "Meio Ambiente",
        profissoes: ["Ecologia", "Engenharia Ambiental","Gestão Ambiental", "Oceanografia","Engenharia de Energia"]
    },

    biologicas: {
        nome: "Ciências Biológicas",
        profissoes: ["Bioquímica", "Biofísica", "Biomedicina", "Ciências Biológicas", "Bioinformática",
                    "Biotecnologia Industrial", "Biologia Marinha", "Genética e Melhoramento Genético", 
                    "Biologia Forense"]
    },
    saude: {
        nome: "Ciências da Saúde",
        profissoes: ["Educação Física", "Enfermagem", "Farmácia", "Fisioterapia",
                    "Fonoaudiologia","Medicina","Nutrição","Odontologia","Terapia Ocupacional"]
    },
    exatas: {
        nome: "Ciências Exatas e da Terra",
        profissoes: ["Estatística", "Física", "Geofísica", "Geologia",
                    "Matemática","Química","Astrobiologia"]
    },
    tecnologia: {
        nome: "Tecnologia",
        profissoes: ["Análise e Desenvolvimento de Sistemas","Ciência da Computação", 
                    "Nanotecnologia","Sistemas de Informação","Ciência de Dados", 
                    "Inteligência Artificial","Engenharia de Computação",
                    "Cibersegurança", "Geoprocessamento","Engenharia de Software","Design de Games"]
    },
    engenharias: {
        nome: "Engenharias",
        profissoes: ["Engenharia Aeronáutica","Engenharia de Alimentos",
                    "Engenharia Ambiental e Sanitária","Engenharia Biomédica","Engenharia Civil",
                    "Engenharia de Controle e Automação", "Engenharia Elétrica",
                    "Engenharia Eletrônica", "Engenharia Mecânica",
                    "Engenharia de Materiais", "Engenharia de Minas", "Engenharia Naval",
                    "Engenharia de Produção", "Engenharia Química", ]
    },
    humanas: {
        nome: "Ciências Humanas",
        profissoes: ["Antropologia", "Arqueologia", "Ciência Política", "Filosofia", "Geografia",
                    "História", "Psicologia", "Sociologia", "Teologia", "Psicopedagogia",
                    "Neurociência Cognitiva", "Filosofia Política", "Arqueologia Subaquática", 
                    "História da Ciência"]
    },
    sociais: {
        nome: "Ciências Sociais Aplicadas",
        profissoes: ["Administração", "Recursos Humanos", "Arquivologia", "Arquitetura e Urbanismo",
                    "Biblioteconomia", "Ciências Contábeis", "Direito", "Economia", "Educomunicação",
                    "Jornalismo", "Museologia", "Pedagogia", "Produção Cultural", "Publicidade e Propaganda",
                    "Relações Internacionais", "Relações Públicas", "Secretariado", "Serviço Social",
                    "Turismo", "Marketing Digital", "Gestão de Projetos"]
    },
    letras: {
        nome: "Linguística, Letras e Artes",
        profissoes: ["Artes Cênicas", "Artes Plásticas", "Cinema", "Dança", "Design",
                    "Design Gráfico", "Design de Moda", "Design de Interiores",
                    "Fotografia", "História da Arte", "Linguística", "Letras", "Moda", "Música",
                    "Teatro", "Tradução e Interpretação", "Produção Audiovisual",
                    "Curadoria Digital", "Escrita Criativa", "Artes Digitais"]
    }
};

const discProfiles = {
    A: { nome: "Analista", descricao: "Metódico, detalhista, valoriza processos" },
    B: { nome: "Comunicador", descricao: "Sociável, empático, colaborativo" },
    C: { nome: "Executor", descricao: "Focado em resultados, decisivo" },
    D: { nome: "Planejador", descricao: "Estratégico, inovador, intuitivo" }
};

const discProfessionMapping = {
    A: { // Analista
        exatas: ["Estatístico", "Matemático", "Físico", "Químico"],
        // ... [Adicionar restante do mapeamento para perfil A]
    },
    // ... [Adicionar restante dos perfis B, C e D]
};

// ========== QUESTÕES DO TESTE ==========
// Fase 1 - DISC
const discQuestions = [
    {
        text: "Em um projeto em grupo, você prefere:",
        options: [
            { text: "Organizar etapas e garantir que tudo siga um cronograma rígido", profile: "A" },
            { text: "Discutir ideias e manter o clima descontraído", profile: "B" },
            { text: "Focar em concluir as tarefas o mais rápido possível", profile: "C" },
            { text: "Imaginar soluções inovadoras que ninguém pensou", profile: "D" }
        ]
    },
    {
        text: "Quando enfrento um desafio, costumo:",
        options: [
            { text: "Analisar todas as variáveis antes de agir", profile: "A" },
            { text: "Buscar apoio da equipe", profile: "B" },
            { text: "Agir rapidamente para resolver", profile: "C" },
            { text: "Procurar soluções inovadoras", profile: "D" }
        ]
    },
    {
        text: "Em uma apresentação importante, você prefere:",
        options: [
            { text: "Ter todos os dados bem organizados", profile: "A" },
            { text: "Interagir com a audiência", profile: "B" },
            { text: "Ir direto aos resultados principais", profile: "C" },
            { text: "Mostrar ideias visionárias", profile: "D" }
        ]
    },
    {
        text: "Ao receber um novo projeto, sua primeira reação é:",
        options: [
            { text: "Criar um plano detalhado", profile: "A" },
            { text: "Reunir a equipe para discussão", profile: "B" },
            { text: "Definir metas e prazos", profile: "C" },
            { text: "Visualizar possibilidades futuras", profile: "D" }
        ]
    },
    {
        text: "Em uma discussão, você geralmente:",
        options: [
            { text: "Apresenta dados e fatos", profile: "A" },
            { text: "Considera os sentimentos dos outros", profile: "B" },
            { text: "Busca uma conclusão rápida", profile: "C" },
            { text: "Propõe alternativas diferentes", profile: "D" }
        ]
    },
    {
        text: "Seu ambiente de trabalho ideal é:",
        options: [
            { text: "Organizado e silencioso", profile: "A" },
            { text: "Colaborativo e amigável", profile: "B" },
            { text: "Dinâmico e orientado a resultados", profile: "C" },
            { text: "Flexível e inovador", profile: "D" }
        ]
    },
    {
        text: "Ao enfrentar mudanças, você costuma:",
        options: [
            { text: "Avaliar riscos e impactos", profile: "A" },
            { text: "Considerar o impacto nas pessoas", profile: "B" },
            { text: "Adaptar-se rapidamente", profile: "C" },
            { text: "Ver oportunidades de inovação", profile: "D" }
        ]
    },
    {
        text: "Em um conflito, sua abordagem é:",
        options: [
            { text: "Analisar os fatos objetivamente", profile: "A" },
            { text: "Buscar harmonia entre as partes", profile: "B" },
            { text: "Resolver o problema rapidamente", profile: "C" },
            { text: "Encontrar soluções criativas", profile: "D" }
        ]
    },
    {
        text: "Ao trabalhar em equipe, você prefere:",
        options: [
            { text: "Definir processos claros", profile: "A" },
            { text: "Manter todos motivados", profile: "B" },
            { text: "Focar na entrega", profile: "C" },
            { text: "Estimular novas ideias", profile: "D" }
        ]
    },
    {
        text: "Sua maior contribuição em projetos é:",
        options: [
            { text: "Garantir precisão e qualidade", profile: "A" },
            { text: "Promover trabalho em equipe", profile: "B" },
            { text: "Alcançar objetivos", profile: "C" },
            { text: "Trazer perspectivas diferentes", profile: "D" }
        ]
    },
    {
        text: "Em situações de pressão, você tende a:",
        options: [
            { text: "Seguir procedimentos estabelecidos", profile: "A" },
            { text: "Manter a equipe unida", profile: "B" },
            { text: "Tomar decisões rápidas", profile: "C" },
            { text: "Buscar soluções alternativas", profile: "D" }
        ]
    },
    {
        text: "Em uma apresentação, você:",
        options: [
            { text: "Usa dados precisos e gráficos detalhados", profile: "A" },
            { text: "Engaja o público com histórias", profile: "B" },
            { text: "Vai direto ao ponto, sem rodeios", profile: "C" },
            { text: "Destaca tendências futuras", profile: "D" }
        ]
    },
    {
        text: "O que você valoriza mais em colegas de equipe?",
        options: [
            { text: "Confiabilidade e atenção aos detalhes", profile: "A" },
            { text: "Empatia e capacidade de comunicação", profile: "B" },
            { text: "Eficiência e foco em resultados", profile: "C" },
            { text: "Criatividade e pensamento inovador", profile: "D" }
        ]
    },
    {
        text: "Como você prioriza tarefas?",
        options: [
            { text: "Seguindo uma lista ordenada", profile: "A" },
            { text: "Escolhendo as que envolvem interação", profile: "B" },
            { text: "Atacando primeiro as mais urgentes", profile: "C" },
            { text: "Focando nas de maior impacto futuro", profile: "D" }
        ]
    },
    {
        text: "Qual seu maior medo profissional?",
        options: [
            { text: "Falhas por falta de planejamento", profile: "A" },
            { text: "Conflitos ou desarmonia na equipe", profile: "B" },
            { text: "Perder tempo com burocracia", profile: "C" },
            { text: "Ficar preso em rotinas sem inovação", profile: "D" }
        ]
    },
    {
        text: "Em um dia livre, você prefere:",
        options: [
            { text: "Organizar e planejar atividades", profile: "A" },
            { text: "Sair com amigos", profile: "B" },
            { text: "Praticar atividades competitivas", profile: "C" },
            { text: "Explorar novos lugares ou hobbies", profile: "D" }
        ]
    },
    {
        text: "Como você enxerga erros?",
        options: [
            { text: "Oportunidades para melhorar processos", profile: "A" },
            { text: "Chances de aprender com os outros", profile: "B" },
            { text: "Obstáculos a serem superados", profile: "C" },
            { text: "Parte natural da inovação", profile: "D" }
        ]
    },
    {
        text: "Em uma crise, sua primeira reação é:",
        options: [
            { text: "Reunir informações e analisar", profile: "A" },
            { text: "Acionar a equipe para discutir", profile: "B" },
            { text: "Agir imediatamente", profile: "C" },
            { text: "Buscar soluções inovadoras", profile: "D" }
        ]
    },
    {
        text: "Como você define sucesso?",
        options: [
            { text: "Cumprir metas com precisão", profile: "A" },
            { text: "Construir bons relacionamentos", profile: "B" },
            { text: "Alcançar resultados superiores", profile: "C" },
            { text: "Criar impacto duradouro", profile: "D" }
        ]
    },
    {
        text: "Qual habilidade você mais quer desenvolver?",
        options: [
            { text: "Gestão de processos e organização", profile: "A" },
            { text: "Comunicação e networking", profile: "B" },
            { text: "Tomada de decisão sob pressão", profile: "C" },
            { text: "Pensamento estratégico e criativo", profile: "D" }
        ]
    }
];

// Fase 2 - Áreas de Interesse (rebalanced - exactly 15 appearances per area)
const initialQuestions = [
    {
        text: "Quando preciso resolver um problema, prefiro:",
        options: [
            { text: "Usar cálculos e lógica", areas: ["exatas"] },
            { text: "Cuidar do bem-estar das pessoas", areas: ["saude"] },
            { text: "Investigar fenômenos naturais", areas: ["biologicas"] },
            { text: "Expressar ideias criativas", areas: ["letras"] }
        ]
    },
    {
        text: "Em um trabalho em grupo, assumo o papel de:",
        options: [
            { text: "Coordenar a equipe", areas: ["sociais"] },
            { text: "Criar soluções inovadoras", areas: ["engenharias"] },
            { text: "Cuidar do ambiente", areas: ["agrarias"] },
            { text: "Analisar aspectos sociais", areas: ["humanas"] }
        ]
    },
    {
        text: "Em um projeto acadêmico, você prefere:",
        options: [
            { text: "Desenvolver pesquisas científicas", areas: ["biologicas"] },
            { text: "Projetar soluções técnicas", areas: ["engenharias"] },
            { text: "Estudar comportamentos sociais", areas: ["humanas"] },
            { text: "Criar conteúdo artístico", areas: ["letras"] }
        ]
    },
    {
        text: "Que tipo de atividade mais te motiva?",
        options: [
            { text: "Resolver problemas complexos", areas: ["exatas"] },
            { text: "Cuidar da saúde das pessoas", areas: ["saude"] },
            { text: "Administrar recursos", areas: ["sociais"] },
            { text: "Preservar o meio ambiente", areas: ["agrarias"] }
        ]
    },
    {
        text: "Em uma palestra, você preferiria ouvir sobre:",
        options: [
            { text: "Inovações tecnológicas", areas: ["engenharias"] },
            { text: "Pesquisas médicas", areas: ["saude"] },
            { text: "Estudos sociais", areas: ["humanas"] },
            { text: "Expressão artística", areas: ["letras"] }
        ]
    },
    {
        text: "Em um projeto de pesquisa, você escolheria:",
        options: [
            { text: "Desenvolver experimentos", areas: ["exatas"] },
            { text: "Estudar comportamentos", areas: ["humanas"] },
            { text: "Investigar ecossistemas", areas: ["biologicas"] },
            { text: "Analisar mercados", areas: ["sociais"] }
        ]
    },
    {
        text: "Qual atividade mais te atrai?",
        options: [
            { text: "Criar soluções técnicas", areas: ["engenharias"] },
            { text: "Cuidar da saúde", areas: ["saude"] },
            { text: "Proteger o meio ambiente", areas: ["agrarias"] },
            { text: "Produzir conteúdo cultural", areas: ["letras"] }
        ]
    },
    {
        text: "Em um trabalho voluntário, você preferiria:",
        options: [
            { text: "Ensinar matemática", areas: ["exatas"] },
            { text: "Organizar eventos", areas: ["sociais"] },
            { text: "Preservar a natureza", areas: ["biologicas"] },
            { text: "Promover arte e cultura", areas: ["letras"] }
        ]
    },
    {
        text: "Em uma universidade, qual área mais te atrai?",
        options: [
            { text: "Laboratórios de pesquisa", areas: ["biologicas"] },
            { text: "Clínicas e hospitais", areas: ["saude"] },
            { text: "Escritórios e empresas", areas: ["sociais"] },
            { text: "Estúdios de criação", areas: ["letras"] }
        ]
    },
    {
        text: "Em um projeto internacional, você preferiria:",
        options: [
            { text: "Desenvolver tecnologias", areas: ["engenharias"] },
            { text: "Pesquisar culturas", areas: ["humanas"] },
            { text: "Preservar ecossistemas", areas: ["agrarias"] },
            { text: "Criar conteúdo artístico", areas: ["letras"] }
        ]
    },
    {
        text: "Em um laboratório, você prefere trabalhar com:",
        options: [
            { text: "Análise de dados", areas: ["exatas"] },
            { text: "Pesquisa médica", areas: ["saude"] },
            { text: "Experimentos biológicos", areas: ["biologicas"] },
            { text: "Desenvolvimento de produtos", areas: ["engenharias"] }
        ]
    },
    {
        text: "O que mais te interessa estudar?",
        options: [
            { text: "Comportamento humano", areas: ["humanas"] },
            { text: "Gestão empresarial", areas: ["sociais"] },
            { text: "Agricultura sustentável", areas: ["agrarias"] },
            { text: "Linguagens artísticas", areas: ["letras"] }
        ]
    },
    {
        text: "Em um projeto de inovação, você escolheria:",
        options: [
            { text: "Programação e tecnologia", areas: ["exatas"] },
            { text: "Equipamentos médicos", areas: ["saude"] },
            { text: "Biotecnologia", areas: ["biologicas"] },
            { text: "Robótica industrial", areas: ["engenharias"] }
        ]
    },
    {
        text: "Qual área você mais se identifica?",
        options: [
            { text: "Filosofia e sociedade", areas: ["humanas"] },
            { text: "Economia e mercado", areas: ["sociais"] },
            { text: "Preservação ambiental", areas: ["agrarias"] },
            { text: "Comunicação e arte", areas: ["letras"] }
        ]
    },
    {
        text: "Em uma empresa, você preferiria trabalhar com:",
        options: [
            { text: "Sistemas e processos", areas: ["exatas"] },
            { text: "Qualidade de vida", areas: ["saude"] },
            { text: "Pesquisa e desenvolvimento", areas: ["biologicas"] },
            { text: "Projetos industriais", areas: ["engenharias"] }
        ]
    },
    {
        text: "Que tipo de projeto mais te motiva?",
        options: [
            { text: "Estudos culturais", areas: ["humanas"] },
            { text: "Gestão de pessoas", areas: ["sociais"] },
            { text: "Produção sustentável", areas: ["agrarias"] },
            { text: "Design e criação", areas: ["letras"] }
        ]
    },
    {
        text: "Em uma pesquisa científica, você preferiria:",
        options: [
            { text: "Análise matemática", areas: ["exatas"] },
            { text: "Tratamentos médicos", areas: ["saude"] },
            { text: "Estudo de espécies", areas: ["biologicas"] },
            { text: "Automação industrial", areas: ["engenharias"] }
        ]
    },
    {
        text: "Qual área de estudo mais te atrai?",
        options: [
            { text: "História e geografia", areas: ["humanas"] },
            { text: "Administração e negócios", areas: ["sociais"] },
            { text: "Recursos naturais", areas: ["agrarias"] },
            { text: "Literatura e artes", areas: ["letras"] }
        ]
    },
    {
        text: "Em um centro de pesquisa, você escolheria:",
        options: [
            { text: "Desenvolvimento de software", areas: ["exatas"] },
            { text: "Pesquisa biomédica", areas: ["saude"] },
            { text: "Genética e evolução", areas: ["biologicas"] },
            { text: "Engenharia de materiais", areas: ["engenharias"] }
        ]
    },
    {
        text: "Qual aspecto mais te interessa?",
        options: [
            { text: "Relações humanas", areas: ["humanas"] },
            { text: "Empreendedorismo", areas: ["sociais"] },
            { text: "Sustentabilidade", areas: ["agrarias"] },
            { text: "Expressão cultural", areas: ["letras"] }
        ]
    },
    {
        text: "Em um laboratório de pesquisa, você preferiria:",
        options: [
            { text: "Análise computacional", areas: ["exatas"] },
            { text: "Desenvolvimento de fármacos", areas: ["saude"] },
            { text: "Microbiologia", areas: ["biologicas"] },
            { text: "Protótipos industriais", areas: ["engenharias"] }
        ]
    },
    {
        text: "Qual área você gostaria de aprofundar?",
        options: [
            { text: "Ciências sociais", areas: ["humanas"] },
            { text: "Marketing e vendas", areas: ["sociais"] },
            { text: "Agroecologia", areas: ["agrarias"] },
            { text: "Produção cultural", areas: ["letras"] }
        ]
    },
    {
        text: "Em um projeto de desenvolvimento, você escolheria:",
        options: [
            { text: "Modelagem matemática", areas: ["exatas"] },
            { text: "Atendimento em saúde", areas: ["saude"] },
            { text: "Conservação ambiental", areas: ["biologicas"] },
            { text: "Inovação tecnológica", areas: ["engenharias"] }
        ]
    },
    {
        text: "O que você mais valoriza em um trabalho?",
        options: [
            { text: "Impacto social", areas: ["humanas"] },
            { text: "Gestão eficiente", areas: ["sociais"] },
            { text: "Produção responsável", areas: ["agrarias"] },
            { text: "Criatividade", areas: ["letras"] }
        ]
    },
    {
        text: "Em qual ambiente você se sentiria mais realizado?",
        options: [
            { text: "Centro de tecnologia", areas: ["exatas"] },
            { text: "Hospital ou clínica", areas: ["saude"] },
            { text: "Centro de pesquisa", areas: ["biologicas"] },
            { text: "Indústria", areas: ["engenharias"] }
        ]
    },
    {
        text: "Que tipo de conhecimento mais te atrai?",
        options: [
            { text: "Antropologia", areas: ["humanas"] },
            { text: "Gestão financeira", areas: ["sociais"] },
            { text: "Agricultura", areas: ["agrarias"] },
            { text: "Artes visuais", areas: ["letras"] }
        ]
    },
    {
        text: "Em uma equipe, qual seria seu papel ideal?",
        options: [
            { text: "Análise técnica", areas: ["exatas"] },
            { text: "Cuidado com pessoas", areas: ["saude"] },
            { text: "Pesquisa científica", areas: ["biologicas"] },
            { text: "Desenvolvimento de projetos", areas: ["engenharias"] }
        ]
    },
    {
        text: "Qual área você mais gostaria de transformar?",
        options: [
            { text: "Educação e cultura", areas: ["humanas"] },
            { text: "Ambiente corporativo", areas: ["sociais"] },
            { text: "Produção alimentar", areas: ["agrarias"] },
            { text: "Indústria criativa", areas: ["letras"] }
        ]
    },
    {
        text: "Em um projeto inovador, você preferiria trabalhar com:",
        options: [
            { text: "Inteligência artificial", areas: ["exatas"] },
            { text: "Tecnologia em saúde", areas: ["saude"] },
            { text: "Pesquisa genética", areas: ["biologicas"] },
            { text: "Automação", areas: ["engenharias"] }
        ]
    },
    {
        text: "Qual setor mais desperta seu interesse?",
        options: [
            { text: "Desenvolvimento social", areas: ["humanas"] },
            { text: "Mercado financeiro", areas: ["sociais"] },
            { text: "Agronegócio", areas: ["agrarias"] },
            { text: "Indústria cultural", areas: ["letras"] }
        ]
    }
];

// Fase 3 - Profissões Específicas
const specificQuestions = {
    agrarias: [
        {
            text: "Em um projeto de pesquisa agrária, qual aspecto mais te interessa?",
            options: [
                { text: "Desenvolver sistemas de irrigação inteligente", profissoes: ["Engenharia Agrícola"] },
                { text: "Pesquisar melhoramento genético", profissoes: ["Biotecnologia"] },
                { text: "Estudar impactos climáticos", profissoes: ["Meteorologia"] },
                { text: "Gerenciar recursos naturais", profissoes: ["Gestão Ambiental"] },
                { text: "Analisar qualidade do solo", profissoes: ["Geologia"] }
            ]
        },
        {
            text: "Na área de produção animal, o que mais te motiva?",
            options: [
                { text: "Saúde animal", profissoes: ["Medicina Veterinária"] },
                { text: "Sistemas de produção sustentável", profissoes: ["Zootecnia"] },
                { text: "Tecnologias de reprodução", profissoes: ["Biotecnologia"] },
                { text: "Gestão de fazendas", profissoes: ["Agronomia"] },
                { text: "Impacto ambiental", profissoes: ["Engenharia Ambiental"] }
            ]
        },
        {
            text: "Em um projeto de desenvolvimento sustentável, você preferiria:",
            options: [
                { text: "Desenvolver tecnologias de irrigação", profissoes: ["Engenharia Agrícola"] },
                { text: "Criar soluções biotecnológicas", profissoes: ["Biotecnologia"] },
                { text: "Estudar impacto ambiental", profissoes: ["Engenharia Ambiental"] },
                { text: "Gerenciar recursos naturais", profissoes: ["Gestão Ambiental"] },
                { text: "Analisar formações geológicas", profissoes: ["Geologia"] }
            ]
        },
        {
            text: "Na área de pesquisa agropecuária, qual seu maior interesse?",
            options: [
                { text: "Melhoramento genético animal", profissoes: ["Zootecnia"] },
                { text: "Saúde animal", profissoes: ["Medicina Veterinária"] },
                { text: "Produção agrícola", profissoes: ["Agronomia"] },
                { text: "Biotecnologia aplicada", profissoes: ["Biotecnologia"] },
                { text: "Meteorologia agrícola", profissoes: ["Meteorologia"] }
            ]
        },
        {
            text: "Em um projeto de sustentabilidade, qual área você escolheria?",
            options: [
                { text: "Conservação marinha", profissoes: ["Oceanografia"] },
                { text: "Manejo florestal", profissoes: ["Engenharia Florestal"] },
                { text: "Energia renovável", profissoes: ["Engenharia de Energia"] },
                { text: "Produção sustentável", profissoes: ["Ecologia"] },
                { text: "Aquicultura", profissoes: ["Engenharia de Pesca"] }
            ]
        },
        {
            text: "Em relação ao uso de tecnologia no campo, o que mais te atrai?",
            options: [
                { text: "Agricultura de precisão", profissoes: ["Engenharia Agrícola"] },
                { text: "Biotecnologia aplicada", profissoes: ["Biotecnologia"] },
                { text: "Monitoramento ambiental", profissoes: ["Gestão Ambiental"] },
                { text: "Previsão do tempo", profissoes: ["Meteorologia"] },
                { text: "Análise de solo", profissoes: ["Geologia"] }
            ]
        },
        {
            text: "Qual aspecto da produção sustentável mais te interessa?",
            options: [
                { text: "Produção agrícola eficiente", profissoes: ["Agronomia"] },
                { text: "Bem-estar animal", profissoes: ["Medicina Veterinária"] },
                { text: "Conservação ambiental", profissoes: ["Engenharia Ambiental"] },
                { text: "Nutrição animal", profissoes: ["Zootecnia"] },
                { text: "Recursos hídricos", profissoes: ["Engenharia Hídrica"] }
            ]
        },
        {
            text: "Em um projeto de pesquisa, você preferiria estudar:",
            options: [
                { text: "Ecossistemas marinhos", profissoes: ["Oceanografia"] },
                { text: "Biodiversidade", profissoes: ["Ecologia"] },
                { text: "Recursos energéticos", profissoes: ["Engenharia de Energia"] },
                { text: "Produção pesqueira", profissoes: ["Engenharia de Pesca"] },
                { text: "Recursos florestais", profissoes: ["Engenharia Florestal"] }
            ]
        },
        {
            text: "Qual área de inovação mais te motiva?",
            options: [
                { text: "Genética e melhoramento", profissoes: ["Biotecnologia"] },
                { text: "Automação agrícola", profissoes: ["Engenharia Agrícola"] },
                { text: "Gestão ambiental", profissoes: ["Gestão Ambiental"] },
                { text: "Recursos hídricos", profissoes: ["Engenharia Hídrica"] },
                { text: "Meteorologia aplicada", profissoes: ["Meteorologia"] }
            ]
        },
        {
            text: "Em relação aos recursos naturais, qual seu maior interesse?",
            options: [
                { text: "Exploração sustentável", profissoes: ["Geologia"] },
                { text: "Conservação marinha", profissoes: ["Oceanografia"] },
                { text: "Manejo florestal", profissoes: ["Engenharia Florestal"] },
                { text: "Produção animal", profissoes: ["Zootecnia"] },
                { text: "Preservação ambiental", profissoes: ["Ecologia"] }
            ]
        },
        {
            text: "Na produção agrícola, você preferiria trabalhar com:",
            options: [
                { text: "Desenvolvimento de culturas", profissoes: ["Agronomia"] },
                { text: "Irrigação e drenagem", profissoes: ["Engenharia Agrícola"] },
                { text: "Previsão climática", profissoes: ["Meteorologia"] },
                { text: "Manejo do solo", profissoes: ["Geologia"] },
                { text: "Gestão sustentável", profissoes: ["Gestão Ambiental"] }
            ]
        },
        {
            text: "Em um projeto de conservação, qual área mais te atrai?",
            options: [
                { text: "Preservação de espécies", profissoes: ["Ecologia"] },
                { text: "Recursos marinhos", profissoes: ["Oceanografia"] },
                { text: "Manejo florestal", profissoes: ["Engenharia Florestal"] },
                { text: "Aquicultura sustentável", profissoes: ["Engenharia de Pesca"] },
                { text: "Energias renováveis", profissoes: ["Engenharia de Energia"] }
            ]
        },
        {
            text: "Na área de pesquisa animal, você preferiria:",
            options: [
                { text: "Clínica veterinária", profissoes: ["Medicina Veterinária"] },
                { text: "Produção animal", profissoes: ["Zootecnia"] },
                { text: "Melhoramento genético", profissoes: ["Biotecnologia"] },
                { text: "Gestão de pastagens", profissoes: ["Agronomia"] },
                { text: "Impacto ambiental", profissoes: ["Engenharia Ambiental"] }
            ]
        },
        {
            text: "Em relação à tecnologia agrícola, o que mais te interessa?",
            options: [
                { text: "Maquinário agrícola", profissoes: ["Engenharia Agrícola"] },
                { text: "Biotecnologia vegetal", profissoes: ["Biotecnologia"] },
                { text: "Sensoriamento remoto", profissoes: ["Meteorologia"] },
                { text: "Análise de solos", profissoes: ["Geologia"] },
                { text: "Gestão de recursos", profissoes: ["Gestão Ambiental"] }
            ]
        },
        {
            text: "Na área de sustentabilidade, você preferiria trabalhar com:",
            options: [
                { text: "Eficiência hídrica", profissoes: ["Engenharia Hídrica"] },
                { text: "Biodiversidade marinha", profissoes: ["Oceanografia"] },
                { text: "Preservação florestal", profissoes: ["Engenharia Florestal"] },
                { text: "Produção sustentável", profissoes: ["Agronomia"] },
                { text: "Conservação ambiental", profissoes: ["Ecologia"] }
            ]
        },
        {
            text: "Em projetos de pesquisa, qual área mais te motiva?",
            options: [
                { text: "Saúde animal", profissoes: ["Medicina Veterinária"] },
                { text: "Produção animal", profissoes: ["Zootecnia"] },
                { text: "Biotecnologia", profissoes: ["Biotecnologia"] },
                { text: "Recursos naturais", profissoes: ["Gestão Ambiental"] },
                { text: "Climatologia", profissoes: ["Meteorologia"] }
            ]
        },
        {
            text: "Na gestão de recursos naturais, você preferiria:",
            options: [
                { text: "Manejo de bacias", profissoes: ["Engenharia Hídrica"] },
                { text: "Gestão costeira", profissoes: ["Oceanografia"] },
                { text: "Recursos florestais", profissoes: ["Engenharia Florestal"] },
                { text: "Recursos pesqueiros", profissoes: ["Engenharia de Pesca"] },
                { text: "Recursos minerais", profissoes: ["Geologia"] }
            ]
        },
        {
            text: "Em um centro de pesquisa, você gostaria de estudar:",
            options: [
                { text: "Doenças animais", profissoes: ["Medicina Veterinária"] },
                { text: "Genética aplicada", profissoes: ["Biotecnologia"] },
                { text: "Fenômenos climáticos", profissoes: ["Meteorologia"] },
                { text: "Conservação ambiental", profissoes: ["Ecologia"] },
                { text: "Produção sustentável", profissoes: ["Agronomia"] }
            ]
        },
        {
            text: "Na área de inovação tecnológica, você preferiria trabalhar com:",
            options: [
                { text: "Automação rural", profissoes: ["Engenharia Agrícola"] },
                { text: "Energia sustentável", profissoes: ["Engenharia de Energia"] },
                { text: "Biotecnologia", profissoes: ["Biotecnologia"] },
                { text: "Gestão ambiental", profissoes: ["Gestão Ambiental"] },
                { text: "Recursos hídricos", profissoes: ["Engenharia Hídrica"] }
            ]
        },
        {
            text: "Em um projeto internacional, você escolheria trabalhar com:",
            options: [
                { text: "Conservação marinha", profissoes: ["Oceanografia"] },
                { text: "Preservação florestal", profissoes: ["Engenharia Florestal"] },
                { text: "Aquicultura", profissoes: ["Engenharia de Pesca"] },
                { text: "Geologia ambiental", profissoes: ["Geologia"] },
                { text: "Ecossistemas", profissoes: ["Ecologia"] }
            ]
        }
    ],
    biologicas: [
        {
            text: "Em uma pesquisa de campo, você preferiria:",
            options: [
                { text: "Estudar comportamento animal", profissoes: ["Zoólogo"] },
                { text: "Catalogar espécies vegetais", profissoes: ["Botânico"] },
                { text: "Analisar ecossistemas", profissoes: ["Ecólogo"] },
                { text: "Pesquisar vida marinha", profissoes: ["Oceanógrafo"] },
                { text: "Coletar dados ambientais", profissoes: ["Biólogo"] }
            ]
        },
        {
            text: "Em uma pesquisa científica, você preferiria:",
            options: [
                { text: "Estudar genética populacional", profissoes: ["Biólogo"] },
                { text: "Pesquisar habitats marinhos", profissoes: ["Oceanógrafo"] },
                { text: "Analisar espécies vegetais", profissoes: ["Botânico"] },
                { text: "Observar comportamento animal", profissoes: ["Zoólogo"] },
                { text: "Investigar impactos ambientais", profissoes: ["Ecólogo"] }
            ]
        },
        {
            text: "Em um projeto de conservação da biodiversidade, você preferiria:",
            options: [
                { text: "Estudar populações animais", profissoes: ["Zoólogo"] },
                { text: "Mapear espécies vegetais", profissoes: ["Botânico"] },
                { text: "Avaliar interações ecológicas", profissoes: ["Ecólogo"] },
                { text: "Pesquisar biomas marinhos", profissoes: ["Oceanógrafo"] },
                { text: "Analisar DNA de espécies", profissoes: ["Biólogo"] }
            ]
        },
        {
            text: "Em um laboratório de pesquisa, qual área mais te atrai?",
            options: [
                { text: "Comportamento animal", profissoes: ["Zoólogo"] },
                { text: "Fisiologia vegetal", profissoes: ["Botânico"] },
                { text: "Dinâmica de ecossistemas", profissoes: ["Ecólogo"] },
                { text: "Biologia marinha", profissoes: ["Oceanógrafo"] },
                { text: "Biologia molecular", profissoes: ["Biólogo"] }
            ]
        },
        {
            text: "Qual aspecto da biodiversidade mais te fascina?",
            options: [
                { text: "Fauna silvestre", profissoes: ["Zoólogo"] },
                { text: "Flora nativa", profissoes: ["Botânico"] },
                { text: "Relações ecológicas", profissoes: ["Ecólogo"] },
                { text: "Vida oceânica", profissoes: ["Oceanógrafo"] },
                { text: "Evolução das espécies", profissoes: ["Biólogo"] }
            ]
        },
        {
            text: "Em um projeto de pesquisa ambiental, você escolheria:",
            options: [
                { text: "Monitorar populações animais", profissoes: ["Zoólogo"] },
                { text: "Estudar espécies vegetais", profissoes: ["Botânico"] },
                { text: "Analisar impactos ambientais", profissoes: ["Ecólogo"] },
                { text: "Pesquisar ecossistemas marinhos", profissoes: ["Oceanógrafo"] },
                { text: "Investigar adaptações evolutivas", profissoes: ["Biólogo"] }
            ]
        },
        {
            text: "Qual área de conservação mais te interessa?",
            options: [
                { text: "Proteção da fauna", profissoes: ["Zoólogo"] },
                { text: "Preservação da flora", profissoes: ["Botânico"] },
                { text: "Restauração de ecossistemas", profissoes: ["Ecólogo"] },
                { text: "Conservação marinha", profissoes: ["Oceanógrafo"] },
                { text: "Biodiversidade genética", profissoes: ["Biólogo"] }
            ]
        },
        {
            text: "Em uma expedição científica, você preferiria:",
            options: [
                { text: "Observar animais silvestres", profissoes: ["Zoólogo"] },
                { text: "Coletar espécimes vegetais", profissoes: ["Botânico"] },
                { text: "Mapear habitats naturais", profissoes: ["Ecólogo"] },
                { text: "Explorar recifes de corais", profissoes: ["Oceanógrafo"] },
                { text: "Coletar material genético", profissoes: ["Biólogo"] }
            ]
        },
        {
            text: "Em um projeto de pesquisa marinha, você escolheria:",
            options: [
                { text: "Estudar mamíferos marinhos", profissoes: ["Zoólogo"] },
                { text: "Pesquisar algas marinhas", profissoes: ["Botânico"] },
                { text: "Avaliar ecossistemas costeiros", profissoes: ["Ecólogo"] },
                { text: "Analisar correntes oceânicas", profissoes: ["Oceanógrafo"] },
                { text: "Estudar microorganismos marinhos", profissoes: ["Biólogo"] }
            ]
        },
        {
            text: "Na área de biotecnologia, você preferiria trabalhar com:",
            options: [
                { text: "Reprodução animal", profissoes: ["Zoólogo"] },
                { text: "Melhoramento vegetal", profissoes: ["Botânico"] },
                { text: "Biorremediação", profissoes: ["Ecólogo"] },
                { text: "Recursos marinhos", profissoes: ["Oceanógrafo"] },
                { text: "Engenharia genética", profissoes: ["Biólogo"] }
            ]
        },
        {
            text: "Em um parque nacional, você gostaria de:",
            options: [
                { text: "Monitorar espécies ameaçadas", profissoes: ["Zoólogo"] },
                { text: "Catalogar espécies vegetais", profissoes: ["Botânico"] },
                { text: "Estudar sucessão ecológica", profissoes: ["Ecólogo"] },
                { text: "Pesquisar ambientes costeiros", profissoes: ["Oceanógrafo"] },
                { text: "Analisar biodiversidade", profissoes: ["Biólogo"] }
            ]
        },
        {
            text: "Em um projeto de restauração ecológica, você preferiria:",
            options: [
                { text: "Reintroduzir espécies animais", profissoes: ["Zoólogo"] },
                { text: "Recuperar cobertura vegetal", profissoes: ["Botânico"] },
                { text: "Monitorar recuperação", profissoes: ["Ecólogo"] },
                { text: "Restaurar manguezais", profissoes: ["Oceanógrafo"] },
                { text: "Avaliar sucessão", profissoes: ["Biólogo"] }
            ]
        },
        {
            text: "Na área de educação ambiental, você escolheria:",
            options: [
                { text: "Ensinar sobre fauna", profissoes: ["Zoólogo"] },
                { text: "Apresentar flora local", profissoes: ["Botânico"] },
                { text: "Explicar relações ecológicas", profissoes: ["Ecólogo"] },
                { text: "Mostrar vida marinha", profissoes: ["Oceanógrafo"] },
                { text: "Discutir evolução", profissoes: ["Biólogo"] }
            ]
        },
        {
            text: "Em um projeto de pesquisa evolutiva, você preferiria estudar:",
            options: [
                { text: "Evolução comportamental", profissoes: ["Zoólogo"] },
                { text: "Adaptações vegetais", profissoes: ["Botânico"] },
                { text: "Coevolução", profissoes: ["Ecólogo"] },
                { text: "Evolução marinha", profissoes: ["Oceanógrafo"] },
                { text: "Genética evolutiva", profissoes: ["Biólogo"] }
            ]
        },
        {
            text: "Em uma reserva biológica, você gostaria de:",
            options: [
                { text: "Estudar interações animais", profissoes: ["Zoólogo"] },
                { text: "Pesquisar plantas endêmicas", profissoes: ["Botânico"] },
                { text: "Avaliar serviços ecossistêmicos", profissoes: ["Ecólogo"] },
                { text: "Monitorar áreas costeiras", profissoes: ["Oceanógrafo"] },
                { text: "Analisar populações", profissoes: ["Biólogo"] }
            ]
        },
        {
            text: "Em um laboratório de pesquisa, você preferiria:",
            options: [
                { text: "Estudar fisiologia animal", profissoes: ["Zoólogo"] },
                { text: "Analisar hormônios vegetais", profissoes: ["Botânico"] },
                { text: "Simular modelos ecológicos", profissoes: ["Ecólogo"] },
                { text: "Estudar plâncton", profissoes: ["Oceanógrafo"] },
                { text: "Sequenciar DNA", profissoes: ["Biólogo"] }
            ]
        },
        {
            text: "Em um projeto de conservação, você escolheria:",
            options: [
                { text: "Preservar espécies raras", profissoes: ["Zoólogo"] },
                { text: "Criar banco de sementes", profissoes: ["Botânico"] },
                { text: "Restaurar habitats", profissoes: ["Ecólogo"] },
                { text: "Proteger recifes", profissoes: ["Oceanógrafo"] },
                { text: "Manter diversidade genética", profissoes: ["Biólogo"] }
            ]
        },
        {
            text: "Na área de biotecnologia, você se interessaria por:",
            options: [
                { text: "Clonagem animal", profissoes: ["Zoólogo"] },
                { text: "Cultivo in vitro", profissoes: ["Botânico"] },
                { text: "Biorremediação ambiental", profissoes: ["Ecólogo"] },
                { text: "Biotecnologia marinha", profissoes: ["Oceanógrafo"] },
                { text: "Engenharia genética", profissoes: ["Biólogo"] }
            ]
        },
        {
            text: "Em um centro de pesquisa, você preferiria trabalhar com:",
            options: [
                { text: "Comportamento animal", profissoes: ["Zoólogo"] },
                { text: "Taxonomia vegetal", profissoes: ["Botânico"] },
                { text: "Mudanças climáticas", profissoes: ["Ecólogo"] },
                { text: "Oceanografia biológica", profissoes: ["Oceanógrafo"] },
                { text: "Biologia molecular", profissoes: ["Biólogo"] }
            ]
        },
        {
            text: "Em um projeto internacional, você escolheria estudar:",
            options: [
                { text: "Migração animal", profissoes: ["Zoólogo"] },
                { text: "Dispersão de sementes", profissoes: ["Botânico"] },
                { text: "Biomas globais", profissoes: ["Ecólogo"] },
                { text: "Correntes oceânicas", profissoes: ["Oceanógrafo"] },
                { text: "Evolução de espécies", profissoes: ["Biólogo"] }
            ]
        }
    ],
    exatas: [
        {
            text: "Em uma pesquisa científica, qual área mais te atrai?",
            options: [
                { text: "Desenvolvimento de algoritmos", profissoes: ["Cientista da Computação"] },
                { text: "Análise estatística", profissoes: ["Estatístico"] },
                { text: "Pesquisa em física quântica", profissoes: ["Físico"] },
                { text: "Desenvolvimento de materiais", profissoes: ["Químico"] },
                { text: "Modelagem matemática", profissoes: ["Matemático"] }
            ]
        },
        {
            text: "Qual aspecto da computação mais te interessa?",
            options: [
                { text: "Inteligência Artificial", profissoes: ["Cientista da Computação"] },
                { text: "Análise de Big Data", profissoes: ["Estatístico"] },
                { text: "Computação Quântica", profissoes: ["Físico"] },
                { text: "Simulações Moleculares", profissoes: ["Químico"] },
                { text: "Algoritmos Complexos", profissoes: ["Matemático"] }
            ]
        },
        {
            text: "Em um projeto de pesquisa avançada, você preferiria:",
            options: [
                { text: "Desenvolver sistemas autônomos", profissoes: ["Cientista da Computação"] },
                { text: "Criar modelos preditivos", profissoes: ["Estatístico"] },
                { text: "Estudar partículas elementares", profissoes: ["Físico"] },
                { text: "Desenvolver novos compostos", profissoes: ["Químico"] },
                { text: "Criar teoremas matemáticos", profissoes: ["Matemático"] }
            ]
        },
        {
            text: "Qual área de inovação tecnológica mais te motiva?",
            options: [
                { text: "Machine Learning", profissoes: ["Cientista da Computação"] },
                { text: "Análise Preditiva", profissoes: ["Estatístico"] },
                { text: "Nanotecnologia", profissoes: ["Físico"] },
                { text: "Química Verde", profissoes: ["Químico"] },
                { text: "Criptografia", profissoes: ["Matemático"] }
            ]
        },
        {
            text: "Em um laboratório de pesquisa, você preferiria trabalhar com:",
            options: [
                { text: "Desenvolvimento de Software", profissoes: ["Cientista da Computação"] },
                { text: "Análise de Dados", profissoes: ["Estatístico"] },
                { text: "Experimentos Físicos", profissoes: ["Físico"] },
                { text: "Síntese de Compostos", profissoes: ["Químico"] },
                { text: "Teoria dos Números", profissoes: ["Matemático"] }
            ]
        },
        {
            text: "Qual área de pesquisa fundamental mais te interessa?",
            options: [
                { text: "Arquitetura de Computadores", profissoes: ["Cientista da Computação"] },
                { text: "Inferência Estatística", profissoes: ["Estatístico"] },
                { text: "Mecânica Quântica", profissoes: ["Físico"] },
                { text: "Química Orgânica", profissoes: ["Químico"] },
                { text: "Análise Matemática", profissoes: ["Matemático"] }
            ]
        },
        {
            text: "Em um projeto de desenvolvimento, você escolheria:",
            options: [
                { text: "Criar Sistemas de Segurança", profissoes: ["Cientista da Computação"] },
                { text: "Desenvolver Modelos Estatísticos", profissoes: ["Estatístico"] },
                { text: "Pesquisar Energia Nuclear", profissoes: ["Físico"] },
                { text: "Desenvolver Catalisadores", profissoes: ["Químico"] },
                { text: "Estudar Geometria Avançada", profissoes: ["Matemático"] }
            ]
        },
        {
            text: "Qual aspecto da ciência pura mais te atrai?",
            options: [
                { text: "Teoria da Computação", profissoes: ["Cientista da Computação"] },
                { text: "Processos Estocásticos", profissoes: ["Estatístico"] },
                { text: "Física de Partículas", profissoes: ["Físico"] },
                { text: "Química Quântica", profissoes: ["Químico"] },
                { text: "Álgebra Abstrata", profissoes: ["Matemático"] }
            ]
        },
        {
            text: "Em uma pesquisa aplicada, você preferiria:",
            options: [
                { text: "Desenvolver Apps", profissoes: ["Cientista da Computação"] },
                { text: "Análise de Mercado", profissoes: ["Estatístico"] },
                { text: "Instrumentação Física", profissoes: ["Físico"] },
                { text: "Análise de Materiais", profissoes: ["Químico"] },
                { text: "Otimização Matemática", profissoes: ["Matemático"] }
            ]
        },
        {
            text: "Qual área de tecnologia emergente mais te fascina?",
            options: [
                { text: "Computação em Nuvem", profissoes: ["Cientista da Computação"] },
                { text: "Ciência de Dados", profissoes: ["Estatístico"] },
                { text: "Física de Plasma", profissoes: ["Físico"] },
                { text: "Materiais Inteligentes", profissoes: ["Químico"] },
                { text: "Teoria do Caos", profissoes: ["Matemático"] }
            ]
        },
        {
            text: "Em um centro de pesquisa, você preferiria trabalhar com:",
            options: [
                { text: "Robótica Avançada", profissoes: ["Cientista da Computação"] },
                { text: "Modelagem Estatística", profissoes: ["Estatístico"] },
                { text: "Astrofísica", profissoes: ["Físico"] },
                { text: "Química Computacional", profissoes: ["Químico"] },
                { text: "Topologia", profissoes: ["Matemático"] }
            ]
        },
        {
            text: "Na área acadêmica, você gostaria de estudar:",
            options: [
                { text: "Sistemas Distribuídos", profissoes: ["Cientista da Computação"] },
                { text: "Amostragem e Probabilidade", profissoes: ["Estatístico"] },
                { text: "Teoria da Relatividade", profissoes: ["Físico"] },
                { text: "Química Analítica", profissoes: ["Químico"] },
                { text: "Teoria dos Grafos", profissoes: ["Matemático"] }
            ]
        },
        {
            text: "Em um projeto industrial, você preferiria:",
            options: [
                { text: "Automação de Processos", profissoes: ["Cientista da Computação"] },
                { text: "Controle de Qualidade", profissoes: ["Estatístico"] },
                { text: "Física Aplicada", profissoes: ["Físico"] },
                { text: "Processos Químicos", profissoes: ["Químico"] },
                { text: "Modelagem Matemática", profissoes: ["Matemático"] }
            ]
        },
        {
            text: "Na área de pesquisa teórica, você escolheria:",
            options: [
                { text: "Complexidade Computacional", profissoes: ["Cientista da Computação"] },
                { text: "Teoria da Probabilidade", profissoes: ["Estatístico"] },
                { text: "Cosmologia", profissoes: ["Físico"] },
                { text: "Química Teórica", profissoes: ["Químico"] },
                { text: "Teoria dos Números", profissoes: ["Matemático"] }
            ]
        },
        {
            text: "Em um laboratório moderno, você preferiria:",
            options: [
                { text: "Desenvolver Hardware", profissoes: ["Cientista da Computação"] },
                { text: "Análise Multivariada", profissoes: ["Estatístico"] },
                { text: "Física Experimental", profissoes: ["Físico"] },
                { text: "Síntese Química", profissoes: ["Químico"] },
                { text: "Computação Numérica", profissoes: ["Matemático"] }
            ]
        },
        {
            text: "Na pesquisa aplicada, você gostaria de trabalhar com:",
            options: [
                { text: "Internet das Coisas", profissoes: ["Cientista da Computação"] },
                { text: "Bioestatística", profissoes: ["Estatístico"] },
                { text: "Física Médica", profissoes: ["Físico"] },
                { text: "Química Farmacêutica", profissoes: ["Químico"] },
                { text: "Matemática Financeira", profissoes: ["Matemático"] }
            ]
        },
        {
            text: "Em projetos de inovação, você preferiria:",
            options: [
                { text: "Computação Quântica", profissoes: ["Cientista da Computação"] },
                { text: "Machine Learning", profissoes: ["Estatístico"] },
                { text: "Novos Materiais", profissoes: ["Físico"] },
                { text: "Nanotecnologia", profissoes: ["Químico"] },
                { text: "Criptografia", profissoes: ["Matemático"] }
            ]
        },
        {
            text: "Na área de ensino, você gostaria de lecionar:",
            options: [
                { text: "Programação Avançada", profissoes: ["Cientista da Computação"] },
                { text: "Métodos Estatísticos", profissoes: ["Estatístico"] },
                { text: "Física Moderna", profissoes: ["Físico"] },
                { text: "Química Estrutural", profissoes: ["Químico"] },
                { text: "Cálculo Avançado", profissoes: ["Matemático"] }
            ]
        },
        {
            text: "Em projetos interdisciplinares, você preferiria focar em:",
            options: [
                { text: "Computação Cognitiva", profissoes: ["Cientista da Computação"] },
                { text: "Análise de Dados Sociais", profissoes: ["Estatístico"] },
                { text: "Biofísica", profissoes: ["Físico"] },
                { text: "Bioquímica", profissoes: ["Químico"] },
                { text: "Biomatemática", profissoes: ["Matemático"] }
            ]
        },
        {
            text: "Na área de pesquisa avançada, você escolheria:",
            options: [
                { text: "Segurança Cibernética", profissoes: ["Cientista da Computação"] },
                { text: "Econometria", profissoes: ["Estatístico"] },
                { text: "Física Nuclear", profissoes: ["Físico"] },
                { text: "Química Industrial", profissoes: ["Químico"] },
                { text: "Lógica Matemática", profissoes: ["Matemático"] }
            ]
        }
    ],
    humanas: [
        {
            text: "Em uma pesquisa histórica, você preferiria estudar:",
            options: [
                { text: "Correntes filosóficas", profissoes: ["Filósofo"] },
                { text: "Civilizações antigas", profissoes: ["Historiador"] },
                { text: "Culturas indígenas", profissoes: ["Antropólogo"] },
                { text: "Geografia histórica", profissoes: ["Geógrafo"] },
                { text: "Religiões comparadas", profissoes: ["Teólogo"] }
            ]
        },
        {
            text: "Qual aspecto do pensamento humano mais te fascina?",
            options: [
                { text: "Lógica e epistemologia", profissoes: ["Filósofo"] },
                { text: "Evolução das sociedades", profissoes: ["Historiador"] },
                { text: "Diversidade cultural", profissoes: ["Antropólogo"] },
                { text: "Organização espacial", profissoes: ["Geógrafo"] },
                { text: "Espiritualidade humana", profissoes: ["Teólogo"] }
            ]
        },
        {
            text: "Em um projeto de pesquisa social, você escolheria:",
            options: [
                { text: "Analisar sistemas de pensamento", profissoes: ["Filósofo"] },
                { text: "Pesquisar documentos históricos", profissoes: ["Historiador"] },
                { text: "Estudar grupos étnicos", profissoes: ["Antropólogo"] },
                { text: "Mapear ocupações urbanas", profissoes: ["Geógrafo"] },
                { text: "Investigar práticas religiosas", profissoes: ["Teólogo"] }
            ]
        },
        {
            text: "Na preservação do patrimônio cultural, você preferiria:",
            options: [
                { text: "Catalogar manuscritos filosóficos", profissoes: ["Filósofo"] },
                { text: "Restaurar documentos históricos", profissoes: ["Historiador"] },
                { text: "Documentar tradições culturais", profissoes: ["Antropólogo"] },
                { text: "Preservar mapas antigos", profissoes: ["Geógrafo"] },
                { text: "Conservar textos sagrados", profissoes: ["Teólogo"] }
            ]
        },
        {
            text: "Em um centro de pesquisa, você gostaria de:",
            options: [
                { text: "Desenvolver teorias sociais", profissoes: ["Filósofo"] },
                { text: "Analisar fontes históricas", profissoes: ["Historiador"] },
                { text: "Realizar trabalho de campo", profissoes: ["Antropólogo"] },
                { text: "Estudar mudanças territoriais", profissoes: ["Geógrafo"] },
                { text: "Pesquisar textos teológicos", profissoes: ["Teólogo"] }
            ]
        },
        {
            text: "Em um debate acadêmico, você prefere discutir:",
            options: [
                { text: "Questões existenciais", profissoes: ["Filósofo"] },
                { text: "Processos históricos", profissoes: ["Historiador"] },
                { text: "Diversidade humana", profissoes: ["Antropólogo"] },
                { text: "Dinâmicas territoriais", profissoes: ["Geógrafo"] },
                { text: "Questões espirituais", profissoes: ["Teólogo"] }
            ]
        },
        {
            text: "Na análise de conflitos sociais, você focaria em:",
            options: [
                { text: "Dilemas éticos", profissoes: ["Filósofo"] },
                { text: "Contexto histórico", profissoes: ["Historiador"] },
                { text: "Aspectos culturais", profissoes: ["Antropólogo"] },
                { text: "Disputas territoriais", profissoes: ["Geógrafo"] },
                { text: "Dimensão religiosa", profissoes: ["Teólogo"] }
            ]
        },
        {
            text: "Em um projeto educacional, você preferiria ensinar sobre:",
            options: [
                { text: "Pensamento crítico", profissoes: ["Filósofo"] },
                { text: "Eventos históricos", profissoes: ["Historiador"] },
                { text: "Diversidade cultural", profissoes: ["Antropólogo"] },
                { text: "Geopolítica", profissoes: ["Geógrafo"] },
                { text: "Estudos religiosos", profissoes: ["Teólogo"] }
            ]
        },
        {
            text: "Na pesquisa de campo, você se interessaria mais por:",
            options: [
                { text: "Entrevistar pensadores", profissoes: ["Filósofo"] },
                { text: "Explorar sítios históricos", profissoes: ["Historiador"] },
                { text: "Observar rituais culturais", profissoes: ["Antropólogo"] },
                { text: "Analisar paisagens", profissoes: ["Geógrafo"] },
                { text: "Visitar locais sagrados", profissoes: ["Teólogo"] }
            ]
        },
        {
            text: "Em uma publicação acadêmica, você escreveria sobre:",
            options: [
                { text: "Teorias filosóficas", profissoes: ["Filósofo"] },
                { text: "Narrativas históricas", profissoes: ["Historiador"] },
                { text: "Estudos etnográficos", profissoes: ["Antropólogo"] },
                { text: "Análises territoriais", profissoes: ["Geógrafo"] },
                { text: "Interpretações teológicas", profissoes: ["Teólogo"] }
            ]
        },
        {
            text: "Na análise de movimentos sociais, você focaria em:",
            options: [
                { text: "Ideologias e princípios", profissoes: ["Filósofo"] },
                { text: "Desenvolvimento histórico", profissoes: ["Historiador"] },
                { text: "Impactos culturais", profissoes: ["Antropólogo"] },
                { text: "Distribuição espacial", profissoes: ["Geógrafo"] },
                { text: "Aspectos religiosos", profissoes: ["Teólogo"] }
            ]
        },
        {
            text: "Em um projeto de extensão universitária, você preferiria:",
            options: [
                { text: "Coordenar grupos de discussão", profissoes: ["Filósofo"] },
                { text: "Organizar acervos históricos", profissoes: ["Historiador"] },
                { text: "Realizar estudos comunitários", profissoes: ["Antropólogo"] },
                { text: "Desenvolver mapas sociais", profissoes: ["Geógrafo"] },
                { text: "Promover diálogo inter-religioso", profissoes: ["Teólogo"] }
            ]
        },
        {
            text: "Na análise de fenômenos sociais, você priorizaria:",
            options: [
                { text: "Questões conceituais", profissoes: ["Filósofo"] },
                { text: "Perspectiva temporal", profissoes: ["Historiador"] },
                { text: "Práticas culturais", profissoes: ["Antropólogo"] },
                { text: "Aspectos regionais", profissoes: ["Geógrafo"] },
                { text: "Dimensão espiritual", profissoes: ["Teólogo"] }
            ]
        },
        {
            text: "Em uma pesquisa sobre mudanças sociais, você estudaria:",
            options: [
                { text: "Transformações no pensamento", profissoes: ["Filósofo"] },
                { text: "Processos históricos", profissoes: ["Historiador"] },
                { text: "Adaptações culturais", profissoes: ["Antropólogo"] },
                { text: "Reorganização espacial", profissoes: ["Geógrafo"] },
                { text: "Evolução das crenças", profissoes: ["Teólogo"] }
            ]
        },
        {
            text: "Na organização de um evento acadêmico, você focaria em:",
            options: [
                { text: "Debates filosóficos", profissoes: ["Filósofo"] },
                { text: "Simpósios históricos", profissoes: ["Historiador"] },
                { text: "Encontros antropológicos", profissoes: ["Antropólogo"] },
                { text: "Conferências geográficas", profissoes: ["Geógrafo"] },
                { text: "Congressos teológicos", profissoes: ["Teólogo"] }
            ]
        },
        {
            text: "Em um projeto de documentário, você abordaria:",
            options: [
                { text: "Correntes de pensamento", profissoes: ["Filósofo"] },
                { text: "Memória social", profissoes: ["Historiador"] },
                { text: "Manifestações culturais", profissoes: ["Antropólogo"] },
                { text: "Transformações urbanas", profissoes: ["Geógrafo"] },
                { text: "Expressões de fé", profissoes: ["Teólogo"] }
            ]
        },
        {
            text: "Na análise de problemas contemporâneos, você enfatizaria:",
            options: [
                { text: "Questões éticas", profissoes: ["Filósofo"] },
                { text: "Raízes históricas", profissoes: ["Historiador"] },
                { text: "Aspectos socioculturais", profissoes: ["Antropólogo"] },
                { text: "Fatores geopolíticos", profissoes: ["Geógrafo"] },
                { text: "Dimensões espirituais", profissoes: ["Teólogo"] }
            ]
        },
        {
            text: "Em um projeto internacional, você preferiria estudar:",
            options: [
                { text: "Sistemas filosóficos", profissoes: ["Filósofo"] },
                { text: "Relações históricas", profissoes: ["Historiador"] },
                { text: "Intercâmbios culturais", profissoes: ["Antropólogo"] },
                { text: "Fronteiras e territórios", profissoes: ["Geógrafo"] },
                { text: "Diálogos religiosos", profissoes: ["Teólogo"] }
            ]
        },
        {
            text: "Na orientação de pesquisas, você preferiria focar em:",
            options: [
                { text: "Metodologia filosófica", profissoes: ["Filósofo"] },
                { text: "Pesquisa historiográfica", profissoes: ["Historiador"] },
                { text: "Etnografia", profissoes: ["Antropólogo"] },
                { text: "Análise espacial", profissoes: ["Geógrafo"] },
                { text: "Hermenêutica religiosa", profissoes: ["Teólogo"] }
            ]
        },
        {
            text: "Em um projeto de preservação cultural, você escolheria:",
            options: [
                { text: "Documentar ideias filosóficas", profissoes: ["Filósofo"] },
                { text: "Preservar registros históricos", profissoes: ["Historiador"] },
                { text: "Registrar práticas culturais", profissoes: ["Antropólogo"] },
                { text: "Mapear territórios tradicionais", profissoes: ["Geógrafo"] },
                { text: "Conservar tradições religiosas", profissoes: ["Teólogo"] }
            ]
        }
    ],
    saude: [
        {
            text: "Em um hospital, qual área mais te atrai?",
            options: [
                { text: "Diagnóstico e tratamento", profissoes: ["Médico"] },
                { text: "Assistência direta ao paciente", profissoes: ["Enfermeiro"] },
                { text: "Reabilitação física", profissoes: ["Fisioterapeuta"] },
                { text: "Orientação nutricional", profissoes: ["Nutricionista"] },
                { text: "Desenvolvimento de medicamentos", profissoes: ["Farmacêutico"] }
            ]
        },
        {
            text: "Em uma equipe multidisciplinar, você preferiria:",
            options: [
                { text: "Coordenar tratamentos médicos", profissoes: ["Médico"] },
                { text: "Realizar cuidados de enfermagem", profissoes: ["Enfermeiro"] },
                { text: "Desenvolver planos terapêuticos", profissoes: ["Fisioterapeuta"] },
                { text: "Planejar dietas específicas", profissoes: ["Nutricionista"] },
                { text: "Gerenciar medicações", profissoes: ["Farmacêutico"] }
            ]
        },
        {
            text: "Em um centro de pesquisa, você escolheria estudar:",
            options: [
                { text: "Novos tratamentos médicos", profissoes: ["Médico"] },
                { text: "Protocolos de cuidados", profissoes: ["Enfermeiro"] },
                { text: "Técnicas de reabilitação", profissoes: ["Fisioterapeuta"] },
                { text: "Impacto da alimentação", profissoes: ["Nutricionista"] },
                { text: "Desenvolvimento farmacêutico", profissoes: ["Farmacêutico"] }
            ]
        },
        {
            text: "Na prevenção de doenças, você preferiria focar em:",
            options: [
                { text: "Diagnóstico precoce", profissoes: ["Médico"] },
                { text: "Educação em saúde", profissoes: ["Enfermeiro"] },
                { text: "Prevenção de lesões", profissoes: ["Fisioterapeuta"] },
                { text: "Alimentação saudável", profissoes: ["Nutricionista"] },
                { text: "Uso racional de medicamentos", profissoes: ["Farmacêutico"] }
            ]
        },
        {
            text: "Em atendimento ambulatorial, você gostaria de:",
            options: [
                { text: "Realizar consultas médicas", profissoes: ["Médico"] },
                { text: "Fazer procedimentos de enfermagem", profissoes: ["Enfermeiro"] },
                { text: "Aplicar terapias físicas", profissoes: ["Fisioterapeuta"] },
                { text: "Fazer avaliação nutricional", profissoes: ["Nutricionista"] },
                { text: "Orientar sobre medicações", profissoes: ["Farmacêutico"] }
            ]
        },
        {
            text: "Em um projeto de saúde pública, você preferiria:",
            options: [
                { text: "Coordenar programas de saúde", profissoes: ["Médico"] },
                { text: "Realizar atendimento domiciliar", profissoes: ["Enfermeiro"] },
                { text: "Desenvolver projetos de reabilitação", profissoes: ["Fisioterapeuta"] },
                { text: "Planejar alimentação coletiva", profissoes: ["Nutricionista"] },
                { text: "Gerenciar assistência farmacêutica", profissoes: ["Farmacêutico"] }
            ]
        },
        {
            text: "Na área de pesquisa clínica, você se interessaria por:",
            options: [
                { text: "Estudos de novos tratamentos", profissoes: ["Médico"] },
                { text: "Práticas de cuidado", profissoes: ["Enfermeiro"] },
                { text: "Protocolos de reabilitação", profissoes: ["Fisioterapeuta"] },
                { text: "Estudos nutricionais", profissoes: ["Nutricionista"] },
                { text: "Desenvolvimento de fármacos", profissoes: ["Farmacêutico"] }
            ]
        },
        {
            text: "Em um centro de reabilitação, você preferiria:",
            options: [
                { text: "Avaliar progressão clínica", profissoes: ["Médico"] },
                { text: "Monitorar cuidados contínuos", profissoes: ["Enfermeiro"] },
                { text: "Realizar terapias físicas", profissoes: ["Fisioterapeuta"] },
                { text: "Adequar dietas terapêuticas", profissoes: ["Nutricionista"] },
                { text: "Ajustar medicações", profissoes: ["Farmacêutico"] }
            ]
        },
        {
            text: "Na área de gestão em saúde, você escolheria:",
            options: [
                { text: "Direção clínica", profissoes: ["Médico"] },
                { text: "Coordenação de enfermagem", profissoes: ["Enfermeiro"] },
                { text: "Gestão de reabilitação", profissoes: ["Fisioterapeuta"] },
                { text: "Serviço de nutrição", profissoes: ["Nutricionista"] },
                { text: "Farmácia hospitalar", profissoes: ["Farmacêutico"] }
            ]
        },
        {
            text: "Em emergências, você se sentiria mais preparado para:",
            options: [
                { text: "Atendimento emergencial", profissoes: ["Médico"] },
                { text: "Triagem e primeiros socorros", profissoes: ["Enfermeiro"] },
                { text: "Mobilização segura", profissoes: ["Fisioterapeuta"] },
                { text: "Suporte nutricional", profissoes: ["Nutricionista"] },
                { text: "Dispensação emergencial", profissoes: ["Farmacêutico"] }
            ]
        },
        {
            text: "Na educação em saúde, você preferiria ensinar sobre:",
            options: [
                { text: "Prevenção de doenças", profissoes: ["Médico"] },
                { text: "Autocuidado", profissoes: ["Enfermeiro"] },
                { text: "Exercícios preventivos", profissoes: ["Fisioterapeuta"] },
                { text: "Hábitos alimentares", profissoes: ["Nutricionista"] },
                { text: "Uso correto de medicamentos", profissoes: ["Farmacêutico"] }
            ]
        },
        {
            text: "Em uma clínica especializada, você gostaria de:",
            options: [
                { text: "Realizar diagnósticos", profissoes: ["Médico"] },
                { text: "Acompanhar evolução", profissoes: ["Enfermeiro"] },
                { text: "Executar reabilitação", profissoes: ["Fisioterapeuta"] },
                { text: "Prescrever dietas", profissoes: ["Nutricionista"] },
                { text: "Monitorar tratamentos", profissoes: ["Farmacêutico"] }
            ]
        },
        {
            text: "Na promoção da saúde, você preferiria trabalhar com:",
            options: [
                { text: "Medicina preventiva", profissoes: ["Médico"] },
                { text: "Programas de vacinação", profissoes: ["Enfermeiro"] },
                { text: "Ergonomia e postura", profissoes: ["Fisioterapeuta"] },
                { text: "Educação alimentar", profissoes: ["Nutricionista"] },
                { text: "Orientação farmacêutica", profissoes: ["Farmacêutico"] }
            ]
        },
        {
            text: "Em um hospital-escola, você se interessaria em:",
            options: [
                { text: "Ensinar práctica clínica", profissoes: ["Médico"] },
                { text: "Supervisionar estágios", profissoes: ["Enfermeiro"] },
                { text: "Demonstrar técnicas", profissoes: ["Fisioterapeuta"] },
                { text: "Orientar dietoterapia", profissoes: ["Nutricionista"] },
                { text: "Ensinar farmacologia", profissoes: ["Farmacêutico"] }
            ]
        },
        {
            text: "Na reabilitação de pacientes, você preferiria:",
            options: [
                { text: "Avaliar progressão", profissoes: ["Médico"] },
                { text: "Realizar cuidados diários", profissoes: ["Enfermeiro"] },
                { text: "Conduzir exercícios", profissoes: ["Fisioterapeuta"] },
                { text: "Adaptar alimentação", profissoes: ["Nutricionista"] },
                { text: "Ajustar medicações", profissoes: ["Farmacêutico"] }
            ]
        },
        {
            text: "Em atendimento domiciliar, você escolheria:",
            options: [
                { text: "Visitas médicas", profissoes: ["Médico"] },
                { text: "Cuidados continuados", profissoes: ["Enfermeiro"] },
                { text: "Reabilitação domiciliar", profissoes: ["Fisioterapeuta"] },
                { text: "Orientação nutricional", profissoes: ["Nutricionista"] },
                { text: "Gestão de medicamentos", profissoes: ["Farmacêutico"] }
            ]
        },
        {
            text: "Na área acadêmica, você gostaria de pesquisar:",
            options: [
                { text: "Novos tratamentos", profissoes: ["Médico"] },
                { text: "Práticas de enfermagem", profissoes: ["Enfermeiro"] },
                { text: "Métodos terapêuticos", profissoes: ["Fisioterapeuta"] },
                { text: "Metabolismo e nutrição", profissoes: ["Nutricionista"] },
                { text: "Desenvolvimento de drogas", profissoes: ["Farmacêutico"] }
            ]
        },
        {
            text: "Em um centro esportivo, você preferiria:",
            options: [
                { text: "Medicina esportiva", profissoes: ["Médico"] },
                { text: "Atendimento emergencial", profissoes: ["Enfermeiro"] },
                { text: "Reabilitação física", profissoes: ["Fisioterapeuta"] },
                { text: "Nutrição esportiva", profissoes: ["Nutricionista"] },
                { text: "Suplementação", profissoes: ["Farmacêutico"] }
            ]
        },
        {
            text: "Na saúde mental, você se interessaria por:",
            options: [
                { text: "Diagnóstico psiquiátrico", profissoes: ["Médico"] },
                { text: "Cuidados terapêuticos", profissoes: ["Enfermeiro"] },
                { text: "Terapias corporais", profissoes: ["Fisioterapeuta"] },
                { text: "Nutrição comportamental", profissoes: ["Nutricionista"] },
                { text: "Farmacoterapia", profissoes: ["Farmacêutico"] }
            ]
        },
        {
            text: "Em cuidados paliativos, você preferiria:",
            options: [
                { text: "Manejo de sintomas", profissoes: ["Médico"] },
                { text: "Cuidados de conforto", profissoes: ["Enfermeiro"] },
                { text: "Mobilização e conforto", profissoes: ["Fisioterapeuta"] },
                { text: "Adequação alimentar", profissoes: ["Nutricionista"] },
                { text: "Controle da dor", profissoes: ["Farmacêutico"] }
            ]
        }
    ],
    sociais: [
        {
            text: "Em uma consultoria empresarial, você preferiria:",
            options: [
                { text: "Desenvolver estratégias de gestão", profissoes: ["Administrador"] },
                { text: "Analisar indicadores econômicos", profissoes: ["Economista"] },
                { text: "Assessorar questões legais", profissoes: ["Advogado"] },
                { text: "Auditar processos contábeis", profissoes: ["Contador"] },
                { text: "Gerenciar comunicação", profissoes: ["Jornalista"] }
            ]
        },
        {
            text: "Em um projeto de desenvolvimento social, você escolheria:",
            options: [
                { text: "Gestão de projetos sociais", profissoes: ["Administrador"] },
                { text: "Análise de impacto econômico", profissoes: ["Economista"] },
                { text: "Defesa de direitos", profissoes: ["Advogado"] },
                { text: "Controle de recursos", profissoes: ["Contador"] },
                { text: "Comunicação social", profissoes: ["Jornalista"] }
            ]
        },
        {
            text: "Na área corporativa, você se interessaria mais por:",
            options: [
                { text: "Gestão estratégica", profissoes: ["Administrador"] },
                { text: "Análise de mercado", profissoes: ["Economista"] },
                { text: "Compliance legal", profissoes: ["Advogado"] },
                { text: "Gestão financeira", profissoes: ["Contador"] },
                { text: "Assessoria de imprensa", profissoes: ["Jornalista"] }
            ]
        },
        {
            text: "Em um projeto de pesquisa, você preferiria estudar:",
            options: [
                { text: "Modelos de gestão", profissoes: ["Administrador"] },
                { text: "Indicadores econômicos", profissoes: ["Economista"] },
                { text: "Legislação aplicada", profissoes: ["Advogado"] },
                { text: "Sistemas contábeis", profissoes: ["Contador"] },
                { text: "Mídia e sociedade", profissoes: ["Jornalista"] }
            ]
        },
        {
            text: "Em uma organização internacional, você gostaria de:",
            options: [
                { text: "Coordenar operações", profissoes: ["Administrador"] },
                { text: "Analisar cenários globais", profissoes: ["Economista"] },
                { text: "Mediar acordos", profissoes: ["Advogado"] },
                { text: "Gerenciar finanças", profissoes: ["Contador"] },
                { text: "Coordenar comunicação", profissoes: ["Jornalista"] }
            ]
        },
        {
            text: "Na área pública, você preferiria trabalhar com:",
            options: [
                { text: "Gestão de políticas públicas", profissoes: ["Administrador"] },
                { text: "Planejamento econômico", profissoes: ["Economista"] },
                { text: "Direito público", profissoes: ["Advogado"] },
                { text: "Contabilidade governamental", profissoes: ["Contador"] },
                { text: "Comunicação institucional", profissoes: ["Jornalista"] }
            ]
        },
        {
            text: "Em projetos de inovação, você escolheria:",
            options: [
                { text: "Gestão da inovação", profissoes: ["Administrador"] },
                { text: "Viabilidade econômica", profissoes: ["Economista"] },
                { text: "Propriedade intelectual", profissoes: ["Advogado"] },
                { text: "Controle de investimentos", profissoes: ["Contador"] },
                { text: "Divulgação científica", profissoes: ["Jornalista"] }
            ]
        },
        {
            text: "Na área acadêmica, você gostaria de pesquisar:",
            options: [
                { text: "Teorias organizacionais", profissoes: ["Administrador"] },
                { text: "Economia comportamental", profissoes: ["Economista"] },
                { text: "Direito comparado", profissoes: ["Advogado"] },
                { text: "Contabilidade internacional", profissoes: ["Contador"] },
                { text: "Jornalismo investigativo", profissoes: ["Jornalista"] }
            ]
        },
        {
            text: "Em consultoria especializada, você preferiria:",
            options: [
                { text: "Reestruturação organizacional", profissoes: ["Administrador"] },
                { text: "Análise de investimentos", profissoes: ["Economista"] },
                { text: "Consultoria jurídica", profissoes: ["Advogado"] },
                { text: "Auditoria contábil", profissoes: ["Contador"] },
                { text: "Gestão de crise", profissoes: ["Jornalista"] }
            ]
        },
        {
            text: "Em projetos sociais, você focaria em:",
            options: [
                { text: "Gestão de ONGs", profissoes: ["Administrador"] },
                { text: "Desenvolvimento social", profissoes: ["Economista"] },
                { text: "Direitos humanos", profissoes: ["Advogado"] },
                { text: "Prestação de contas", profissoes: ["Contador"] },
                { text: "Comunicação social", profissoes: ["Jornalista"] }
            ]
        },
        {
            text: "Na era digital, você se interessaria por:",
            options: [
                { text: "Gestão de startups", profissoes: ["Administrador"] },
                { text: "Economia digital", profissoes: ["Economista"] },
                { text: "Direito digital", profissoes: ["Advogado"] },
                { text: "Contabilidade digital", profissoes: ["Contador"] },
                { text: "Jornalismo digital", profissoes: ["Jornalista"] }
            ]
        },
        {
            text: "Em gestão de crises, você preferiria:",
            options: [
                { text: "Planejamento estratégico", profissoes: ["Administrador"] },
                { text: "Análise de riscos", profissoes: ["Economista"] },
                { text: "Mediação de conflitos", profissoes: ["Advogado"] },
                { text: "Reestruturação financeira", profissoes: ["Contador"] },
                { text: "Comunicação de crise", profissoes: ["Jornalista"] }
            ]
        },
        {
            text: "Na área de sustentabilidade, você escolheria:",
            options: [
                { text: "Gestão sustentável", profissoes: ["Administrador"] },
                { text: "Economia verde", profissoes: ["Economista"] },
                { text: "Direito ambiental", profissoes: ["Advogado"] },
                { text: "Contabilidade ambiental", profissoes: ["Contador"] },
                { text: "Jornalismo ambiental", profissoes: ["Jornalista"] }
            ]
        },
        {
            text: "Em projetos internacionais, você preferiria:",
            options: [
                { text: "Gestão multicultural", profissoes: ["Administrador"] },
                { text: "Economia internacional", profissoes: ["Economista"] },
                { text: "Direito internacional", profissoes: ["Advogado"] },
                { text: "Contabilidade global", profissoes: ["Contador"] },
                { text: "Correspondência internacional", profissoes: ["Jornalista"] }
            ]
        },
        {
            text: "Na área educacional, você gostaria de:",
            options: [
                { text: "Gestão educacional", profissoes: ["Administrador"] },
                { text: "Economia da educação", profissoes: ["Economista"] },
                { text: "Direito educacional", profissoes: ["Advogado"] },
                { text: "Contabilidade escolar", profissoes: ["Contador"] },
                { text: "Jornalismo educativo", profissoes: ["Jornalista"] }
            ]
        },
        {
            text: "Em gestão de pessoas, você preferiria:",
            options: [
                { text: "Desenvolvimento organizacional", profissoes: ["Administrador"] },
                { text: "Economia do trabalho", profissoes: ["Economista"] },
                { text: "Direito trabalhista", profissoes: ["Advogado"] },
                { text: "Departamento pessoal", profissoes: ["Contador"] },
                { text: "Comunicação interna", profissoes: ["Jornalista"] }
            ]
        },
        {
            text: "Na área de planejamento, você escolheria:",
            options: [
                { text: "Planejamento estratégico", profissoes: ["Administrador"] },
                { text: "Projeções econômicas", profissoes: ["Economista"] },
                { text: "Planejamento jurídico", profissoes: ["Advogado"] },
                { text: "Planejamento tributário", profissoes: ["Contador"] },
                { text: "Planejamento editorial", profissoes: ["Jornalista"] }
            ]
        },
        {
            text: "Em análise de mercado, você preferiria:",
            options: [
                { text: "Gestão de negócios", profissoes: ["Administrador"] },
                { text: "Análise econômica", profissoes: ["Economista"] },
                { text: "Regulação de mercado", profissoes: ["Advogado"] },
                { text: "Análise financeira", profissoes: ["Contador"] },
                { text: "Jornalismo econômico", profissoes: ["Jornalista"] }
            ]
        },
        {
            text: "Na área de tecnologia, você se interessaria por:",
            options: [
                { text: "Gestão de inovação", profissoes: ["Administrador"] },
                { text: "Economia da tecnologia", profissoes: ["Economista"] },
                { text: "Direito digital", profissoes: ["Advogado"] },
                { text: "Sistemas de informação", profissoes: ["Contador"] },
                { text: "Tecnologia da informação", profissoes: ["Jornalista"] }
            ]
        },
        {
            text: "Em responsabilidade social, você focaria em:",
            options: [
                { text: "Gestão de impacto social", profissoes: ["Administrador"] },
                { text: "Economia social", profissoes: ["Economista"] },
                { text: "Direitos coletivos", profissoes: ["Advogado"] },
                { text: "Balanço social", profissoes: ["Contador"] },
                { text: "Jornalismo social", profissoes: ["Jornalista"] }
            ]
        }
    ],
    letras: [
        {
            text: "Em um projeto cultural, você preferiria:",
            options: [
                { text: "Analisar estruturas linguísticas", profissoes: ["Linguista"] },
                { text: "Traduzir obras literárias", profissoes: ["Tradutor"] },
                { text: "Criar textos autorais", profissoes: ["Escritor"] },
                { text: "Desenvolver projetos artísticos", profissoes: ["Artista Visual"] },
                { text: "Compor peças musicais", profissoes: ["Músico"] }
            ]
        },
        {
            text: "Na área acadêmica, você se interessaria mais por:",
            options: [
                { text: "Estudos linguísticos", profissoes: ["Linguista"] },
                { text: "Estudos de tradução", profissoes: ["Tradutor"] },
                { text: "Teoria literária", profissoes: ["Escritor"] },
                { text: "História da arte", profissoes: ["Artista Visual"] },
                { text: "Teoria musical", profissoes: ["Músico"] }
            ]
        },
        {
            text: "Em um centro cultural, você escolheria trabalhar com:",
            options: [
                { text: "Pesquisa linguística", profissoes: ["Linguista"] },
                { text: "Mediação cultural", profissoes: ["Tradutor"] },
                { text: "Oficinas de escrita", profissoes: ["Escritor"] },
                { text: "Curadoria de exposições", profissoes: ["Artista Visual"] },
                { text: "Produção musical", profissoes: ["Músico"] }
            ]
        },
        {
            text: "Qual aspecto da comunicação mais te fascina?",
            options: [
                { text: "Estrutura da linguagem", profissoes: ["Linguista"] },
                { text: "Comunicação intercultural", profissoes: ["Tradutor"] },
                { text: "Narrativas criativas", profissoes: ["Escritor"] },
                { text: "Expressão visual", profissoes: ["Artista Visual"] },
                { text: "Composição musical", profissoes: ["Músico"] }
            ]
        },
        {
            text: "Em um projeto educacional, você preferiria:",
            options: [
                { text: "Pesquisar aquisição de linguagem", profissoes: ["Linguista"] },
                { text: "Ensinar idiomas", profissoes: ["Tradutor"] },
                { text: "Coordenar oficinas literárias", profissoes: ["Escritor"] },
                { text: "Ministrar aulas de arte", profissoes: ["Artista Visual"] },
                { text: "Dar aulas de música", profissoes: ["Músico"] }
            ]
        },
        {
            text: "Na preservação cultural, você focaria em:",
            options: [
                { text: "Documentação linguística", profissoes: ["Linguista"] },
                { text: "Preservação de significados", profissoes: ["Tradutor"] },
                { text: "Memória literária", profissoes: ["Escritor"] },
                { text: "Restauração de obras", profissoes: ["Artista Visual"] },
                { text: "Patrimônio musical", profissoes: ["Músico"] }
            ]
        },
        {
            text: "Em um festival cultural, você gostaria de:",
            options: [
                { text: "Analisar variações linguísticas", profissoes: ["Linguista"] },
                { text: "Facilitar diálogos interculturais", profissoes: ["Tradutor"] },
                { text: "Realizar saraus literários", profissoes: ["Escritor"] },
                { text: "Expor trabalhos artísticos", profissoes: ["Artista Visual"] },
                { text: "Apresentar composições", profissoes: ["Músico"] }
            ]
        },
        {
            text: "Na área digital, você se interessaria por:",
            options: [
                { text: "Processamento de linguagem", profissoes: ["Linguista"] },
                { text: "Tecnologias de tradução", profissoes: ["Tradutor"] },
                { text: "Publicação digital", profissoes: ["Escritor"] },
                { text: "Arte digital", profissoes: ["Artista Visual"] },
                { text: "Produção musical digital", profissoes: ["Músico"] }
            ]
        },
        {
            text: "Em um projeto de pesquisa, você escolheria estudar:",
            options: [
                { text: "Evolução das línguas", profissoes: ["Linguista"] },
                { text: "Teoria da tradução", profissoes: ["Tradutor"] },
                { text: "Gêneros literários", profissoes: ["Escritor"] },
                { text: "Movimentos artísticos", profissoes: ["Artista Visual"] },
                { text: "Etnomusicologia", profissoes: ["Músico"] }
            ]
        },
        {
            text: "Na divulgação cultural, você preferiria:",
            options: [
                { text: "Documentar línguas raras", profissoes: ["Linguista"] },
                { text: "Traduzir conteúdo cultural", profissoes: ["Tradutor"] },
                { text: "Escrever textos criativos", profissoes: ["Escritor"] },
                { text: "Criar identidade visual", profissoes: ["Artista Visual"] },
                { text: "Compor trilhas sonoras", profissoes: ["Músico"] }
            ]
        },
        {
            text: "Em um projeto internacional, você gostaria de:",
            options: [
                { text: "Pesquisar línguas estrangeiras", profissoes: ["Linguista"] },
                { text: "Atuar como intérprete", profissoes: ["Tradutor"] },
                { text: "Participar de feiras literárias", profissoes: ["Escritor"] },
                { text: "Expor em galerias", profissoes: ["Artista Visual"] },
                { text: "Fazer turnês musicais", profissoes: ["Músico"] }
            ]
        },
        {
            text: "Na formação profissional, você preferiria:",
            options: [
                { text: "Estudar fonética e gramática", profissoes: ["Linguista"] },
                { text: "Aprender novos idiomas", profissoes: ["Tradutor"] },
                { text: "Desenvolver técnicas narrativas", profissoes: ["Escritor"] },
                { text: "Explorar técnicas artísticas", profissoes: ["Artista Visual"] },
                { text: "Estudar teoria musical", profissoes: ["Músico"] }
            ]
        },
        {
            text: "Em um projeto criativo, você optaria por:",
            options: [
                { text: "Analisar padrões linguísticos", profissoes: ["Linguista"] },
                { text: "Adaptar obras estrangeiras", profissoes: ["Tradutor"] },
                { text: "Criar obras originais", profissoes: ["Escritor"] },
                { text: "Desenvolver instalações", profissoes: ["Artista Visual"] },
                { text: "Criar arranjos musicais", profissoes: ["Músico"] }
            ]
        },
        {
            text: "Na área experimental, você se interessaria por:",
            options: [
                { text: "Novas formas linguísticas", profissoes: ["Linguista"] },
                { text: "Tradução experimental", profissoes: ["Tradutor"] },
                { text: "Literatura experimental", profissoes: ["Escritor"] },
                { text: "Arte contemporânea", profissoes: ["Artista Visual"] },
                { text: "Música experimental", profissoes: ["Músico"] }
            ]
        },
        {
            text: "Em um workshop, você preferiria ensinar:",
            options: [
                { text: "Análise linguística", profissoes: ["Linguista"] },
                { text: "Técnicas de tradução", profissoes: ["Tradutor"] },
                { text: "Escrita criativa", profissoes: ["Escritor"] },
                { text: "Expressão visual", profissoes: ["Artista Visual"] },
                { text: "Composição musical", profissoes: ["Músico"] }
            ]
        },
        {
            text: "Na produção cultural, você escolheria:",
            options: [
                { text: "Pesquisar dialetos locais", profissoes: ["Linguista"] },
                { text: "Mediar trocas culturais", profissoes: ["Tradutor"] },
                { text: "Organizar antologias", profissoes: ["Escritor"] },
                { text: "Criar exposições", profissoes: ["Artista Visual"] },
                { text: "Produzir shows", profissoes: ["Músico"] }
            ]
        },
        {
            text: "Em projetos sociais, você preferiria:",
            options: [
                { text: "Documentar línguas indígenas", profissoes: ["Linguista"] },
                { text: "Facilitar comunicação", profissoes: ["Tradutor"] },
                { text: "Promover oficinas de escrita", profissoes: ["Escritor"] },
                { text: "Desenvolver arte comunitária", profissoes: ["Artista Visual"] },
                { text: "Realizar oficinas musicais", profissoes: ["Músico"] }
            ]
        },
        {
            text: "Na área de tecnologia, você se interessaria por:",
            options: [
                { text: "Linguística computacional", profissoes: ["Linguista"] },
                { text: "Ferramentas de tradução", profissoes: ["Tradutor"] },
                { text: "Plataformas de publicação", profissoes: ["Escritor"] },
                { text: "Arte digital", profissoes: ["Artista Visual"] },
                { text: "Produção musical digital", profissoes: ["Músico"] }
            ]
        },
        {
            text: "Em um projeto inovador, você preferiria:",
            options: [
                { text: "Estudar novas linguagens", profissoes: ["Linguista"] },
                { text: "Explorar tradução automática", profissoes: ["Tradutor"] },
                { text: "Criar novos formatos literários", profissoes: ["Escritor"] },
                { text: "Desenvolver arte interativa", profissoes: ["Artista Visual"] },
                { text: "Inovar em composição", profissoes: ["Músico"] }
            ]
        },
        {
            text: "Na área de pesquisa, você focaria em:",
            options: [
                { text: "Morfologia e sintaxe", profissoes: ["Linguista"] },
                { text: "Estudos da tradução", profissoes: ["Tradutor"] },
                { text: "Teoria narrativa", profissoes: ["Escritor"] },
                { text: "Teoria da arte", profissoes: ["Artista Visual"] },
                { text: "Musicologia", profissoes: ["Músico"] }
            ]
        }
    ],
    engenharias: [
        {
            text: "Em um projeto de construção, você preferiria trabalhar com:",
            options: [
                { text: "Estruturas e fundações", profissoes: ["Engenheiro Civil"] },
                { text: "Sistemas de climatização", profissoes: ["Engenheiro Mecânico"] },
                { text: "Instalações elétricas", profissoes: ["Engenheiro Elétrico"] },
                { text: "Otimização de processos", profissoes: ["Engenheiro de Produção"] },
                { text: "Tratamento de efluentes", profissoes: ["Engenheiro Químico"] }
            ]
        },
        {
            text: "Qual área de inovação tecnológica mais te atrai?",
            options: [
                { text: "Materiais de construção sustentáveis", profissoes: ["Engenheiro Civil"] },
                { text: "Robótica e automação", profissoes: ["Engenheiro Mecânico"] },
                { text: "Energia renovável", profissoes: ["Engenheiro Elétrico"] },
                { text: "Indústria 4.0", profissoes: ["Engenheiro de Produção"] },
                { text: "Novos materiais", profissoes: ["Engenheiro Químico"] }
            ]
        },
        {
            text: "Em um projeto industrial, você escolheria trabalhar com:",
            options: [
                { text: "Projeto estrutural", profissoes: ["Engenheiro Civil"] },
                { text: "Manutenção de equipamentos", profissoes: ["Engenheiro Mecânico"] },
                { text: "Sistemas de potência", profissoes: ["Engenheiro Elétrico"] },
                { text: "Gestão da produção", profissoes: ["Engenheiro de Produção"] },
                { text: "Processos químicos", profissoes: ["Engenheiro Químico"] }
            ]
        },
        {
            text: "Em uma empresa de tecnologia, você preferiria:",
            options: [
                { text: "Projetar infraestrutura", profissoes: ["Engenheiro Civil"] },
                { text: "Desenvolver protótipos", profissoes: ["Engenheiro Mecânico"] },
                { text: "Sistemas de controle", profissoes: ["Engenheiro Elétrico"] },
                { text: "Logística integrada", profissoes: ["Engenheiro de Produção"] },
                { text: "Desenvolvimento de produtos", profissoes: ["Engenheiro Químico"] }
            ]
        },
        {
            text: "Qual aspecto da sustentabilidade mais te interessa?",
            options: [
                { text: "Construções verdes", profissoes: ["Engenheiro Civil"] },
                { text: "Eficiência energética", profissoes: ["Engenheiro Mecânico"] },
                { text: "Energia solar", profissoes: ["Engenheiro Elétrico"] },
                { text: "Produção mais limpa", profissoes: ["Engenheiro de Produção"] },
                { text: "Reciclagem de materiais", profissoes: ["Engenheiro Químico"] }
            ]
        },
        {
            text: "Em um projeto de pesquisa, você escolheria estudar:",
            options: [
                { text: "Resistência de materiais", profissoes: ["Engenheiro Civil"] },
                { text: "Dinâmica de fluidos", profissoes: ["Engenheiro Mecânico"] },
                { text: "Sistemas embarcados", profissoes: ["Engenheiro Elétrico"] },
                { text: "Gestão da qualidade", profissoes: ["Engenheiro de Produção"] },
                { text: "Catálise e reatores", profissoes: ["Engenheiro Químico"] }
            ]
        },
        {
            text: "Em uma indústria, qual setor mais te atrai?",
            options: [
                { text: "Planejamento de obras", profissoes: ["Engenheiro Civil"] },
                { text: "Manutenção industrial", profissoes: ["Engenheiro Mecânico"] },
                { text: "Automação industrial", profissoes: ["Engenheiro Elétrico"] },
                { text: "Planejamento e controle", profissoes: ["Engenheiro de Produção"] },
                { text: "Controle de processos", profissoes: ["Engenheiro Químico"] }
            ]
        },
        {
            text: "Na área de projetos, você preferiria trabalhar com:",
            options: [
                { text: "Projetos arquitetônicos", profissoes: ["Engenheiro Civil"] },
                { text: "Sistemas mecânicos", profissoes: ["Engenheiro Mecânico"] },
                { text: "Redes elétricas", profissoes: ["Engenheiro Elétrico"] },
                { text: "Fluxos de produção", profissoes: ["Engenheiro de Produção"] },
                { text: "Processos industriais", profissoes: ["Engenheiro Químico"] }
            ]
        },
        {
            text: "Em análise de riscos, você focaria em:",
            options: [
                { text: "Segurança estrutural", profissoes: ["Engenheiro Civil"] },
                { text: "Falhas mecânicas", profissoes: ["Engenheiro Mecânico"] },
                { text: "Riscos elétricos", profissoes: ["Engenheiro Elétrico"] },
                { text: "Gargalos produtivos", profissoes: ["Engenheiro de Produção"] },
                { text: "Riscos químicos", profissoes: ["Engenheiro Químico"] }
            ]
        },
        {
            text: "Em gestão de projetos, você preferiria coordenar:",
            options: [
                { text: "Obras civis", profissoes: ["Engenheiro Civil"] },
                { text: "Projetos mecânicos", profissoes: ["Engenheiro Mecânico"] },
                { text: "Instalações elétricas", profissoes: ["Engenheiro Elétrico"] },
                { text: "Linhas de produção", profissoes: ["Engenheiro de Produção"] },
                { text: "Plantas químicas", profissoes: ["Engenheiro Químico"] }
            ]
        },
        {
            text: "Na área de manutenção, você escolheria trabalhar com:",
            options: [
                { text: "Infraestrutura predial", profissoes: ["Engenheiro Civil"] },
                { text: "Equipamentos industriais", profissoes: ["Engenheiro Mecânico"] },
                { text: "Sistemas elétricos", profissoes: ["Engenheiro Elétrico"] },
                { text: "Gestão de ativos", profissoes: ["Engenheiro de Produção"] },
                { text: "Equipamentos de processo", profissoes: ["Engenheiro Químico"] }
            ]
        },
        {
            text: "Em desenvolvimento de produtos, você preferiria:",
            options: [
                { text: "Materiais de construção", profissoes: ["Engenheiro Civil"] },
                { text: "Máquinas e equipamentos", profissoes: ["Engenheiro Mecânico"] },
                { text: "Dispositivos eletrônicos", profissoes: ["Engenheiro Elétrico"] },
                { text: "Otimização de produtos", profissoes: ["Engenheiro de Produção"] },
                { text: "Produtos químicos", profissoes: ["Engenheiro Químico"] }
            ]
        },
        {
            text: "Na área de qualidade, você focaria em:",
            options: [
                { text: "Controle de obras", profissoes: ["Engenheiro Civil"] },
                { text: "Precisão mecânica", profissoes: ["Engenheiro Mecânico"] },
                { text: "Confiabilidade elétrica", profissoes: ["Engenheiro Elétrico"] },
                { text: "Processos produtivos", profissoes: ["Engenheiro de Produção"] },
                { text: "Controle químico", profissoes: ["Engenheiro Químico"] }
            ]
        },
        {
            text: "Em projetos de automação, você preferiria trabalhar com:",
            options: [
                { text: "Edifícios inteligentes", profissoes: ["Engenheiro Civil"] },
                { text: "Sistemas robotizados", profissoes: ["Engenheiro Mecânico"] },
                { text: "Controle e automação", profissoes: ["Engenheiro Elétrico"] },
                { text: "Manufatura digital", profissoes: ["Engenheiro de Produção"] },
                { text: "Processos automatizados", profissoes: ["Engenheiro Químico"] }
            ]
        },
        {
            text: "Na área de pesquisa e desenvolvimento, você escolheria:",
            options: [
                { text: "Novos métodos construtivos", profissoes: ["Engenheiro Civil"] },
                { text: "Tecnologias mecânicas", profissoes: ["Engenheiro Mecânico"] },
                { text: "Inovação em eletrônica", profissoes: ["Engenheiro Elétrico"] },
                { text: "Métodos produtivos", profissoes: ["Engenheiro de Produção"] },
                { text: "Novos materiais", profissoes: ["Engenheiro Químico"] }
            ]
        },
        {
            text: "Em consultoria, você preferiria especializar-se em:",
            options: [
                { text: "Avaliações estruturais", profissoes: ["Engenheiro Civil"] },
                { text: "Eficiência mecânica", profissoes: ["Engenheiro Mecânico"] },
                { text: "Eficiência energética", profissoes: ["Engenheiro Elétrico"] },
                { text: "Otimização industrial", profissoes: ["Engenheiro de Produção"] },
                { text: "Processos químicos", profissoes: ["Engenheiro Químico"] }
            ]
        },
        {
            text: "Em gestão de equipes, você lideraria projetos de:",
            options: [
                { text: "Construção civil", profissoes: ["Engenheiro Civil"] },
                { text: "Manutenção mecânica", profissoes: ["Engenheiro Mecânico"] },
                { text: "Sistemas elétricos", profissoes: ["Engenheiro Elétrico"] },
                { text: "Gestão industrial", profissoes: ["Engenheiro de Produção"] },
                { text: "Indústria química", profissoes: ["Engenheiro Químico"] }
            ]
        },
        {
            text: "Na área acadêmica, você gostaria de pesquisar:",
            options: [
                { text: "Tecnologia da construção", profissoes: ["Engenheiro Civil"] },
                { text: "Mecânica aplicada", profissoes: ["Engenheiro Mecânico"] },
                { text: "Sistemas de potência", profissoes: ["Engenheiro Elétrico"] },
                { text: "Processos industriais", profissoes: ["Engenheiro de Produção"] },
                { text: "Engenharia química", profissoes: ["Engenheiro Químico"] }
            ]
        },
        {
            text: "Em projetos de inovação, você preferiria desenvolver:",
            options: [
                { text: "Construções inteligentes", profissoes: ["Engenheiro Civil"] },
                { text: "Máquinas autônomas", profissoes: ["Engenheiro Mecânico"] },
                { text: "Smart grids", profissoes: ["Engenheiro Elétrico"] },
                { text: "Indústria 4.0", profissoes: ["Engenheiro de Produção"] },
                { text: "Processos sustentáveis", profissoes: ["Engenheiro Químico"] }
            ]
        },
        {
            text: "Em gestão de recursos, você focaria em:",
            options: [
                { text: "Materiais de construção", profissoes: ["Engenheiro Civil"] },
                { text: "Recursos energéticos", profissoes: ["Engenheiro Mecânico"] },
                { text: "Eficiência elétrica", profissoes: ["Engenheiro Elétrico"] },
                { text: "Otimização de recursos", profissoes: ["Engenheiro de Produção"] },
                { text: "Insumos químicos", profissoes: ["Engenheiro Químico"] }
            ]
        }
    ]
};

// ========== VARIÁVEIS DE CONTROLE ==========
let currentPhase = 'disc';
let currentQuestion = 0;
let discScores = { A: 0, B: 0, C: 0, D: 0 };
let areaScores = {
    agrarias: 0,
    biologicas: 0,
    saude: 0,
    exatas: 0,
    engenharias: 0,
    humanas: 0,
    sociais: 0,
    letras: 0
};
let professionScores = {};
let topArea = '';
let userAnswers = {
    disc: [],
    areas: [],
    specific: []
};

// ========== FUNÇÕES DE CONTROLE DO TESTE ==========
function startTest() {
    const savedTest = localStorage.getItem('testState');
    if (savedTest) {
        document.getElementById('sessionDialog').classList.remove('hidden');
    } else {
        document.getElementById('intro').classList.remove('hidden'); // Garante que intro está visível inicialmente
        document.getElementById('questionContainer').classList.add('hidden');
        document.getElementById('results').classList.add('hidden');
        document.getElementById('discResults').classList.add('hidden');
    }
}

function startNewTest() {
    // Limpa dados anteriores
    localStorage.removeItem('testState');
    
    // Reset das variáveis
    currentPhase = 'disc';
    currentQuestion = 0;
    discScores = { A: 0, B: 0, C: 0, D: 0 };
    areaScores = {
        agrarias: 0, biologicas: 0, saude: 0, exatas: 0,
        engenharias: 0, humanas: 0, sociais: 0, letras: 0
    };
    professionScores = {};
    topArea = '';
    userAnswers = { disc: [], areas: [], specific: [] };

    // Atualiza interface
    document.getElementById('intro').classList.add('hidden');
    document.getElementById('questionContainer').classList.remove('hidden');
    document.getElementById('results').classList.add('hidden');
    document.getElementById('discResults').classList.add('hidden');
    
    // Inicia teste
    showQuestion();
    updateNavButtons();
    updateProgressText();
}

function continuePreviousSession() {
    // ... existing code from continuePreviousSession function ...
}

function saveProgress() {
    // ... existing code from saveProgress function ...
}

function resetTest() {
    // Limpa dados anteriores
    localStorage.removeItem('testState');
    
    // Reset das variáveis
    currentPhase = 'disc';
    currentQuestion = 0;
    discScores = { A: 0, B: 0, C: 0, D: 0 };
    areaScores = {
        agrarias: 0, biologicas: 0, saude: 0, exatas: 0,
        engenharias: 0, humanas: 0, sociais: 0, letras: 0
    };
    professionScores = {};
    topArea = '';
    userAnswers = { disc: [], areas: [], specific: [] };

    // Atualiza interface
    document.getElementById('intro').classList.remove('hidden');
    document.getElementById('questionContainer').classList.add('hidden');
    document.getElementById('results').classList.add('hidden');
    document.getElementById('discResults').classList.add('hidden');
}

// ========== FUNÇÕES DE NAVEGAÇÃO ==========
function handleAnswer(optionIndex) {
    const currentAnswers = userAnswers[currentPhase];
    currentAnswers[currentQuestion] = optionIndex;

    // Remove classe 'selected' de todos os botões
    const buttons = document.querySelectorAll('#optionsContainer button');
    buttons.forEach(button => button.classList.remove('selected'));
    
    // Adiciona classe 'selected' ao botão clicado
    buttons[optionIndex].classList.add('selected');

    // Atualiza visual dos botões de navegação
    updateNavButtons();

    // Se for a última questão, habilita o botão próximo
    const questions = getCurrentQuestions();
    if (currentQuestion === questions.length - 1) {
        document.getElementById('nextButton').disabled = false;
    }

    // Salva progresso
    saveProgress();
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
        updateNavButtons();
        updateProgressText();
        
        // Restaura seleção anterior se existir
        const previousAnswer = userAnswers[currentPhase][currentQuestion];
        if (previousAnswer !== undefined) {
            const buttons = document.querySelectorAll('#optionsContainer button');
            buttons.forEach(button => button.classList.remove('selected'));
            buttons[previousAnswer].classList.add('selected');
        }
    }
}

function nextQuestion() {
    const questions = getCurrentQuestions();
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion();
        updateNavButtons();
        updateProgressText();
        
        // Restaura seleção anterior se existir
        const nextAnswer = userAnswers[currentPhase][currentQuestion];
        if (nextAnswer !== undefined) {
            const buttons = document.querySelectorAll('#optionsContainer button');
            buttons.forEach(button => button.classList.remove('selected'));
            buttons[nextAnswer].classList.add('selected');
        }
    } else {
        finishPhase();
    }
}

function updateNavButtons() {
    const questions = getCurrentQuestions();
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');

    if (prevButton && nextButton) {
        prevButton.disabled = currentQuestion === 0;
        
        // Última questão - habilita próximo se tiver resposta
        if (currentQuestion === questions.length - 1) {
            nextButton.disabled = userAnswers[currentPhase][currentQuestion] === undefined;
        } else {
            nextButton.disabled = false;
        }
    }
}

function showQuestion() {
    const questions = getCurrentQuestions();
    if (!questions || currentQuestion >= questions.length) {
        finishPhase();
        return;
    }

    const question = questions[currentQuestion];
    document.getElementById('questionText').textContent = question.text;
    
    updateProgressText();
    
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    
    // Adiciona as opções regulares
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option.text;
        button.onclick = () => handleAnswer(index);
        
        if (userAnswers[currentPhase][currentQuestion] === index) {
            button.classList.add('selected');
        }
        
        optionsContainer.appendChild(button);
    });
    
    // Adiciona a opção "Nenhuma destas alternativas"
    const noneButton = document.createElement('button');
    noneButton.textContent = "Nenhuma destas alternativas";
    noneButton.onclick = () => handleAnswer(question.options.length);
    
    if (userAnswers[currentPhase][currentQuestion] === question.options.length) {
        noneButton.classList.add('selected');
    }
    
    optionsContainer.appendChild(noneButton);
}

function updateProgressText() {
    const questions = getCurrentQuestions();
    if (questions) {
        const total = questions.length;
        const current = currentQuestion + 1;
        document.getElementById('progress').textContent = `Questão ${current} de ${total}`;
    }
}

function getCurrentQuestions() {
    switch(currentPhase) {
        case 'disc':
            return discQuestions;
        case 'areas':
            return initialQuestions;
        case 'specific':
            return specificQuestions[topArea];
        default:
            return null;
    }
}

// ========== FUNÇÕES DE ANÁLISE E RESULTADOS ==========
function analyzeDiscProfile() {
    // ... existing code from analyzeDiscProfile function ...
}

function finishPhase() {
    if (currentPhase === 'disc') {
        // Calcula perfil DISC
        const discAnswers = userAnswers.disc;
        discAnswers.forEach((answer, index) => {
            const question = discQuestions[index];
            // Verifica se não é "Nenhuma destas alternativas"
            if (answer < question.options.length) {
                const selectedProfile = question.options[answer].profile;
                discScores[selectedProfile]++;
            }
        });
        
        showDiscResults();
        
    } else if (currentPhase === 'areas') {
        // Calcula pontuação das áreas
        const areaAnswers = userAnswers.areas;
        areaAnswers.forEach((answer, index) => {
            const question = initialQuestions[index];
            // Verifica se não é "Nenhuma destas alternativas"
            if (answer < question.options.length) {
                const selectedAreas = question.options[answer].areas;
                selectedAreas.forEach(area => {
                    areaScores[area]++;
                });
            }
        });
        
        // Identifica área com maior pontuação
        topArea = Object.entries(areaScores).sort((a, b) => b[1] - a[1])[0][0];
        startSpecificPhase();
        
    } else if (currentPhase === 'specific') {
        // Calcula pontuação das profissões
        const specificAnswers = userAnswers.specific;
        specificAnswers.forEach((answer, index) => {
            const question = specificQuestions[topArea][index];
            // Verifica se não é "Nenhuma destas alternativas"
            if (answer < question.options.length) {
                const selectedProfessions = question.options[answer].profissoes;
                selectedProfessions.forEach(profession => {
                    professionScores[profession] = (professionScores[profession] || 0) + 1;
                });
            }
        });
        
        showFinalResults();
    }
}

function showDiscResults() {
    // Esconde container de questões
    document.getElementById('questionContainer').classList.add('hidden');
    
    // Mostra resultados DISC
    const discResults = document.getElementById('discResults');
    discResults.classList.remove('hidden');
    
    // Encontra perfil dominante
    const dominantProfile = Object.entries(discScores)
        .sort((a, b) => b[1] - a[1])[0][0];
    
    // Atualiza interface
    const profile = discProfiles[dominantProfile];
    document.getElementById('discProfile').innerHTML = `
        <h3>Seu perfil predominante é: ${profile.nome}</h3>
        <p>${profile.descricao}</p>
    `;
}

function startAreaPhase() {
    currentPhase = 'areas';
    currentQuestion = 0;
    document.getElementById('discResults').classList.add('hidden');
    document.getElementById('questionContainer').classList.remove('hidden');
    showQuestion();
    updateNavButtons();
    updateProgressText();
}

function startSpecificPhase() {
    currentPhase = 'specific';
    currentQuestion = 0;
    showQuestion();
    updateNavButtons();
    updateProgressText();
}

function showFinalResults() {
    document.getElementById('questionContainer').classList.add('hidden');
    const results = document.getElementById('results');
    results.classList.remove('hidden');
    
    // Encontra perfil DISC dominante
    const dominantProfile = Object.entries(discScores)
        .sort((a, b) => b[1] - a[1])[0][0];
    const profile = discProfiles[dominantProfile];
    
    // Ordena profissões por pontuação
    const sortedProfessions = Object.entries(professionScores)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5);
    
    // Gera análise contextualizada baseada no perfil DISC e área escolhida
    const discAnalysis = generateDiscAnalysis(dominantProfile, topArea, sortedProfessions[0][0]);
    
    // Atualiza interface com todos os resultados
    document.getElementById('resultAreas').innerHTML = `
        <h3>Sua área principal: ${areas[topArea].nome}</h3>
        <div class="profile-summary">
            <h4>Seu Perfil Comportamental: ${profile.nome}</h4>
            <p>${profile.descricao}</p>
            <div class="contextual-analysis">
                <h4>Análise Contextualizada</h4>
                <p>${discAnalysis}</p>
            </div>
        </div>
    `;
    
    const professionsList = sortedProfessions
        .map(([profession, score]) => `
            <div class="profession-match">
                <h4>${profession}</h4>
                <p>${getProfessionDescription(profession, dominantProfile)}</p>
            </div>
        `)
        .join('');
    
    document.getElementById('resultProfessions').innerHTML = `
        <h3>Profissões mais compatíveis:</h3>
        ${professionsList}
    `;
}

function generateDiscAnalysis(profile, area, topProfession) {
    const analyses = {
        A: {
            agrarias: "Seu perfil analítico é ideal para pesquisa e desenvolvimento na área agrária. Sua atenção aos detalhes e metodologia são essenciais para garantir precisão em processos agrícolas.",
            biologicas: "Como analista, você tem o perfil ideal para pesquisa científica. Sua capacidade de observação detalhada é fundamental para estudos biológicos.",
            // ... adicionar análises para outras áreas
        },
        B: {
            agrarias: "Seu perfil comunicador favorece a gestão de equipes e projetos agrários. Sua habilidade em construir relacionamentos é valiosa para iniciativas sustentáveis.",
            biologicas: "Como comunicador, você pode exercer papel importante na divulgação científica. Sua empatia ajuda na construção de pontes entre ciência e sociedade.",
            // ... adicionar análises para outras áreas
        },
        // ... adicionar perfis C e D
    };

    return analyses[profile]?.[area] || 
           "Seu perfil comportamental oferece perspectivas únicas para atuar nesta área, combinando suas características pessoais com as demandas profissionais.";
}

function getProfessionDescription(profession, discProfile) {
    // Criar um objeto com descrições específicas para cada profissão baseadas no perfil DISC
    const descriptions = {
        "Agrônomo": {
            A: "Sua precisão analítica é ideal para pesquisa e desenvolvimento agrícola",
            B: "Sua capacidade de comunicação facilita a extensão rural",
            C: "Seu foco em resultados acelera a implementação de melhorias",
            D: "Sua visão inovadora contribui para agricultura sustentável"
        },
        // ... adicionar outras profissões
    };

    return descriptions[profession]?.[discProfile] || 
           "Esta profissão se alinha com suas características comportamentais e interesses demonstrados.";
}

// ========== FUNÇÕES UTILITÁRIAS ==========
function checkProfessionDistribution() {
    // ... existing code from checkProfessionDistribution function ...
}

// ========== INICIALIZAÇÃO ==========

startTest();

// Event Listeners
document.getElementById('testForm')?.addEventListener('submit', function(e) {
    // ... existing code from event listener ...
});
