const primeiroNome: string = 'seu nome';
const diaDoMes: number = 12;
const hojeFezSol: boolean = true;

type Cachorro = {
    nome: string,
    idade: number,
    raca: string,
    grandePorte: boolean,
    donos: string[]
}

interface Animais {
    tipo: string,
    bipede: boolean,
    asas: boolean,
    regiao: string
}