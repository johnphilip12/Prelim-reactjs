import React, {useState, useEffect} from "react"
import { View } from "./components/View";

//getting values of local storage
const getDatafromLS=()=>{
  const data = localStorage.getItem('laptops');
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}

export const App = () => {

  const [laptops, setLaptops]= useState([getDatafromLS()]);

  //input field states
  const [laptop_name, setLaptopName]= useState('');
  const [brand, setBrand]= useState('');
  const [color, setColor]= useState('');
  const [price, setPrice]= useState('');

  //form submit event
  const handleAddLaptopSubmit=(e)=>{
    e.preventDefault();

    //creating an object
    let laptop={
      laptop_name,
      brand,
      color,
      price
    }
    setLaptops([...laptops, laptop]);
    setLaptopName('');
    setBrand('');
    setColor('');
    setPrice('');
  }

  //delete from LS
  const deleteLaptop=(laptop_name)=>{
    const filteredLaptops=laptops.filter((element,index)=>{
      return element.laptop_name !== laptop_name
    })
    setLaptops(filteredLaptops);
  }

  //saving data to local storage
  useEffect(()=>{
    localStorage.setItem('laptops', JSON.stringify(laptops));
  },[laptops])

  return(
    <div className="wrapper">
      <div className="main">
        <div className="form-container bg-light">
          <form autoComplete="off" className="form-group"
           onSubmit={handleAddLaptopSubmit}>
            <label>Laptop Name</label>
            <input type="text" className="form-control" required
            onChange={(e)=>setLaptopName(e.target.value)} value={laptop_name}></input>
            <label>Brand</label>
            <input type="text" className="form-control" required
            onChange={(e)=>setBrand(e.target.value)} value={brand}></input>
            <label>Color</label>
            <input type="text" className="form-control" required
            onChange={(e)=>setColor(e.target.value)} value={color}></input>
            <label>Price</label>
            <input type="text" className="form-control" required
            onChange={(e)=>setPrice(e.target.value)} value={price}></input>
            <br></br>
            <button type="submit" className="btn btn-primary btn-md">
              Add Laptop
            </button>
          </form>
        </div>

        <div className="view-container bg-light">
          {laptops.length>0&&<>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Laptop Name</th>
                  <th>Brand</th>
                  <th>Color</th>
                  <th>Price</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
              
                <View laptops={laptops} deleteLaptop={deleteLaptop}/>
              </tbody>
            </table>
          </div>
          <button className="btn btn-primary btn-md" 
          onClick={()=>setLaptops([])}>Remove All</button>
          </>}
          {laptops.length <1 && <div>No laptops added.</div>}
        </div>
      </div>
    </div>
  )
}

export default App;