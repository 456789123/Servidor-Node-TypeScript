import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import usuarioRoute from "./routes/usuario.route";
import mensagemRoute from "./routes/mensagem.route";
import testRoute from "./routes/test.serve.route";
import remessaRoute from './routes/remessa.route';

export class App {

    private express: express.Application;
    private porta = 3000;

    constructor( ) {
        this.express = express();
        this.middleware( );
        this.database( );
        this.routes( );
        this.listen( );
    }

    public getApp( ): express.Application {
        return this.express;
    }

    private middleware( ): void {
        this.express.use(express.json());
        this.express.use(cors());
    }

    private listen( ): void {
        this.express.listen( this.porta, () => {
            console.log(`Servidor iniciado na porta ${this.porta}...`)
        });
    }

    private database( ): void {
        mongoose.connect(`mongodb+srv://<user_name>:<password>@cluster0.lxtrm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
        {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
    }

    private routes( ): void {
        this.express.use('/', testRoute);
        this.express.use('/usuarios', usuarioRoute);
        this.express.use('/remessas', remessaRoute);
        this.express.use('/mensagens', mensagemRoute);
    }

}
