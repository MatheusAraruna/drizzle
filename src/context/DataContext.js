import React, { useState, createContext } from 'react'

import RequestClimate from '../api/index'

const Context = createContext();
function DataProvider({children}){
    const [ wheater, setWheater ] = useState([]);
    const [ active, setActive ] = useState(false);
    
    async function request(city){
        const res = await RequestClimate(city)
        .then(res=>JSON.parse(res))
        .catch(err=>alert(err))
        setWheater(res)
        setActive(res)
    }
    return  <Context.Provider value={{ request, active, wheater }}>
                {children}
            </Context.Provider>

}
export { Context, DataProvider }