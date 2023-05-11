import { useState } from "react";

const Add = ({ charData, maximum, handleCallback }) => {
  const [name, setName] = useState("");
  const [race, setRace] = useState("");
  const [mobile, setMobile] = useState("");
  const [street, setStreet] = useState("");

  const addCharacter = () =>
  charData.setCharacters([...charData.characters, { name, race, mobile, street }]);

  const handlerName = (event) => setName(event.target.value);
  const handlerRace = (event) => setRace(event.target.value);
  const handlerMobile = (event) => setMobile(event.target.value);
  const handlerStreet = (event) => setStreet(event.target.value);

  const seePosition = (index) => alert(charData.characters[index].name);

  var message = "my callback"
  return (
    <div class="border">
       <h1>*Add</h1>
      <p>
        Nombre: <input type="text" onChange={handlerName} />
      </p>
      <p>
      Móvil: <input type="text" onChange={handlerMobile} />
      </p>
      <p>
      Calle: <input type="text" onChange={handlerStreet} />
      </p>
      <p>
        Raza:
        <select id="raceChar" onChange={handlerRace}>
          <option value="">Humano</option>
          <option value="supersaiyan">Supersaiyan</option>
          <option value="namekiano">Namekiano</option>
        </select>
      </p>

      <button onClick={addCharacter}>Añadir nuevo</button>
      <button onClick={() => seePosition(maximum)}>Alerta del maximum</button>

    
    {handleCallback(message)}

    </div>
  );
};

export default Add;
