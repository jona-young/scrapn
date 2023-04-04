import { useEffect, useState } from 'react';


const Tournament = () => {
    const [ bracket, setBracket ] = useState([])
    useEffect(() => { 
        const tournament = []
        const tournArr = ["-1", "-1", "Match A", "Match B", "-1", "-1", "Match C", "Match D",
                            "-1", "Match 1", "-1", "Match 2","Match 3", "Match 4", "Match 5", "-1",
                            "Match S", "Match T", "Match A", "Match R", "Match B", "Match U", "Match C", "Match K", 
                            "Match 0", "Match 1", "Match 1.5", "Match 2",
                            "Match 3", "Match 4",
                            "Match 5",
                          "-1", "-1", "Match A", "Match B", "-1", "-1", "Match C", "Match D",
                          "-1", "Match 1", "-1", "Match 2","Match 3", "Match 4", "Match 5", "-1",
                          "Match S", "Match T", "Match A", "Match R", "Match B", "Match U", "Match C", "Match K", 
                          "Match 0", "Match 1", "Match 1.5", "Match 2",
                           "Match 3", "Match 4",
                           "Match 5"]

        //find bracket size
        let depth = 6 //depth creates match bracket in size of 2^ depth = 2^3 = 8 team draw

        for (let i = depth; i > 0; i--)
        {
            let round = []
            let roundMatches = Math.pow(2,i) - Math.pow(2,i - 1)

            for (let j = 0; j < roundMatches; j++)
            {
                if (tournArr[j] == "-1")
                {
                    let classname = "tournament-empty"
                    round.push(<div className={classname}></div>)

                    if (j % 2 == 0)
                    {
                        let classname = "tournament-connect tournament-space"+ i
                        round.push(<div className={classname}></div>)
                    }
                    else if (j % 2 == 1 && j != (roundMatches -1))
                    {
                        let classname = "tournament-space"+ i
                        round.push(<div className={classname}></div>)
                    }
                }
                else
                {
                    let classname = "tournament-match"
                    round.push(<div className={classname}>
                                    <div className="match-info">
                                        <div>
                                            {tournArr[j]}
                                        </div>
                                        <p className="match-score">
                                            Mar, 31, 2023
                                        </p>
                                    </div>
                                    <div className="match-team">
                                        <div>
                                            Farid Mekhael
                                        </div>
                                        <div className="match-score">
                                            0 1 0
                                        </div>
                                    </div>
                                    <div className="match-team">
                                        <div>
                                            Rain Outs
                                        </div>
                                        <div className="match-score">
                                            1 0 1
                                        </div>
                                    </div>
                                </div>)

                    if (j % 2 == 0)
                    {
                        let classname = "tournament-connect tournament-space"+ i
                        round.push(<div className={classname}></div>)
                    }
                    else if (j % 2 == 1 && j != (roundMatches -1))
                    {
                        let classname = "tournament-space"+ i
                        round.push(<div className={classname}></div>)
                    }
                }
            }

            tournament.push(<div className="tournament-round">{round}</div>)


            for (let j = 0; j < roundMatches; j++)
            {
                tournArr.shift()
            }


        }

        setBracket(tournament)
    },[])


    return (
        <div className="tournament">
            {bracket}
        </div>
    )
}

export default Tournament