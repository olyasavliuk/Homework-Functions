// // Напишіть функцію, що додає перше число до другого і ділить результат на третє число.
// function numbers (firstDigit, secondDigit, thirdDigit) {
//     return (firstDigit + secondDigit) / thirdDigit;
// }
// console.log(numbers(2,5,7));

// // Напишіть функцію, що приймає число від 1 до 7 і повертає відповідну назву дня (українською).
// let day;
// function dayOfWeek (number) {
//     switch (number) {
//         case 1 : 
//          day = 'Понеділок';
//          break;
//         case 2 : 
//          day = 'Вівторок';
//          break;
//         case 3 : 
//          day = 'Середа';
//          break;
//         case 4 : 
//          day = 'Четвер';
//          break;
//         case 5 : 
//          day = 'П\'ятниця';
//          break;
//         case 6 : 
//          day = 'Субота';
//          break;
//         case 7 : 
//          day = 'Неділя';
//          break;
//         default:
//          day = 'Введіть число від 1 до 7';
//     }
//     return day;
// }
// console.log(dayOfWeek(3));

// // Реалізуйте функцію знаходження факторіала
// let factResult;
// function factorial (factNumber) {
//     if (factNumber === 0) {
//         factResult = 1;
//     } else {
//         factResult = factNumber * (factorial(factNumber- 1));
//     }
//     return factResult;
// }
// console.log(factorial(5));

// // Напишіть функцію яка отримує години хвилини та секунди і повертає це число в секундах.
// function time (hours, minutes, seconds) {
//     return hours * 3600 + minutes * 60 + seconds;
// }
// console.log(time(2, 5, 32));

// // Написати функцію , яка приймає секунди, і перетворює їх у години хвилини та секунди у форматі «гг:хх:сс». 
// // Якщо кількість годин більша за 23.59.59 - вивести повідомлення "Більше одного дня". 
// let hour, minute;
// function times (timesInseconds) {
//     if (timesInseconds > 86399) {
//         resultTimes = 'Більше одного дня!';
//     } else {
//         hour = Math.floor(timesInseconds / 3600);
//         timesInseconds = timesInseconds - hour * 3600;
//         minute = Math.floor(timesInseconds / 60);
//         timesInseconds = timesInseconds - minute * 60;
//         resultTimes = `${hour}:${minute}:${timesInseconds}`; 
//     } 
//     return resultTimes;
// }
// console.log(times(7525));

// 4 відмінності ерров фанкшина від звичайної функції.
// 1. Ерров функція в синтаксисі не має слова function і додана стрілка після списку параметрів, тобто компактніша конструкція.
// 2. Ерров фанкшин не можуть використовуватися для створення об'єкту, так як не мають власного this.
// 3. Ерров функції повертають значення функції і без return, а у звичайних - якщо немає return або після return немає виразу, 
// функція поверне undefined. 
// 4. Ерров функція не має масива arguments, вона буде брати його із зовнішньої функції.