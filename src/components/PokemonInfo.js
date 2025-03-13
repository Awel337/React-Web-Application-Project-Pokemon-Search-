import React from "react";

const PokemonInfo = ({ data, ability, characteristic, stat, type, onSave, onDelete, saved = false }) => {
  if (!data) return null;

  return (
    <div className="col-md-4">
      <div className="card">
        <img src={data.sprites.front_default} className="card-img-top" alt={data.name} />
        <div className="card-body text-center">
          <h5 className="card-title">{data.name.toUpperCase()}</h5>
          <p><strong>Height:</strong> {data.height}</p>
          <p><strong>Weight:</strong> {data.weight}</p>

          {ability && <p><strong>Ability:</strong> {ability.name}</p>}
          {characteristic && <p><strong>Characteristic:</strong> {characteristic.descriptions[0]?.description}</p>}
          {stat && <p><strong>Base Stat:</strong> {stat.name} - {stat.base_stat}</p>}
          {type && <p><strong>Type:</strong> {type.name}</p>}

          {!saved && <button className="btn btn-primary m-1" onClick={onSave}>Save</button>}
          <button className="btn btn-danger m-1" onClick={onDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default PokemonInfo;

