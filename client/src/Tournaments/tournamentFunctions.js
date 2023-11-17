import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    tournamentRound6: {
        margin: 'auto 0 auto 5pt',
        width: '250pt',
        marginLeft: '0'
    },
    tournamentRound5: {
        margin: 'auto 0 auto 5pt',
        width: '250pt',
    },
    tournamentRound4: {
        margin: 'auto 0 auto 5pt',
        width: '250pt',
    },
    tournamentRound3: {
        margin: 'auto 0 auto 5pt',
        width: '250pt',
    },
    tournamentRound2: {
        margin: 'auto 0 auto 5pt',
        width: '250pt',
    },
    tournamentRound1: {
        margin: 'auto 0 auto 5pt',
        width: '250pt',
    },
    singleConnect6: {
        borderRight: '6pt solid #5590EC',
        minHeight: '35pt',
        width: '250pt',
    },
    singleConnect5: {
        borderRight: '6pt solid #5590EC',
        minHeight: '125pt',
        width: '250pt',
    },
    singleConnect4: {
        borderRight: '6pt solid #5590EC',
        minHeight: '325pt',
        width: '250pt',
    },
    singleConnect3: {
        borderRight: '6pt solid #5590EC',
        minHeight: '725pt',
        width: '250pt',
    },
    singleConnect2: {
        borderRight: '6pt solid #5590EC',
        minHeight: '1515pt',
        width: '250pt',
    },
    singleSpace6: {
        minHeight: '35pt'
    },
    singleSpace5: {
        minHeight: '136pt'

    },
    singleSpace4: {
        minHeight: '335pt'

    },
    singleSpace3: {
        minHeight: '740pt'

    },
    singleSpace2: {
        minHeight: '1525pt'

    },
    doubleConnect66: {
        borderRight: '6pt solid #5590EC',
        minHeight: '35pt',
        width: '250pt'
    },
    doubleConnect55: {
        borderRight: '6pt solid #5590EC',
        minHeight: '185pt',
        width: '250pt'
    },
    doubleConnect44: {
        borderRight: '6pt solid #5590EC',
        minHeight: '490pt',
        width: '250pt'
    },
    doubleConnect33: {
        borderRight: '6pt solid #5590EC',
        minHeight: '1100pt',
        width: '250pt'
    },
    doubleConnect22: {
        borderRight: '6pt solid #5590EC',
        minHeight: '2465pt',
        width: '250pt'
    },
    doubleSpace66: {
        minHeight: '35pt'
    },
    doubleSpace55: {
        minHeight: '196pt'
    },
    doubleSpace44: {
        minHeight: '515pt'
    },
    doubleSpace33: {
        minHeight: '1150pt'
    },
    doubleSpace22: {
        minHeight: '2465pt'
    },
    tournamentEmpty: {
        height: '60pt',
        width: '250pt',
        backgroundColor: 'lightgray',
        border: '3pt solid #e8e8e8',
    },
    tournamentEmptyDoubles: {
        height: '120pt',
        width: '250pt',
        backgroundColor: 'lightgray',
        border: '3pt solid #e8e8e8',
    },
    tournamentMatch: {
        height: '60pt',
        backgroundColor: '#ffffff',
        border: '3pt solid #e8e8e8',
        fontSize: '12pt',
        minWidth: '250pt',
    },
    tournamentMatchDoubles: {
        height: '60pt',
        backgroundColor: '#ffffff',
        border: '3pt solid #e8e8e8',
        fontSize: '12pt',
        width: '250pt',
        height: '120pt'
    },
    matchNames: {
        width: '130pt',
        height: '17pt', 
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden'
    },
    matchNamesDoubles: {
        width: '130pt',
        height: '34pt', 
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden'
    },
    doublesSpacer: {
        display: 'block',
        margin: '60pt 0'
    },
    matchInfo: {
        padding: '3pt 10pt 0 10pt',
        display: 'flex',
        flexDirection: 'row'
    },
    matchScore: {
        right: 0,
        marginLeft: 'auto',
        textAlign: 'right'
    },
    matchTeam: {
        padding: '0 10pt 0 10pt',
        display: 'flex',
        flexDirection: 'row'
    },
    boxScore: {
        display: 'inline-block',
        width: '15pt',
        margin: '0 1pt',
        textAlign: 'center'
    },
    matchWinner: {
        fontSize: '24pt',
        width: '350pt'
    },
    matchTeamWinner: {
        padding: '0 10pt 0 10pt',
        display: 'flex',
        flexDirection: 'row',
        fontSize: '24pt',
        width: '350pt'
    },
    winnerText: {
    },
    roundrobinMatch: {
        width: '250pt',
        margin: '20pt 5pt',
        padding: '5pt 10pt',
        backgroundColor: 'white',
        border: '2pt solid #e8e8e8',
        borderRadius: '7pt',
        display: 'flex',
        flexDirection: 'column',

    },
    roundrobinCenterBox: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    roundrobinNameBox: {
        width: '250pt',
        display: 'flex',
        flexDirection: 'column',
        fontSize: '12pt'
    },
    roundrobinDateloc: {
        margin: '5pt',
        display: 'flex',
        flexDirection: 'row',
    },
    roundrobinLocation: {
        textAlign: 'left',
        fontSize: '14pt',
        marginBottom: '5pt'
    },
    roundrobinDate: {
        right: 0,
        marginLeft: 'auto'
    },
    roundrobinMatchup: {
        margin: '5pt auto'
    },
    roundrobinNames: {
        textAlign: 'center',
        display: 'block'
    },
    roundrobinScoreset: {
        margin: '2pt auto',
        display: 'flex',
        flexDirection: 'row',
        fontSize: '12pt'
    },
    roundrobinScore: {
        textAlign: 'center',
        marginRight: '5pt'
    }, 
    rrStandings: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        margin: '10pt auto',
        color: 'black',
        textAlign: 'center'
    },
    rrTr: {
        display: 'flex',
        flexDirection: 'row',
        height: '50pt'
    },
    rrTrCollection: {
        display: 'flex',
        flexDirection: 'column',
    },
    standingsColplayer: {
        fontSize: '12pt',
        width: '100pt'
    },
    standingsBlocked: {
        width: '125pt',
        overflow: 'hidden',
        borderRadius: '5pt',
        backgroundColor: '#e8e8e8'
    },
    standingsValue: {
        width: '125pt',
        border: '2pt solid #e8e8e8',
        overflow: 'hidden',
        borderRadius: '5pt',
    },
    standingsColHeader: {
        width: '125pt',
        border: '2pt solid #e8e8e8',
        overflow: 'hidden',
        borderRadius: '5pt',
    },
    standingsRowPlayer: {
        width: '200pt',
        fontSize: '12pt',
    },
    standingsColPlayer: {
        fontSize: '12pt',
    },
    standingsColResult: {
        fontSize: '12pt',
        margin: 'auto 0',
    },
    textBlock: {
        display: 'block',
        marginBottom: '5pt',
        textAlign: 'center',
    }
});

