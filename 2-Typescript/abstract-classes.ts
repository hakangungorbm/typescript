abstract class KrediBase {

    constructor() {

    }

    //Bir abstract sinif icinde siradan tanimlanan bu method KrediBase sinifindan extend edilen tum siniflarda ayni sekilde calisir. Herkes kendine gore duzenleyemez.
    kaydet():void {                 //Bu mehtod heryerde ortak.
        console.log("Kaydedildi");    
    }

    // Hatali
    //hesapla():void;    

    //Duzgun
    abstract hesapla():void;  // Bu heryerde ortak degil. O yuzden abstract yapiyorum. 
    //KrediBase sinifindan extend edilen tum siniflar abstract olarak isaretlenen bu "hesapla" methodunu kendi icinde kendine gore kullanabilirler.

}

class TuketiciKredisi extends KrediBase {
    constructor() {
        super();     // Parametresiz constructor larda "super" methodu olmasi sart
    }

    hesapla():void {
        console.log("Tuketici kredisi hesaplandi");
    }
}

class KonutKredisi extends KrediBase {
    constructor() {
        super();    
    }

    hesapla():void {
        console.log("Konut kredisi hesaplandi");
    }
}

let tuketiciKredisi = new TuketiciKredisi();

tuketiciKredisi.hesapla();
tuketiciKredisi.kaydet();   

let konutKredisi = new KonutKredisi();
konutKredisi.hesapla();
konutKredisi.kaydet();


let kredi:KrediBase;

kredi = new TuketiciKredisi();
kredi = new KonutKredisi();
