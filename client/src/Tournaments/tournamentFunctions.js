import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    tournamentRound6: {
        margin: 'auto 0 auto 5pt',
        width: '275pt',
        marginLeft: '0'
    },
    tournamentRound5: {
        margin: 'auto 0 auto 5pt',
        width: '275pt'
    },
    tournamentRound4: {
        margin: 'auto 0 auto 5pt',
        width: '275pt'
    },
    tournamentRound3: {
        margin: 'auto 0 auto 5pt',
        width: '275pt'
    },
    tournamentRound2: {
        margin: 'auto 0 auto 5pt',
        width: '275pt'
    },
    tournamentRound1: {
        margin: 'auto 0 auto 5pt',
        width: '275pt'
    },
    singleConnect6: {
        borderRight: '6pt solid #5590EC',
        minHeight: '35pt',
        width: '275pt'
    },
    singleConnect5: {
        borderRight: '6pt solid #5590EC',
        minHeight: '150pt',
        width: '275pt'
    },
    singleConnect4: {
        borderRight: '6pt solid #5590EC',
        minHeight: '350pt',
        width: '275pt'
    },
    singleConnect3: {
        borderRight: '6pt solid #5590EC',
        minHeight: '750pt',
        width: '275pt'
    },
    singleConnect2: {
        borderRight: '6pt solid #5590EC',
        minHeight: '1540pt',
        width: '275pt'
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
        width: '275pt'
    },
    doubleConnect55: {
        borderRight: '6pt solid #5590EC',
        minHeight: '185pt',
        width: '275pt'
    },
    doubleConnect44: {
        borderRight: '6pt solid #5590EC',
        minHeight: '490pt',
        width: '275pt'
    },
    doubleConnect33: {
        borderRight: '6pt solid #5590EC',
        minHeight: '1100pt',
        width: '275pt'
    },
    doubleConnect22: {
        borderRight: '6pt solid #5590EC',
        minHeight: '2465pt',
        width: '275pt'
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
        height: '85pt',
        width: '275pt',
        backgroundColor: 'lightgray',
        border: '3pt solid #e8e8e8',
    },
    tournamentEmptyDoubles: {
        height: '120pt',
        width: '275pt',
        backgroundColor: 'lightgray',
        border: '3pt solid #e8e8e8',
    },
    tournamentMatch: {
        height: '85pt',
        backgroundColor: '#ffffff',
        border: '3pt solid #e8e8e8',
        fontSize: '12pt',
        width: '275pt'
    },
    tournamentMatchDoubles: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        backgroundColor: '#ffffff',
        border: '3pt solid #e8e8e8',
        fontSize: '12pt',
        width: '275pt',
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
        height: '34pt', 
        width: '150pt',
        whiteSpace: 'nowrap',
    },
    doublesSpacer: {
        display: 'block',
    },
    matchInfo: {
        padding: '5pt 10pt 0 10pt',
        display: 'flex',
        flexDirection: 'row',
        fontWeight: 'bold'
    },
    matchTeam: {
        padding: '10pt 10pt 0 15pt',
        display: 'flex',
        flexDirection: 'row',
    },
    matchScore: {
        display: 'flex',
        flexDirection: 'row',
        textAlign: 'right',
    },
    boxScore: {
        marginRight: '5pt',
        textAlign: 'right',
        width: '15pt'
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
        fontWeight: 'bold'
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
    teamBlock: {
        display: 'flex',
        flexDirection: 'column',
    },
    textBlock: {
        marginBottom: '5pt',
        textAlign: 'left',
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
                                        <View style={styles.matchScore}>
                                            <Text>{formattedDate}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.matchTeam}>
                                        <View style={styles[matchNameClass]}>
                                            <Text>{matches[keyCounter].team1 && matches[keyCounter].winner === "1" ? <Text style={styles.winnerText}><PDFParseDoublesTeam team={matches[keyCounter].team1} /></Text> : <PDFParseDoublesTeam team={matches[keyCounter].team1} /> } &nbsp;</Text>
                                        </View>
                                        <View style={styles.matchScore}>
                                            {matches[keyCounter].score1.map((score)=> {return <View style={styles.boxScore}><Text>{score}</Text></View>})}
                                        </View>
                                    </View>
                                    <View style={styles.matchTeam}>
                                        <View style={styles[matchNameClass]}>
                                            <Text>{matches[keyCounter].team2 && matches[keyCounter].winner === "2" ? <Text style={styles.winnerText}><PDFParseDoublesTeam team={matches[keyCounter].team2} /></Text> : <PDFParseDoublesTeam team={matches[keyCounter].team2} />} &nbsp;</Text>
                                        </View>
                                        <View style={styles.matchScore}>
                                        {matches[keyCounter].score2.map((score)=> {return <Text style={styles.boxScore}>{score}</Text>})}
                                        </View>
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
                                        <div className="match-roundLoc">
                                            {matches[keyCounter].round} {matches[keyCounter].location ? (" - " + matches[keyCounter].location) : ""}
                                        </div>
                                        <p className="match-score">
                                            {formattedDate}
                                        </p>
                                    </div>
                                    <div className="match-team">
                                        <div className={"match-names " + nameClass}>
                                            {matches[keyCounter].team1 && matches[keyCounter].winner === "1" ? <b><ParseDoublesTeam playerType={playerType} team={matches[keyCounter].team1} /></b> : <ParseDoublesTeam playerType={playerType} team={matches[keyCounter].team1} /> } &nbsp;
                                        </div>
                                        <div className="match-score">
                                            {matches[keyCounter].score1.map((score)=> {return <span className="box-score">{score}</span>})}
                                        </div>
                                    </div>
                                    { doublesSpacer }
                                    <div className="match-team">
                                        <div className={"match-names " + nameClass}>
                                        {matches[keyCounter].team2 && matches[keyCounter].winner === "2" ? <b><ParseDoublesTeam playerType={playerType} team={matches[keyCounter].team2} /></b> : <ParseDoublesTeam playerType={playerType} team={matches[keyCounter].team2} />} &nbsp;
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

export const roundRobinStandings = (players, currentResults, updateTable, playerType) => {
    if (currentResults)
    {
        let counter = 0
        let headings =  <tr className="rr-tr">
                            <th></th>
                            { players.map((player, idx) => {
                            return <th className="standings-colplayer" key={idx + "-playercol"}>{<ParseDoublesTeam playerType={playerType} team={player} />}</th>
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
                    <td className="standings-rowplayer rr-td">{<ParseDoublesTeam playerType={playerType} team={players[i]} />}</td>
                    {row}
                </tr>)
        }

            updateTable(<table className="rr-standings"><tbody>{headings}{rows}</tbody></table>)
    }
}

export const roundRobin = (matches, updateState, togglePopUp, playerLen, playerType) => {
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
                            {matches[i].team1 && matches[i].winner === "1" ? <b><ParseDoublesTeam playerType={playerType} team={matches[i].team1} /></b> : <ParseDoublesTeam playerType={playerType} team={matches[i].team1} />}
                            <br /> vs <br />
                            {matches[i].team2 && matches[i].winner === "2" ? <b><ParseDoublesTeam playerType={playerType} team={matches[i].team2} /></b> : <ParseDoublesTeam playerType={playerType} team={matches[i].team2} />}
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

    if (name === "drawSize") { updateItem(currentObj => ({...currentObj, [name]: parseInt(value)})) }
    else if (name === "players") 
    {
        let indexP = JSON.parse(e.target.getAttribute("data-key"))

        if (currentItem.playerType == "Doubles")
        {

            const newPlayerSet = currentItem.players.map((val, i) => {
                if (i == indexP[0])
                {
                    if (indexP[1] == 0)
                    {
                        return [value, val[1]]
                    }
                    else if (indexP[1] == 1)
                    {
                        return [val[0], value]
                    }
                }
                else
                {
                    return val
                }
            })
            
            updateItem(currentObj => ({...currentObj, players: newPlayerSet}))
        }
        else
        {
            const newPlayerSet = currentItem.players.map((val, i) => {
                if (i == indexP[0])
                {
                    return [value]
                }
                else
                {
                    return val
                }
            })
            
            updateItem(currentObj => ({...currentObj, players: newPlayerSet}))
        }

    }
    else if (name === "add-player")
    {
        let newPlayers = currentItem.players
        if (currentItem.playerType == "Doubles")
        {
            newPlayers.push(["",""])
        }
        else if (currentItem.playerType == "Singles")
        {
            newPlayers.push([""])
        }

        updateItem(currentObj => ({...currentObj, players: newPlayers}))
    }
    else if (name === "playerType")
    {
        let playerSet = currentItem.players
        let matchSet = currentItem.matches

        for (var i = 0; i < playerSet.length; i++)
        {

            if (value === "Singles")
            {
                if (playerSet[i].length > 1)
                {
                    playerSet[i].pop()

                    // account for the placeholder match at index 0
                    if (i > 0 && currentItem.tournamentType == "single-elim")
                    {
                        matchSet[i].team1.pop()
                        matchSet[i].team2.pop()
                    }
                }
            }
            else if (value === "Doubles")
            {            
                // iterate through players and matches to identify both have 2 players
                if (playerSet[i].length < 2)
                {

                    playerSet[i].push("")
                    
                    // account for the placeholder match at index 0
                    if (i > 0 && currentItem.tournamentType == "single-elim")
                    {
                        matchSet[i].team1.push("")
                        matchSet[i].team2.push("")
                    }
                }
            }
        }

        updateItem(currentObj => ({...currentObj, [name]: value, players: playerSet, matches: matchSet}))
    }
    else if (name == "tournamentType")
    {
        //updates tournament type and the draw size to a power of 2 value which should trigger the match updater
        let curItem = currentItem
        let flag = 0
        if (value == "single-elim")
        {
            // find the smallest draw size that is still greater than the number of players in the round robin
            // i < 10 is arbitrary value where less than 2^10 = 2^9 = 512 draw size
            for (var i = 1; i < 10; i++)
            {
                let powerOfTwo = Math.pow(2, i)
                if (powerOfTwo > curItem.drawSize && powerOfTwo >= 4)
                {
                    curItem.drawSize = powerOfTwo
                    flag = 1
                    break
                }
                else if (powerOfTwo == curItem.drawSize  && powerOfTwo >=4)
                {
                    break
                }
            }

            if (flag == 1)
            {
                console.log('yasss')
                singlesUpdater(curItem.drawSize, currentItem, updateItem, 2, "single-elim")
            }
            else
            {
                console.log('noooo')
                singlesUpdater(curItem.drawSize, currentItem, updateItem, 2, "single-elim")

                // updateItem(currentObj => ({...currentObj, [name]: value})) 
            }
        }
        // adjust single elim to draw size that fits within bounds of round robin draw size
        else if (value == "round-robin")
        {
            let playerLen = currentItem.players.length
            // need to account for player length greater than draw size allowed for round robin...
            // requires a full match update
            if (playerLen > 8)
            {
                roundRobinCheckPlayers(8, currentItem, updateItem, 2, "round-robin")
            }
            // accounts for player length less than or equal to max rr draw size of 8
            // still requires a full match update
            else
            {
                roundRobinCheckPlayers(currentItem.drawSize, currentItem, updateItem, 2, "round-robin")
            }
        }
        else 
        {
            updateItem(currentObj => ({...currentObj, [name]: value})) 
        }
    }
    else if(name == "remove-player")
    {
        let removePlayerIdx = parseInt(e.target.getAttribute("data-key"))
        const newPlayerSet = currentItem.players.filter((val, idx) => {
            if (idx !== removePlayerIdx)
            {
                return val
            }
        })
        
        updateItem(currentObj => ({...currentObj, players: newPlayerSet}))

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

export const matchAndPlayerUpdater = (drawSize, currentItem, updateItem, mode) => {
    if (currentItem.tournamentType === "single-elim")
    {
        singlesUpdater(drawSize, currentItem, updateItem, mode)
    }
    else if (currentItem.tournamentType === "round-robin")
    {
        roundRobinCheckPlayers(drawSize, currentItem, updateItem, mode)
    }
}

// sets up matches data structure within a single elimination tournament
//UPON numMatches -> drawSize decouple, all numMatches must change to currentItem.drawSize
const singlesUpdater = (drawSize, currentItem, updateItem, mode, newTournType) => {
     // if the purpose is to update a current tournament
     if (drawSize > currentItem.matches.length && mode == 1)
     {
       // find the matches to add to the current tournament draw
       const matchesToAdd = drawSize - currentItem.matches.length
       // protect the current matches when sending to backend so they are not overwritten
       protectCurrentRounds(currentItem.matches, updateItem)
       // pass current matches with number of extra matches to add
       const matchArr = updateMatchRounds(matchesToAdd, currentItem.matches[currentItem.matches.length - 1].round, currentItem.playerType)
       const combinedMatches = currentItem.matches.concat(matchArr.matches)
       const combinedPlayers = currentItem.players.concat(matchArr.players)
 
       // update current item
       updateItem(currentObj => ({...currentObj, matches: combinedMatches, players: combinedPlayers}))
     }
     // a new tournament form with blank matches but already designated players
     else if (mode == 2)
     {
       const matchArr = addMatchRounds(drawSize, currentItem.playerType)
       let playerDiff = currentItem.players.length - drawSize
       let addPlayers = []

       if (playerDiff < 0)
       {
        playerDiff = playerDiff * -1
        for (var i = 0; i < playerDiff; i++)
        {
            if (currentItem.playerType == "Singles")
            {
                addPlayers.push([""])
            }
            else
            {
                addPlayers.push(["",""])
            }
        }
       }

       let newPlayers = currentItem.players.concat(addPlayers)

       updateItem(currentObj => ({...currentObj, matches: matchArr.matches, tournamentType: newTournType, players: newPlayers}))
     }
     else if (drawSize < currentItem.matches.length)
     {
       // find the number of matches to remove
       const matchesToRemove = (currentItem.matches.length) - drawSize
       const matchArr = removeMatchRounds(matchesToRemove, currentItem.matches, currentItem.players)
 
       // removes appropriate matches and players
       updateItem(currentObj => ({...currentObj, matches: matchArr.matches, players: matchArr.players}))
     }
     else if (drawSize == currentItem.matches.length)
     {
        //    if (currentItem.players.length = 0)
        //    {
        //     let newPlayerSet = []
        //     let drawAndPlayerDiff = currentItem.drawSize - currentItem.players.length
        //     for (var i = 0; i < drawAndPlayerDiff; i++)
        //     {
        //         if (currentItem.playerType == "Singles")
        //         {
        //             newPlayerSet.push([""])
        //         }
        //         else
        //         {
        //             newPlayerSet.push(["",""])
        //         }
        //     }

        //     let combinedPlayers = currentItem.players.concat(newPlayerSet)

        //     updateItem(currentObj => ({...currentObj, players: combinedPlayers}))
        //    }
        //    else
        //    {
        // good to go, the ideal situation
        return
        //    }

     }
     else
     {
       // a new tournament form with blank matches 
       const matchArr = addMatchRounds(drawSize, currentItem.playerType)
       updateItem(currentObj => ({...currentObj, matches: matchArr.matches, players: matchArr.players}))
     }
}

// sets up matches data structure within a round robin tournament from tournamentAPI
export const roundRobinUpdater = (drawSize, currentItem) => {
    console.log(currentItem)
    let players1 = []
    let players2 = []
    let modifiedPlayers = drawSize
    let byeCheck = false

    if (drawSize % 2 == 1)
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

// activated when draw size changed for tournament settings
const roundRobinCheckPlayers = (drawSize, currentItem, updateItem, mode, newTournType) => {
    let updatedPlayers = currentItem.players
    let playerLen = updatedPlayers.length

    // if the purpose is to update a current tournament and user wants more players than current
    if (drawSize > playerLen)
    {
        const addPlayers = drawSize - playerLen
        for (let i = 0; i < addPlayers; i++) 
        {
            if (currentItem.playerType == "Singles")
            {
                updatedPlayers.push([""])
            } 
            else if (currentItem.playerType == "Doubles")
            {
                updatedPlayers.push(["",""])
            } 
        }
    }
    // if user purpose is to remove players from current
    else if (drawSize < playerLen)
    {
        const removePlayers = playerLen - drawSize
        for (let i = 0; i < removePlayers; i++)
        {
            updatedPlayers.pop()
        }
    }

    if (mode == 2)
    {
        updateItem(currentObject => ({...currentObject, players: updatedPlayers, tournamentType: newTournType}))
    }
    else
    {
        updateItem(currentObject => ({...currentObject, players: updatedPlayers}))
    }
}

// supplementary function of roundRobinUpdater which is called by tournamentAPI
const setupMatchupArrays = (drawSize, players, byeCheck) => {
    let players1 = []
    let players2 = []
    let indexAdjust = drawSize / 2

    for (let i = 0; i < (drawSize / 2); i++)
    {
        players1.push(players[i])

        if (byeCheck && i === (drawSize / 2 - 1))
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

// supplementary function of roundRobinUpdater which is called by tournamentAPI

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

const addMatchRounds = (matchNum, playerType) => {
    let playerArr = [""]
    let matchObj = {
        checker: 0,
        round: "", 
        team1: [""],
        score1: [
            ""
        ],
        team2: [""],
        score2: [
            ""
        ],
        location: "",
        date: "",
        winner:""
    }

    if (playerType == "Doubles")
    {
        playerArr.push("")
        matchObj.team1.push("")
        matchObj.team2.push("")

    }

    let formattedMatchArr = {matches: [], players: []}
    formattedMatchArr.matches.push({checker: 0, round: "parent-child tree placeholder"})
    // value does not matter given placeholder match
    formattedMatchArr.players.push(playerArr)

    const depth = findDepth(matchNum)

    let roundArr = ["-1", "F", "SF", "QF", "R16", "R32", "R64"]

    for (let i = 1; i <= depth; i++)
    {
        let roundMatches = Math.pow(2,i) - Math.pow(2,i - 1)

        for (let j = roundMatches; j >= 1; j--)
        {   
            // for each match added, requires potential for 2 players
            formattedMatchArr.players.push(playerArr)
            matchObj.round = roundArr[i]
            formattedMatchArr.matches.push(matchObj)
        }      
    }

    return formattedMatchArr
}

const updateMatchRounds = (matchesToAdd, lastRound, playerType) => {
    let formattedMatchArr = {matches: [], players: []}
    let roundArr = ["-1", "F", "SF", "QF", "R16", "R32", "R64"]
    let playerArr = [""]
    let matchObj = {
        checker: 0,
        round: "", 
        team1: [""],
        score1: [
            ""
        ],
        team2: [""],
        score2: [
            ""
        ],
        location: "",
        date: "",
        winner:""
    }

    if (playerType == "Doubles")
    {
        playerArr.push("")
        matchObj.team1.push("")
        matchObj.team2.push("")

    }

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
            formattedMatchArr.players.push(playerArr)
            matchObj.round = remainingArr[i]
            formattedMatchArr.matches.push(matchObj)
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

const ParseDoublesTeam = ({team, playerType}) => {
    if (team === "")
    {
        return <>{team}</>
    }
    if (team.length == 2 && playerType == "Doubles")
    {
        return (
            <>
                {team[0]}
                <br />
                {team[1]}
            </>
        )
    }
    else
    {
        return <>{team[0]}</>
    }
}

const PDFParseDoublesTeam = ({team}) => {
    if (team === "")
    {
        return <Text>{team}</Text>
    }
    if (team.length == 2)
    {
        return (
            <View style={styles.teamBlock}>
                <View style={styles.textBlock}><Text>{team[0]}</Text></View>
                <Text>{"\n"}</Text>
                <View style={styles.textBlock}><Text>{team[1]}</Text></View>
            </View>
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