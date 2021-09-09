import {Response} from "express";
import RemessaModel from "../models/remessa.model";

class RemessaController {

    public async cadastroRemessa( req: Request, res: Response ): Promise<Response>  {
        const remessa = await RemessaModel.create( req.body );
        const resposta = {
            id: remessa._id,
            previsao: remessa.status,
            clinica: remessa.clinica,
            localidade: remessa.localidade,
            message: 'Remessa cadastrada com sucesso!',
        }
        return res.json(resposta);
    }

    public async listarRemessas( req: Request, res: Response ): Promise<Response> {
        let listRemessas = await RemessaModel.find( { 'idUsuario' : req.params._id} );
        return res.json(listRemessas);
    }

    public async atualizarRemessas( req: Request, res: Response ): Promise<Response> {

        if( req.body.alteracao ) {

            req.body.alteracao = false;
            const filter = { _id: req.body._id };

            const remessa = await RemessaModel.findOneAndUpdate( filter, req.body );

            let resposta: Object = {};
            resposta.idUsuario = remessa.idUsuario;
            resposta.clinica   = remessa.clinica;
            resposta.entrega   = remessa.entrega;
            resposta.message   = 'Entrega feita com sucesso!';

            return res.json( resposta );
        } else {
            return res.send('Nenhuma remessa alterada.');
        }
    }

}

export default new RemessaController( );