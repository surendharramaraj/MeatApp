import React, { useEffect, useState, useRef } from "react";
import { View, Text, SafeAreaView, Platform, StatusBar ,TouchableOpacity} from "react-native";
import { shopItem } from "./Shop";
import Category from "./Category";
import Shop from "./Shop";
import Header from "./Header";
export default function Home({ navigation , route }) {
  const [message, setMessage] = useState("Chicken");
  const [shopData, setShopData] = useState(shopItem);
  const [shopDetail, setShopDetail] = useState();
  // console.log(route.params.data.locality);
  const getStall = () => {
    setShopData(
      shopItem.filter(
        (item) => item.category.includes(message) && item.is_closed === false
      )
    );
  };
  useEffect(async () => {
    await getStall();
  }, [message]);
  return (
    <>
      <SafeAreaView
        style={{
          marginTop: Platform.OS === "ios" ? 0 : StatusBar.currentHeight,
        }}
      >
        <Header location={route.params.data.locality} navigation={navigation}/>
        <Category message={message} setMessage={setMessage} />
      </SafeAreaView>
      <Shop message={message} shopData={shopData} navigation={navigation} />
    </>
  );
}
