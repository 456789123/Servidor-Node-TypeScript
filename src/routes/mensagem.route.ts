import {Router} from "express";
import mensagemController from "../controllers/mensagem.controller";
import authmiddleware from '../middleware/auth.middleware';

const mensagemRoute = Router( );

mensagemRoute.post(
    '/:_id',
    authmiddleware.autorizarUsuarioByToken,
    authmiddleware.autorizarUsuarioByParams,
    mensagemController.enviar
);

export default mensagemRoute;