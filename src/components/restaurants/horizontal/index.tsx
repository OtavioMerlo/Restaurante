import { View, Text, Pressable, Image } from 'react-native'
import { RestaurantsProps } from '..'

export function RestaurantItem({item}:{item:RestaurantsProps}) {
  return (
    <Pressable className='flex flex-col items-center justify-center' onPress={(()=> console.log(`Clicou no restaurantes:${item.name}`))}>
        <Image
        source={{uri:item.image}}
        className='w-20 h-20 rounded-full'
        />
        <Text className='text-sm mt-2 w-20 text-center leanding-4 text-black' numberOfLines={2}>{item.name}</Text>
    </Pressable>
  )
}