const houseLeagueSchedule = (matchups, partnerships, playerSize) => {
    let setPlayers = [] //checks if players already in lineup
    let schedule = [] //list of matches to play

    flag = 0
    while (flag == 0) {
        if (schedule.length < 3) {
            // randIdx = Math.random(0, matchups.length)
            randIdx = Math.floor(Math.random() * (matchups.length - 0) + 0)
            console.log('random index: ', randIdx)
            console.log('checking item: ', matchups[randIdx])
            let playerCheck = 0
            for (var i = 0; i < matchups[randIdx].length; i++) {
                let team = matchups[randIdx][i]
                console.log('team check: ', team)
                for (var j = 0; j < team.length; j++) {
                    let player = team[j]
                    console.log('player check: ', player)
                    console.log('setPlayers: ', setPlayers, ' ---- ', player)
                    if (setPlayers.includes(player)) {
                        playerCheck = 1
                    } 
                    
                    if (i == 0) { // if on team 1 checks team 2
                        if (matchups[randIdx][1].includes(player)) {
                            playerCheck = 1
                        }
                    } else { //if on team 2 checks team 1
                        if (matchups[randIdx][0].includes(player)) {
                            playerCheck = 1
                        }
                    }

                    let playerPos = j
                    if (playerPos == 0) {
                        if (partnerships[player].includes(team[1])) {
                            playerCheck = 1
                        }
                        if (partnerships[player].includes(team[0])) {
                            playerCheck = 1
                        }
                    }
                }
            }

            if (playerCheck == 0) {
                schedule.push(matchups[randIdx])

                console.log('did not hit')
                for (var i = 0; i < matchups[randIdx].length; i++) {
                    let team = matchups[randIdx][i]
                    for (var j = 0; j < team.length; j++) {
                        let player = team[j]

                        if (!setPlayers.includes(player)) {
                            setPlayers.push(player)
                        }
                    }
                }
            }
        }
        else if (schedule.length == 3) {
            let lastMatch = [] //assign the last match statically 
            for (var i = 0; i < playerSize.length + 1; i++) {
                if (!setPlayers.includes(i)) {
                    lastMatch.push(i)
                }
            }

            schedule.push([[lastMatch[0], lastMatch[2]],[lastMatch[1], lastMatch[3]]])
        }
        else {
            flag = 1
        }
    }

    return schedule
}

const createMatchPartnerships = (fullSchedule, playerSize) => {
    let partnerships = {}

    for (var i = 0; i < playerSize.length + 1; i++) {
        partnerships[i] = []
    }

    for (var i = 0; i < fullSchedule.length; i++) {
        let schedule = fullSchedule[i]
        for (var j = 0; j < schedule.length; j++) {
            let match = schedule[j]
            let allPlayers = []

            //HERE
            for (var k = 0; k < match.length; k++) {
                let team = match[k]
                for (var l = 0; l < team.length; l++) {
                    player = team[l]
                    allPlayers.push(player)
                }

                partnerships[team[0]].push(team[1])
                partnerships[team[1]].push(team[0])
            }
        }
    }

    return partnerships
}

const createMatchOpponents = (fullSchedule, playerSize) => {
    let opponents = {}

    for (var i = 0; i < playerSize.length + 1; i++) {
        opponents[i] = []
    }

    for (var i = 0; i < fullSchedule.length; i++) {
        let schedule = fullSchedule[i]
        for (var j = 0; j < schedule.length; j++) {
            let match = schedule[j]
            let allPlayers = []

            for (var k = 0; k < match.length; k++) {
                let team = match[k]
                for (var l = 0; l < team.length; l++) {
                    let player = team[l]
                    allPlayers.push(player)
                }
            }

            for (var pIdx = 0; pIdx < allPlayers.length; pIdx++) {
                if (pIdx == 0 || pIdx == 1) {
                    opponents[allPlayers[pIdx]].push(allPlayers[2])
                    opponents[allPlayers[pIdx]].push(allPlayers[3])
                }
                else if (pIdx == 2 || pIdx == 3) {
                    opponents[allPlayers[pIdx]].push(allPlayers[0])
                    opponents[allPlayers[pIdx]].push(allPlayers[1])
                }
            }
        }
    }

    return opponents
}

var players = []
var playerSize = 16
for (var i = 1; i < playerSize + 1; i++) {
    players.push(i)
}

var teams = []
for (var p1 = 0; p1 < players.length; p1++) {
    for (var p2 = 0; p2 < players.length; p2++) {
        if (players[p2] > players[p1]) {
            teams.push([players[p1], players[p2]])
        }
    }
}

var matchups = []
for (i = 0; i < teams.length; i++) {
    for (j = 0; j < teams.length; j++) {
        if (teams[j] > teams[i]) {
            matchups.push([teams[i], teams[j]])
        }
    }
}

//test players, teams, matchups
console.log('players: ', players)
console.log('teams: ', teams)
console.log('matchups: ', matchups)

var fullSchedule = []
var freqPartners = {}
var freqOpponents = {}

for (var i = 1; i < playerSize + 1; i++) {
    freqPartners[i] = []
    freqOpponents[i] = []
}

for (var i = 0; i < 8; i++) {
    currentSchedule = houseLeagueSchedule(matchups, freqPartners, playerSize)
    fullSchedule.push(currentSchedule)
    freqPartners = createMatchPartnerships(fullSchedule, playerSize)
    freqOpponents = createMatchOpponents(fullSchedule, playerSize)
}

for (var i = 0; i < fullSchedule.length; i++) {
    console.log(fullSchedule[i])
}

for (const [key, value] of Object.entries(freqPartners)) {
    console.log(`Player ${key} partners are: ${value}`);
}

for (const [key, value] of Object.entries(freqOpponents)) {
    console.log(`Player ${key} opponents are: ${value}`);
}