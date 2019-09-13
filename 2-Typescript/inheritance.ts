class Kisi {
    kaydet () {
        console.log("Kisi Kaydedildi");
    }
}

//Musteriyi Kisiden miras aldik
class Musteri extends Kisi {
    satisyap () {
        console.log("Satis Yapildi");
    }

}

class Personel extends Kisi {
    maasOdendi () {
        console.log("Maas Odendi");
    }

}

//Musteri olusturuyorum

let musteri = new Musteri();
musteri.kaydet();  // Kisi sinifinda olmasina ragmen Musteri sinifinin obje sinde kullanabiliyorum.
musteri.satisyap();