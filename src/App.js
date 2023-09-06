import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Category from "./components/Category";
import ItemsList from "./components/ItemsList";
import React,{useState} from 'react';
import { items } from "./data";


function App() {

  const [itemsData, setItemsData] = useState(items);

  //Make array for uniq categories to make button for every category
  const allCategory = ['الكل',...new Set(items.map(i=>i.category))];
  console.log(allCategory);    // allCategory = ['افطار ','غداء' , 'عشاء, 'الكل']
  //Filter by Category
  const filterByCategory =(categoryName)=>{
    if(categoryName ===  'الكل'){
      setItemsData(items);
    }else{
    const newArray =items.filter(item =>item.category === categoryName)
    setItemsData(newArray)
    }
    }
    
    //Filter by Search Form
    const filterBySearch =(word)=>{
      if(word !==  ""){
        const newArray =items.filter(item =>item.title === word)
        setItemsData(newArray);
      }
      }
      
  
  return (
    <div className="color-body font">
      <NavBar filterBySearch={filterBySearch}/>
     <Container>
      <Header/>
      <Category filterByCategory={filterByCategory} allCategory={allCategory}/>
      <ItemsList itemsData={itemsData}/>
     </Container>
    </div>
  );
}

export default App;
