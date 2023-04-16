import express from 'express'
import Bookrouter from '../Routes/BookRoutes.js'


const routes = (app) => {
    app.use(Bookrouter,
        express.json())

}

export default routes