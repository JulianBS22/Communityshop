import { useEffect, useState } from 'react';
import './styles.css'
import { getLatestAdverts } from './service';

const adverts = [
    {
        name: "Coche",
        sale: true,
        tags: ["lifestyle","motor"],
        price: 15.000,
        photo:"",
        advertId:1

    },
    {
        name: "Moto",
        sale: true,
        tags: ["lifestyle","motor"],
        price: 10.000,
        photo:"",
        advertId:2

    },
    {
        name: "Casa",
        sale: false,
        tags: ["lifestyle"],
        price: 300.000,
        photo:"",
        advertId:3

    },
    {
        name: "Consola",
        sale: true,
        tags: ["hobby","lifestyle"],
        price: 650,
        photo:"",
        advertId:4

    },
    {
        name: "Bici",
        sale: false,
        tags: ["lifestyle","hobby"],
        price: 300,
        photo:"",
        advertId:5

    },
    
]

const AdvertsPage = () => {
    const [adverts, setAdverts] = useState ([]);
    useEffect(() =>{
        getLatestAdverts().then (adverts => setAdverts(adverts.data));
    },[]);
    
    return (
    <div className= "AdvertsPage" >
        <ul>
            {adverts.map(advert => (<li key = {advert.advertId}>{advert.name}{advert.price}

            </li>))}
            
        </ul>
    </div>
    );
};

export default AdvertsPage;