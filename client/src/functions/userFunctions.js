import format from "date-fns/format";

//Function to update currentItem based off changes in each individual form field
export const handleChange = (e, updateItem, currentItem) => {
    const name = e.target.getAttribute('data-key');
    const value = e.target.value;
       
    updateItem({...currentItem, [name]: value});
  };

export const courtDashboard = (courtArr, Link) => {
  let bookedCourts = []
  if (courtArr.length > 0)
  {
    for (let i = 0; i < courtArr.length; i++)
    {

      let curDate = new Date(courtArr[i].date)
      let courtDate = format(curDate, "yyyy-MM-d");

      bookedCourts.push(
        <Link
        className="bookings-item"
        to={{
          pathname: "/update-court/" + courtArr[i]._id,
        }}
        >
          <div className="bookings-info">
              <div className="bookings-data">
              Crt {courtArr[i].court}
              </div>
              <div className="bookings-data">
              {courtArr[i].time}
              </div>
              <div className="bookings-data">
              { courtDate }
              </div>
          </div>
          <div className="bookings-players">
              <div className="bookings-player">
                {courtArr[i].players[0].name}
              </div>
              <div className="bookings-player">
                {courtArr[i].players[1].name}
              </div>
              <div className="bookings-player">
                {courtArr[i].players[2] ? courtArr[i].players[2].name : ""}
              </div>
              <div className="bookings-player">
              {courtArr[i].players[3] ? courtArr[i].players[3].name : ""}
              </div>
          </div>
        </Link>
      )
    }
  }
  else
  {
    bookedCourts.push(

    <span className="bookings-empty">You do not currently have any booked courts!</span>
    )
  }


  return bookedCourts
}