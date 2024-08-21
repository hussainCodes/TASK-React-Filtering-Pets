import { useState } from "react";
import pets from "../petsData";
import PetItem from "./PetItem";
import SearchBar from "./SearchBar";
import SelectorButton from "./SelectorButton";

function PetsList() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("");
  
  const petList = pets.filter(pet => {
    if(query == ""){
      return pet;
    }else if (pet.name.toLowerCase().includes(query.toLowerCase())){
      return pet;
    }
  }).filter(pet => {
    if(type == ""){
      return pet;
    }else if(pet.type == type){
      return pet;
    }
  }).map((pet) => <PetItem pet={pet} key={pet.id} />);


  
  const setQueryFunction = (e) => {
    setQuery(e.target.value)   
  }
 

  const setTypeFunction = (e) => {
    setType(e.target.value)
   // petList = pets.filter(pet => pet.type == type)
  }



  return (  

    <section id="doctors" className="doctor-section pt-140">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-5 col-xl-6 col-lg-7">
            <div className="section-title text-center mb-30">
              <h1 className="mb-25 wow fadeInUp" data-wow-delay=".2s">
                Fur-ends
              </h1>
              <SearchBar setQuery={setQueryFunction}/>
              <br />
              Type:
              <SelectorButton setType={setTypeFunction}/>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">{petList}</div>
      </div>
    </section>
  );
}

export default PetsList;
