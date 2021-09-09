import {Router} from "express";
import usuarioController from "../controllers/usuario.controller";

const usuarioRoute = Router( );


usuarioRoute.post('/cadastro', usuarioController.cadastrar);
usuarioRoute.post('/login', usuarioController.autenticar);
usuarioRoute.post('/listar', usuarioController.listarUsuarios);

export default usuarioRoute;