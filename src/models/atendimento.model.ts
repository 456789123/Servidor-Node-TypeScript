import { Schema, model, Document } from "mongoose";
import { AtendimentoInterface } from "../interfaces/atendimento.interface";

interface AtedimentoModel extends AtendimentoInterface, Document {

}

const AtedimentoSchema = new Schema({

    idRemessa: {
        type: Number,
        required: true,
    },
    numero: {
        type: Number,
        required: true,
    },
    paciente: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    dtEntrega: {
        type: String,
        required: false,
    },
    exame: {
        type: String,
        required: true,
    },
    receptor: {
        type: String,
        required: false,
    },
    assinatura: {
        type: String,
        required: false,
    },
    relatarProblemaObservacao: {
        type: String,
        required: false,
    }
});

export default model<AtendimentoInterface>('Atendimento', AtedimentoSchema );