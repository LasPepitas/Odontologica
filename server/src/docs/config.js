import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'API Odontologica',
            version: '1.0.0',
            description: 'API para la gestion de citas medicas odontologicas',
            contact: {
                name: 'Valece',
                email: '',
            },
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Development server',
            },
            {
                url: 'https://odontologica.onrender.com',
                description: 'Production server',
            },
        ],
        tags: [{ name: 'user', description: 'Operations about user' }],
    },

    apis: ['./src/docs/*.yaml'],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

export const swaggerDocs = (app, port) => {
    app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
