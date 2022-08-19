
import '../styles/App.scss';
import quotes from '../services/quotes.json';
import { useState } from 'react';

function App() {
  //variables de estado
  const [data, setData] = useState(quotes);
  const [newData, setNewData] = useState({
    quote: "",
    character:"",
  })

  //pintar
  const htmlData = data.map((eachQuote, index)=>{
    return(
      <li key={index}>{eachQuote.quote} -{eachQuote.character}</li>
    )
  });

  //funciones de eventos

  const handleChange = (ev) =>{
    setNewData({
      ...newData,
       [ev.target.id]: ev.target.value
    })
  };

  const handleClick = (ev) =>{
    ev.preventDefault();
    setData([...data, newData]);
    setNewData({
      quote:"",
      character:"",
    })

  };


  return (
   <div>
     <h1>Frases de friends</h1>
     {htmlData};
     <h2>Añadir uan nueva frase:</h2>
     <form>
      <label>Frase</label>
      <input type="text" placeholder="Añade frase" id="quote" name="quote" value={newData.quote} onChange={handleChange}/>
      <label>Personaje</label>
      <input type="text" placeholder="Añade personaje" id="character" name="character" value={newData.character} onChange={handleChange}/>
      <input type="submit" onClick={handleClick}/>
     </form>
     
   </div>
   );
}

export default App;
