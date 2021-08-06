

const booleano: boolean = true; 

const object = {
  id: 1,
  nome: 'gabriel',
  address: {
    rua: 'lasar segall',
    bairro: 'são sebastião'
  }
}

const tuple: [number, string] = [1, 'nome']
const arr: Array<string> = ['text1', 'text2', 'text3'];
let uknown: unknown = '';
let any: any = '';

function sum(primeiroNumero: number, segundoNumero: number): number{
  return primeiroNumero + segundoNumero
}

sum(1, 2)

const obj: object = {} // any object
const str = '';