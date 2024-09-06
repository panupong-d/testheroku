const swaggerAutogen = require('swagger-autogen')();


const doc = {
  info: {
    title: "API_DATA103",
    description: "API description",
  },
  host: 'localhost:3005',
  schemes: ['http'],
  tags: [
    {
      name: "Food",
      description: "ALL API FOOD"
    },
    {
      name: "Location",
      description: "ALL API LOCATION"
    }
  ]
};

// const outputFile = './swagger-output.json';
const endpointsFiles = ['./routes/data103Routes.js','./routes/data1033Routes.js'
];

//  swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  // require('./index.js'); // Your project's root file
//  });
