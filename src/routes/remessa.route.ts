import {Router} from "express";
import authmiddleware from '../middleware/auth.middleware';
import remessaController from "../controllers/remessa.controller";

const remessaRoute = Router( );

remessaRoute.post(
    '/cadastrar/:_id',
    authmiddleware.autorizarUsuarioByToken,
    authmiddleware.autorizarUsuarioByParams,
    remessaController.cadastroRemessa
);

remessaRoute.post(
    '/listar/:_id',
    authmiddleware.autorizarUsuarioByToken,
    authmiddleware.autorizarUsuarioByParams,
    remessaController.listarRemessas
);

remessaRoute.put(
    '/atualizar/:_id',
    authmiddleware.autorizarUsuarioByToken,
    authmiddleware.autorizarUsuarioByParams,
    remessaController.atualizarRemessas
);

export default remessaRoute;