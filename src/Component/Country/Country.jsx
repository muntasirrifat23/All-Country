import { useEffect, useState } from "react";

const Country = () => {
    const [countries, setCountry] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountry(data))
    }, [])
    return (
        <div className="w-full">
            <div className="text-center p-4 font-bold text-4xl" style={{ textDecoration: 'underline dotted' }}>Total Country: {countries.length}</div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 flex justify-center mt-10 mx-auto'>
                {countries.map(country => (
                    <div key={country.name.common} className="mx-auto flex">
                        <div className="card card-compact w-full shadow-xl" style={{ backgroundColor: "#DCFFCA", color: "#222A22" }}>
                            <h2 className="underline font-bold text-2xl text-center">{country.name.common}</h2>

                            <figure><img className="rounded-3xl p-3" src={country.flags.png} alt="Shoes" /></figure>

                            <div className="card-body font-bold text-xl flex flex-col justify-between">
                                <div className="flex">
                                    <p>Region: {country.region}</p>
                                    <h1>Subregion: {country.subregion}</h1>
                                </div>
                                
                                <div className="flex">
                                    <p>Area: {country.area}</p>
                                    <h1>Population: {country.population}</h1>
                                </div>
                               
                                <h1>Timezones: {country.timezones}</h1>
                                <a href={country.maps.googleMaps} className="underline" target="blank">Country Map</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Country;
