const myPet = {
    name: "woofers",
    species: "golden retriever",
    nicknames: ["Mr. Woofs", "Sir Barksalot", "Good boy"],
    age: 3,
    favoriteToys: [],
    play: function(toy) {
        if (toy.name.includes("Stick" || "stick")) {
            this.favoriteToys.push(toy)
        }
    },
    bark: function() {
        console.log("WOOF!")
    },
    chaseTail: function() {
        console.log("Woofers chases his tail in excited until he is too tired to chase further.")
    },
    sleep: function() {
        console.log("Woofers goes to sleep after a long day of play.")
    }
}

myPet.bark()
myPet.chaseTail()
myPet.sleep()

const beachBall = {
    name: "bigBeachBall",
    canFetch: false
}

const goodStick = {
    name: "GoodStick",
    canFetch: true
}

myPet.play(beachBall)
myPet.play(goodStick)
console.log(myPet.favoriteToys)