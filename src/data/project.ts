export type Project = {
  [key: string]: any;
};

export const projects: Project[] = [
  {
    name: 'Metadiv.io',
    pic: '/project/metadiv.webp',
    description:
      'Implemented the backend modules of an ERP system using their open source modules - ',
    outcomes: [
      'Start learning Go',
      'Gained solid experince in Gin and Gorm',
      'Touched system design',
    ],
    stacks: {
      language: ['Golang'],
      'version controll': ['Github', 'Gitlab'],
    },

    link: 'https://metadiv.io/',
  },
  {
    name: 'i-Momentum',
    pic: '/project/i-momentum.webp',
    description:
      'Small scale, experimental, thin stacked job posting application',
    outcomes: [
      'Designed, engineered a full-stack web app',
      'Feels good to experimenting Newxt 14 Server Action',
      'Knew More about App Routing: rendering pattern, middleware and data revalidation',
    ],
    stacks: {
      'Full-Stack': ['Next.js'],
      Design: ['Tailwind', 'CSS'],
      Database: ['Drizzle ORM', 'Planet Scale'],
      Deploy: ['Vercel'],
    },

    link: 'https://i-momentumsearch.com/',
  },
  {
    name: 'Booga Hong Kong',
    pic: '/project/boogabot.webp',
    description:
      'Web application for telecom service broker based in Hong Kong. (only in cantonese language)',
    outcomes: [
      'Built Complex UI components',
      'Solve Payment and Delivery problems',
      'Gained SEO Knowledge',
    ],
    stacks: {
      Frontend: ['Next.js'],
      Design: ['Tailwind', 'CSS'],
      CMS: ['Next.js', 'Strapi'],
      Backend: ['Node.js', 'Express.js'],
      Cloud: ['Digital Ocean', 'AWS Lambda & SQS'],
    },

    link: 'https://booga.com.hk/',
  },
];
// export const learnings: Project[] = [
//   {
//     name: 'Go RESTful API',
//     pic: '/project/golangapi.webp',
//     description: 'Learning Golang by building RESTful API',
//     outcome: [
//       "Using Go's standard library to build HTTP server",
//       "Intergrated Planet Scale's MySQL database",
//       'Current stage: implemented jwt authentication',
//     ],
//     stacks: {
//       Backend: ['Golang'],
//       Database: ['Planet Scale'],
//     },
//     link: 'https://github.com/JensonCode/go-restful-api',
//   },

//   {
//     name: 'Artwork',
//     pic: '/project/artwork.webp',
//     description: 'College assignment: Enable artwork search and add favorite',
//     outcome: [
//       'Managed react states with Jotai',
//       'Gain knowlegde of authentication and JWT',
//       'Combined the usage of Mongoose and Express.js for CRUD opertaions',
//       'Appreciated the convenience of Bootstrap components',
//     ],
//     stacks: {
//       Frontend: ['Next.js'],
//       Design: ['Bootstrap', 'CSS'],
//       Database: ['MongoDB'],
//       Backend: ['Node.js', 'Express.js'],
//       Deploy: ['Vercel'],
//     },
//     link: 'https://web-422-assignment-6-self.vercel.app/',
//   },
// ];
