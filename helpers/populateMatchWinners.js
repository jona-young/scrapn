const populateMatchWinners = (matchArr) => {
    let formattedArr = []

    // create a copy of the array
    for (let i = 0; i < matchArr.length; i++)
    {
        formattedArr.push(matchArr[i])
    }

    // data formatting of matches
    for (let i = 1; i < (matchArr.length / 2); i++)
    {   
        // bottom match
        let even = matchArr[2 * i]
        // top match
        let odd = matchArr[(2 * i) + 1]

        if (matchArr[i].skip)
        { 
            matchArr[i].skip = false
            continue
        }

        if (even.winner == "1" || even.winner == "2")
        {
            if (even.winner == "1") { formattedArr[i].team2 = even.team1 }
            else { formattedArr[i].team2 = even.team2 }

            formattedArr[i].checker = 1
        }
        else { formattedArr[i].team2 = "" }

        if (odd.winner == "1" || odd.winner == "2")
        {
            if (odd.winner == "1") { formattedArr[i].team1 = odd.team1 }
            else { formattedArr[i].team1 = odd.team2 }
            
            formattedArr[i].checker = 1
        }
        else { formattedArr[i].team1 = "" }
    }

    return formattedArr
}

module.exports = populateMatchWinners;