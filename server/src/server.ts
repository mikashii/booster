
import express from 'express'
const app = express();
import routes from './routes';
import path from 'path';

app.use(express.json()); //JSON type data
app.use(routes);

app.use('/tmp', express.static(path.resolve(__dirname, '..', 'tmp')));







app.listen(3000, () => {
    console.log(`Servidor iniciado na porta 3000`)
})


