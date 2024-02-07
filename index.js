import express,{json} from 'express';
import routes from './src/routes'
const app = express();
const port = 3000;

app.get('/test', (req, res) => {
  res.send('Hello, Express with import!');
});

app.use(json());

app.use('/api/v1', routes); 

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
