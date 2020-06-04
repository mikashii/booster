
import routes from './routes';
import cors from 'cors'
import express from 'express'
const app = express();
import path from 'path';

app.use(cors())
app.use(express.json()); //JSON type data
app.use(routes);

app.use('/tmp', express.static(path.resolve(__dirname, '..', 'tmp')));







app.listen(3333, () => {
    console.log(`Servidor iniciado na porta 3333`)
})


