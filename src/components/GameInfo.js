import React from "react";

const GameInfo = ({ data }) => {
  if (!data) return null;

  return (
    <div className="col-md-4">
      <div className="card">
        <div className="card-body text-center">
          <h5 className="card-title">{data.name.toUpperCase()}</h5>
          <p><strong>Main Region:</strong> {data.main_region.name}</p>
          <p><strong>Pokémon Introduced:</strong> {data.pokemon_species.length}</p>
          <p><strong>Version Groups:</strong> {data.version_groups.map(v => v.name).join(", ")}</p>
        </div>
      </div>
    </div>
  );
};

export default GameInfo;