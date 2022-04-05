import Chat from './Classes/Chat';
import Dauphin from './Classes/Dauphin';
import Mammifere from './Classes/Mammifere';

import Animal from './Interfaces/Animal';

//-----------------------------//
// Création des instances //

const chat: Chat = new Chat("Kiba", 10, new Date("2018/01/31"));
const dauphin: Dauphin = new Dauphin("Flipper", 25, new Date("2020/12/31"));

console.log('-------------------START 1-----------------------');
//On affiche le chat qui sait nager et marcher
chat.display(true,true);
console.log('|----------------------------------------------------|');
//On affiche le dauphin qui sait nager et respirer sous l'eau
dauphin.display(true,true);
console.log('-------------------END 1-----------------------');

console.log('-------------------START 2-----------------------');
//On affiche le chat qui sait nager mais qui court
chat.display(true,false);
console.log('|----------------------------------------------------|');
//On affiche le dauphin qui sait nager et qui ne sait pas respirer sous l'eau
dauphin.display(true,false);
console.log('-------------------END 2-----------------------');

console.log('-------------------START 3-----------------------');
//On affiche le chat qui ne sait pas nager mais qui marche
chat.display(false,true);
console.log('|----------------------------------------------------|');
//On affiche le dauphin qui ne sait pas nager et qui sait respirer sous l'eau
dauphin.display(false,true);
console.log('-------------------END 3-----------------------');

console.log('-------------------START 3-----------------------');
//On affiche le chat sans l'information nager & marcher
chat.display();
console.log('|----------------------------------------------------|');
//On affiche le dauphin sans l'information nager & respirer sous l'eau
dauphin.display();
console.log('-------------------END 3-----------------------');

const  animaux: Animal[] = [chat,dauphin];
const  mammiferes: Mammifere[] = [chat,dauphin];


console.log('-------------------START 4-----------------------');
//On affiche le tableau des animaux
console.log(animaux);
//On affiche les informations des animaux
animaux.forEach(animal => animal.display() );
console.log('|----------------------------------------------------|');
//On affiche le tableau des mammifères
console.log(mammiferes);
//On affiche les mammifères de manière propre
mammiferes.forEach(mammifere => console.log(`Name : ${mammifere._nom} | birthday : ${mammifere.dateNaissance}, age : ${mammifere.age} ans`));
console.log('-------------------END 4-----------------------');