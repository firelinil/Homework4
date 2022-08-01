'use strict';
let age = prompt("Сколько тебе лет?",'');
let isBoy = confirm("Ты мальчик?");
if (isBoy == true)  {
    alert (`Эй, парень, тебе ${age}!`)
} else if(isBoy == false){
    alert(`Привет, подруга, тебе ${age}!`)
}






