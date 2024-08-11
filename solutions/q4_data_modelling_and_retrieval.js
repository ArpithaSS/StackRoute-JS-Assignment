// Create a list of fruits with their properties (name, color, pricePerKg)
// and convert it into a format so that for a given fruit name
// retrieval of its color and pricePerKg value is fast


// Write your code here

const fruitsList=[
    {
        name:'Orange',
        color:'Organe',
        pricePerKg: 100
    },
    {
        name:'Watermelon',
        color:'Green',
        pricePerKg: 40
    },
    {
        name:'Mango',
        color:'Orange',
        pricePerKg: 100
    },
    {
        name:'Apple',
        color:'Red',
        pricePerKg: 200
    }
];


const fruitObj={};
 for(let fruit of fruitsList) {
    fruitObj[fruit.name]={color: fruit.color, pricePerKg: fruit.pricePerKg};
 }
 function getFruitProperty(fruitName){
    return fruitObj[fruitName];
 }


 console.log(getFruitProperty('Apple'));