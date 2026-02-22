import "./groups.css";

function Group({ imgGroup, name, id, members, status }) {
  return (
    <div className="data">
      {/*
      <p>{name}</p>
      <p>{id}</p>
      <p>{members}</p>
      <p>{status}</p>
      */}

      <span className="data-info">
        <div className="data-main">
          <img src="/prueba.png" alt="N" className="group-icon" />
          <div className="data-name">
            <span>RR.HH</span>
            <span className="sub">Creado hace 3hrs.</span>
          </div>
        </div>
      </span>
      <span className="data-info">2453</span>
      <span className="data-info">14</span>
      <span className="data-info, status">Activo</span>
    </div>
  );
}

export default Group;
