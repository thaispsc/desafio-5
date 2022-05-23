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

const cachorro: Array<Cachorro> = [
    {nome: 'Kin',
     idade: 13,
     raca:'Schnauzer', 
     grandePorte: false, 
     donos: ['Maria Luiza', 'Guilherme']}
];

const animal: Array<Animais> =[
    {tipo: 'gato',
     bipede: false,
     asas: false,
     regiao: 'sjdjdf'  
    }
]

type Humano = {
    nome: string,
    idade: number,
    altura: number,
}

const humano = (): Omit<Humano, 'altura'> => {
    return {
        nome: 'João',
        idade: 30
    }
}

const outroHumano = (): Partial<Humano> => {
    return {
       nome: 'José'
    }
}

type Humano2 = Omit<Humano, 'idade'>;

const maisUmHumano: Humano2 = {
    nome: 'Maria',
    altura: 1.67
}