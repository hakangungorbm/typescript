//Sayi basan bir method yazalim
function deger(x:number):number {
    return x;
}

let sayi = deger(10);

console.log(sayi);

//Eger bir de string basan bir method yazmak istersem

function deger2(x:string):string {
    return x;
}

let yazi = deger2(10);

console.log(yazi);

//Burada isi uzatmis oluyoruz. Biz farkli tipte verilerle ayni isi yapmak istedigimizde 
//genericleri kullanabiliriz.

//Farkli sekilde tekrar yaziyorum

function deger3<T> (x:T):T {
    return x;
}

let sayi3 = deger3<number>(2);
let sehir3 = deger3<string>("Ankara");

//Boylelikle farkli tipte verilerle calisabildik.

//Generikleri siniflar icindede kullanabiliyoruz.

class GenericClass<T> {
    degisken:T;
    alintiFonksiyon(par:T):T {
        return par;
    }
}

let sinif = new GenericClass<number>();

sinif.alintiFonksiyon(3);

let sinif2 = new  GenericClass<string>();

sinif2.alintiFonksiyon("Hakan");