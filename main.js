const tributeChest = []

const payTribute = (tributeId, tributeDescription, queenId) => {
   const tribute = {
    id: tributeId,
    description: tributeDescription,
    queenId: queenId
   }
   tributeChest.push(tribute)
    // Add the tribute object to the tribute chest
}


const queens = []

const createQueen = (queenId, queenName) => {
    const queenObject = {
        id: queenId,
        name: queenName
    }
    queens.push(queenObject)
}

const athena = createQueen(1, "Athena Perez")
const charisse = createQueen(2, "Charisse Ford")
const jenna = createQueen(3, "Jenna Solis")
const chanel = createQueen(4, "Chanel Vasquez")
const chrissy = createQueen(5, "Chrissy Lynn")
/*
Define a function with a single parameter. When the function
is invoked, an argument is required.
*/
const hailTheQueen = (nameString) => {
    return `Hail Her Majesty, ${nameString}.`  // This function returns a string
}

for (const queen of queens) {
    const hailMessage = hailTheQueen(queen.name)
    console.log(hailMessage)
}
payTribute(1, "Harp", 1)
payTribute(2, "Blanket", 2)
payTribute(3, "Scarf", 3)
payTribute(4, "Wool", 4)
payTribute(5, "Fruit", 5)

for (const queen of queens) {
    for (const tribute of tributeChest) {
        if(tribute.queenId === queen.id) {
            console.log(`${queen.name} has tribute ${tribute.description}.`)
        }
    }
}
/*
const athena = hailTheQueen("Athena Perez") // Argument value is "Athena Perez"
console.log(athena)

//Another Queen//
const charisse = hailTheQueen("Charisse Ford") // Argument value is "Charisse Ford"
console.log(charisse)

const jenna = hailTheQueen("Jenna Solis") // Argument value is "Jenna Solis"
console.log(jenna)

//Queens in my life//

const chanel = hailTheQueen("Chanel Vasquez")
console.log(chanel)

const chrissyLynn = hailTheQueen("Chrissy Lynn")
console.log(chrissyLynn)

const ramona = hailTheQueen("Ramona Leon")
console.log(ramona)

const monica = hailTheQueen("Monica Dinglehopper")
console.log(monica)*/