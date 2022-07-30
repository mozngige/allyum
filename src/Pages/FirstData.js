import {useState,useEffect} from 'react'
import SecondData from './SecondData'
import FormSub from './FormSub'
function FirstData() {
  const[data,setData]=useState([])
    
  useEffect(()=>{
   fetch('http://localhost:3000/meal')
   .then((res)=>res.json())
   .then((res)=>setData(res))


  },[data])
  const secondBreak =  data.map((element)=>(
    <SecondData
    key={element['id']}
    name={element['name']}
    ingredients={element['ingredients']}
    link={element['link']}
    youtube={element['strYoutube']}
    steps={element['steps']}
    
    
    />
  )
   
  )
function addToRecipes(res){
  const newData=[...data,res]
  setData(newData)
}
return (
    <div>
<FormSub addToRecipes={addToRecipes}/>
{secondBreak}
    </div>
  )
}

export default FirstData