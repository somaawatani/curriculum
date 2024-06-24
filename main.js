class car {
    constructor(gasoline,number) {
    this.gasoline = gasoline;
    this.number = number;
    }
    
    
    getNumGas() {
        console.log(`ガソリンは${this.gasoline}、車のナンバー${this.number}`)
        
    }
    
}
   let pulius = new car(`レギュラー` ,1234);
   console.log(pulius.gasoline);
   console.log(pulius.number);
   
   pulius.getNumGas();

