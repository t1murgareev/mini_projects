const secretDigit = Math.ceil(Math.random() * 10)
let tries = 0

function guessNum(num) {
     if (tries >= 5) return alert('Игра окончена!')
     if (num === secretDigit) {
         alert('Ты угадал!')
         tries = 5 
     }else {
         alert('Ты не угадал!')
         tries++
     }

}