// const value = 'texto';
// const booleano: boolean = true; 

// const object = {
//   id: 1,
//   nome: 'gabriel',
//   address: {
//     rua: 'lasar segall',
//     bairro: 'são sebastião'
//   }
// }

// const tuple: [number, string] = [1, 'nome']
// const arr: Array<string> = ['text1', 'text2', 'text3'];
// let uknown: unknown = '';
// let any: any = '';

// function sum(primeiroNumero: number, segundoNumero: number): number{
//   return primeiroNumero + segundoNumero
// }

// const obj: object = {} // any object
// const str = '';

// interface User {
//   nome: string;
//   idade?: string;
// }

// function printaUsuario(user: User){
//   console.log(user.nome)
//   console.log(user.idade)

//   return { peso: 75, altura: 175, cidade: 'Fortaleza' }
// };

// interface UserGithub {
//   readonly login: string;
// }

// // Partial
// function printarGithubUsername(user: Partial<UserGithub>){
//   console.log(user);
// }

// //Pick
// function printarGithubPick(user: Pick<UserGithub, 'followers' | 'following'>){
//   console.log(user.followers);
//   console.log(user.following);
// }
// printarGithubPick({ followers: '', following: ''})

// //Omit
// function printarGithubOmit(user: Omit<UserGithub, 'followers'>){
//   console.log(user.company);
// }
// printarGithubOmit({ company: ''})

// //Readonly
// const newGithubUsername: UserGithub = {
//   login: 'gabriel merigo'
// }

// // newGithubUsername.login = 'teste';


// //Gernerics: São funcionalidades que permitem a passagem de tipos:

// function print<T>(param: T){
//   console.log(param);
// };

// function printNumber<T>(param: T){
//   console.log(param)
// }

// print<string>('100');

export function useState<S extends number | string = string>(initialState: S) {
  let state = initialState;

  function setState(newState: S) {
    state = newState;
    return state;
  }

  return { state, setState };
}

// const stateNumber = useState<number>(10);
// const stateString = useState<string>('string');
type Callback = (result: number) => number;

function printaAlgoNaTela(callback: Callback) {
  
}

function callback(nome: number){
  return nome
}

printaAlgoNaTela(callback)