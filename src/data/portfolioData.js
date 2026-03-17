export const portfolioData = {
  navigation: [
    { label: 'À propos', href: '#about' },
    { label: 'Expérience', href: '#experience' },
    { label: 'Compétences', href: '#skills' },
    { label: 'Projets', href: '#projects' },
    { label: 'Formation', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ],
  person: {
    name: 'Massinissa Messaoudi',
    title: 'Développeur Frontend',
    subtitle:
      'Je suis développeur web et mobile orienté React, React Native et TypeScript, et je recherche actuellement un poste en CDI.',
    availability: 'Je recherche actuellement un CDI',
    location: 'Paris, France métropolitaine',
    age: '24 ans',
    drivingLicense: 'Permis B',
    email: 'masi.messaoudi@gmail.com',
    phoneDisplay: '07 44 11 45 36',
    phoneLink: 'tel:+33744114536',
    emailLink:
      'mailto:masi.messaoudi@gmail.com?subject=Prise%20de%20contact%20depuis%20le%20portfolio',
    githubUrl: 'https://github.com/massimssd',
    linkedinUrl: 'https://www.linkedin.com/in/massinissa-messaoudi-89a295255/',
    profilePhotoUrl: '/profile-photo.jpg',
    photoAlt: 'Photo de profil de Massinissa Messaoudi',
    languages: ['Français', 'Anglais'],
    quickFacts: [
      { label: 'Localisation', value: 'Paris, France' },
      { label: 'Mobilité', value: 'Permis B' },
      { label: 'Disponibilité', value: 'Recherche active CDI' },
      { label: 'Langues', value: 'Français / Anglais' },
    ],
    heroFacts: [
      'React / React Native / TypeScript',
      'Produits web & mobile',
      'Agile, qualité et performance',
      'Disponible en CDI',
    ],
    heroVisualItems: [
      { label: 'Stack cœur', value: 'React, React Native, TypeScript' },
      { label: 'Collaboration', value: 'Product, Backend, Data' },
      { label: 'Fiabilisation', value: 'Tests, CI/CD, Sentry' },
      { label: 'Base', value: 'Paris, France métropolitaine' },
    ],
  },
  heroMetrics: [
    {
      title: 'Expérience produit',
      description:
        'J’ai travaillé sur un dashboard web et une application mobile dans un contexte professionnel concret.',
    },
    {
      title: 'Qualité logicielle',
      description:
        'Je porte une attention forte à la fiabilisation, aux flows critiques, aux tests automatisés et au monitoring.',
    },
    {
      title: 'Travail transverse',
      description:
        'Je collabore efficacement avec les équipes Product, Backend et Data dans des contextes agiles.',
    },
  ],
  about: {
    text:
      'Je suis développeur web et mobile spécialisé dans l’écosystème React, avec une expérience concrète sur des produits professionnels côté frontend et mobile. Je conçois des interfaces fiables, maintenables et orientées usage, avec un intérêt marqué pour la performance, la qualité logicielle, l’ergonomie et la collaboration inter-équipes. Mon parcours me permet de dialoguer aussi bien avec des profils Product qu’avec des équipes Backend ou Data, tout en gardant une forte exigence sur l’industrialisation frontend.',
    pillars: [
      {
        title: 'Exécution frontend solide',
        description:
          'Je structure des interfaces React claires, des composants réutilisables et un code facile à faire évoluer.',
      },
      {
        title: 'Culture mobile et full-stack',
        description:
          'J’interviens aussi sur React Native et je comprends les enjeux API, données et intégration côté produit.',
      },
      {
        title: 'Performance et fiabilité',
        description:
          'J’aime optimiser les flows critiques, sécuriser les usages et améliorer la robustesse globale du produit.',
      },
      {
        title: 'Collaboration agile',
        description:
          'Je m’adapte vite, je communique clairement et je travaille efficacement dans des environnements d’équipe.',
      },
    ],
  },
  experiences: [
    {
      company: 'Qucit',
      role: 'Développeur Web et Mobile',
      contract: 'Stage puis CDI',
      period: 'Février 2025 - Décembre 2025',
      location: 'Bordeaux, France',
      featured: true,
      description:
        'Chez Qucit, j’ai contribué au développement, à l’optimisation et à la fiabilisation du dashboard web et de l’application mobile BPR, avec un focus constant sur la performance, la qualité logicielle et l’amélioration continue.',
      achievements: [
        'J’ai développé des interfaces frontend en React et TypeScript avec une attention forte portée à la maintenabilité et à l’expérience utilisateur.',
        'J’ai travaillé sur des flows mobiles en React Native, notamment sur des parcours critiques nécessitant robustesse et fluidité.',
        'J’ai utilisé Redux Toolkit et Redux-Saga pour structurer une gestion d’état avancée sur des comportements applicatifs complexes.',
        'J’ai intégré Mapbox pour enrichir les usages cartographiques et les parcours métier.',
        'J’ai participé à la mise en place de pipelines CI/CD et à l’industrialisation des livraisons.',
        'J’ai mis en place et consolidé les tests automatisés avec Jest, Detox et Cypress.',
        'J’ai utilisé Sentry pour améliorer la supervision, la détection et la résolution des incidents.',
        'J’ai collaboré avec les équipes Product, Backend et Data pour faire évoluer le produit de manière fiable.',
      ],
      stack: [
        'React',
        'TypeScript',
        'React Native',
        'Redux Toolkit',
        'Redux-Saga',
        'Mapbox',
        'Jest',
        'Detox',
        'Cypress',
        'CI/CD',
        'Sentry',
      ],
    },
    {
      company: 'SHIFTIN',
      role: 'Développeur Web Full Stack',
      contract: 'Stage',
      period: 'Mars 2024 - Août 2024',
      location: 'Alger, Algérie',
      featured: false,
      description:
        'Chez SHIFTIN, j’ai participé au développement d’une application de gestion de projets collaboratifs, avec un scope couvrant le frontend React, les APIs Java / Spring Boot et la persistence PostgreSQL.',
      achievements: [
        'J’ai créé des interfaces dynamiques avec React pour piloter les utilisateurs, les projets et les tâches.',
        'J’ai implémenté des composants réutilisables pour accélérer le développement et homogénéiser l’interface.',
        'J’ai structuré les données côté client avec Redux.',
        'J’ai conçu des APIs RESTful avec Java et Spring Boot pour répondre aux besoins métier.',
        'J’ai utilisé PostgreSQL pour stocker les données métier liées à la gestion collaborative.',
      ],
      stack: [
        'React',
        'Redux',
        'Java',
        'Spring Boot',
        'PostgreSQL',
        'REST API',
      ],
    },
  ],
  skillGroups: [
    {
      title: 'Langages',
      description:
        'Je m’appuie sur un socle polyvalent pour développer des interfaces, comprendre le backend et aborder des problématiques algorithmiques.',
      items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C#'],
    },
    {
      title: 'Frameworks & bibliothèques',
      description:
        'Mon expertise est centrée sur React et React Native, avec une culture frontend et full-stack utile pour collaborer efficacement.',
      items: [
        'React',
        'React Native',
        'Vue.js',
        'Angular',
        'Node.js',
        'Spring Boot',
        'Django',
      ],
    },
    {
      title: 'Bases de données',
      description:
        'Je sais travailler avec des données relationnelles et documentaires selon les besoins du produit.',
      items: ['MongoDB', 'MySQL', 'PostgreSQL'],
    },
    {
      title: 'Outils',
      description:
        'J’utilise des outils de collaboration, d’industrialisation et de suivi qualité au service d’un cycle de développement fiable.',
      items: [
        'Git',
        'GitHub',
        'GitLab',
        'Docker',
        'Postman',
        'Jira',
        'Sentry',
        'Bitrise',
      ],
    },
    {
      title: 'Méthodologies',
      description:
        'Je travaille volontiers en Agile / Scrum avec des échanges réguliers et une logique d’amélioration continue.',
      items: ['Agile', 'Scrum'],
    },
  ],
  projects: [
    {
      type: 'Projet full-stack',
      title: 'Application de gestion de recettes de cuisine',
      description:
        'J’ai réalisé ce projet full-stack avec React en frontend, Node.js / Express en backend et MongoDB Atlas comme base de données cloud. J’y ai conçu une application qui couvre la consultation, l’ajout et la gestion de recettes dans une interface simple à parcourir.',
      highlights: [
        'J’ai conçu une interface orientée usage pour consulter et ajouter des recettes.',
        'J’ai développé la gestion des recettes avec un backend Node.js / Express.',
        'J’ai intégré une recherche avancée pour faciliter l’accès aux contenus.',
        'J’ai pris en compte les aspects de sécurité liés à la gestion des données.',
      ],
      stack: ['React', 'Node.js', 'Express', 'MongoDB Atlas'],
    },
    {
      type: 'Projet algorithmique',
      title: 'No Three in Line',
      description:
        'J’ai mené ce projet en Python autour de l’optimisation du problème No Three in Line, avec une analyse comparative de plusieurs approches de recherche locale afin d’évaluer leur comportement et leurs performances.',
      highlights: [
        'J’ai comparé Tabu Search, Local Search et Hill Climbing.',
        'J’ai analysé les performances et le comportement de convergence selon les approches.',
        'J’ai mis en avant une démarche rigoureuse d’analyse comparative entre plusieurs stratégies.',
      ],
      stack: ['Python', 'Tabu Search', 'Local Search', 'Hill Climbing'],
    },
  ],
  education: [
    {
      degree: 'Master Web et science des données',
      school: 'Université du Littoral Côte d’Opale',
      location: 'Calais',
      period: 'Septembre 2023 - Août 2025',
    },
    {
      degree: 'Licence 3 en Informatique',
      school: 'Université du Littoral Côte d’Opale',
      location: 'Calais',
      period: 'Septembre 2022 - Juin 2023',
    },
    {
      degree: 'Licence en Mathématique et Informatique',
      school: 'Université Abderrahmane Mira',
      location: 'Algérie',
      period: 'Septembre 2019 - Juillet 2022',
    },
  ],
  strengths: [
    {
      title: 'Adaptabilité',
      description:
        'Je prends rapidement mes repères dans de nouveaux environnements techniques et organisationnels.',
    },
    {
      title: 'Travail en équipe',
      description:
        'Je collabore naturellement dans des contextes agiles avec des profils complémentaires et des enjeux produit concrets.',
    },
    {
      title: 'Communication',
      description:
        'Je communique clairement pour partager l’avancement, clarifier un besoin et fluidifier la coordination.',
    },
    {
      title: 'Analyse',
      description:
        'J’aborde les sujets de façon structurée pour comprendre un problème, prioriser et proposer des solutions fiables.',
    },
  ],
}

export const experienceHighlights = [
  {
    title: 'Focus principal',
    description:
      'Je mets particulièrement en avant mon expérience chez Qucit, où j’ai travaillé sur des problématiques produit, mobile et qualité.',
  },
  {
    title: 'Écosystème moderne',
    description:
      'Je travaille avec React, React Native, TypeScript, Redux Toolkit, les tests automatisés, la CI/CD et le monitoring.',
  },
  {
    title: 'Collaboration transverse',
    description:
      'Je collabore avec les équipes Product, Backend et Data pour construire et faire évoluer des produits concrets.',
  },
]

export const contactCards = [
  {
    title: 'Email',
    text: 'Je privilégie ce canal pour échanger sur une opportunité, un entretien ou une première prise de contact.',
    value: 'masi.messaoudi@gmail.com',
    href: 'mailto:masi.messaoudi@gmail.com?subject=Prise%20de%20contact%20depuis%20le%20portfolio',
    icon: 'mail',
  },
  {
    title: 'Téléphone',
    text: 'Je suis disponible pour un premier échange autour d’un poste frontend, web ou mobile.',
    value: '07 44 11 45 36',
    href: 'tel:+33744114536',
    icon: 'phone',
  },
  {
    title: 'Localisation',
    text: 'Je suis basé à Paris et mobile pour une opportunité en France métropolitaine.',
    value: 'Paris, France métropolitaine',
    href: null,
    icon: 'location',
  },
  {
    title: 'GitHub',
    text: 'J’y partage mon profil technique et mon activité publique.',
    value: 'github.com/massimssd',
    href: 'https://github.com/massimssd',
    icon: 'github',
  },
  {
    title: 'LinkedIn',
    text: 'Vous pouvez aussi me contacter sur LinkedIn pour échanger sur une opportunité.',
    value: 'Massinissa Messaoudi',
    href: 'https://www.linkedin.com/in/massinissa-messaoudi-89a295255/',
    icon: 'linkedin',
  },
]
