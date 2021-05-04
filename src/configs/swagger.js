export default {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Nodejs-Boilerplate",
      version: "1.0.0",
      description:
        "The API documentation of a boilerplate/starter project for quickly building RESTful APIs using Node.js, Express, and Mongoose.",
      license: {
        name: "MIT",
        url: "https://choosealicense.com/licenses/mit/",
      },
      contact: {
        name: "Eren Doğruca",
        url: "https://github.com/eroo36",
        email: "edogruca@gmail.com",
      },
    },
    basePath: "/api",
    servers: [
      {
        url: "http://localhost:2000/api/",
      },
    ],
  },
  tags: [
    {
      name: "User",
      description: "API for users",
    },
  ],
  apis: ["src/models/*.js", "src/services/*"],
};
