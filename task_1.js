const myObject = {
    key1: "value1",
    key2: "value2", 
}
function myFunction (object1) {
    for (const key in object1) {
        console.log(key, object1[key]);
    }
}

myFunction(myObject)
