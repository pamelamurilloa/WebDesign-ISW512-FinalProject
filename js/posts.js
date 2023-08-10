let geologicalPosts = [
    {
        id: 1,
        imgSource: 'https://drive.google.com/file/d/1JFxfyhfuj3keBCEC53qiZQw7-wMmPrB4/view?usp=sharing',
        title: 'Cámbrico',
        author: 'Pamela Murillo',
        date: '2021-10-24',
        rating: 1,
        summary: 'El período Cámbrico fue testigo de una explosión de diversidad biológica conocida como la -explosión cámbrica-. Aparecieron los primeros animales con conchas duras, esqueletos y estructuras complejas. Se formaron los primeros artrópodos, moluscos, equinodermos y trilobites. Los océanos estaban dominados por criaturas marinas y no había vida en la tierra firme.',
        completeInformation: 'El período Cámbrico fue testigo de una explosión de diversidad biológica conocida como la -explosión cámbrica-. Aparecieron los primeros animales con conchas duras, esqueletos y estructuras complejas. Se formaron los primeros artrópodos, moluscos, equinodermos y trilobites. Los océanos estaban dominados por criaturas marinas y no había vida en la tierra firme.'
    },
    {
        id: 2,
        imgSource: '../images/ordovician.jpeg',
        title: 'Ordovícico',
        author: 'Cristobal Colón',
        date: '2020-12-05',
        rating: 5,
        summary: 'Durante el período Ordovícico, los océanos continuaron siendo el hábitat dominante, y los artrópodos y moluscos prosperaron. Se desarrollaron los primeros vertebrados acuáticos, como los peces sin mandíbulas y los peces con mandíbulas primitivas. Los corales y los briozoos construyeron arrecifes masivos. También se produjo una importante radiación de plantas y algas.',
        completeInformation: 'Durante el período Ordovícico, los océanos continuaron siendo el hábitat dominante, y los artrópodos y moluscos prosperaron. Se desarrollaron los primeros vertebrados acuáticos, como los peces sin mandíbulas y los peces con mandíbulas primitivas. Los corales y los briozoos construyeron arrecifes masivos. También se produjo una importante radiación de plantas y algas.'
    },
    {
        id: 3,
        imgSource: '../images/silurian.jpeg',
        title: 'Silúrico',
        author: 'María Antonieta de los Ángeles',
        date: '2021-07-01',
        rating: 3,
        summary: 'Durante el período Silúrico, los océanos se volvieron más oxigenados y se formaron extensos bosques de algas y plantas terrestres primitivas. Los peces desarrollaron aletas más fuertes y pudieron salir del agua brevemente. También aparecieron los primeros insectos y arácnidos terrestres.',
        completeInformation: 'Durante el período Silúrico, los océanos se volvieron más oxigenados y se formaron extensos bosques de algas y plantas terrestres primitivas. Los peces desarrollaron aletas más fuertes y pudieron salir del agua brevemente. También aparecieron los primeros insectos y arácnidos terrestres.'
    },
    {
        id: 4,
        imgSource: '../images/devonian.jpeg',
        title: 'Devónico',
        author: 'Jesús de Nazaret',
        date: '2020-09-18',
        rating: 2,
        summary: 'En el período Devónico, los peces con mandíbulas se diversificaron y se convirtieron en los principales depredadores en los océanos. Surgieron los primeros bosques verdaderos con árboles y plantas terrestres más avanzadas. Los insectos y arácnidos se volvieron más diversos y adaptados a la vida en tierra firme.',
        completeInformation: 'En el período Devónico, los peces con mandíbulas se diversificaron y se convirtieron en los principales depredadores en los océanos. Surgieron los primeros bosques verdaderos con árboles y plantas terrestres más avanzadas. Los insectos y arácnidos se volvieron más diversos y adaptados a la vida en tierra firme.'
    },
    {
        id: 5,
        imgSource: '../images/carboniferous.jpeg',
        title: 'Carbonífero',
        author: 'Paquita la del Barrio',
        date: '2021-05-22',
        rating: 5,
        summary: 'Durante el período Carbonífero, los bosques se expandieron enormemente y se formaron grandes depósitos de carbón. Los anfibios prosperaron y se diversificaron en diferentes formas y tamaños. Los insectos alcanzaron tamaños gigantes. Los primeros reptiles también aparecieron al final del período.',
        completeInformation: 'Durante el período Carbonífero, los bosques se expandieron enormemente y se formaron grandes depósitos de carbón. Los anfibios prosperaron y se diversificaron en diferentes formas y tamaños. Los insectos alcanzaron tamaños gigantes. Los primeros reptiles también aparecieron al final del período.'
    },
    {
        id: 6,
        imgSource: '../images/permian.jpeg',
        title: 'Pérmico',
        author: 'El Chavo del Ocho',
        date: '2021-03-14',
        rating: 3,
        summary: 'El período Pérmico presenció la formación de Pangea, un supercontinente que unió la mayoría de las masas terrestres. Los reptiles se convirtieron en los animales dominantes y aparecieron los primeros mamíferos y los primeros dinosaurios. Sin embargo, al final del Pérmico, ocurrió la extinción masiva más grande de la historia de la Tierra, eliminando alrededor del 96% de las especies marinas y el 70% de las especies terrestres.',
        completeInformation: 'El período Pérmico presenció la formación de Pangea, un supercontinente que unió la mayoría de las masas terrestres. Los reptiles se convirtieron en los animales dominantes y aparecieron los primeros mamíferos y los primeros dinosaurios. Sin embargo, al final del Pérmico, ocurrió la extinción masiva más grande de la historia de la Tierra, eliminando alrededor del 96% de las especies marinas y el 70% de las especies terrestres.'
    }
];

