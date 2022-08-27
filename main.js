//const chosenNumber = Math.floor(Math.random() * (10 - 1 + 1) + 1);
let input = document.getElementById("insert_number");
let button = document.getElementById("button");
const chosenNumber = 3;

let correct = false;
insert_number.oninput = function(){
    input.innerHTML = this.value;
}

function analysis(){
    let attempt = insert_number.value ;
    for(let counter = 0; counter < 2; counter++){

        if(attempt>10){
            alert('Valor inválido! Tente um número de 0 a 10');
        }

        if(attempt<chosenNumber){
            alert(`Errado! Tente um número > que ${attempt} e <= 10`);;
        }

        if(attempt>chosenNumber){
            alert(`Errado! Tente um número < que ${attempt} e >= 0`);;
        }

        if(attempt == chosenNumber){
            alert(`Parabéns, você acertou! O número era ${chosenNumber}.`);
            correct = true;
            break;
        }

    }
    if(!correct){
        alert(`Infelizmente, você não acertou. O número era ${chosenNumber}`);
    }
}
