import { Schema, model, Document } from "mongoose";
import {UsuarioInterface} from "../interfaces/usuario.interface";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

interface UsuarioModel extends UsuarioInterface, Document {
    // compararSenhas(senha: string): Promise<boolean>;
    gerarTokens( ): string;
}

const UsuarioSchema = new Schema({
    clinica: {
        type: String,
        required: true,
    },
    nome: {
        type: String,
        required: true,
    },
    senha: {
    type: String,
        required: true,
    },
});

// UsuarioSchema.pre<UsuarioModel>('save', async function criptografarSenha(){
//     this.senha = await bcrypt.hash(this.senha, 8);
// });

// UsuarioSchema.methods.compararSenhas = function( senha: string): Promise<boolean> {
//     return bcrypt.compare(senha, this.senha);
// }

UsuarioSchema.methods.gerarTokens = function(): string {

    const decodedToken = {
        _id: String(this._id),
        clinica: this.clinica,
        nome: this.nome
    }

    return jwt.sign(decodedToken, 'SOFTURE', {
        expiresIn: '1d'
    });
}

export default model<UsuarioModel>('Usuario', UsuarioSchema );