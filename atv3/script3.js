let n = parseFloat(prompt("Quantas cartas vc quer:"))

for(let i=1; i<=n; i++){
    let naipe = Math.random() * 3

    naipe= Math.trunc(naipe)

    if(naipe == 0){
        naipe = "copas"
    }
    if(naipe == 1){
        naipe = "paus"
    }
    if(naipe == 2){
        naipe = "ouro"
    }
    if(naipe == 3){
        naipe = "espadas"
    }

    let num = Math.random() * 9
    if(num ==0){
        num = 10
    }
    num= Math.trunc(num)


 console.log(naipe + " de " + num)

}
