import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Landry",
  initials: "DV",
  url: "https://github.com/burkinaDevelopper",
  location: "Rabat, MA",
  locationLink: "https://maps.app.goo.gl/iHZtYc6k2KqThb2U8",
  description:
    "Ingénieur logiciel et administrateur système. J'adore créer et aider les autres.",
  summary:
    "Fin 2025, j’ai arrêté le freelance à temps plein pour intégrer une entreprise française en CDI . Ingénieur en génie logiciel avec un Master en administration systèmes et réseaux, j’ai acquis une solide expérience à travers des stages dans de grandes entreprises à Casablanca et Rabat. Passionné par la tech, j’ai participé à plusieurs hackathons et développé des solutions pour des entreprises au Maroc et en France, en freelance.",
   
  avatarUrl: "/LANDRY600.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Vue.js",
    "Nuxt.js",
    "Linux",
    "Proxmox",
    "Docker",
    "Kubernetes",
    "Réseaux",
    "TailwindCSS",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "zoundilandry@gmail.com",
    tel: "+212 619354038",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/burkinaDevelopper",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/landry-zoundi",
        icon: Icons.linkedin,

        navbar: true,
      },
     
      email: {
        name: "Send Email",
        url: "mailto:zoundilandry@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Eco-propriete",
      href: "https://www.eco-propriete.fr/",
      badges: [],
      location: "Rabat, MA",
      title: "Ingénieur Système et Logiciel",
      logoUrl: "/ecopropriete-logo.png",
      start: "Decembre 2025",
      end: "meintenant",
      description:
        "Configuration proxmox,deployement et maintanance de machine virtuelle.,Configuration de réseau et de pare-feu pour assurer la sécurité des systèmes. Surveillance des performances du système et résolution des problèmes pour garantir une disponibilité maximale. Collaboration avec les équipes de développement pour optimiser les applications et les services hébergés sur les machines virtuelles. configuration de server mail pour la gestion des emails de l'entreprise.",
    },
    {
      company: "comato",
      badges: [],
      href: "https://comato.fr/",
      location: "Télétravail",
      title: "Ingénieur Logiciel",
      logoUrl: "/LOGO-REGION-ANOSY.png",
      start: "Fevrier 2025",
      end: "Avril 2026",
      description:
        "Developpement  d'une application web pour la gestion des navire et des equipe avec laravel et nuxt js.",
    },
    {
      company: "Digital Income",
      href: "https://www.digitalincome.ma/",
      badges: [],
      location: "Casablanca, MA",
      title: "Ingénieur Logiciel",
      logoUrl: "/digitalincome.jpg",
      start: "Janvier 2024",
      end: "Avril 2025",
      description:
        "Développer et sécuriser les API tests avec Insomnia et débogage des end points. Consommation d'API avec Vue.js et Nuxt.js. Mise en place de tests unitaires et d'intégration pour assurer la qualité du code. Collaboration avec les équipes de design pour créer des interfaces utilisateur intuitives et réactives. Optimisation des performances de l'application pour une meilleure expérience utilisateur.",
    },
    {
      company: "Cognicloud-Canada",
      href: "https://cognicloud.ca/fr/end-to-end-business-management",
      badges: [],
      location: "Télétravail",
      title: "Développeur Firebase/Next.js",
      logoUrl: "/logo.svg",
      start: "Janvier 2024",
      end: "Avril 2024",
      description:
        "ma mission principale est de développer et de mettre à jour des applications d'IA.. ajout d'une nouvelle fonctionnalité dans React (Next.js) mise à jour de Firebase pour améliorer les performances et la sécurité de l'application.",
    },
    {
      company: "Clinique Des Jardins",
      href: "https://cliniquedesjardins.com/",
      badges: [],
      location: "Casablanca, MA",
      title: "Ingénieur Logiciel",
      logoUrl: "/cliniquedesjardin.jfif",
      start: "Janvier 2023",
      end: "Septembre 2023",
      description:
        "Création de site web et page de prise de rendez-vous pour la clinique. Création d'un système de gestion de patients et de rendez-vous personnalisé pour la clinique en utilisant Django et React. Le système a permis à la clinique de réduire les erreurs de planification de 30 % et d'améliorer l'efficacité globale du personnel.",
    },
  ],
  education: [
    {
      school: "Ecole Polytechnique des Génies | Fez",
      href: "https://epg.ma",
      degree: "Master en administration systèmes, réseaux et securité",
      logoUrl: "/images.jpg",
      start: "2022",
      end: "2024",
    },
    {
      school: "supmti Beni Mellal",
      href: "https://supmti.ac.ma/contactez-nous-beni-mellal/",
      degree: "Ingénieur des systeme informatiques",
      logoUrl: "/supmti-logo.png",
      start: "2021",
      end: "2022",
    },
  ],
  projects: [
       {
      title: "Backoffice de gestion de navire",
      href: "https://comato.fr/",
      dates: "février 2024 - maintenant",
      active: true,
      description:
        "Développement d'une application web pour la gestion des navires et des équipages avec Laravel et Nuxt.js. L'application permet de suivre les itinéraires des navires, de gérer les horaires d'équipage et de surveiller les performances des navires en temps réel. J'ai également intégré des fonctionnalités de sécurité pour protéger les données sensibles et assurer la conformité aux réglementations maritimes.",
      technologies: [
        "Laravel",
        "Nuxt.js",
        "Typescript",
        "Bootstrap",
      ],
      links: [
        {
          type: "Website",
          href: "https://comato.fr/",
          icon: <Icons.globe className="size-3" />,
        },
         {
          type: "Source",
          href: "",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:"/Comato.mp4",
    },
      {
      title: "TMDB Movie Vue",
      href: "https://tmdb-movie-vue.netlify.app/",
      dates: "Avril 2022 - Mai 2022",
      active: true,
      description:
        "Intégration de l'API TMDB, qui répertorie les films les plus populaires. Cette application permet d'accéder aux notes des films et de les trier par nombre de mentions « J'aime ». Elle offre également la possibilité d'enregistrer des films directement dans le stockage local du navigateur pour les visionner ultérieurement.",
      technologies: [
        "React.js",
        "Typescript",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://tmdb-movie-vue.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
         {
          type: "Source",
          href: "https://github.com/burkinaDevelopper/vue-movie",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:"/tmbd-movie.mp4",
    },
    {
      title: "Watch tower",
      href: "https://bitcoin-management.netlify.app/",
      dates: "Avril 2022 - Mai 2022",
      active: true,
      description:
        "J'ai développé une application permettant de suivre en temps réel les fluctuations du Bitcoin et son taux de change. L'application intègre des graphiques interactifs et adaptatifs, offrant une visualisation claire des données, ainsi que plusieurs fonctionnalités pratiques pour une expérience utilisateur optimale.",
      technologies: [
        "React.js",
        "Typescript",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://bitcoin-management.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
         {
          type: "Source",
          href: "https://github.com/burkinaDevelopper/bitcoin-management",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "/bitcoin.mp4",
    },
  ],
 
} as const;
