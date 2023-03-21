//Function to update currentItem based off changes in each individual form field
export const handleChange = (e, updateItem, currentItem) => {
    const name = e.target.getAttribute('data-key');
    const value = e.target.value;
       
    updateItem({...currentItem, [name]: value});
  };

export const courtDashboard = (courtArr) => {
  let bookedCourts = []
  if (courtArr.length > 0)
  {
    for (let i = 0; i < courtArr.length; i++)
    {
      bookedCourts.push(
        <div className="bookings-item" key={i}>
            <div className="bookings-info">
                <div className="bookings-data">
                Crt {courtArr[i].court}
                </div>
                <div className="bookings-data">
                {courtArr[i].time}
                </div>
                <div className="bookings-data">
                {courtArr[i].date}
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
        </div>
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