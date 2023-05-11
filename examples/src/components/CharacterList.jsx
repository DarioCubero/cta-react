import CharacterCard from "./CharacterCard";

const CharactersList = ({ dataChars, maximum }) => {
  return (
    <div class="border">
      <h1>*List</h1>
      <h2>Childs---Character</h2>
      <ul>
        {dataChars.characters.map((character, index) => (
          <CharacterCard charData={character} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default CharactersList;
