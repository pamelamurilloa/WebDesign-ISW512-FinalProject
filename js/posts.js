var geologicalPosts = [
    {
        id:1,
        imgSource:"../images/cambrian.jpeg",
        title:"Cámbrico", 
        author:"PM",
        date:"24/10/2021",
        rating:1,
        summary:"El período Cámbrico fue testigo de una explosión de diversidad biológica conocida como la 'explosión cámbrica'. Aparecieron los primeros animales con conchas duras, esqueletos y estructuras complejas. Se formaron los primeros artrópodos, moluscos, equinodermos y trilobites. Los océanos estaban dominados por criaturas marinas y no había vida en la tierra firme.",
        completeInformation:"El período Cámbrico fue testigo de una explosión de diversidad biológica conocida como la 'explosión cámbrica'. Aparecieron los primeros animales con conchas duras, esqueletos y estructuras complejas. Se formaron los primeros artrópodos, moluscos, equinodermos y trilobites. Los océanos estaban dominados por criaturas marinas y no había vida en la tierra firme."
    },

    {
        id:2,
        imgSource:"../images/ordovician.jpeg",
        title:"Ordovícico", 
        author:"PM",
        date:"05/12/2020",
        rating:5,
        summary:"Durante el período Ordovícico, los océanos continuaron siendo el hábitat dominante, y los artrópodos y moluscos prosperaron. Se desarrollaron los primeros vertebrados acuáticos, como los peces sin mandíbulas y los peces con mandíbulas primitivas. Los corales y los briozoos construyeron arrecifes masivos. También se produjo una importante radiación de plantas y algas.",
        completeInformation:"Durante el período Ordovícico, los océanos continuaron siendo el hábitat dominante, y los artrópodos y moluscos prosperaron. Se desarrollaron los primeros vertebrados acuáticos, como los peces sin mandíbulas y los peces con mandíbulas primitivas. Los corales y los briozoos construyeron arrecifes masivos. También se produjo una importante radiación de plantas y algas."
    },

    {
        id:3,
        imgSource:"../images/silurian.jpeg",
        title:"Silúrico", 
        author:"PM",
        date:"01/07/2021",
        rating:3,
        summary:"Durante el período Silúrico, los océanos se volvieron más oxigenados y se formaron extensos bosques de algas y plantas terrestres primitivas. Los peces desarrollaron aletas más fuertes y pudieron salir del agua brevemente. También aparecieron los primeros insectos y arácnidos terrestres.",
        completeInformation:"Durante el período Silúrico, los océanos se volvieron más oxigenados y se formaron extensos bosques de algas y plantas terrestres primitivas. Los peces desarrollaron aletas más fuertes y pudieron salir del agua brevemente. También aparecieron los primeros insectos y arácnidos terrestres."    },

    {
        id:4,
        imgSource:"../images/devonian.jpeg",
        title:"Devónico", 
        author:"PM",
        date:"18/09/2020",
        rating:2,
        summary:"En el período Devónico, los peces con mandíbulas se diversificaron y se convirtieron en los principales depredadores en los océanos. Surgieron los primeros bosques verdaderos con árboles y plantas terrestres más avanzadas. Los insectos y arácnidos se volvieron más diversos y adaptados a la vida en tierra firme.",
        completeInformation:"En el período Devónico, los peces con mandíbulas se diversificaron y se convirtieron en los principales depredadores en los océanos. Surgieron los primeros bosques verdaderos con árboles y plantas terrestres más avanzadas. Los insectos y arácnidos se volvieron más diversos y adaptados a la vida en tierra firme."
    },

    {
        id:5,
        imgSource:"../images/carboniferous.jpeg",
        title:"Carbonífero", 
        author:"PM",
        date:"22/05/2021",
        rating:5,
        summary:"Durante el período Carbonífero, los bosques se expandieron enormemente y se formaron grandes depósitos de carbón. Los anfibios prosperaron y se diversificaron en diferentes formas y tamaños. Los insectos alcanzaron tamaños gigantes. Los primeros reptiles también aparecieron al final del período.",
        completeInformation:"Durante el período Carbonífero, los bosques se expandieron enormemente y se formaron grandes depósitos de carbón. Los anfibios prosperaron y se diversificaron en diferentes formas y tamaños. Los insectos alcanzaron tamaños gigantes. Los primeros reptiles también aparecieron al final del período."
    },

    {
        id:6,
        imgSource:"../images/permian.jpeg",
        title:"Pérmico", 
        author:"PM",
        date:"14/3/2021",
        rating:3,
        summary:"El período Pérmico presenció la formación de Pangea, un supercontinente que unió la mayoría de las masas terrestres. Los reptiles se convirtieron en los animales dominantes y aparecieron los primeros mamíferos y los primeros dinosaurios. Sin embargo, al final del Pérmico, ocurrió la extinción masiva más grande de la historia de la Tierra, eliminando alrededor del 96% de las especies marinas y el 70% de las especies terrestres.",
        completeInformation:"El período Pérmico presenció la formación de Pangea, un supercontinente que unió la mayoría de las masas terrestres. Los reptiles se convirtieron en los animales dominantes y aparecieron los primeros mamíferos y los primeros dinosaurios. Sin embargo, al final del Pérmico, ocurrió la extinción masiva más grande de la historia de la Tierra, eliminando alrededor del 96% de las especies marinas y el 70% de las especies terrestres."
    }

]

