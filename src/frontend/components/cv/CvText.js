const introduction = 'A passionate, hands-on professional, with over 10 years '
  + 'experience in software development covering multiple technologies. I '
  + 'keep atop of new developments within the industry and can adapt quickly '
  + 'to new coding conventions. I am happy working independently or in a '
  + 'close team environment';

const skills = [
  {
    body: 'JavaScript',
    color: '#FFBCA0',
    list: [{
      skill: 'React',
      level: 85,
    },{
      skill: 'Redux',
      level: 85,
    },{
      skill: 'Node',
      level: 80,
    }],
  },
  {
    body: 'Java',
    color: '#90E580',
    list: [{
      skill: 'Spring',
      level: 70,
    },{
      skill: 'Hibernate',
      level: 80,
    },{
      skill: 'Maven',
      level: 90,
    },{
      skill: 'JUnit',
      level: 80,
    }],
  },
  {
    body: 'Ruby',
    color: '#F7F1AF',
    list: [{
      skill: 'Rspec',
      level: 70,
    },{
      skill: 'Sinatra',
      level: 65,
    }],
  },
  {
    body: 'Database',
    color: '#AFF7F0',
    list: [{
      skill: 'SQLServer',
      level: 90,
    },{
      skill: 'DynamoDB',
      level: 70,
    },{
      skill: 'PostgreSQL',
      level: 75,
    },{
      skill: 'MySQL',
      level: 80,
    },{
      skill: 'MongoDB',
      level: 80,
    }],
  },
  {
    body: 'AWS',
    color: '#E1C3F5',
    list: [{
      skill: 'EC2',
      level: 85,
    },{
      skill: 'Route53',
      level: 80,
    },{
      skill: 'SQS',
      level: 90,
    },{
      skill: 'S3',
      level: 90,
    }],
  },
];

const workExperencies = [
  {
    date: 'October 2013 – Present',
    role: 'Senior Developer',
    experiences: ['Developed internal web pages for monitoring and report '
      + 'editing using React.',
      'APIs generating maps with geolocated data created using Node.',
      'Developing new features and improving existing ones, removing '
      + 'Old legacy code replacing it with up to date standards.',
      'Ensuring deadlines are met, introducing the use of agile practices'
      + 'like Sprint Planning and Daily Scrum.',
      'Mentoring and helping team members to improve coding skills via '
      + 'peer review coding, shadowing.',
      'Introducing changes to improve system stability and '
      + 'performances strengthening the IT infrastructure through '
      + 'implementing new technologies.',
      'Reporting to the head of IT and to the managing director.',
      'Managed back end system migration from office based Servers to '
      + 'cloud based ones (AWS).',
      'Redeveloped backend system, making it microservices based',
      'Migration from Java based to Ruby based.',
      'Use of SQS, Dynamo, S3 and EC2 on AWS.',
      'Travis and Docker for building and deploying.'
      ],
  },
  {
    date: 'May 2012 – October 2013',
    role: 'Software Developer',
    experiences: ['Working on old legacy code (Java based)',
      'Introduced an improvement that sped up back end production by 40%.'
      ],
  },
  {
    date: 'December 2011 – May 2012',
    role: 'Software Development Manager',
    experiences: ['Writing documentation and development requests for an '
      + 'external company developing our websites (all C# based).',
      'Reviewing the code and analyzing the usage of our websites'
      + 'querying our database.',
    'Implementing an internal automated test tool based on Ruby.'
      ],
  },
  {
    date: 'December 2009 – November 2011',
    role: 'IT Technician',
    experiences: ['Main tasks were creating new OpenOffice templates and '
      + 'relative XSL properties files, updating MySql DB and throughout '
      + 'testing.',
      ],
  },
];

const education = [
  {
    date: '2000 - 2006',
    institute: 'Universita di Pisa',
    course: 'Computer Engineering',
    subjects: [
      'Operating systems', 'Mathematical analysis', 'C++',
      'HTML/CSS/JavaScript', 'Mark: 97 / 110'
      ],
  },
  {
    date: '1996 – 2000',
    institute: 'Liceo Scientifico Barsanti e Matteucci',
    course: 'PNI (National IT Plan)',
    subjects: [
      'Maths', 'Physics', 'English', 'Italian', 'Latin',
      'Computer Lab (Pascal)', 'Mark: 90 / 100'
      ],
  },
];

export { skills, introduction, workExperencies, education };