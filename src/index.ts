import * as dotenv from "dotenv";
import express, { Request, Response} from "express";
import cors from "cors";
import helmet from "helmet";
import products_2 from "../data/products_2_db";
import { IProduct, Product, Products } from "../products.models";

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());

dotenv.config();


app.get('/', (req: Request, res: Response) => {
  res.send('API is running...');

});


app.get('/products', (req: Request, res: Response) => {

    res.json(products_2);


});


app.get('/products/:id', (req: Request, res: Response) => {
  const product = products_2.find((p) => p._id === req.params.id);
  res.json(product);
});


const PORT: number = parseInt(process.env.PORT as string, 10);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});