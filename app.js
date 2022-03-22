function age() {
    var old = prompt("How old are you?")
    return old
}

function food() {
    var fav = prompt(`What's your favorite food?`)
    return fav
}

// console.log(age())


function connor(a, x) {
    console.log(`Connor is ${a} years old. His favorite food is ${x}. `)
}

// connor(14, "hot dog")

connor(age(), food())



