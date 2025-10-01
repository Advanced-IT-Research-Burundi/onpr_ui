import React from "react";
import sideBarData from "../../sideBar.json";

function Secretariat() {
  //Rendre dynaminc avec l'api ...

  const data = sideBarData.find((item) => item.title === "Secretary");

  console.log(data);

  return (
    <div className="col-9">
      <h4 className="heading-section  mb-4">{data.title}</h4>
      <div className="row">
        <div className="col-3">
          <div className="text-black">{data.content}</div>
        </div>
      </div>
    </div>
  );
}

export default Secretariat;
