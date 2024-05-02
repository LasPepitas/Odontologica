import app from './app.js';
import './models/user.model.js';
import sequelize from './config/database.js';
app.listen(3000, async () => {
    try {
        // await sequelize.sync();
        await sequelize.authenticate();
        console.log('Database connected');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
    console.log('Server running on port 3000: http://localhost:3000');
});
