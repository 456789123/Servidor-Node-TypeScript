import {Response} from "express";
import UsuarioModel from '../models/usuario.model';

class UsuarioController {

    public async cadastrar( req: Request, res: Response): Promise<Response> {
        const usuario = await UsuarioModel.create(req.body);
        const resposta = {
            message: 'Usuario cadastrado com sucesso!',
            _id: usuario._id,
            clinica: usuario.clinica,
            nome: usuario.nome,
            senha: usuario.senha,
        };
        return res.json(resposta);
    }

    public async autenticar( req: Request, res: Response ): Promise<Response> {
        const { clinica, nome, senha } = req.body;

        let usuario;

        usuario = await UsuarioModel.findOne({ clinica, nome, senha });
        if(!usuario) {
            return res.status(400).send({ message: 'Usuário não encontrado!'});
        }

        // const senhaValida = await UsuarioModel.compararSenhas(String(senha));
        // if(!senhaValida) {
        //     return res.status(400).send({ message: 'Senha incorreta!!'});
        // }

        return res.json({
            usuario: usuario,
            token: usuario.gerarTokens()
        });
    }

    public async listarUsuarios( req: Request, res: Response ): Promise<Response> {
        let listaUsuarios = await UsuarioModel.find( );
        return res.json(listaUsuarios);
    }
}

export default new UsuarioController( );