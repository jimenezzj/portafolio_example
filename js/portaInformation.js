const dirImgs = "./assets/images/";

const info = {
    EN: {
        intro: {
            greenting: 'Her there, I am',
            pos: 'WEB DEV',
            name: 'Jonathan'
        },
        services: {
            title: 'What I do?',
            subTitles: {
                front: {
                    title: 'Front-end Development',
                    subtitles: ['Languages I speak', 'Tools, Frameworks & Others']
                },
                back: {
                    title: 'Back-end Development',
                    subtitles: ['Languages I speak', 'Tools, Frameworks & Others']
                },
                ui: {
                    title: 'UI/UX Design',
                    subtitles: ['Designer Tools']
                }
            }
        },
        about: {
            title: 'Who I am?',
            subTitle: 'WEB DEV BASED IN SAN FRANCISCO, HEREDIA',
            description: [
                "My name is Jonathan Jiménez Zambrana, I'm a passionate software developer who aims to build well structured and maintainable appplications.I consider myself a self - taugh as well as a quick learning who tries to be up - to - date with most recent technologies updates.I like to help people, cooperate with them and learn from them.I've worked in several educational and profesional projects on different areas such as: web development(front-end & back-end), dektop apps and games development"
                , "I’m currently studying at Centotec university to achieve a software development degree. I already got software development technician meanwhile I was in high school. Also I’ve worked for two companies in both as web developer using different stack of web technologies to build professional, maintainable and beautiful designs web apps."
            ]
        },
        work: {
            title: 'My Work',
            subTitle: 'A section with some of my works'
        },
        goals: {
            title: "Goals",
            items: [
                {
                    title: "Build the future",
                    description: "Help people to integratedto the new world with creation of modern web applications"
                },
                {
                    title: "Eager to Learn",
                    description: "Learning cutting-edge technologies through challenges and study to keep up to date with tech market"
                },
                {
                    title: "Team Working",
                    description: "Must be important both help teammates and learn from them"
                }
            ]
        },
        we: {
            work: {
                title: "Work Experience",
                subTitle: "These are the professional experiences which have allowe me to work on several projects"
            },
            education: {
                title: "Work Experience",
                subTitle: "These are the institusions where I studied and keep studying "
            }
        },
        experiences: [
            {
                title: "Front-end Developer",
                subtitle: "Apr 2018 - Dec 2018",
                companyImg: dirImgs + "lanshore.png",
                desc: [
                    "Professional experience as front-end developer which was developed together with a team-work, several modules of a sales management system.",
                    "Creation of UI/UX through prototypes for layout of three 3 modules with a designing tool known as Adobe XD.",
                    "Creation of webapp UI using a JS framework such as Angular helped by Bootstrap to easily create mark-up, in addition of a CSS framework was used a pre-processor known as Sass.",
                    "Using testing tools such as Jasmine and Karma which were written several unit test cases for two modules of the webapp."
                ]
            },
            {
                title: "Software Developer Analyst",
                subtitle: "Oct 2017 - Jan 2017",
                companyImg: dirImgs + "GTI.png",
                desc: [
                    "Professional internship, built a webapp to be used as an internal information management system",
                    "Redesign UI of old system using adobe Photoshop to create mock-ups and wireframes.",
                    "Created layout of webapp with fundamentals technologies such as: HTML5, CSS, JavaScript and Materialize Framework.",
                    "UI/UX was built with a SPA JavaScript framework known as: React",
                    "Built two modules of a RESTful API using ASP.NET Core and Entity Framework."
                ]
            }
        ],
        education: [
            {
                title: "Bachelor in Software Development",
                subtitle: "2020 - Present",
                companyImg: dirImgs + "Cenfotec.png",
                desc: [
                    "Several projects created which stand out a traffic accident web app to report and check out accidents on selected routes, using HTML5, CSS, Javascript, NodeJs, Express and MongoDb. And also an auctions desktop app to sell items or trying to buy some of them bidding at auctions, it was built with: Java, JavaFX and, MySQL."
                ]
            },
            {
                title: "Bachelor in Computer Systems Engineering",
                subtitle: "2018 - 2020",
                companyImg: dirImgs + "UFide.png",
                desc: [
                ]
            },
            {
                title: "Software Developer Mid-level Technician",
                subtitle: "2015 - 2017",
                companyImg: dirImgs + "DonBosco.jpg",
                desc: [
                    "Participation in two expo fairs which, developed a math physics website to help students, it was built with following tools:  HTML5, CSS, Javacript and JQuery. Whereas the another project was a virtual classroom for the high school, it was created using technologies such as: React, Materialize and Spring."
                ]
            }
        ],
        buttons: {
            work: 'my work',
            viewMore: 'view more'
        },
        navbar: {
            cover: 'Home',
            myservices: 'My Services',
            aboutme: 'About me',
            work: 'My Work',
        }
    },
    ES: {
        intro: {
            greenting: 'Hola, Soy ',
            pos: 'WEB DEV',
            name: 'Jonathan!'
        },
        services: {
            title: '¿Qué es lo que hago?',
            subTitles: {
                front: {
                    title: 'Desarrollador Front-end',
                    subtitles: ['Lenguajes que hablo', 'Herramientas, Frameworks & Otros']
                },
                back: {
                    title: 'Desarrollador Back-end',
                    subtitles: ['Lenguajes que hablo', 'Herramientas, Frameworks & Otros']
                },
                ui: {
                    title: 'Diseño UI/UX',
                    subtitles: ['Herramientos de diseño']
                }
            }
        },
        about: {
            title: '¿Quien soy?',
            subTitle: 'WEB DEV CON BASE EN SAN FRANCISCO, HEREDIA',
            description: [
                "Mi nombre es Jonathan Jiménez Zambrana, Soy un desarrollador de software quien disfruta de la construcción de aplicaciones bien estructuradas y mantenibles. Me considero a mí mismo como autodidacta, así como alguien que aprende rápido para intentar estar tan actualizado con las nuevas tecnologías como sea posible. Me gusta ayudar a las personas, cooperar con las misas y aprender de ellas. He trabajado en varios proyectos tanto educativos como profesionales en diferentes áreas como: desarrollo web (front-end & back-end), desarrollo de aplicaciones de escritorio y desarrollos de video juegos."
                , "Actualmente me encuentro estudiando en la universidad de Cenfotec la carrera de desarrollo de software. Sin embargo, cuento con un técnico en desarrollo de software mientras estaba en el colegio. También en trabajando para dos compañías en ambas en el ámbito de desarrollo de software en las utilice diferentes conjuntos de tecnologías web para construir aplicaciones web profesionales, mantenibles y bonitas."
            ]
        },
        work: {
            title: 'Mi Trabajo',
            subTitle: 'Una sección con algunos de mis trabajos'
        },
        goals: {
            title: "Objetivos",
            items: [
                {
                    title: "Construir el futuro",
                    description: "Ayudar a las perosnas en la integración en el nuevo mundo con la creación de aplicaiones web modernas"
                },
                {
                    title: "Ansioso por aprender",
                    description: "Aprender las mas recientes technologias por medio de estudio y desafíos para mantenerse al margen del mercado"
                },
                {
                    title: "Trbajar en equipo",
                    description: "Es muy importante tanto colaborar con los miembros de un equipo como aprender de ellos."
                }
            ]
        }
        ,
        we: {
            work: {
                title: "Experiencia Laboral",
                subTitle: "Estas son mis experiencias profesionales que me han permitido trabajar en varios proyectos"
            },
            education: {
                title: "Educación",
                subTitle: "Estas son las instituciones en que recibo y he recibido mi eduación profesional"
            }
        },
        experiences: [
            {
                title: "Desarrollador de Front-End",
                subtitle: "Abr 2018 - Dec 2018",
                companyImg: dirImgs + "lanshore.png",
                desc: [
                    "Experiencia profesional como un desarrollador front-end en la cual se desarrolló junto a un equipo varios módulps de una webapp de administración de ventas.",
                    "Creación del UI/UX por medio de prototipos para el diseño de tres módulos con una herramienta de diseño como: Adobe XD.",
                    "Creación del UI de la webapp utilizando un framework de JS como Angular junto a Bootstrap para fácilmente crear el mark-up de la misma y además de la utilización de un framework de CSS se utilizó un pre-procesador de CSS conocido como: Sass.",
                    "Utilización de los frameworks de Spring y Hibernate del lado del backend para la realización de los dos modulos de la webapp realizada."
                ]
            },
            {
                title: "Analista Desarrollador de Software",
                subtitle: "Oct 2017 - Ene 2017",
                companyImg: dirImgs + "GTI.png",
                desc: [
                    "Pasantía profesional, en la que construir una webapp para ser usada como sistema de administración de información interna.",
                    "Rediseño del UI de un sistema antiguo, utilizando adobe Photoshop para realizar mock-ups y wireframes.",
                    "Creación del diseño de la webapp con herramientas fundamentales como: HTML5, CSS, JavaScript y Materialize Framework.",
                    "UI/UX construido con un framework de JavaScript para crear SPA conocido como React.",
                    "Construcción de dos módulos de una RESTful API utilizando ASP.NET Core and Entity Framework."
                ]
            }
        ],
        education: [
            {
                title: "Bachillerato en Desarrollo de Software",
                subtitle: "2020 - Presente",
                companyImg: dirImgs + "Cenfotec.png",
                desc: [
                    "Varios proyectos creados de los que destaca una app de reporte y chequeo de accidentes de tránsito sobre rutas seleccionadas, utilizando: HTML5, CSS, Javascript, NodeJs, Express and MongoDb. Además de un sistema de subastas para vender objetos or intentar comprarlos ofertando en las subastas, este fue construido con: Java, JavaFX and, MySQL."
                ]
            },
            {
                title: "Bachillerato en Ingeniería en Sistemas",
                subtitle: "2018 - 2020",
                companyImg: dirImgs + "UFide.png",
                desc: [
                ]
            },
            {
                title: "Software Developer Mid-level Technician",
                subtitle: "2015 - 2017",
                companyImg: dirImgs + "DonBosco.jpg",
                desc: [
                    "Participación en dos ferias tecnológicas en las que se creó un sitio de física matemática para ayudar a los estudiantes, dicha web fue realizada con herramientas como: HTML5, CSS, Javacript and JQuery. Mientras que el otro proyecto fue un aula virtual que se construyó utilizando tecnologías como: React, Materialize and Spring."
                ]
            }
        ],
        buttons: {
            work: 'mi trabajo',
            viewMore: 'ver mas'
        },
        navbar: {
            cover: 'Principal',
            myservices: 'Mi Servicios',
            aboutme: 'Acerca de mi',
            work: 'My Trabjo',
        }
    }
}