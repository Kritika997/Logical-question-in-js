class kritikaDetails {
    constructor (name,age,weight){
        this.myname = name;
        this.myage = age;
        this.myweight = weight;
    };
    biodata(){
        return `my name is ${this.myname} and age is ${this.myage} and my weight is ${this.myweight}`;
    };
};
class player extends kritikaDetails{
    constructor(name,age,weight,game){
        super(name,age,weight,game);
        this.mygame = game;
    }
    allData(){
        return `${super.biodata()}. I love  ${this.mygame}`;
    }

};
let data1 = new player('kritika',23,47,"basketball");
console.log(data1.allData());