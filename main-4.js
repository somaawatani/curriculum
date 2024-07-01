class user {
    constructor(name, adress) {
        this.name = name;
        this.adress = adress;
    }
}
let awatani = new user(`awatani`, `awasou1007@gmail.com`)

function register() {
    console.log(this.name this.adress)
}