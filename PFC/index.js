
// Message de bienvenue

alert("Bonjour, bienvenue sur mon CV !");


// Date du jour au format DD/MM/YYYY

const date =new Date();


let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDate();


function formattedMonth(){
    if(month < 10) {
    month =`0${month+1}`
    };   
};

function formattedDay(){
    if(day < 10) {
    day =`0${day}`
    };   
};

formattedDay();
formattedMonth();

let now = `${day}/${month}/${year}`

document.querySelector("#date").textContent = `Aujourd'hui nous somme le: ${now}`;






// Changement de background pour la nav au passage de la souris 

const btnNavTopPage = document.querySelectorAll(".btn")

for(let i = 0; i < btnNavTopPage.length; i++) {
    
        btnNavTopPage[i].addEventListener('mouseover', 
            function() {
                this.style.background = 'none';
                this.style.color = 'rgb(55, 55, 194)';
            }

        );
        btnNavTopPage[i].addEventListener('mouseleave', 
            function() {
                this.style.background = 'rgb(55, 55, 194)';
                this.style.color = 'antiquewhite';
            }

        );
};



// Changement de background pour les box "Acceuil" au passage de la souris

const boxAcceuil = document.querySelectorAll(".box")

for(let i = 0; i < boxAcceuil.length; i++) {
    
        boxAcceuil[i].addEventListener('mouseover', 
            function() {
                this.style.background = 'none';
                this.style.color = 'rgb(55, 55, 194)';
            }

        );
        boxAcceuil[i].addEventListener('mouseleave', 
            function() {
                this.style.background = 'rgb(55, 55, 194)';
                this.style.color = 'antiquewhite';
            }

        );
};


fetch('https://pokeapi.co/api/v2/?limit=15&offset=20/')
.then(response => response.json)
.then(data => {
    console.log(data);
    
    return data;
});



























