//Biz interface ler ile bir kullaniciya

interface Product {
    id : number;
    name : string;
    price: number;
}

function save(product:Product) {
    console.log(product.name + " kaydedildi");
}


save({id:1, name:"Telefon", price: 7500});


/*
Interface ile yapılan işlem bir class aracılığı ile de yapılabilir.

Eksiksiz olarak tüm parametrelerinin kullanılması gereken durumlarda interface kullanılmalı. İçinden sadece ad kullanılmasının yeterli olduğu durumlarda ise aynı işlemi bir class aracılığı ile de yapabiliriz.
*/