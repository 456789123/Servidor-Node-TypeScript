export interface AtendimentoInterface {
    _id: any | String;
    idRemessa: any | String;
    numero: Number;
    paciente: String;
    status: String;
    dtEntrega: String;
    exame: String;
    receptor?: String;
    assinatura?: String;
    relatarProblemaObservacao?: String;
}