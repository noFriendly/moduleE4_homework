 function keyCheck (s, obj) {
    if (obj.hasOwnProperty(s)) {
        console.log(true)
    } else {
        console.log(false)            
    }
}


keyCheck("key1", myObject)
keyCheck("key2", myObject)
keyCheck("key3", myObject)
Footer
