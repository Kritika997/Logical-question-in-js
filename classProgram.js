class uddeshya{
    constructor(hight,colour,weight){
        this.hishight = hight;
        this.hiscolour = colour;
        this.hisweight = weight;
    };
    his_all_data(){
        return ` his hight is ${this.hishight}. and  colour is ${this.hiscolour}. or weight is ${this.hisweight}`
    };
};
class whatHeLike extends uddeshya{
    constructor(hight,colour,weight,game,hobby){
        super(hight,colour,weight);
        this.mygame = game;
        this.myhobby = hobby;
    };
    nowprintall(){
        return `${super.his_all_data()}. now these some information about him and he is like to play ${this.mygame}. and want to dicuss about ${this.myhobby} `
    };
};
let data1 = new whatHeLike(5.11,"brown",52,"football","politics");
console.log(data1.nowprintall());