const Character = ({charData}) => {

  return (
    <div>
      <li className={charData.race}>{charData.name}</li>
    </div>
    
  )
}

export default Character
