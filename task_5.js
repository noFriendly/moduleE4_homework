class Appliance {
    static equipmentType = "Devices";

    constructor(options) {
        this.title = options.title
        this.power = options.power
    };

    plugIn() {
        this.pluggedIn = true
        this.power = this.power
    }

    unPlug() {
        this.pluggedIn = false
        this.power = 0
    }

    showPower() {
        return `the power is ${this.power} Watts`
    };

    // getter
    get powerInfo() {
        return this.power + "W"
    };

    // setter
    // set power: pc.powerInfo = 100
    set powerInfo(newValue) {
        this.power = newValue;
    };
};




// Inheritance
class Computer extends Appliance {
    static name = "Computer"

    constructor(options) {
        super(options)
        this.screen = options.screen
        this.price = options.price
    };

    showPrice () {
        return `The cost of ${this.title} is ${this.price}$`
    }
};


class ElectricCar extends Appliance {
    static name = "Electromobile"

    constructor(instance) {
        super(instance)
        this.colour = instance.colour
    }

    showColour() {
        return `The colour of ${this.title} is ${this.colour}`
    }

}




// Instances
const pc = new Computer(
    {
        title: "PC",
        power: 75,
        screen: 17,
        price: 1700
    }
)


const tesla = new ElectricCar(
    {
        title: "Tesla Model S",
        power: 2e4,
        colour: "Deep Blue Metallic"
    }
)



// Summarize the power
devices = [pc, tesla]


const sumPower = function () {
    let item = 0
    for (let i = 0; i < devices.length; i++) {
            item += devices[i].power;
            console.log(`${devices[i].title}, power: ${devices[i].power} W`)
    }
    console.log(`Total power: ${item} W`);
}

console.log("CASE #1")
pc.plugIn()
tesla.plugIn()
sumPower();

console.log("CASE #2")
pc.plugIn()
tesla.unPlug()
sumPower();

console.log("CASE #3")
pc.unPlug()
tesla.plugIn()
sumPower();
