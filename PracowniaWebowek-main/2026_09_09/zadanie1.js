const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let car = "BMW"
let mileage = 3000000
let szybkie =false

function goodCar (){
    if (car === "Opel" && szybkie){
        console.log("niemiec plakal jak sprzedawal")

    }else if(mileage < 150000){
        console.log("No taka se")
    }else{
        console.log("slabizna")
    }
}
function count(){
    rl.question("Do ilu liczyc", countNumber => {
        for (let i = 1; i <= countNumber; i++) {
            console.log(i)
        }
        drivingCar();
    });
}

function drivingCar(){
    rl.question("ile przejechales", distance => {
        mileage += Number(distance);
        console.log("Przebieg:"+mileage);
        rl.close();
    });
}
goodCar ();
count();