export const PDFRoundRobin = ( matches, playerLen, updateState ) => {
    if (playerLen % 2 == 1) {
        playerLen++;
    }

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

        round.push(<View style={styles.roundrobinMatch}>
                        <View style={styles.roundrobinDateloc}>
                            <View>
                                <Text style={styles.roundrobinLocation}>{"Round " + matches[i].round}&nbsp; <br /> {matches[i].location}</Text>
                            </View>
                            <View style={styles.roundrobinDate}>
                                <Text>{formattedDate}</Text>
                            </View>
                        </View>
                        <View style={styles.roundrobinCenterBox}>
                            <View style={styles.roundrobinNameBox}>
                                {matches[i].team1 && matches[i].winner === "1" ? <PDFParseDoublesTeam team={matches[i].team1} /> : <PDFParseDoublesTeam team={matches[i].team1} />}
                                <Text style={styles.textBlock}>
                                    vs
                                </Text>
                                {matches[i].team2 && matches[i].winner === "2" ? <PDFParseDoublesTeam team={matches[i].team2} /> : <PDFParseDoublesTeam team={matches[i].team2} />}
                            </View>
                            <View style={styles.roundrobinScoreset}>
                                {matches[i].score1.map((score, x) => {return <Text style={styles.roundrobinScore}>{score}</Text>})}
                            </View>
                            <View style={styles.roundrobinScoreset}>
                                {matches[i].score2.map((score, x) => {return <Text style={styles.roundrobinScore}>{score}</Text>})}
                            </View>
                        </View>
                    </View>)
       
        if ((i + 1) % (playerLen / 2) == 0)
        {
            tournament.push(round)
            round = []
        }
    }

    updateState(tournament)
}

