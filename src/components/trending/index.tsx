import { useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import { CardHorinzontalFood } from './food'

export interface FoodProps{
    id:string;
    name:string;
    price:number;
    time:string;
    delivery:number;
    rating:string;
    restaurantId:string;
    image:string;
}

export function Treding() {
    const [foods, setFoods]= useState<FoodProps[]>([])
    useEffect(()=>{
        async function getfood() {
            const response = await fetch("http://192.168.1.110:3000/foods")
            const data = await response.json()
            setFoods(data)
        }
        getfood();
    }, [])
  return (
    <FlatList
        data={foods}
        renderItem={({item})=> <CardHorinzontalFood food={item}/>}
        horizontal={true}
        contentContainerStyle={{gap:14, paddingLeft:16, paddingRight:16}}
        showsHorizontalScrollIndicator={false}
    >

    </FlatList>
  )
}