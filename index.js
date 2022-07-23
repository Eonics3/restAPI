import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js'

//creating app and port for backend
const app = express();
const PORT = 5000;

//going to be using json data for whole app
app.use(bodyParser.json());

app.use('/users', usersRoutes)

//get => does callback function when user is on that link
app.get('/', (req, res)=> {res.send('Hello from homepage')});

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));