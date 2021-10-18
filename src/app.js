console.log("Merhaba Kodlama.io")

//JS type safe değildir
let dolarBugun = 9.30

let dolarDun = 9.20
dolarDun="Ankara"
{
    let dolarDun = 9.10
    console.log(dolarDun) //ayrı bir blok
}
console.log(dolarDun)
// var dolarDun = 9.20 //undefined

// JS type safe
const euroDun = 11.2
// euroDun= 11 //const değiştirilemez olduğu için hata verir

console.log(euroDun)

//array
//camelCasing
//PascalCasing
let konutKredileri = ["Konut Kredisi", "Emlak Konut Kredisi", "Kamu Konut Kredisi"]

console.log("<ul>")
for (let i = 0; i < konutKredileri.length; i++) {
    console.log("<li>"+konutKredileri[i]+"</li>")
}
console.log("</ul>")

console.log(konutKredileri)