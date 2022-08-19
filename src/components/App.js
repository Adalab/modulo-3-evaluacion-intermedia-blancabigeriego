
import '../styles/App.scss';
import quotes from '../services/quotes.json';
import { useState } from 'react';

function App() {
  //variables de estado
  const [data, setData] = useState(quotes);

  //pintar
  const htmlData = data.map((eachQuote, index)=>{
    return(
      <li key={index}>{eachQuote.quote} -{eachQuote.character}</li>
    )
  });


  return (
   <div>
     <h1>Frases de friends</h1>
     {htmlData};
     
   </div>
   );
}

export default App;
