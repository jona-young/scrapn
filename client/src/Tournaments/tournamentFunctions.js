export const singleElimination = (matches, updateState, togglePopUp) => {
    try
    {
        const tournament = []
        
        // Match size has to account for the parent-child tree placeholder to determine next and previous matches
        const matchSize = matches.length - 1
        let keyCounter = matchSize
        
        //find bracket size
        const depth = findDepth(matchSize)

        let emptyClass = "tournament-empty"
        let matchClass = "tournament-match"

        let matchSpacer = 6
        for (let i = depth; i > 0; i--)
        {
            let round = []
            let roundMatches = Math.pow(2,i) - Math.pow(2,i - 1)

            // j = 1 accounts for parent-child tree placeholder
            for (let j = 1; j <= roundMatches; j++)
            {
                //match spacer var
                let connectClass = "tournament-connect tournament-space"+ matchSpacer
                let spaceClass = "tournament-space"+ matchSpacer
                let connector = <div className={connectClass} key={'spacer-' + keyCounter}></div>
                let spacer = <div className={spaceClass} key={'spacer-' + keyCounter}></div>

                if (matches[keyCounter].checker === 0)
                {
                    round.push(<div className={emptyClass}
                                key={keyCounter} 
                                data-key={keyCounter}
                                onClick={(e) => forwardPopUp(e, togglePopUp)}>
                                </div>)
    
                    if (j % 2 === 1 && i > 1) { round.push(connector) }
                    else if (j % 2 === 0 && j !== (roundMatches)) { round.push(spacer) }
                }
                else
                {
                    round.push(<div className={matchClass}
                                    key={keyCounter}
                                    data-key={keyCounter}
                                    onClick={(e) => forwardPopUp(e, togglePopUp)}>
                                    <div className="match-info">
                                        <div>
                                            {matches[keyCounter].round} {matches[keyCounter].location ? (" - " + matches[keyCounter].location) : ""}
                                        </div>
                                        <p className="match-score">
                                            {matches[keyCounter].date}
                                        </p>
                                    </div>
                                    <div className="match-team">
                                        <div className="match-names">
                                            {matches[keyCounter].team1 && matches[keyCounter].winner === "1" ? <b>{matches[keyCounter].team1}</b> : matches[keyCounter].team1} &nbsp;
                                        </div>
                                        <div className="match-score">
                                            {matches[keyCounter].score1.map((score)=> {return <span className="box-score">{score}</span>})}
                                        </div>
                                    </div>
                                    <div className="match-team">
                                        <div className="match-names">
                                        {matches[keyCounter].team2 && matches[keyCounter].winner === "2" ? <b>{matches[keyCounter].team2}</b> : matches[keyCounter].team2} &nbsp;
                                        </div>
                                        <div className="match-score">
                                        {matches[keyCounter].score2.map((score)=> {return <span className="box-score">{score}</span>})}
                                        </div>
                                    </div>
                                </div>)
                    
                    if (j % 2 === 1 && i > 1) { round.push(connector) }
                    else if (j % 2 === 0 && j !== (roundMatches)) { round.push(spacer) }
                }
                keyCounter--
            }
    
            tournament.push(<div className="tournament-round" key={'round-' + i}>{round}</div>)
    
            for (let j = 0; j < roundMatches; j++) { matches.pop() }
            
            matchSpacer--
        }
    
        updateState(tournament)
    }

    catch(err) { console.log(err) }

}

const forwardPopUp = (e, togglePopUp) => {
    const id = e.currentTarget.getAttribute("data-key")

    togglePopUp(parseInt(id))
}

export const listTournaments = (tournaments, updateList, Link) => {
    const tournamentList = []
    tournaments.map((tournament) => {
        tournamentList.push(
            <Link to={"/tournament/" + tournament._id}>
                <p>hi hi</p>
            </Link>
        )
    })

    updateList(tournamentList)
}

//Function to update currentItem based off changes in each individual form field
export const handleChange = (e, updateItem, currentItem) => {
    const name = e.target.name;
    const value = e.target.value;
    
    if (name === "numMatches") { updateItem(parseInt(value)) }
    else if (name === "players") 
    {
        let playerSet = currentItem.players
        let indexP = e.target.getAttribute("data-key")
        playerSet[indexP] = value
        updateItem(currentObj => ({...currentObj, players: playerSet}))
    }
    else { updateItem(currentObj => ({...currentObj, [name]: value})) }
  };

export const togglePopUp = (_matchID,
                            updateMatchID, 
                            updateMatch, 
                            currentItem) => {
    if (_matchID > -1)
    {
        updateMatchID(_matchID)
        updateMatch(currentItem.matches[_matchID])
    }
    else { updateMatchID(-1) }
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

export const addMatchRounds = (matchNum) => {
    let formattedMatchArr = {matches: [], players: []}
    formattedMatchArr.matches.push({checker: 0, round: "parent-child tree placeholder"})
    formattedMatchArr.players.push("")


    const depth = findDepth(matchNum)

    let roundArr = ["-1", "F", "SF", "QF", "R16", "R32", "R64"]

    for (let i = 1; i <= depth; i++)
    {
        let roundMatches = Math.pow(2,i) - Math.pow(2,i - 1)

        for (let j = roundMatches; j >= 1; j--)
        {
            formattedMatchArr.players.push("")
            formattedMatchArr.matches.push({
                checker: 0,
                round: roundArr[i], 
                team1: "",
                score1: [
                    ""
                ],
                team2: "",
                score2: [
                    ""
                ],
                location: "",
                date: "",
                winner:""
            })
        }      
    }

    return formattedMatchArr
}

export const updateMatchRounds = (matchesToAdd, lastRound) => {
    let formattedMatchArr = {matches: [], players: []}
    let roundArr = ["-1", "F", "SF", "QF", "R16", "R32", "R64"]
    // find round to start assigning new courts
    let remainingArr = roundArr.slice(roundArr.indexOf(lastRound) + 1)
    let remainingMatches = matchesToAdd

    for (let i = 0; i < remainingArr.length; i++)
    {
        if (remainingMatches <= 0)
        {
            break;
        }

        let addCounter = 0

        if (remainingArr[i] == "QF") { addCounter = 4 }
        else if (remainingArr[i] == "R16") { addCounter = 8 }
        else if (remainingArr[i] == "R32") { addCounter = 16 }
        else if (remainingArr[i] == "R64") { addCounter = 32 }

        for (let k = 0; k < addCounter; k++)
        {
            formattedMatchArr.players.push("")
            formattedMatchArr.matches.push({
                checker: 0,
                round: remainingArr[i], 
                team1: "",
                score1: [
                    ""
                ],
                team2: "",
                score2: [
                    ""
                ],
                location: "",
                date: "",
                winner:""
            })
        }

        remainingMatches = remainingMatches - addCounter
    }
    return formattedMatchArr
}

export const protectCurrentRounds = (matches, updateState) => {
    let protectedMatches = matches
    for (let i = 0; i < protectedMatches.length; i++)
    {
        protectedMatches[i].skip = 1
    }

    updateState(currentState => ({...currentState, matches: protectedMatches}))
}

export const removeMatchRounds = (matchesToRemove, _matches, _players) => {
    let formattedArr = { matches: _matches, players: _players }

    for (let i = 0; i < matchesToRemove; i++)
    {
        formattedArr.players.pop()
        formattedArr.matches.pop()
    }

    return formattedArr
}