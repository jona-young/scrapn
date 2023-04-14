// const drawTemplate = (form) => {
//     const draws = singleElimination(form.matches)
//     console.log(draws)
//     return (`
//         <html>
//             <head>
//                 <title>Tournament Draws</title>
//                 <style>
//                     .name-box {
//                         height: 68px;
//                     }

//                     .court-delete {
//                     display: block;
//                     margin: auto;
//                     margin-top: 13px;
//                     border-radius: 4px;

//                     width: 100%;
//                     height: 30px;
//                     background: lightcoral;
//                     font-size: 10px;
//                     }

//                     .player-name {
//                     font-size:12px;
//                     }

//                     /* TOURNAMENT */
//                     .tournament-container {
//                     padding: 10px;
//                     min-height: 550px;
//                     }

//                     .tournament {
//                     display: flex;
//                     flex-direction: row;
//                     padding: 30px;
//                     overflow-x: scroll;
//                     }

//                     .tournament-round {
//                     margin: auto 0 auto 5px;
//                     }

//                     .tournament-match {
//                     height: 60px;
//                     width: 200px;
//                     background: #00C772;
//                     border: 3px solid #e8e8e8;
//                     font-size: 12px;
//                     }

//                     .tournament-empty {
//                     height: 60px;
//                     width: 200px;
//                     background: lightgray;
//                     border: 3px solid #e8e8e8;
//                     }

//                     .match-info {
//                     padding: 3px 10px 0 10px;
//                     font-weight: bold;
//                     display: flex;
//                     flex-direction: row;
//                     background: blue;
//                     }

//                     .match-team {
//                     padding: 0 10px 0 20px;
//                     display: flex;
//                     flex-direction: row;
//                     }

//                     .match-score {
//                     right:0;
//                     margin-left: auto;
//                     font-weight: normal;
//                     text-align: right;
//                     }

//                     .tournament-connect {
//                     border-right: 6px solid #5590EC;

//                     }
//                     .tournament-space6 {
//                     min-height:35px;
//                     }

//                     .tournament-space5 {
//                     min-height:136px;
//                     }

//                     .tournament-space4 {
//                     min-height: 335px;
//                     }

//                     .tournament-space3 {
//                     min-height: 740px;
//                     }

//                     .tournament-space2 {
//                     min-height: 1525px;
//                     }

//                     .box-score {
//                     display: inline-block;
//                     width: 15px;
//                     margin: 0 1px;
//                     text-align: center;
//                     }
//                 </style>
//             </head>
//             <body style="font-family: sans-serif;">
//                 <h1>${form.name}</h1>
//                 <h5>${form.date} at ${form.name}</h5>

//                 <div>
//                     ${draws}
//                 </div>
//             </body>
//         </html>
//         `
//     )
// }

// const singleElimination = (matches) => {
//     const drawSpacing = ["","","min-height: 1525px;", "min-height: 740px;",
//                             "min-height: 335px;", "min-height:136px;", "min-height:35px;"]

//     const emptyStyle = `height: 60px;
//                         width: 200px;
//                         background: lightgray;
//                         border: 3px solid #e8e8e8;`

//     const matchStyle = `height: 60px;
//                         width: 200px;
//                         background: #00C772;
//                         border: 3px solid #e8e8e8;
//                         font-size: 12px;`

//     const infoStyle = `padding: 3px 10px 0 10px;
//                         font-weight: bold;
//                         display: flex;
//                         flex-direction: row;
//                         background: blue;
//                         `
//     const teamStyle = `padding: 0 10px 0 20px;
//                         display: flex;
//                         flex-direction: row;`
                            
//     const scoreStyle = `right:0;
//                         margin-left: auto;
//                         font-weight: normal;
//                         text-align: right;`  
                        
//     const roundStyle = `margin: auto 0 auto 5px;`

//     let tournament = '<div style="  display: flex; flex-direction: row; padding: 30px;">'
//     const matchSize = matches.length
    
//     //find bracket size
//     const depth = findDepth(matchSize)

//     let matchSpacer = 6
//     for (let i = depth; i > 0; i--)
//     {
//         let round = ''
//         let roundMatches = Math.pow(2,i) - Math.pow(2,i - 1)

//         for (let j = 0; j < roundMatches; j++)
//         {
            
//             const connectStyle=`border-right: 6px solid #5590EC; ${drawSpacing[matchSpacer]}`
//             const spacingStyle = `${drawSpacing[matchSpacer]}`

//             console.log('how many matches', matches[j].checker)

//             if (matches[j].checker == 0)
//             {
//                 round = round + `<div style="${emptyStyle}"></div>`
                
//                 if (j % 2 == 0 && i > 1)
//                 {
//                     console.log('boopity dooood', drawSpacing[matchSpacer])
//                     round = round + `<div style="${connectStyle}"></div>`
//                 }
//                 else if (j % 2 == 1 && j != (roundMatches -1))
//                 {
//                     round = round + `<div style="${spacingStyle}"></div>`
//                 }
//             }
//             else
//             {
//                 round = round + `<div style="${matchStyle}">
//                                 <div style="${infoStyle}">
//                                     <div>
//                                         ${matches[j].round} ${matches[j].location ? (" - " + matches[j].location) : ""}
//                                     </div>
//                                     <p style="${scoreStyle}">
//                                         ${matches[j].date}
//                                     </p>
//                                 </div>
//                                 <div style="${teamStyle}">
//                                     <div>
//                                         ${matches[j].team1 && matches[j].winner == "1" ? `<b>${matches[j].team1}</b>` : matches[j].team1}
//                                     </div>
//                                     <p style="${scoreStyle}">
//                                         ${matches[j].score1.map((score)=> {return `<span style="display: inline-block; width: 15px; margin: 0 1px; text-align: center;">${score}</span>`})}
//                                     </p>
//                                 </div>
//                                 <div style="${teamStyle}">
//                                     <div>
//                                     ${matches[j].team2 && matches[j].winner == "2" ? `<b>${matches[j].team2}</b>` : matches[j].team2}
//                                     </div>
//                                     <p style="${scoreStyle}">
//                                     ${matches[j].score2.map((score)=> {return `<span style="display: inline-block; width: 15px; margin: 0 1px; text-align: center;">${score}</span>`})}
//                                     </p>
//                                 </div>
//                             </div>`
                
//                 if (j % 2 == 0 && i > 1)
//                 {
//                     round = round + `<div style="${connectStyle}"></div>`
//                 }
//                 else if (j % 2 == 1 && j != (roundMatches -1))
//                 {
//                     round = round + `<div style="${spacingStyle}"></div>`
//                 }
//             }
//         }

//         tournament = tournament + `<div style="${roundStyle}">${round}</div>`

//         for (let j = 0; j < roundMatches; j++)
//         {
//             matches.shift()
//         }
        
//         matchSpacer--
//     }

//     tournament = tournament + "</div>"

//     return tournament
// }


// const findDepth = (matchSize) => {
//     //find bracket size
//     let depth = 0 //depth creates match bracket in size of 2^ depth = 2^3 = 8 team draw
//     let flag = false


//     while (!flag)
//     {
//         if (Math.pow(2,depth) < matchSize)
//         {
//             depth++
//         }
//         else
//         {
//             flag = true
//         }
//     }

//     return depth
// }

// module.exports = drawTemplate;