import { Schema, model } from "mongoose";

const MensagemSchema = new Schema({
    texto: {
        type: String,
        required: true,
    },
    createAt: {
        type: Date,
        default: Date.now,
    },
    remetente: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: false,
    },
    destinatario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: false,
    }
});

export default model('Mensagem', MensagemSchema );