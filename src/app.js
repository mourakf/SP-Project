import express from "express";
import db from "./connection/dbConnect.js";
import routes from './Routes/index.js'


const app = express();
app.use(express.json())

routes(app)

app.listen(3000)


export default app