let animals = [
    {
        id:7,
        imgSource:'../images/mamut.jpeg',
        title:'Mamut lanudo', 
        author:'George Washington',
        date:'2020-07-10',
        summary:'El mamut lanudo fue una especie de elefante que habitó durante la era del Pleistoceno, específicamente en las regiones frías de América del Norte, Europa y Asia. Se caracterizaba por su pelaje largo y grueso, que le proporcionaba una excelente adaptación al clima frío de la época. Los mamuts lanudos tenían colmillos curvados hacia arriba, que podían medir hasta 5 metros de longitud en los machos adultos, y utilizaban estos colmillos para desenterrar vegetación cubierta por la nieve y para defenderse de depredadores.',
        completeInformation:'El mamut lanudo fue una especie de elefante que habitó durante la era del Pleistoceno, específicamente en las regiones frías de América del Norte, Europa y Asia. Se caracterizaba por su pelaje largo y grueso, que le proporcionaba una excelente adaptación al clima frío de la época. Los mamuts lanudos tenían colmillos curvados hacia arriba, que podían medir hasta 5 metros de longitud en los machos adultos, y utilizaban estos colmillos para desenterrar vegetación cubierta por la nieve y para defenderse de depredadores. Eran herbívoros, alimentándose principalmente de pasto, musgos y arbustos. Vivían en manadas familiares y migraban en busca de alimentos y condiciones más favorables. Durante el Pleistoceno, los mamuts lanudos coexistieron con los primeros humanos y fueron cazados por estos para obtener carne, piel y huesos para fabricar herramientas y refugios. Desafortunadamente, debido a la caza excesiva y los cambios climáticos, los mamuts lanudos se extinguieron alrededor de 4,000 años atrás.'
    },

    {
        id:8,
        imgSource:'../images/smilodon.jpeg',
        title:'Smilodon', 
        author:'Michael Jackson',
        date:'2020-01-30',
        summary:'El Smilodon, también conocido como el -tigre dientes de sable-, era un felino gigante que vivió durante el Pleistoceno en América del Norte y del Sur. Aunque se le conoce popularmente como -dientes de sable-, no era un tigre, sino más cercano a los leones y tigres modernos. Su característica más distintiva era su par de colmillos largos y curvados, que podían medir hasta 30 centímetros de longitud en algunas especies.',
        completeInformation:'El Smilodon, también conocido como el -tigre dientes de sable-, era un felino gigante que vivió durante el Pleistoceno en América del Norte y del Sur. Aunque se le conoce popularmente como -dientes de sable-, no era un tigre, sino más cercano a los leones y tigres modernos. Su característica más distintiva era su par de colmillos largos y curvados, que podían medir hasta 30 centímetros de longitud en algunas especies. El Smilodon era un depredador formidable que cazaba grandes mamíferos herbívoros, como bisontes y caballos prehistóricos. Su técnica de caza consistía en emboscar a sus presas y utilizar sus potentes mandíbulas y colmillos para dar golpes mortales. Su cráneo robusto y sus poderosos músculos en el cuello le proporcionaban una mordida excepcionalmente fuerte. A pesar de ser un depredador temible, los Smilodones se extinguieron hace aproximadamente 10,000 años, junto con muchos otros grandes mamíferos del Pleistoceno, probablemente debido a la disminución de sus presas y cambios en el entorno.'
    },
    {
        id:9,
        imgSource:'../images/mamut.jpeg',
        title:'Vaca', 
        author:'Margaret Rose',
        date:'2022-07-11',
        summary:' Los bovinos domesticados, como las vacas, eran cruciales para las sociedades neolíticas. Proporcionaban leche, carne, cuero y fuerza para labores agrícolas y de transporte.',
        completeInformation:'La domesticación de vacas fue fundamental para la revolución agrícola. Las vacas proporcionaban una fuente constante de leche, que podía consumirse directamente o transformarse en productos lácteos como queso y mantequilla. Además, su carne era valiosa y se utilizaba en celebraciones y eventos importantes. Los bueyes, castrados para el trabajo, desempeñaban un papel vital en la labranza de campos y en el transporte.'
    },

    {
        id:10,
        imgSource:'../images/smilodon.jpeg',
        title:'Oveja', 
        author:'Michael Jackson',
        date:'2020-01-30',
        summary:'La domesticación de ovejas permitió la obtención de lana para la confección de ropa y textiles. También se aprovechaba su carne y piel.',
        completeInformation:'La domesticación de ovejas tenía un enfoque multifacético. Además de su carne, se valoraba la lana, que se hilaba y tejía para crear textiles y prendas de vestir. Las ovejas también proporcionaban pieles y cuero, que eran útiles para la fabricación de calzado y otros objetos.'
    },
    {
        id:11,
        imgSource:'../images/mamut.jpeg',
        title:'Cabra', 
        author:'Cristobal Colón',
        date:'2022-07-10',
        summary:'Al igual que las ovejas, las cabras eran fuente de lana y carne. Además, su habilidad para adaptarse a terrenos difíciles las hacía valiosas para comunidades que vivían en áreas montañosas.',
        completeInformation:'Las cabras eran animales versátiles en el neolítico. Al igual que las ovejas, se criaban por su lana, carne y piel. Sin embargo, las cabras destacaban por su capacidad para sobrevivir en terrenos más difíciles y accidentados, lo que las convertía en una opción valiosa para comunidades que habitaban en áreas montañosas.'
    },

    {
        id:12,
        imgSource:'../images/smilodon.jpeg',
        title:'Cerdo', 
        author:'Pamela Murillo',
        date:'2020-01-30',
        summary:'Los cerdos proporcionaban carne y grasa, además de ser animales eficientes en la conversión de desechos orgánicos en alimento. Su domesticación era común en asentamientos neolíticos.',
        completeInformation:'La domesticación de cerdos trajo consigo un suministro constante de carne y grasa. Los cerdos eran omnívoros y podían alimentarse de desechos orgánicos y restos de alimentos, convirtiéndolos en eficientes "recicladores" y ayudando a eliminar desperdicios de manera sostenible.'
    },
]

