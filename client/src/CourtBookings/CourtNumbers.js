import React from "react";

function CourtNumbers() {
  const days = [];

  for (let i = 0; i < 5; i++) {
    if (i === 0) {
      days.push(
        <div className="court-heading" key={i}>
          Time
        </div>
      );
    } else {
      days.push(
        <div className="court-heading" key={i}>
          Crt {i}
        </div>
      );
    }
  }
  return <div id="court-header">{days}</div>;
}

export default CourtNumbers;
