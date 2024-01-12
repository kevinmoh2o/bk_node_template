const express = require('express')
const cors = require('cors')

class Server {

    constructor() {
        this.app = express();
        this.port= process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //Middlewares  -- funciones otra funcionalidad
        this.middlewares();
        
        //rutas
        this.routes();
    }

    routes() {
        this.app.use(this.usuariosPath, require('../routes/usuarios'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("Rest servr corriendo en: ", this.port);
        })
    }

    middlewares(){
        //CORS
        this.app.use(cors());

        //Lectura y parseo del body
        this.app.use(express.json())

        //WEB page static
        this.app.use(express.static('public'));
    }

}

module.exports = Server;