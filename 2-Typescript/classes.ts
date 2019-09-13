class SelamVer {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Merhaba, " + (this.greeting);
    }
}

let greeter = new SelamVer("Hakan");

document.body.innerHTML = greeter.greet();  //Cikti: Merhaba Hakan