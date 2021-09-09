import { Schema, model, Document } from "mongoose";
import atendimentoModel from "./atendimento.model";
import {RemessaInterface} from "../interfaces/remessa.interface";
import { AtendimentoInterface } from "../interfaces/atendimento.interface";

interface RemessaModel extends RemessaInterface, Document {

}

const RemessaSchema = new Schema({
    idUsuario: {
        type: String,
        require: true,
    },
    clinica: {
        type: String,
        required: true,
    },
    localidade: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    codigo: {
        type: Number,
        required: true,
    },
    qtAtendimento: {
        type: Number,
        required: true,
    },
    previsao: {
        type: String,
        required: true,
    },
    entrega: {
        type: String,
        required: true,
    },
    alteracao: {
        type: Boolean,
        required: true,
    },
    atendimento: {
        type: Array,
        required: false,
    },
});

export default model<RemessaModel>('Remessa', RemessaSchema );