export const PDFRoundRobinStandings = (players, currentResults, updateTable) => {
    if (currentResults)
    {
        let counter = 0
        let headings =  <View style={styles.rrTr}>
                            <View style={styles.standingsRowPlayer}></View>
                            { players.map((player, idx) => {
                            return <View style={styles.standingsColHeader}>
                                        <View style={styles.standingsColPlayer}>
                                            {<PDFParseDoublesTeam team={player} />}
                                        </View>
                                    </View>
                            })}
                        </View>

        let rows = []
        for (let i = 0; i < players.length; i++)
        {
            let row = []
            for (let j = 0; j < players.length; j++)
            {
                if (players[i] === players[j])
                {
                    row.push(<View style={styles.standingsBlocked}>&nbsp;</View>)
                }
                else
                {
                    if (currentResults[players[i]][players[j]] === "TBD")
                    {
                        row.push(<View style={styles.standingsValue}>&nbsp;</View>)
                    }
                    else
                    {
                        row.push(<View style={styles.standingsValue}>
                                    <Text style={styles.standingsColResult}>
                                        {currentResults[players[i]][players[j]]}
                                    </Text>
                                </View>)
                    }
                }
                counter++
            }
                rows.push(<View style={styles.rrTr}>
                        <View style={styles.standingsRowPlayer}>
                            {<PDFParseDoublesTeam team={players[i]} />}
                        </View>
                        {row}
                </View>)

        }
            updateTable(<View style={styles.rrStandings}><View style={styles.rrTrCollection}>{headings}{rows}</View></View>)

    }
}

export const PDFSingleElim = ( matches, playerType, updateState ) => {
    try
    {
        const draw = []
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

        let matchClass = "tournamentMatch"
        let matchNameClass = "matchNames"
        let doublesSpacerClass = ""
        let emptyMatchClass = "tournamentEmpty"

        if (playerType === "Doubles")
        {
            emptyMatchClass = "tournamentEmptyDoubles"
            matchClass = "tournamentMatchDoubles"
            matchNameClass = "matchNamesDoubles"
            doublesSpacerClass = "doublesSpacer"
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
                let connectClass = "singleConnect"+ matchSpacer
                let spaceClass = "singleSpace"+ matchSpacer

                if (playerType === "Doubles")
                {
                    connectClass = "doubleConnect"+ matchSpacer + matchSpacer
                    spaceClass = "doubleSpace"+ matchSpacer + matchSpacer
                }


                let connector = <View style={styles[connectClass]}></View>
                let spacer = <View style={styles[spaceClass]} ></View>

                if (matches[keyCounter].checker === 0)
                {
                    round.push(<View style={styles[emptyMatchClass]}></View>)
    
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

                    round.push(<View style={styles[matchClass]}>
                                    <View style={styles.matchInfo}>
                                        <View>
                                            <Text>{matches[keyCounter].round} {matches[keyCounter].location ? (" - " + matches[keyCounter].location) : ""}</Text>
                                        </View>
                                        <Text style={styles.matchScore}>
                                            <Text>{formattedDate}</Text>
                                        </Text>
                                    </View>
                                    <View style={styles.matchTeam}>
                                        <View style={styles[matchNameClass]}>
                                            <Text>{matches[keyCounter].team1 && matches[keyCounter].winner === "1" ? <Text style={styles.winnerText}><PDFParseDoublesTeam team={matches[keyCounter].team1} /></Text> : <PDFParseDoublesTeam team={matches[keyCounter].team1} /> } &nbsp;</Text>
                                        </View>
                                        <Text style={styles.matchScore}>
                                            {matches[keyCounter].score1.map((score)=> {return <Text style={styles.boxScore}>{score}</Text>})}
                                        </Text>
                                    </View>
                                    <View style={styles[doublesSpacerClass]}></View>
                                    <View style={styles.matchTeam}>
                                        <View style={styles[matchNameClass]}>
                                            <Text>{matches[keyCounter].team2 && matches[keyCounter].winner === "2" ? <Text style={styles.winnerText}><PDFParseDoublesTeam team={matches[keyCounter].team2} /></Text> : <PDFParseDoublesTeam team={matches[keyCounter].team2} />} &nbsp;</Text>
                                        </View>
                                        <Text style={styles.matchScore}>
                                        {matches[keyCounter].score2.map((score)=> {return <Text style={styles.boxScore}>{score}</Text>})}
                                        </Text>
                                    </View>
                                </View>)
                    
                    if (j % 2 === 1 && i > 1) { round.push(connector) }
                    else if (j % 2 === 0 && j !== (roundMatches)) { round.push(spacer) }
                }
                keyCounter--
            }

            draw.push(<View style={styles["tournamentRound" + matchSpacer]}>{round}</View>)
            
            if (i == 1 && (matches[1].winner == "1" || matches[1].winner == "2")) {
                draw.push(<View style={styles.tournamentRound1}>
                                    <View style={styles.matchWinner}>
                                        <View style={styles.matchInfo}><Text style={styles.winnerText}>WINNER</Text></View>
                                        <View style={styles.matchTeamWinner}><Text style={styles.winnerText}>{matches[i]['team' + matches[i].winner]}</Text></View>
                                    </View>
                                </View>)
            }
    
            for (let j = 0; j < roundMatches; j++) { matches.pop() }
            
            matchSpacer--
        }

        updateState(draw)
    }

    catch(err) { console.log(err) }
}

