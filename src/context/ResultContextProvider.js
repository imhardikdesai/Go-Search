import { createContext, useContext, useState } from "react";

const ResultContext = createContext();

export const ResultContextProvider = ({ children }) => {

    const baseUrl = 'https://google-search-2.p.rapidapi.com/'

    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const getResults = async (type) => {
        setLoading(true);
        const response = await fetch(`${baseUrl}${type}`, {
            "method": "GET",
            headers: {
                'X-RapidAPI-Key': '1d4259e5c5mshb21901f3c7fc18fp135e42jsnebad76870168',
                'X-RapidAPI-Host': 'google-search-2.p.rapidapi.com'
            }

        });
        const data = await response.json();
        setResult(data);
        setLoading(false);
    }



    return (
        <ResultContext.Provider value={{ result, setResult }}>
            {children}
        </ResultContext.Provider>
    );
}