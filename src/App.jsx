import { useEffect, useState } from 'react'
import './App.css'
import Container from './components/Container';


function App() {

  const [AllRecipes, setAllRecipes] = useState([]);

  useEffect(() => {
    fetch('Recipes.json')
      .then(res => res.json())
      .then(data => setAllRecipes(data))
  }, [])

  // console.log(AllRecipes);
  


  return (
    <div>
      <Container AllRecipes={AllRecipes}></Container>      
    </div>
  )
}

export default App
