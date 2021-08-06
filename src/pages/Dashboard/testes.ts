const value = 'texto';
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

const obj: object = {} // any object
const str = '';

interface User {
  nome: string;
  idade?: string;
}

function printaUsuario(user: User){
  console.log(user.nome)
  console.log(user.idade)

  return { peso: 75, altura: 175, cidade: 'Fortaleza' }
};

interface UserGithub {
  login: string;
}

// Partial
function printarGithubUsername(user: Partial<UserGithub>){
  console.log(user);
}

//Pick
function printarGithubPick(user: Pick<UserGithub, 'followers' | 'following'>){
  console.log(user.followers);
  console.log(user.following);
}
printarGithubPick({ followers: '', following: ''})

//Omit
function printarGithubOmit(user: Omit<UserGithub, 'followers'>){
  console.log(user.company);
}
printarGithubOmit({ company: ''})

//Readonly
const newGithubUsername: UserGithub = {

}