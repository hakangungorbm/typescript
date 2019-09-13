//Dongu icin bir veri seti olusturalim.
let sehirler = ["Ankara", "Istanbul", "Izmir"];

//Typescript te 2 tane temel dongu vardir.

//1) For


//"in" ile index numarasina erisiriz
for(let i in sehirler) {
    console.log(i);       // Cikti: 0  1  2 
}

//"of" ile data ya ulasiriz

for(let i of sehirler) {
    console.log(i);      // Cikti: Ankara  Istanbul  Izmir
}