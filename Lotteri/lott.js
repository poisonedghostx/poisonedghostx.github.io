
//Hämtar element från index.html
const svar_div = document.getElementById("svar_div")
const antal_vinster = document.getElementById("input_antal_vinster")
//Array med vinster
const vinster = ["Pedro Pascal", 
"Mads Mikkelsen",
"Till Lindemann", 
"Johnny Depp",
"Tobias Forge",
"Alan Rickman"]


function slumpaClick() {
    //Strängar går att göra på två sätt
    //console.log("Click" + antal_vinster.value)
    //console.log(`Click: ${antal_vinster.value}`)
    let vinst = `<h3>Dina Vinster: </h3>` ;

    let antalv = antal_vinster.value; 
    let int_antalv = parseInt(antalv) 

    for (i=0; i<int_antalv; i++) { 
        let slumptal = Math.floor(Math.random() * 6);
        let t_vinst = vinster[slumptal]

        vinst += `<p>${t_vinst}</p>`
    } 

    svar_div.innerHTML = vinst; 
}