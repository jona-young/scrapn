export const singleElimination = (matches, updateState, togglePopUp, playerType) => {
    try
    {
        const tournament = []
        const options = {
            month: 'short', 
            day: 'numeric', 
            hour: '2-digit', 
            minute: '2-digit'
        }
        
        // Match size has to account for the parent-child tree placeholder to determine next and previous matches
        const matchSize = matches.length - 1
        let keyCounter = matchSize
        
        //find bracket size
        let depth = findDepth(matchSize)

        let emptyClass = "tournament-empty "
        let matchClass = "tournament-match "

        // match-team, match-names
        let doublesMatch = ""
        let nameClass = ""
        let doublesSpacer = ""
        if (playerType === "Doubles")
        {
            doublesMatch = "match-doublesteam"
            nameClass = "match-doublesname"
            doublesSpacer = <br/>
        }

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

                if (playerType === "Doubles")
                {
                    connectClass = "tournament-connect tournament-space"+ matchSpacer + matchSpacer
                    spaceClass = "tournament-space"+ matchSpacer + matchSpacer
                }


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
                    let rawDate = matches[keyCounter].date
                    let formattedDate
                    if (rawDate !== "")
                    {
                        formattedDate = new Date(rawDate).toLocaleString([], options)
                    }
                    else { formattedDate = ""}

                    round.push(<div className={matchClass + doublesMatch}
                                    key={keyCounter}
                                    data-key={keyCounter}
                                    onClick={(e) => forwardPopUp(e, togglePopUp)}>
                                    <div className="match-info">
                                        <div>
                                            {matches[keyCounter].round} {matches[keyCounter].location ? (" - " + matches[keyCounter].location) : ""}
                                        </div>
                                        <p className="match-score">
                                            {formattedDate}
                                        </p>
                                    </div>
                                    <div className="match-team">
                                        <div className={"match-names " + nameClass}>
                                            {matches[keyCounter].team1 && matches[keyCounter].winner === "1" ? <b><ParseDoublesTeam team={matches[keyCounter].team1} /></b> : <ParseDoublesTeam team={matches[keyCounter].team1} /> } &nbsp;
                                        </div>
                                        <div className="match-score">
                                            {matches[keyCounter].score1.map((score)=> {return <span className="box-score">{score}</span>})}
                                        </div>
                                    </div>
                                    { doublesSpacer }
                                    <div className="match-team">
                                        <div className={"match-names " + nameClass}>
                                        {matches[keyCounter].team2 && matches[keyCounter].winner === "2" ? <b><ParseDoublesTeam team={matches[keyCounter].team2} /></b> : <ParseDoublesTeam team={matches[keyCounter].team2} />} &nbsp;
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

export const roundRobinStandings = (players, currentResults, updateTable, loadedData) => {
    if (currentResults)
    {
        let counter = 0
        let headings =  <tr>
                            <th></th>
                            { players.map((player, idx) => {
                            return <th key={idx + "-playercol"}>{<ParseDoublesTeam team={player} />}</th>
                            })}
                            <th>Wins</th>
                            <th>Games</th>
                            <th>Place</th>

                        </tr>
        let rows = []
        for (let i = 0; i < players.length; i++)
        {
            let row = []
            for (let j = 0; j < players.length; j++)
            {
                if (players[i] === players[j])
                {
                    row.push(<td className="standings-blocked" key={counter + "-blocked"}>&nbsp;</td>)
                }
                else
                {
                    if (currentResults[players[i]][players[j]] === "TBD")
                    {
                        row.push(<td className="standings-value" key={counter + "-playerblock"}>&nbsp;</td>)
                    }
                    else
                    {
                        row.push(<td className="standings-value" key={counter + "-playerblock"}>{currentResults[players[i]][players[j]]}</td>)
                    }
                    // row.push(<td className="standings-value" key={counter + "-playerblock"}>{currentResults[players[i]][players[j]]}</td>)

                }
                counter++
            }
                rows.push(<tr key={counter+"-row"}>
                    <td className="standings-rowplayer">{<ParseDoublesTeam team={players[i]} />}</td>
                    {row}
                    <td className="standings-results" key={counter + "-wins"}></td>
                    <td className="standings-results" key={counter + "-games"}></td>
                    <td className="standings-results" key={counter + "-place"}></td>

                </tr>)
        }

            updateTable(<table className="rr-standings"><tbody>{headings}{rows}</tbody></table>)
    }
}

export const roundRobin = (matches, updateState, togglePopUp) => {
    let tournament = []
    const options = {
        year: 'numeric', 
        month: 'numeric', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit'
    }

    // display matches
    let round = []
    for (let i = 0; i < matches.length; i++)
    {   


        let rawDate = matches[i].date
        let formattedDate
        if (rawDate !== "")
        {
            formattedDate = new Date(rawDate).toLocaleString([], options)
        }
        else { formattedDate = ""}


        round.push(<div className="roundrobin-match"
                        key={i+"rr-match"}
                        data-key={i}
                        onClick={(e) => forwardPopUp(e, togglePopUp)}
                        >
                        <div className="roundrobin-dateloc">
                            <div className="roundrobin-location">{"Round " + matches[i].round}&nbsp; <br /> {matches[i].location}</div>
                            <div className="roundrobin-date">&nbsp;{formattedDate}</div>
                        </div>
                        <div className="roundrobin-matchup">
                            <p className="roundrobin-names">
                            {matches[i].team1 && matches[i].winner === "1" ? <b><ParseDoublesTeam team={matches[i].team1} /></b> : <ParseDoublesTeam team={matches[i].team1} />}
                            <br /> vs <br />
                            {matches[i].team2 && matches[i].winner === "2" ? <b><ParseDoublesTeam team={matches[i].team2} /></b> : <ParseDoublesTeam team={matches[i].team2} />}
                            </p>
                        </div>
                        <div className="roundrobin-scoreset">
                            {matches[i].score1.map((score) => {return <p className="roundrobin-score" key={i+"-team1"}>{score}</p>})}
                        </div>
                        <div className="roundrobin-scoreset">
                            {matches[i].score2.map((score) => {return <p className="roundrobin-score" key={i+"-team2"}>{score}</p>})}
                        </div>
                    </div>)
    }
    tournament.push(<div className="roundrobin-container" key={0}>{round}</div>)

    updateState(tournament)
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

export const matchAndPlayerUpdater = (numMatches, currentItem, updateItem, mode) => {
    if (currentItem.tournamentType === "single-elim")
    {
        singlesUpdater(numMatches, currentItem, updateItem, mode)
    }
    else if (currentItem.tournamentType === "round-robin")
    {
        roundRobinCheckPlayers(numMatches, currentItem, updateItem)
    }
}

// sets up matches data structure within a single elimination tournament
const singlesUpdater = (numMatches, currentItem, updateItem, mode) => {
    // if the purpose is to update a current tournament
    if (numMatches > currentItem.matches.length && mode)
    {
        console.log(1)
      // find the matches to add to the current tournament draw
      const matchesToAdd = numMatches - currentItem.matches.length
      // protect the current matches when sending to backend so they are not overwritten
      protectCurrentRounds(currentItem.matches, updateItem)
      // pass current matches with number of extra matches to add
      const matchArr = updateMatchRounds(matchesToAdd, currentItem.matches[currentItem.matches.length - 1].round)
      const combinedMatches = currentItem.matches.concat(matchArr.matches)
      const combinedPlayers = currentItem.players.concat(matchArr.players)

      // update current item
      updateItem(currentObj => ({...currentObj, matches: combinedMatches, players: combinedPlayers}))
    }
    else if (numMatches < currentItem.matches.length)
    {
        console.log(2)

      // find the number of matches to remove
      const matchesToRemove = (currentItem.matches.length) - numMatches
      const matchArr = removeMatchRounds(matchesToRemove, currentItem.matches, currentItem.players)

      // removes appropriate matches and players
      updateItem(currentObj => ({...currentObj, matches: matchArr.matches, players: matchArr.players}))
    }
    else if (numMatches == currentItem.matches.length)
    {
        console.log(3)

      // good to go, the ideal situation
      return
    }
    else
    {
        console.log(4)

      // a new tournament form with blank matches 
      const matchArr = addMatchRounds(numMatches)
      updateItem(currentObj => ({...currentObj, matches: matchArr.matches, players: matchArr.players}))
    }
}

// sets up matches data structure within a round robin tournament
export const roundRobinUpdater = (numMatches, currentItem) => {
    let players1 = []
    let players2 = []
    let modifiedPlayers = numMatches
    let byeCheck = false

    if (numMatches % 2 == 1)
    {
        modifiedPlayers++;
        byeCheck = true
    }

    const matchupArr = setupMatchupArrays(modifiedPlayers, currentItem.players, byeCheck)
    players1 = matchupArr[0]
    players2 = matchupArr[1]

    //modifiedplayers, p1, p2
    const matchSet = createRoundRobinMatchSet(modifiedPlayers, players1, players2)

    return matchSet
}

const roundRobinCheckPlayers = (numMatches, currentItem, updateItem) => {
    let updatedPlayers = currentItem.players
    let playerLen = updatedPlayers.length

    if (playerLen < numMatches)
    {
        let addPlayers = numMatches - playerLen
        for (let i = 0; i < addPlayers; i++) { updatedPlayers.push("")}
    }
    else if (playerLen > numMatches)
    {
        const removePlayers = playerLen - numMatches
        for (let i = 0; i < removePlayers; i++)
        {
            updatedPlayers.pop()
        }
    }
    else { return }

    updateItem(currentObject => ({...currentObject, players: updatedPlayers}))
}

const setupMatchupArrays = (numMatches, players, byeCheck) => {
    let players1 = []
    let players2 = []
    let indexAdjust = numMatches / 2

    for (let i = 0; i < (numMatches / 2); i++)
    {
        players1.push(players[i])

        if (byeCheck && i === (numMatches / 2 - 1))
        {
            players2.push("Bye")
        }
        else {players2.push(players[i + indexAdjust])}
    }

    return [players1, players2]
}

const shiftPlayers = (players1, players2) => {
    let _players1 = players1
    let _players2 = players2
    let overflowToFirst = _players2[0]
    let overflowToSecond = _players1[_players1.length - 1]
    for (let i = (_players1.length - 1); i >= 1; i--)
    {
        if (i === 1)
        {
            continue
        }

        _players1[i] = _players1[i - 1]
    }

    for (let j = 0; j < (_players2.length - 1); j++)
    {
        _players2[j] = _players2[j + 1]
    }

    _players2[_players2.length - 1] = overflowToSecond
    _players1[1] = overflowToFirst
    
    return [ _players1, _players2]
}

const createRoundRobinMatchSet = (modifiedPlayers, _players1, _players2) => {
    let matchSet = []
    let players1 = _players1
    let players2 = _players2
    // to find possible matches, arbitrary single value is static
    // and remaining values move n - 1 to find all possible matches
    // https://stackoverflow.com/questions/6648512/scheduling-algorithm-for-a-round-robin-tournament
    let endShift = modifiedPlayers - 1 - 1
    let shiftCounter = 0

    while (shiftCounter <= endShift)
    {
        for (let i = 0; i < players1.length; i++)
        {
            matchSet.push({
                checker: 0,
                round: shiftCounter + 1,
                team1: players1[i],
                score1: [],
                team2: players2[i],
                score2: [],
                bestof: "",
                winner: "",
                location: "",
                date: "",
                skip: 0
            })
        }

        const shiftedPlayers = shiftPlayers(players1, players2)
        players1 = shiftedPlayers[0]
        players2 = shiftedPlayers[1]

        shiftCounter++
    }

    return matchSet
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

const addMatchRounds = (matchNum) => {
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
            // for each match added, requires potential for 2 players
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

const updateMatchRounds = (matchesToAdd, lastRound) => {
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
            // for each match added, requires potential for 2 players
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

const protectCurrentRounds = (matches, updateState) => {
    let protectedMatches = matches
    for (let i = 0; i < protectedMatches.length; i++)
    {
        protectedMatches[i].skip = 1
    }

    updateState(currentState => ({...currentState, matches: protectedMatches}))
}

const removeMatchRounds = (matchesToRemove, _matches, _players) => {
    let formattedArr = { matches: _matches, players: _players }

    for (let i = 0; i < matchesToRemove; i++)
    {
        // each match requires 2 players so remove 2 players per match
        formattedArr.players.pop()
        formattedArr.matches.pop()
    }

    return formattedArr
}

const ParseDoublesTeam = ({team}) => {
    if (team === "")
    {
        return <>{team}</>
    }
    if (team.split("/").length >= 2)
    {
        return (
            <>
                {team.split("/")[0]}
                <br />
                {team.split("/")[1]}
            </>
        )
    }
    else if (team.split("&").length >= 2)
    {
        return (
            <>
                {team.split("&")[0]}
                <br />
                {team.split("&")[1]}
            </>
        )
    }
    else
    {
        return <>{team}</>
    }
}