export const singleElimination = async (matches, updateState, togglePopUp, playerType) => {
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
                    round.push(<div className={emptyClass + " " + doublesMatch}
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
            
            if (i == 1 && (matches[1].winner == "1" || matches[1].winner == "2")) {
                tournament.push(<div className="tournament-round" key={'winner-0'}>
                                    <div className="tournament-matchwinner">
                                        <div className="match-info">WINNER</div>
                                        <div className="match-team match-winner">{matches[i]['team' + matches[i].winner]}</div>
                                    </div>
                                </div>)
            }
    
            for (let j = 0; j < roundMatches; j++) { matches.pop() }
            
            matchSpacer--
        }


    
        updateState(tournament);
        return 1
    }

    catch(err) { return 0 }

}

export const roundRobinStandings = (players, currentResults, updateTable) => {
    if (currentResults)
    {
        let counter = 0
        let headings =  <tr className="rr-tr">
                            <th></th>
                            { players.map((player, idx) => {
                            return <th className="standings-colplayer" key={idx + "-playercol"}>{<ParseDoublesTeam team={player} />}</th>
                            })}
                        </tr>
        let rows = []
        for (let i = 0; i < players.length; i++)
        {
            let row = []
            for (let j = 0; j < players.length; j++)
            {
                if (players[i] === players[j])
                {
                    row.push(<td className="standings-blocked rr-td" key={counter + "-blocked"}>&nbsp;</td>)
                }
                else
                {
                    if (currentResults[players[i]][players[j]] === "TBD")
                    {
                        row.push(<td className="standings-value rr-td" key={counter + "-playerblock"}>&nbsp;</td>)
                    }
                    else
                    {
                        row.push(<td className="standings-value rr-td" key={counter + "-playerblock"}>{currentResults[players[i]][players[j]]}</td>)
                    }
                }
                counter++
            }
                rows.push(<tr className="rr-tr" key={counter+"-row"}>
                    <td className="standings-rowplayer rr-td">{<ParseDoublesTeam team={players[i]} />}</td>
                    {row}
                </tr>)
        }

            updateTable(<table className="rr-standings"><tbody>{headings}{rows}</tbody></table>)
    }
}

export const roundRobin = (matches, updateState, togglePopUp, playerLen) => {
    if (playerLen % 2 == 1) {
        playerLen++;
    }

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
                            {matches[i].score1.map((score, x) => {return <p className="roundrobin-score" key={x+"-team1"}>{score}</p>})}
                        </div>
                        <div className="roundrobin-scoreset">
                            {matches[i].score2.map((score, x) => {return <p className="roundrobin-score" key={x+"-team2"}>{score}</p>})}
                        </div>
                    </div>)
       
        if ((i + 1) % (playerLen / 2) == 0)
        {
            tournament.push(round)
            round = []
        }
    }

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

const PDFParseDoublesTeam = ({team}) => {
    if (team === "")
    {
        return <Text>{team}</Text>
    }
    if (team.split("/").length >= 2)
    {
        return (
            <>
                <Text style={styles.textBlock}>{team.split("/")[0]}</Text>
                <Text style={styles.textBlock}>{team.split("/")[1]}</Text>
            </>
        )
    }
    else if (team.split("&").length >= 2)
    {
        return (
            <>
                <Text style={styles.textBlock}>{team.split("&")[0]}</Text>
                <Text style={styles.textBlock}>{team.split("&")[1]}</Text>
            </>
        )
    }
    else
    {
        return <>{team}</>
    }
}

export const PDFPaperSize = (matchSize, tournamentType) => {
    if (tournamentType == "single-elim")
    {
        if (matchSize == 4)
        {
            return [941, 750]
        }
        else if (matchSize == 8)
        {
            return [1500, 1000]
        }
        else if (matchSize == 16)
        {
            return [1500, 1500]
        }
        else if (matchSize == 32)
        {
            return [1750, 2750]
        }
        else if (matchSize == 64)
        {
            return [2000, 5250]
        }
    }
    else if (tournamentType == "round-robin")
    {
        if (matchSize == 1)
        {
            return [500, 750]
        }
        else if (matchSize == 6)
        {
            return [1000, 1100]
        }
        else if (matchSize == 15)
        {
            return [1200, 1700]
        }
    }

}