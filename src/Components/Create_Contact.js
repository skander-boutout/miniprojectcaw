import { useState } from 'react';

export default function App() {

  const [new_data, setNew_data] = useState({
    nom: "",
    prenom: "",
    Num: ""
  });

  const [persos, setPersos] = useState([
    { id: 1, nom: "boutout ", prenom: "skander", Num:"0581726240"  },
    { id: 2, nom: "selami", prenom: "moussa", Num:"0718394752"  },
    { id: 3, nom: "hadout", prenom: "ismail", Num:"0655887711"  },

  ]);

  const addhandler = e => {
    e.preventDefault();
    setPersos([...persos, new_data]);
    setNew_data({ nom: "", prenom: "", Num: "" });
  };
  


  return (
    <div className="App" >
      <form action='http://localhost:3000/Contact/Display_Contacts'>
          <center>
          <fieldset>
          <div>
          <table border="4"
           width="700" 
      >
        <thead>
          <tr>
            <th>Nom</th>
            <th>prenom</th>
            <th>Num</th>
          </tr>
        </thead>
        <tbody>
          {persos.map(p => (
            <tr key={p.id}>
              <td>{p.nom}</td>
              <td>{p.prenom}</td>
              <td>{p.Num}</td>
            </tr>
          ))}
        </tbody>
      </table>

          </div>
          <br></br>
          <div>
            <label>Nom</label>
            <input
              type="text"
              id="nom_ld"
              value={new_data.nom}
              onChange={e => setNew_data({ ...new_data, nom: e.target.value })}
            />
          </div>

          <div>
            <label>prenom</label>
            <input
              type="text"
              id="prenom_ld"
              value={new_data.prenom}
              onChange={e => setNew_data({ ...new_data, prenom: e.target.value })}
            />
          </div>

          <div>
            <label>Number</label>
            <input
              type="Number"
              id="number_ld"
              value={new_data.Num}
              onChange={e => setNew_data({ ...new_data, Num: e.target.value })}
            />
          </div>
          </fieldset>
          <button onClick={addhandler} >Ajouter</button>
          </center>


      </form>
    </div>
    
  );
}
