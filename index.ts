import Chat from './Classes/Chat';
import Dauphin from './Classes/Dauphin';
import Mammifere from './Classes/Mammifere';

import Animal from './Interfaces/Animal';

//-----------------------------//
// Création des instances //

const chat: Chat = new Chat("Halliday", 10, new Date("2018/01/31"));
const dauphin: Dauphin = new Dauphin("Larbin", 25, new Date("2020/12/31"));

console.log('-------------------START 1-----------------------');
chat.display(true,true);
console.log('|----------------------------------------------------|');
dauphin.display(true,true);
console.log('-------------------END 1-----------------------');

console.log('-------------------START 2-----------------------');
chat.display(true,false);
console.log('|----------------------------------------------------|');
dauphin.display(true,false);
console.log('-------------------END 2-----------------------');

console.log('-------------------START 3-----------------------');
chat.display(false,true);
console.log('|----------------------------------------------------|');
dauphin.display(false,true);
console.log('-------------------END 3-----------------------');

console.log('-------------------START 3-----------------------');
chat.display();
console.log('|----------------------------------------------------|');
dauphin.display();
console.log('-------------------END 3-----------------------');
