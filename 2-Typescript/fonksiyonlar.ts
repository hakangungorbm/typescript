function topla(x,y) {
    return x + y;
}


//parametrelerin number tipinde olmasi gerektigini soyledik
//Ayrica suslu parantezden once kullandigimiz :number da 
//donus tipinin de number olmasi gerektigini soyledik 
function topla2(x:number, y:number):number {
    return x + y;
}

//Anonim fonksiyonlarda tanimlayabiliriz
let topla3 = function(x:number, y:number):number {
    return x + y;
}

console.log(topla(2,3)); //Hata vermez

console.log(topla("Ankara",2)); // Hata vermez

console.log(topla2(2,"Ankara")); // Hata verir

console.log(topla3(2,"Ankara")); // Hata verir

console.log(topla2(2,5)); // Hata vermez

//Burada X degerine 2 atanir, Y degerine undefined atanir
console.log(topla2(2)); // Hata vermez


//OPTIONAL VE DEFAULT PARAMETERS

//Burada Y degeri default olarak 5 degerini alir.
function topla4(x:number, y:number=5):number {
    return x + y;
}

//X degeri 4 degerini alirken, Y degerini vermememize ragmen
//default olarak yukarida atanmis 5 degerini alir ve toplar
//Y ye deger verilirse verilen degeri toplar, verilmezse default
//degerini alir ve toplar

//Sonuc 9 olur
console.log(topla4(4)); // Hata vermez

//Sonuc 7 olur
console.log(topla4(4,3)); // Hata vermez

//Burada Y degeri default olarak 5 degerini alir.
function topla5(x:number, y?:number):number {
    return x + y;
}

//Sonuc NaN (Not a number) olur.
console.log(topla5(4)); // Hata vermez

//Iste biz boyle Y parametresi bazen olur, bazen olmaz durumuyla
//karsi karsiyaysak boyle durumda kontrol koyariz. Yani,
//Y degerini optioanl olarak verebiliriz. Ornek:

//Not: Optional olan parametreler her zaman sonda olabilir.

function topla6(x:number, y?:number) {
    if(y) {
        console.log(x+y);  // Y degeri varsa topla
    }
     console.log(x);  // Y degeri yoksa sadece X i yaz

}

//REST PARAMETRELER
//Ornegin bir methodumuzun kac tane parametre alacagini bilmiyoruz.
//Boyle bir durumda rest parametreleri kullanabiliriz.

function davetEt(ilkDavetli:string, ...digerleri:string[]) {
  return ilkDavetli + " " + digerleri.join(" ");
}

console.log(davetEt("Hakan","Gungor","Seninle"));

// Cikti: Hakan Gungor Seninle

//Bir diger kullanimi, ilk parametreyi vermeden dogrudan rest 
//parametre kullanabiliriz.

function davetEt2(...digerleri:string[]) {
    return  digerleri.join(" ");
}

console.log(davetEt2("Hakan","Gungor","Benimle"));

// Cikti: Hakan Gungor Benimle