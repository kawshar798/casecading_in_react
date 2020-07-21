import React, { useState } from 'react'
import classes from "./casecading.module.css";
const country = [
    {
        id:1,
        name:'Bangladesh',
        cities: ['Dhaka','Cumilla','Chittagong','Khulna','Barisal']
       
    },
    {
        id:2,
        name:'pakisthan',
        cities: ['Karachi','Lahore','Faisalabad','Rawalpindi']
       
    },
    {
        id:3,
        name:'India ',
        cities: ['Mumbai','Delhi','Kolkata','Chennai']
       
    }
]
 function Casecading() {
     const [countries,setCountries] = useState(country);
     const [cities,setCities] = useState([]);

     const changeCountry = (e) =>{
         console.log(e.target.value);
       const cities =   countries.find(country=>country.name === e.target.value).cities;
setCities(cities);
         
     }

     if(!cities){
         return "loading....";
     }
    return (
        
        <>
       
            <div className={classes.content}>
                <h2>Casecading or dropdown in react</h2>
            <div className={classes.input_wrap}>
            <label>Country</label>
            <select onChange={changeCountry}>
                <option>Select country</option>
                {
                    countries.map( country =>(
                        <option key={country.id}>{ country.name}  </option>
                    ))
                }
            </select>
            </div>
           
           <div  className={classes.input_wrap}>
           <label>City</label>
            <select>
                <option>Select City</option>
                {
                    cities.map( (city,index)=>
                    <option key={index}>{ city}</option>
                    )
                }
            </select>
           </div>
       
            </div>
        
        </>
    )
}
export default Casecading;
