export const string = {
  metadata: {
    title: 'IdeaToCode',
    titleTemplate: '%s | IdeaToCode',
    description: `Studio de développement full-stack. Applications web, mobile, API et infrastructure. Du code léger, stable, taillé pour durer en production.`,
    url: 'https://ideatocode.io',
    siteName: 'IdeaToCode',
    locale: 'fr_FR',
    keywords: [
      'développement web',
      'studio de développement',
      'application web sur-mesure',
      'application mobile',
      'API',
      'Next.js',
      'TypeScript',
      'DevOps',
      'refonte logicielle',
      'freelance développeur',
    ],
    pages: {
      services: {
        title: 'Services',
        description: `Quatre formats pour quatre intentions : landing page, site vitrine, application web sur-mesure ou intervention sur un existant. Périmètre défini, tarif affiché.`,
      },
      projects: {
        title: 'Projets',
        description: `Sites, applications, APIs et refontes techniques. Un aperçu de ce que nous avons construit pour nos clients.`,
      },
      contact: {
        title: 'Contact',
        description: `Parlons de votre projet. Un premier échange pour comprendre votre besoin, clarifier vos contraintes et vous proposer une approche concrète.`,
      },
    },
  },

  nav: {
    links: [
      { text: 'Accueil', url: '/' },
      { text: 'Services', url: '/services' },
      { text: 'Projets', url: '/projects' },
    ],
    ctaButton: 'Lancer votre projet',
    menuOpen: 'Ouvrir le menu',
    menuClose: 'Fermer le menu',
  },

  footer: {
    links: [
      { text: 'Accueil', url: '/' },
      { text: 'Services', url: '/services' },
      { text: 'Projets', url: '/projects' },
      { text: 'Contact', url: '/contact' },
    ],
    copyright: 'IdeaToCode. Tous droits réservés.',
  },

  home: {
    hero: {
      tagline: 'STUDIO DE DÉVELOPPEMENT',
      title: 'Une Idée ? On la Code !',
      subtitle: 'Du code qui tient, des produits qui durent',
      desc: `Applications web, mobile et infrastructures sur-mesure. Pas de couches inutiles, juste ce qu'il faut pour que votre produit tienne en production.`,
      ctaPrimary: 'Lancer votre projet',
      ctaSecondary: 'Voir nos réalisations',
    },
    about: {
      label: 'Studio indépendant',
      title: `Full-stack, de l'interface à la production`,
      desc: `Un seul interlocuteur pour couvrir toute la chaîne :\nconception produit, front, back, API, mobile et infrastructure. Pas d'intermédiaire, pas d'usine à gaz, juste du code qui fait son travail et qui ne casse pas.`,
    },
    stats: {
      items: [
        { value: '20+', label: 'Projets livrés' },
        { value: 'Full-stack', label: `Du front à l'infra` },
        { value: 'Cloud-native', label: 'Hébergement moderne' },
        { value: 'Sur-mesure', label: 'Code pensé pour vous' },
      ],
      trustLabel: 'Ils nous ont fait confiance',
    },
    expertise: {
      tagline: 'EXPERTISES',
      title: 'Ce que nous livrons',
      cards: [
        {
          title: 'Frontend & UI',
          description: `Interfaces Next.js, React, TypeScript et Tailwind. Rapides à charger, propres à maintenir, pensées pour l'utilisateur final.`,
        },
        {
          title: 'Backend & API',
          description: `APIs Node.js et Hono, bases PostgreSQL, back-offices Strapi. Architectures simples, robustes et documentées.`,
        },
        {
          title: 'Mobile',
          description: `Applications iOS et Android en Flutter ou React Native. Une seule base de code, des performances natives.`,
        },
        {
          title: 'DevOps & Infrastructure',
          description: `Docker, Kubernetes, Terraform, Linux. Des déploiements reproductibles sur du cloud moderne qui scale quand il faut.`,
        },
      ],
    },
    portfolio: {
      tagline: 'RÉALISATIONS',
      title: 'Quelques projets récents',
      viewAll: 'Tout voir',
    },
    methodology: {
      tagline: 'MÉTHODE',
      title: 'De la discussion à la mise en production',
      steps: [
        {
          number: 1,
          title: 'Cadrage',
          description: `Nous comprenons votre besoin, vos contraintes et vos utilisateurs. Un périmètre clair, un devis précis, sans zones grises.`,
        },
        {
          number: 2,
          title: 'Conception',
          description: `Architecture technique, maquettes d'interface, choix de stack. Tout est arbitré avant la première ligne de code.`,
        },
        {
          number: 3,
          title: 'Développement',
          description: `Code itératif avec des points réguliers. Vous voyez le produit avancer en temps réel, pas uniquement à la livraison finale.`,
        },
        {
          number: 4,
          title: 'Mise en production',
          description: `Déploiement, monitoring, documentation, transfert. Et si vous le souhaitez, nous restons en support pour la suite.`,
        },
      ],
    },
    cta: {
      title: 'Un projet en tête ?',
      desc: `Une refonte, un nouveau produit, une API à construire ou une infra à stabiliser ? Parlons-en. Premier échange libre et sans engagement.`,
      button: 'Lancer votre projet',
    },
  },

  services: {
    hero: {
      tagline: 'SERVICES',
      title: 'Nos offres',
      desc: `Quatre formats pour quatre intentions distinctes. Chaque offre arrive avec un périmètre défini et un tarif de départ affiché.`,
    },
    strata: {
      tagline: 'EXPERTISES',
      title: 'De la surface aux fondations',
      desc: `Nous intervenons à chaque étage de votre produit, de l'interface que vos utilisateurs voient jusqu'à l'infrastructure qui la fait tourner.`,
      navAriaLabel: 'Navigation expertises',
      deliverablesLabel: 'Ce que nous livrons',
      stackLabel: 'Stack technique',
      layers: [
        {
          number: '01',
          label: 'BUILD',
          title: 'Création de vos produits',
          tagline: `De l'idée au produit en production`,
          paragraphs: [
            `Nous concevons des produits qui résolvent un vrai problème, codés pour durer. Pas des sites qui font joli sur une présentation commerciale et qui lâchent six mois après.`,
            `Du site vitrine à la webapp métier en passant par le mobile, nous couvrons tout le cycle technique :\narchitecture, code, tests, mise en production. Un seul interlocuteur, une stack cohérente, zéro sous-traitance.`,
          ],
          deliverables: [
            'Applications web sur-mesure',
            'Applications mobile (iOS & Android)',
            'Sites vitrines & landing pages',
            'Dashboards & back-offices',
          ],
        },
        {
          number: '02',
          label: 'CONNECT',
          title: 'Intégration à votre écosystème',
          tagline: 'Vos outils parlent enfin le même langage',
          paragraphs: [
            `Votre SI est un patchwork d'outils qui ne se parlent pas ? Nous branchons tout :\nCRM, ERP, facturation, analytics. La donnée circule, les saisies en double disparaissent.`,
            `Côté API, nous privilégions des stacks lightweight comme Hono :\nassez rapides pour tirer parti du scale-to-zero, assez simples pour qu'un développeur puisse reprendre le code six mois plus tard. Et quand l'IA peut vraiment faire gagner du temps, nous l'intégrons sans sur-ingénierie.`,
          ],
          deliverables: [
            'APIs REST & GraphQL (Hono, Node.js)',
            'Intégration LLM dans vos process',
            'Webhooks & automatisations',
            'Connecteurs tiers (Stripe, HubSpot...)',
          ],
        },
        {
          number: '03',
          label: 'RUN',
          title: 'Infrastructure & exploitation',
          tagline:
            'Votre produit tourne, scale et ne vous réveille pas la nuit',
          paragraphs: [
            `Un produit qui marche en local mais tombe en prod, ça ne sert à personne. Nous prenons en charge toute la chaîne d'exploitation :\ndéploiement, monitoring, sauvegardes, sécurité, CI/CD reproductible.`,
            `Côté hébergement, nous privilégions les PaaS modernes pour leur scale-to-zero, leur haute disponibilité et leurs coûts maîtrisés. Mais quand le contexte l'impose, nous gérons aussi les cloud publics, qu'il s'agisse des mastodontes américains ou de nos champions européens. L'objectif reste le même :\nvous éviter d'avoir toute votre infrastructure qui repose sur un VPS isolé et une configuration incertaine.`,
          ],
          deliverables: [
            'DevOps',
            'PaaS moderne / Cloud managé',
            'Administration système',
            'Monitoring, logs & sécurité',
          ],
        },
        {
          number: '04',
          label: 'MODERNIZE',
          title: `Évolution de l'existant`,
          tagline: 'Nous vous sortons de la dette technique',
          paragraphs: [
            `Un code qui a dix ans, que plus personne ne comprend vraiment et que vous ne pouvez pas jeter ? Nous auditons, nous refactorisons, nous migrons progressivement, sans casser la prod ni perdre de fonctionnalités au passage.`,
            `Pas de big bang risqué, pas de réécriture totale qui traîne deux ans :\nnous sécurisons le comportement existant avec des tests, nous extrayons les briques critiques, nous modernisons morceau par morceau. Même quand le legacy est en PHP ou en Java des années 2010, on trouve un chemin de sortie.`,
          ],
          deliverables: [
            'Migration legacy → moderne',
            `Refonte d'outils internes`,
            'Audit & résorption de dette technique',
            'Performance & optimisation',
          ],
        },
      ],
      finalCta: {
        number: '00',
        label: 'Prochaine étape',
        titleLines: ['Peu importe où vous en êtes,', 'nous prenons le relais.'],
        desc: `Un nouveau produit à lancer, une API à brancher, une infra à stabiliser ou un legacy à sauver ? Parlons-en. Sans engagement, sans jargon, juste une conversation.`,
        primaryButton: 'Lancer votre projet',
        secondaryButton: 'Voir nos réalisations',
        reassurance: [
          {
            title: 'Réponse sous 24h',
            desc: 'Nous revenons vers vous en un jour ouvré.',
          },
          {
            title: 'Devis gratuit',
            desc: 'Un chiffrage clair, sans mauvaise surprise.',
          },
          {
            title: 'Sans engagement',
            desc: `Premier échange libre, on avance si le projet nous correspond.`,
          },
        ],
      },
    },
  },

  projects: {
    hero: {
      tagline: 'RÉALISATIONS',
      title: 'Projets livrés',
      desc: `Un aperçu de ce que nous avons construit pour nos clients :\nsites, applications, APIs et refontes techniques.`,
      stats: [
        { label: 'Projets livrés' },
        { label: 'Technologies maîtrisées' },
        { label: 'Clients satisfaits' },
      ],
    },
    ctaCard: {
      tagline: 'Et le vôtre ?',
      title: 'Votre projet ici',
      desc: `Une idée, une refonte, une API à construire ? Parlons-en, sans engagement.`,
      button: 'Lancer votre projet',
    },
    testimonials: {
      tagline: 'TÉMOIGNAGES',
      title: `Ce qu'ils en disent`,
      desc: `La confiance de nos clients reste la meilleure mesure de notre travail.`,
    },
  },

  contact: {
    hero: {
      tagline: 'CONTACT',
      title: 'Parlons de votre projet',
      desc: `Un premier échange pour comprendre votre besoin, clarifier vos contraintes et vous proposer une approche concrète.`,
    },
    meeting: {
      tagline: 'RENDEZ-VOUS',
      title: 'Échangeons en direct',
      desc: `Vous préférez un échange direct ? Réservez trente minutes avec nous pour présenter votre projet, vos contraintes et vos objectifs.`,
      additional: `Cet échange est gratuit et sans engagement. Il nous permet de comprendre votre contexte et de vous orienter vers la bonne approche technique et budgétaire.`,
      button: 'Réserver un créneau',
    },
    social: {
      tagline: 'CONTACT DIRECT',
      title: 'Par email ou LinkedIn',
      desc: `Vous préférez rédiger un message détaillé ou garder une trace écrite ? Nous sommes joignables par email et sur LinkedIn.`,
      emailLabel: 'contact@ideatocode.io',
      linkedinLabel: 'LinkedIn',
    },
    form: {
      tagline: 'FORMULAIRE',
      title: 'Parlez-nous de votre projet',
    },
  },

  contactForm: {
    labels: {
      firstName: 'Prénom*',
      lastName: 'Nom*',
      email: 'Email*',
      phone: 'Téléphone',
      company: 'Société',
      projectType: 'Type de projet*',
      budget: 'Budget*',
      message: 'Décrivez votre projet',
    },
    placeholders: {
      projectType: 'Quel type de projet ?',
      budget: 'Choisissez une fourchette',
    },
    options: {
      projectType: [
        { value: 'landingpage', label: 'Landing Page' },
        { value: 'vitrinewebsite', label: 'Site Vitrine' },
        { value: 'SaaS', label: 'SaaS / Application web' },
        { value: 'Intervention', label: 'Intervention sur un projet existant' },
        { value: 'other', label: 'Autre' },
      ],
      budget: [
        { value: '<2000', label: '< 2 000€' },
        { value: '2000-5000', label: '2 000€ - 5 000€' },
        { value: '5000-15000', label: '5 000€ - 15 000€' },
        { value: '15000+', label: '15 000€ +' },
      ],
    },
    requiredHint: '* Champ obligatoire',
    submit: {
      idle: 'Lancer votre projet',
      loading: 'Envoi en cours...',
      success: 'Envoyé',
    },
    toasts: {
      success: 'Message envoyé !',
      error: 'Une erreur est survenue. Merci de réessayer.',
    },
  },

  projectCard: {
    viewProject: 'Voir le projet',
  },

  servicesCard: {
    priceLabel: 'Tarif',
    valueLabel: 'Valeur ajoutée',
    button: 'Lancer votre projet',
  },

  trustLogos: {
    ariaLabel: 'Nos clients',
  },
};
