const grid = document.getElementById("griglia");
const btn = document.getElementById("wantPlay");

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
        
        newCell.addEventListener("click" , function(){
            this.classList.contains("clicked") ? this.classList.remove("clicked") : this.classList.add("clicked");
            console.log(i);
            
        })
    }
    
    
})
