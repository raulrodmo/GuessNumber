/* Missing add button to refresh the page. I think about adding a button in the HTML, hiding the button in the CSS, in the JS after 3 attempts or after hitting the number, hiding input and displaying refresh.
*/
let input = document.getElementById("insert_number");
let button = document.getElementById("button");

let correct = false;
insert_number.oninput = function(){
    input.innerHTML = this.value;
}

const Guess={
    number_attempt:0,
}

const chosen_number = Math.floor(Math.random() * (10 - 1 + 1) + 1);

function analysis(){

    let attempt = insert_number.value ;

        if(Guess.number_attempt>1){
            alert(`Infelizmente, você não acertou. O número era ${chosen_number}`);
            Guess.number_attempt=0;
        }

        else if(attempt>10){
            alert('Valor inválido! Tente um número de 0 a 10');
            ++Guess.number_attempt;
        }

        else if(attempt<chosen_number){
            alert(`Errado! Tente um número > que ${attempt} e <= 10`);
            ++Guess.number_attempt;
        }

        else if(attempt>chosen_number){
            alert(`Errado! Tente um número < que ${attempt} e >= 0`);
            ++Guess.number_attempt;
        }

        else if(attempt == chosen_number){
            alert(`Parabéns, você acertou! O número era ${chosen_number}.`);
            correct = true;
        }
}