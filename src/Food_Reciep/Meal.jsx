import React, { useEffect, useState } from "react";
import './Meal.css';

const Meal = () => {
  const [mealData, setMealData] = useState([]);
  const [area, setArea] = useState('Indian');
  const [inputData, setInputData] = useState('');


  useEffect(() => {
    const fetchDataFromApi = async () => {
      const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
      );
      const data = await api.json();

      console.log(data.meals);

      setMealData(data.meals);
    };
    fetchDataFromApi();
  }, [area]);

  const submitHandler = async (e) =>{

    e.preventDefault();
    const api = await fetch(
        `https:/www.themealdb.com/api/json/v1/1/search.php?s=${inputData}`);
      const data = await api.json();

      console.log("search data = ",data.meals);
      setMealData(data.meals);
      setInputData('');

  }

  return (
    <>
      <div className="mx-auto text-center my-3">
        <button
          type="button"
          onClick={() => setArea('Indian')}
          className="btn btn-outline-primary  mx-3 my-3"
        >
          Indian
        </button>
        <button
          type="button"
          onClick={() => setArea("Canadian")}
          className="btn btn-outline-info mx-3 my-3 "
        >
          Canadian
        </button>
        <button
          type="button"
          onClick={() => setArea("American")}
          className="btn btn-outline-success mx-3 my-3 "
        >
          American
        </button>

        <button
          type="button"
          onClick={() => setArea("Thai")}
          className="btn btn-outline-danger mx-3 my-3 "
        >
          Thai
        </button>
        <button
          type="button"
          onClick={() => setArea("British")}
          className="btn btn-outline-warning mx-3 my-3 "
        >
          British
        </button>

        <button
          type="button"
          onClick={() => setArea("Russian")}
          className="btn btn-outline-info mx-3 my-3 "
        >
          Russian
        </button>
       
      </div>

      {/* search bar */}
        <form onSubmit={submitHandler} className="mx-auto text-center my-3" >
            <input onChange={(e)=>setInputData(e.target.value)} type="text" />
        </form>

      {/* second  */}
      <div
        style={{
          marginTop: "20px",
          //    border:'2px solid orange',
          //    backgroundColor:'gray',
          width: "80%",
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {mealData.map((data) => (
          <div
            key={data.idMeal}
            style={{
              textAlign: "center",
            }}
          >
            <div>
              <img
                src={data.strMealThumb}
                alt=""
                style={{
                  width: "250px",
                  border: "2px solid blue",
                  borderRadius: "10px",
                  margin: "10px",
                }}
              />
            </div>

            <h5 style={{fontSize:'15px', margin:'10px' , textAlign:'center'}}>{data.strMeal}</h5>
          </div>
        ))}
      </div>
    </>
  );
};

export default Meal;
