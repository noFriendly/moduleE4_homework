const appliance = new Object(
    {
        power: 0,
        plugIn: function () {
            console.log(`the appliance ${this.name} is ON`);
            return true;
        },
        unPlug: function () {
            console.log(`the appliance ${this.name} is OFF`);
            return true;
        },
        showPower: function () {
            console.log(`${this.power} W`); // this --> is like self in Python
        }
    }
)

const pc = Object.create(appliance);
pc.name = "PC";

pc.power = 75; //W
pc.screenSize = function () {
    size = 17;
    console.log(`screen size is ${size} inches`);
}



const teslaCar = Object.create(appliance);
teslaCar.name = "Tesla Car";

teslaCar.power = 1e4; //W
teslaCar.colour = function () {
    colour = "black";
    console.log(`Tesla's colour is ${colour}`);
}

const collection = [pc, teslaCar];
let item = 0;
const sumPower = function () {
    pc.plugIn = false;
    teslaCar.plugIn = true;
    for (let i = 0; i < collection.length; i++) {
        if (collection[i].plugIn === true) {
            item += collection[i].power;
        }
    }
    console.log(`Total power ${item}`);
}

sumPower();
