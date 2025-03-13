import React from "react";

const MoveInfo = ({ data }) => {
  if (!data) return null;

  return (
    <div className="col-md-4">
      <div className="card">
        <div className="card-body text-center">
          <h5 className="card-title">{data.name.toUpperCase()}</h5>
          <p><strong>Power:</strong> {data.power || "N/A"}</p>
          <p><strong>Accuracy:</strong> {data.accuracy || "N/A"}</p>
          <p><strong>PP:</strong> {data.pp}</p>
          <p><strong>Type:</strong> {data.type.name}</p>
        </div>
      </div>
    </div>
  );
};

export default MoveInfo;

