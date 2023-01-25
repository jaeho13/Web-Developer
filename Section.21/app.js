// let totalEggs = 0;
// function collectEggs() {
//     totalEggs = 6;
// }
// console.log(totalEggs);
// collectEggs();
// console.log(totalEggs);


// let bird = 'Scarlet Macaw';
// function birdWatch() {
//     let bird = 'Great Blue Heron';
//     console.log(bird);
// }
// birdWatch()

// for (let i = 0; i < 5; i++) {
//     let msg = "SeongGong";
//     console.log(msg)
// }
// console.log(msg)
// console.log(i)

function bankRoberry() {
    const heroes = ['Spiderman', 'Wolverine', 'Black Panther', 'Batwomon']
    function cryForHelp() {
        let color = 'purple';
        function inner() {
            for (let hero of heroes) {
                console.log(`PLEASE HELP US, ${hero.toUpperCase()}`)
            }
        }
        inner();
    }
    cryForHelp();
}