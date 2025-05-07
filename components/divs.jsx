export function Divs({ img, title, text }) {
    return (
      <div className="div-item">
        
        <div className="div-kids">
            <h1>{title}</h1>
            <h3>{text}</h3>
            <button className="btn-header">Más información</button>
        </div>
        <div>
            <img className="kid-pic" src={img} alt="" />
        </div>
      </div>
    );
  }
  