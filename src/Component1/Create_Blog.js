import { useState } from 'react';

export default function App() {

  const [new_data, setNew_data] = useState({
    subject: "",
    descreption: "",
    date: ""
  });

  const [persos, setPersos] = useState([
    { id: 1, subject: "Footbal ", descreption: "FIFA_2022_champions held in qatar", date:"2022-12-21"  },
    { id: 2, subject: "BasketBall", descreption: "NBA_2022_champions", date:"2022-11-25"  },

  ]);

  const addhandler = e => {
    e.preventDefault();
    setPersos([...persos, new_data]);
    setNew_data({ subject: "", descreption: "", date: "" });
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
            <th>subject</th>
            <th>descreption</th>
            <th>date</th>
          </tr>
        </thead>
        <tbody>
          {persos.map(p => (
            <tr key={p.id}>
              <td>{p.subject}</td>
              <td>{p.descreption}</td>
              <td>{p.date}</td>
            </tr>
          ))}
        </tbody>
      </table>

          </div>
          <br></br>
          <div>
            <label>subject</label>
            <input
              type="text"
              id="subject_ld"
              value={new_data.subject}
              onChange={e => setNew_data({ ...new_data, subject: e.target.value })}
            />
          </div>

          <div>
            <label>descreption</label>
            <input
              type="text"
              id="descreption_ld"
              value={new_data.descreption}
              onChange={e => setNew_data({ ...new_data, descreption: e.target.value })}
            />
          </div>

          <div>
            <label>date</label>
            <input
              type="Date"
              id="date_ld"
              value={new_data.date}
              onChange={e => setNew_data({ ...new_data, date: e.target.value })}
            />
          </div>
          </fieldset>
          <button onClick={addhandler}>Ajouter</button>
          </center>


      </form>
    </div>
    
  );
}
