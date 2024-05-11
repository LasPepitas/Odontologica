import app from './app.js';
import './models/user.model.js';
import sequelize from './config/database.js';
import { swaggerDocs } from './docs/config.js';
app.listen(3000, async () => {
    try {
        // await sequelize.sync({
        //     force: true,
        // }); // No ejecutar en producción
        await sequelize.authenticate();
        console.log('Database connected');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
    console.log('Server running on port 3000: http://localhost:3000');
    swaggerDocs(app);
});
