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
let newCell;

btn.addEventListener("click", function(){
console.log("inizia il gioco!") 
    grid.classList.toggle("d-none")
    for(let i = 1 ; i <= 100 ; i++){
        newCell= document.createElement("div")
        newCell.classList.add("cell");
        newCell.append(i)
        grid.appendChild(newCell);
        
    }
    newCell.addEventListener("click" , function(){
        if(this == bombs) {
            this.classList.add("alt-clicked")
        }else if(this != bombs) {
            this.classList.add("clicked")
            score += 1;
        }
        console.log(newCell);
        
    })
    
    
})
