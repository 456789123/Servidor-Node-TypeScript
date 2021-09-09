import {NextFunction, Request, Response} from "express";
import {UsuarioInterface} from "../interfaces/usuario.interface";
import usuarioModel from "../models/usuario.model"

import jwt from "jsonwebtoken";

class AuthMiddleware {

    public async autorizarUsuarioByToken( req: Request, res: Response, next: NextFunction ): Promise< Response | void >{
        const token = req.query.token || req.headers['x-acces-token'];
        if(!token) {
            return res.status(401).send({ message: 'Acesso restrito!' });
        }
        try {
            const usuarioToken = jwt.verify(token, 'SOFTURE') as UsuarioInterface;

            const usuario = await usuarioModel.findById( usuarioToken._id);

            if(!usuario) {
                return res.status(400).send({ mensagem: 'Usuário não existe no banco de dados!'});
            }

            req.usuario = usuario;

            return next();

        }catch ( error ) {
            return res.status(401).send({ message: 'Token Invalido!' });
        }

    }


    public async autorizarUsuarioByParams( req: Request, res: Response, next: NextFunction ): Promise<Response | void >{

        try {
            const usuario = await usuarioModel.findById( req.params._id );

            if(!usuario) {
                return res.status(400).send({ mensagem: 'Usuário não existe no banco de dados!'});
            }

            req.usuarioChat = usuario;

            return next();

        }catch ( error ) {
            return res.status(401).send({ message: 'Usuario Invalido!' });
        }

    }

}

export default new AuthMiddleware();