import { AtendimentoInterface } from "./atendimento.interface";

export interface RemessaInterface {
    _id: any | string;
    idUsuario: any | String;
    clinica: String;
    localidade: String;
    status: String;
    codigo: Number;
    qtAtendimento: Number;
    previsao?: String;
    entrega?: String;
    alteracao: Boolean;
    atendimento?: Array<AtendimentoInterface>[];
}