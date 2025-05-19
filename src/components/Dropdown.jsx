import React from "react";
import { useState, useEffect } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Lia500Px } from "react-icons/lia";

const Dropdown = () => {
  const [selected, setSelected] = useState(null);
  const [userdata, setUserData] = useState([]);
  const [capital, setCapital] = useState([]);
  const[cities, setcities] = useState([])

  const handleClick = (dropDownId) => {
    setSelected(dropDownId === selected ? null : dropDownId);
  };

  console.log(selected);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          "https://countriesnow.space/api/v0.1/countries/flag/images"
        );

        if (!response.ok) {
          throw new Error("Network response not ok");
        }
        const fetchedData = await response.json();

        setUserData(fetchedData.data);

        // console.log(fetchedData);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUserData();
  }, []);

  useEffect(() => {
    const fetchCapital = async () => {
      try {
        const response = await fetch(
          "https://countriesnow.space/api/v0.1/countries/capital"
        );

        if (!response.ok) {
          throw new Error("Network response not ok");
        }
        const fetchedData = await response.json();

        setCapital(fetchedData.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchCapital();
  }, []);

  useEffect(() =>{

   const  fetchCities = async () => {
    try{
        const response = await fetch('https://countriesnow.space/api/v0.1/countries')
        if(!response.ok){
            throw new Error('Network response not ok');
        }
        const fetchedCities = await response.json()
        setcities(fetchedCities.data);
        console.log(fetchedCities.data)

    }catch(err){
        console.log(err);
        
    }

    };
    fetchCities();
  }, [])

  // console.log(userdata,capital);

  return (
    <div>
      <h1 className="text-3xl text-center pb-8 font-bold">COUNTRIES AND FLAGS</h1>
      <div className="data_div">
        {userdata.map((data, index) => {
          userdata.forEach((country) => {
            for (let item of capital) {
              if (country.name === item.name) {
                country["capital"] = item.capital;
              }
            }
            for(let city of cities){
                if (country.name === city.country){
                    country.cities = city.cities;
                }
            }
          });

          console.log(userdata);

          return (
            <div key={index} className="">
              <div className="main_container">
                <div className="first_div">{data.name}</div>
                <div className="second_div">
                  <img src={data.flag} alt="image" />
                  <div onClick={() => handleClick(index)} className="arrow">
                    {selected === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </div>
                </div>
              </div>
                
                   {selected === index ? (
                    <div className="drop_down_menu">
                        <div className="capital">
                            <span className="text-2xl block font-bold">CAPITAL</span>
                            {data.capital}
                            </div>
                        <div className="text-red-500">
                            <span className="text-2xl block font-bold">CITIES</span>
                            {data.cities.map((c) => <li>{c}</li> )}
                        </div>

                    </div>     
              ) : null}
                </div>
           
           
          );
        })}
      </div>
    </div>
  );
};

export default Dropdown;
