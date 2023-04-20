const matchSeedsToDraw = (matches, players) => {
    if (matches.length <= 2)
    {
        return
    }

    const tournamentMatches = matches
        
    // Match size has to account for the parent-child tree placeholder to determine next and previous matches
    const matchSize = tournamentMatches.length - 1
    
    //find bracket size
    const depth = findDepth(matchSize)

    // number of matches in the first round of the tournament draw
    let roundMatches = Math.pow(2,depth) - Math.pow(2,depth - 1)

    const seededPlayers = seedPlayers(players, roundMatches)

    let currentPos = roundMatches
    let playerCounter = 0
    while (currentPos < (roundMatches * 2))
    {
        // assign player to court
        tournamentMatches[currentPos].team1 = seededPlayers[playerCounter]
        tournamentMatches[currentPos].checker = 1

        // sets a draw every 4 matches
        if (currentPos % 2 == 1)
        {
            currentPos = currentPos + 1
        }
        else { currentPos = currentPos + 3 }

        playerCounter++
    }

    return tournamentMatches
}

const findDepth = (matchSize) => {
    //find bracket size
    let depth = 0 //depth creates match bracket in size of 2^ depth = 2^3 = 8 team draw
    let flag = false

    while (!flag)
    {
        (Math.pow(2, depth) < matchSize) ? depth++ : flag = true
    }

    return depth
}

const seedPlayers = (players, roundMatches) => {
    let playersInOrder = []

    let endPlayerPos = (roundMatches / 2) - 1
    let beginPlayerPos = 0

    while (beginPlayerPos < endPlayerPos)
    {
        playersInOrder.push(players[beginPlayerPos])
        playersInOrder.push(players[endPlayerPos])

        beginPlayerPos = beginPlayerPos + 1
        endPlayerPos = endPlayerPos - 1
    }

    return playersInOrder
}

module.exports = matchSeedsToDraw