var otherPosts = [
    {
        id:7,
        imgSource:"../images/mamut.jpeg",
        title:"Mamut lanudo", 
        author:"PM",
        date:"10/7/2022",
        rating:4,
        summary:"El mamut lanudo fue una especie de elefante que habitó durante la era del Pleistoceno, específicamente en las regiones frías de América del Norte, Europa y Asia. Se caracterizaba por su pelaje largo y grueso, que le proporcionaba una excelente adaptación al clima frío de la época. Los mamuts lanudos tenían colmillos curvados hacia arriba, que podían medir hasta 5 metros de longitud en los machos adultos, y utilizaban estos colmillos para desenterrar vegetación cubierta por la nieve y para defenderse de depredadores.",
        completeInformation:"El mamut lanudo fue una especie de elefante que habitó durante la era del Pleistoceno, específicamente en las regiones frías de América del Norte, Europa y Asia. Se caracterizaba por su pelaje largo y grueso, que le proporcionaba una excelente adaptación al clima frío de la época. Los mamuts lanudos tenían colmillos curvados hacia arriba, que podían medir hasta 5 metros de longitud en los machos adultos, y utilizaban estos colmillos para desenterrar vegetación cubierta por la nieve y para defenderse de depredadores. Eran herbívoros, alimentándose principalmente de pasto, musgos y arbustos. Vivían en manadas familiares y migraban en busca de alimentos y condiciones más favorables. Durante el Pleistoceno, los mamuts lanudos coexistieron con los primeros humanos y fueron cazados por estos para obtener carne, piel y huesos para fabricar herramientas y refugios. Desafortunadamente, debido a la caza excesiva y los cambios climáticos, los mamuts lanudos se extinguieron alrededor de 4,000 años atrás."
    },

    {
        id:8,
        imgSource:"../images/smilodon.jpeg",
        title:"Smilodon", 
        author:"PM",
        date:"30/1/2020",
        rating:5,
        summary:"El Smilodon, también conocido como el 'tigre dientes de sable', era un felino gigante que vivió durante el Pleistoceno en América del Norte y del Sur. Aunque se le conoce popularmente como 'dientes de sable', no era un tigre, sino más cercano a los leones y tigres modernos. Su característica más distintiva era su par de colmillos largos y curvados, que podían medir hasta 30 centímetros de longitud en algunas especies.",
        completeInformation:"El Smilodon, también conocido como el 'tigre dientes de sable', era un felino gigante que vivió durante el Pleistoceno en América del Norte y del Sur. Aunque se le conoce popularmente como 'dientes de sable', no era un tigre, sino más cercano a los leones y tigres modernos. Su característica más distintiva era su par de colmillos largos y curvados, que podían medir hasta 30 centímetros de longitud en algunas especies. El Smilodon era un depredador formidable que cazaba grandes mamíferos herbívoros, como bisontes y caballos prehistóricos. Su técnica de caza consistía en emboscar a sus presas y utilizar sus potentes mandíbulas y colmillos para dar golpes mortales. Su cráneo robusto y sus poderosos músculos en el cuello le proporcionaban una mordida excepcionalmente fuerte. A pesar de ser un depredador temible, los Smilodones se extinguieron hace aproximadamente 10,000 años, junto con muchos otros grandes mamíferos del Pleistoceno, probablemente debido a la disminución de sus presas y cambios en el entorno."
    },
]

var categories = [ 
    {
       name: "Geological Eras",
       posts: geologicalPosts
    },

    {
        name:"Animals",
        posts: otherPosts
    }
]