import express from 'express';
import cors from 'cors';
import { auth } from 'express-openid-connect';
import AuthRoutes from './routes/auth.routes.js';
import GoogleRoutes from './routes/google.routes.js';

const config = {
    authRequired: false,
    auth0Logout: true,
    secret: 'MWqCXqFwB7vJMouJRwg0N-sK2kVfTRYfYo4PU9YTcFiza22G3zp9TMeAGfk5Z9tX',
    baseURL: 'http://localhost:3000',
    clientID: 'af2OjaXew9TDVBvoolXMo1LkL19qD0Si',
    issuerBaseURL: 'https://valece.us.auth0.com',
};

const app = express();

app.use(cors());
app.use(express.json());
app.use(auth(config));

app.get('/', (req, res) => {
    // Verifica si el usuario está autenticado
    if (req.oidc.isAuthenticated()) {
        // Redirige al usuario a tu página web después de la autenticación
        res.redirect('https://odontologica.pages.dev');
    } else {
        // Si no está autenticado, muestra un mensaje de bienvenida
        res.send('Hola mundo!');
    }
});
app.use('/api/v1/auth', AuthRoutes);
app.use('', GoogleRoutes);

export default app;
