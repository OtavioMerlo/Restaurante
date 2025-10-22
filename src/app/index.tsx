import { Text, View, ScrollView } from "react-native";
import Constants from 'expo-constants'

import { Header } from '../components/header/index'
import { Banner } from "../components/banner";
import { Search } from "../components/search";
import {Section} from "../components/section"
import { Treding } from "../components/trending";
import { Restaurants } from "../components/restaurants";

const statusBarHigh = Constants.statusBarHeight

export default function Index() {
  return (
    <ScrollView 
      style={{flex:1}}
      className="bg-slate-200"
      showsVerticalScrollIndicator={false}
    >
      <View className="w-full px-4" style={{marginTop:statusBarHigh + 8}}>
        <Header/>
        <Banner/>
        <Search/>
      </View>

      <Section
        name="Comidas em Alta"
        label="Veja mais"
        size="text-2xl"
        action={(()=>console.log('Voce clicou aqui!'))}
      />
      <Treding/>

       <Section
        name="Famosos no DevFood"
        label="Veja todas"
        size="text-xl"
        action={(()=>console.log('Voce clicou aqui!'))}
      />
      <Restaurants/>
    </ScrollView>
  );
}
