import {useState} from 'react'

const Advice = () => {
  const [Advice,setAdvice]=useState([])
  async function getAdvice (){
    const ase = await fetch("http://api.adviceslip.com/advice");
    const data = await ase.jason();
   setAdvice(data.slip.advice);
  }

  return (
    <div>
      <h1>{Advice}</h1>
    
        <button onClick={getAdvice}>give advice</button>
      
    </div>
  )
}

export default Advice