let extinctionEvents = [
    {
        id:13,
        imgSource:'../images/mamut.jpeg',
        title:'Extinción Ordovícico-Silúrico', 
        author:'El Chavo del Ocho',
        date:'2020-07-10',
        summary:'Ocurrió hace aproximadamente 443 millones de años debido a factores como el enfriamiento global y la disminución del nivel del mar. Se estima que alrededor del 85% de las especies marinas desaparecieron, especialmente los invertebrados.',
        completeInformation:'Hace aproximadamente 443 millones de años, este evento devastó principalmente a los océanos. Las glaciaciones globales redujeron los niveles del mar y alteraron los patrones climáticos, resultando en la pérdida de alrededor del 85% de las especies marinas, incluidos corales y trilobites.'
    },

    {
        id:14,
        imgSource:'../images/smilodon.jpeg',
        title:'Extinción Devónico-Triásico', 
        author:'Michael Jackson',
        date:'2020-01-30',
        summary:'Sucedió hace unos 359 millones de años debido a cambios climáticos y la liberación de gases volcánicos. Cerca del 75% de las especies marinas se extinguieron, incluyendo trilobites y corales.',
        completeInformation:'A lo largo de un período de unos 20 millones de años, que culminó hace unos 359 millones de años, varias fases de extinción afectaron principalmente a los ecosistemas marinos. Los cambios climáticos, la disminución de los niveles de oxígeno en el agua y la actividad volcánica contribuyeron a la desaparición de aproximadamente el 75% de las especies marinas, incluidos los peces y los ammonites.'
    },
    {
        id:15,
        imgSource:'../images/mamut.jpeg',
        title:'La Gran Mortandad', 
        author:'George Washington',
        date:'2021-02-14',
        summary:'Ocurrió hace aproximadamente 252 millones de años, siendo la más devastadora. Se cree que alrededor del 96% de todas las especies marinas y el 70% de las terrestres se extinguieron debido a la actividad volcánica intensa y el cambio climático.',
        completeInformation:'Conocido como el evento de extinción más grave, ocurrió hace aproximadamente 252 millones de años. La actividad volcánica masiva en lo que hoy es Siberia liberó grandes cantidades de gases de efecto invernadero y tóxicos, provocando un calentamiento global extremo y acidificación del océano. Alrededor del 96% de las especies marinas y el 70% de las terrestres se extinguieron, incluyendo los trilobites y los primeros tetrápodos.'
    },

    {
        id:16,
        imgSource:'../images/smilodon.jpeg',
        title:'Extinción Triásico-Jurásico', 
        author:'Michael Jackson',
        date:'2018-06-29',
        rating:5,
        summary:'Aconteció hace unos 201 millones de años, probablemente debido a la actividad volcánica y cambios climáticos. Afectó principalmente a especies marinas, como los amonites.',
        completeInformation:'Hace unos 201 millones de años, este evento afectó principalmente a las especies marinas. Si bien no fue tan severo como otros, todavía resultó en la pérdida significativa de biodiversidad. La causa exacta no está clara, pero se ha sugerido que la actividad volcánica y los cambios climáticos jugaron un papel importante.'
    },
    {
        id:17,
        imgSource:'../images/mamut.jpeg',
        title:'Extinción de los dinosaurios', 
        author:'María Antonieta de los Ángeles',
        date:'2022-07-18',
        rating:4,
        summary:'Sucedió hace unos 66 millones de años, causada por el impacto de un asteroide y las consecuencias climáticas que siguieron. Resultó en la extinción de los dinosaurios no aviares y aproximadamente el 75% de todas las especies en la Tierra.',
        completeInformation:'Quizás el evento de extinción más famoso, ocurrió hace unos 66 millones de años. El impacto de un asteroide en la península de Yucatán (México) generó incendios forestales, tsunamis y una "invierno nuclear" debido a la liberación de partículas en la atmósfera. Esto resultó en la extinción de los dinosaurios no aviares y aproximadamente el 75% de las especies en la Tierra, abriendo paso a la era de los mamíferos.'
    },

    {
        id:18,
        imgSource:'../images/smilodon.jpeg',
        title:'Extinción del Holoceno', 
        author:'Juanito Mora',
        date:'2019-04-26',
        rating:5,
        summary:'Es la extinción actual, marcada por la actividad humana. Aunque no se clasifica como un evento masivo en términos geológicos, está provocando la desaparición acelerada de muchas especies debido a la pérdida de hábitat, la contaminación y el cambio climático.',
        completeInformation:'Este es el evento de extinción actual, impulsado por la actividad humana. Aunque no es un evento geológico masivo en el mismo sentido que los anteriores, está teniendo un impacto descomunal en la biodiversidad. La deforestación, la contaminación, la degradación del hábitat y el cambio climático causados por las actividades humanas están acelerando la extinción de muchas especies en todo el mundo.'
    },
]



var categories = [ 
    {
       name: 'Geological Eras',
       posts: geologicalPosts
    },

    {
        name:'Animals',
        posts: animals
    },

    {
        name:'Extintion Events',
        posts: extinctionEvents
    }
]