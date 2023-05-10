const matchSeedsToDraw = (matches, players, seeds) => {
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

    // take the players and create an array with players to be seeded
    const seededPlayers = seedPlayers(players, seeds, roundMatches)
    
    seedIdx = seededPlayers.length - 1
    for (let i = roundMatches; i < tournamentMatches.length; i++)
    {
        tournamentMatches[i].team1 = seededPlayers[seedIdx]
        tournamentMatches[i].checker = 1

        seedIdx--
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

const seedPlayers = (players, seeds, roundMatches) => {
    if (seeds > roundMatches)
    {
        seeds = roundMatches
    }
    let seedsArr = []

    // To find the spacing between matches of 1st round matches to seeds
    // divide 1st round matches by # of seeds    
    seedsArr = players.slice(0, seeds)

    // ensures seeds = power of 2, roundMatches will always be power of 2
    if (roundMatches > seeds)
    {
        const addBlankSeeds = roundMatches - seeds
        for (let i = 0; i < addBlankSeeds; i++)
        {
            seedsArr.push("")
        }
    }

    // assigns top and bottom seeds division
    let topSeeds = []
    let botSeeds = []
    for (let i = 0; i < seedsArr.length / 2; i++)
    {
        topSeeds.push(-1)
        botSeeds.push(-1)
    }

    // divide top and bottom side draws on seedings
    for (let i = 0; i < seedsArr.length / 2; i++)
    {
        if (i == 0)
        {
            topSeeds[i] = seedsArr[i]
            botSeeds[i] = seedsArr[i + 1]
        }
        else if (i % 2 == 1)
        {
            topSeeds[i] = seedsArr[2 * i + 1]
            botSeeds[i] = seedsArr[2 * i]
        }
        else
        {
            topSeeds[i] = seedsArr[2 * i]
            botSeeds[i] = seedsArr[2 * i + 1]
        }
    }

    // order seedings vertical based match by match
    let finalSeeding = []
    if (topSeeds.length >= 2)
    {
        // top side draw
        let endIdx = topSeeds.length - 1
        let botMidPt = topSeeds.length / 2
        let topMidPt = botMidPt - 1

        for (let i = 0; i < topSeeds.length / 2; i++)
        {
            if (i === 0)
            {
                finalSeeding.push(topSeeds[i])
                finalSeeding.push(topSeeds[endIdx])
            }
            else
            {
                finalSeeding.push(topSeeds[botMidPt])
                finalSeeding.push(topSeeds[topMidPt])

                topMidPt--
                botMidPt++
            }
        }

        // bottom side draw
        botOuterPt = botSeeds.length - 2
        topOuterPt = 1

        for (let i = 0; i < botSeeds.length / 2; i++)
        {
            if (i === botSeeds.length / 2 - 1)
            {
                finalSeeding.push(botSeeds[endIdx])
                finalSeeding.push(botSeeds[0])
            }
            else
            {
                finalSeeding.push(botSeeds[topOuterPt])
                finalSeeding.push(botSeeds[botOuterPt])

                topOuterPt++
                botOuterPt--
            }
        }
    }
    else { finalSeeding = [seedsArr[0], seedsArr[1]]} // only 2 team single elim draw

    return finalSeeding
}



module.exports = matchSeedsToDraw