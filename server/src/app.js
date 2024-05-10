import express from 'express';
import cors from 'cors';
import { auth } from 'express-openid-connect';
import fileUpload from 'express-fileupload';

import AuthRoutes from './routes/auth.routes.js';
import GoogleRoutes from './routes/google.routes.js';
import AppointmentRoutes from './routes/appointment.routes.js';
import UserRoutes from './routes/user.routes.js';
import NotificationRoutes from './routes/notification.routes.js';
import './models/relations.js';

const config = {
    authRequired: false,
    auth0Logout: true,
    secret: 'MWqCXqFwB7vJMouJRwg0N-sK2kVfTRYfYo4PU9YTcFiza22G3zp9TMeAGfk5Z9tX',
    baseURL: 'https://odontologica.onrender.com',
    clientID: 'af2OjaXew9TDVBvoolXMo1LkL19qD0Si',
    issuerBaseURL: 'https://valece.us.auth0.com',
};

const app = express();

app.use(cors());
app.use(express.json());
app.use(auth(config));
app.use(
    fileUpload({
        useTempFiles: true,
        tempFileDir: './uploads',
    }),
);

app.get('/', (req, res) => {
    // Verifica si el usuario está autenticado
    if (req.oidc.isAuthenticated()) {
        // Obtén los datos del usuario
        const usuario = req.oidc.user;
        // Codifica los datos del usuario en formato JSON y base64
        const usuarioCodificado = Buffer.from(JSON.stringify(usuario)).toString(
            'base64',
        );
        // Redirige al usuario a tu página web después de la autenticación y pasa los datos del usuario como parámetro de consulta en la URL
        res.redirect(
            `https://odontologica.pages.dev/login?usuario=${usuarioCodificado}`,
        );
    } else {
        res.send('Hola mundo!');
    }
});
app.use('', GoogleRoutes);
app.use('/api/v1/auth', AuthRoutes);
app.use('/api/v1/appointments', AppointmentRoutes);
app.use('/api/v1/users', UserRoutes);
app.use('/api/v1/notifications', NotificationRoutes);

export default app;
