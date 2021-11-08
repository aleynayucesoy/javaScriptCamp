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

/* 1. Ders Ödev (8/11/21) */

let sayi1 = 10;
sayi1 = "Aleyna Yücesoy"
let student = {
    id:1,
    name: "Aleyna"
}

function save (puan=10, ogrenci){
    console.log(ogrenci.name + " : " + puan)
}

save (undefined, student);

let students = ["Engin Demiroğ", "Aleyna Yücesoy", "Esra Nur Ege", "İsmail Yurdaer Şen"]

console.log(students)

let students2 = [student, {id:2, name: "Engin"}, "Ankara", {city: "İstanbul"}]
console.log(students2)

//----------------------------------------------------
//rest JS
//params C#
//varArgs Java
let showProducts = function (id,...products) {
    console.log(id)
    console.log(products)//[0] yazarsak 10 ve Elma döner
}

// console.log(typeof showProducts)
// showProducts(10,"Elma","Armut","Karpuz")//Parantez içini boş bıraktığımız zaman undifined ve bomboş bir array geri döner
// showProducts(10,["Elma","Armut","Karpuz"]) //Bu şekilde yaparsak Array içinde Array olarak döner // rest


//------------------------------------------------------
//spread (ayırmak)
let points = [1,2,3,4,50,4,60,14]
console.log(...points) // 1 2 3 4 50 4 60 14 çıktısı alınır
console.log(Math.max(...points)) //60 çıktısı alınır
console.log(..."ABC", "D",... "EFG", "H") //Bitişik olanları ayırır


//------------------------------------------------------
//Destructuring (parçalamak)
let populations = [10000, 20000, 30000,[40000, 100000]]
let [small, medium, high,[veryHigh,maximum]] = populations
console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maximum)

function someFunction([small1],number) {
    console.log(small1)
}

someFunction(populations) //populations'daki ilk değeri yazdırır

let category = {
    id:1,
    name:"içecek"
}
console.log(category.id)
console.log(category["name"])

let {id, name} = category
console.log(id)
console.log(name)