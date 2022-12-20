const grid = document.getElementById("griglia");
const btn = document.getElementById("wantPlay");






//funzioni 

function randomNumberAside (min , max , blacklist){
   let random;
    do{
     random = Math.floor(Math.random()*(max + 1 - min) + min)
   }while (blacklist.includes(random))

   return random;
}



// creo le bombe
const bombs = [];

for( let i = 0 ; i <= 16 ; i++){
        const exeBomb = randomNumberAside(1, 84 , bombs);
        bombs.push(exeBomb);
 }
console.log(bombs );


// punteggio 
let score = 0 ; 
//al click...

btn.addEventListener("click", function(){
    console.log("inizia il gioco!") 
    grid.innerHTML =""
    grid.classList.toggle("d-none")
    for(let i = 1 ; i <= 100 ; i++){
        let newCell;
        newCell= document.createElement("div")
        newCell.classList.add("cell");
        newCell.append(i)
        grid.appendChild(newCell);
        
        newCell.addEventListener("click" , function(){
            if(bombs.includes(i)) {
                this.classList.add("alt-clicked")
                alert( `che sfortuna hai perso, ecco il tuo puneggio ${score} `);
                
            }else {
                this.classList.add("clicked")
                if (score === 4){
                    score += 1 
                    alert(" congratulazioni hai vinto !")
                }else {
                    score += 1;
                }

            }
            console.log(score);
            
        })

    }
    
    
})
