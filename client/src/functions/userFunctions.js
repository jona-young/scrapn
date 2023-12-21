import format from "date-fns/format";

//Function to update currentItem based off changes in each individual form field
export const handleChange = (e, updateItem, currentItem) => {
    const name = e.target.getAttribute('data-key');
    const value = e.target.value;
       
    updateItem({...currentItem, [name]: value});
  };

export const tournamentDashboard = (tournamentArr, Link, deleteTournament, history, DialogAlert) => {
  let bookedTournaments = []
  if (tournamentArr && tournamentArr.length > 0)
  {
    for (let i = 0; i < tournamentArr.length; i++)
    {
      bookedTournaments.push(
      <div className="content-flexcard home-cardorient">
        <Link 
          key={i+"-tournament"}
          to={{
            pathname: "/tournament/" + tournamentArr[i]._id,
          }}
          className="general-contentbox content-flexcard"
        >
          <div>
              <span className="content-icon">T{i+1}</span>
          </div>
          <div className="content-cardinfo">
              <span className="content-badge flex-spacer">
                {tournamentArr[i].startDate}
              </span>
              <h4 className="flex-spacer">{tournamentArr[i].name}</h4>
              <p className="content-lightsub content-smallheading flex-spacerend">{tournamentArr[i].location}</p>
          </div>
        </Link>
        <div className="tournament-header-toprow">
          <Link to={"/update-tournament/" + tournamentArr[i]._id} className="form-submit form-tournamentbtn form-updatebtn form-bannerbtn form-btnspacer">Update</Link>
          <DialogAlert 
          btnName="Delete"
          handleClickAction = {(e) => deleteTournament(e, tournamentArr[i]._id, history, false)} 
          heading="Delete Tournament?"
          message="Confirm you would like to delete this tournament!"/>
        </div>
      </div>
      )
    }
  }
  else
  {
    bookedTournaments.push(
    <span className="bookings-empty">You do not currently have any tournaments!</span>
    )
  }
  return bookedTournaments
}


export const tournamentSeriesDashboard = (tournamentArr, Link, deleteTournament, history, DialogAlert) => {
  let tournamentSeries = []
  if (tournamentArr && tournamentArr.length > 0)
  {
    for (let i = 0; i < tournamentArr.length; i++)
    {
      tournamentSeries.push(
      <div className="content-flexcard home-cardorient">
        <Link 
          key={i+"-tournament"}
          to={{
            pathname: "/tournament-series/" + tournamentArr[i]._id,
          }}
          className="general-contentbox content-flexcard"
        >
          <div>
              <span className="content-icon">S{i+1}</span>
          </div>
          <div className="content-cardinfo">
              <span className="content-badge flex-spacer">
                {tournamentArr[i].startDate}
              </span>
              <h4 className="flex-spacer">{tournamentArr[i].name}</h4>
              <p className="content-lightsub content-smallheading flex-spacerend">{tournamentArr[i].location}</p>
          </div>
        </Link>
        <div className="tournament-header-toprow">
          <Link to={"/update-tournamentseries/" + tournamentArr[i]._id} className="form-submit form-tournamentbtn form-updatebtn form-bannerbtn form-btnspacer">Update</Link>
          <DialogAlert 
          btnName="Delete"
          handleClickAction = {(e) => deleteTournament(e, tournamentArr[i]._id, history, false)} 
          heading="Delete Tournament?"
          message="Confirm you would like to delete this tournament!"/>
        </div>
      </div>
      )
    }
  }
  else
  {
    tournamentSeries.push(
    <span className="bookings-empty">You do not currently have any tournament series!</span>
    )
  }
  return tournamentSeries
}