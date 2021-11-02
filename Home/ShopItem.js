import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
export default function ShopItem(props) {
  const dispatch = useDispatch();
  const dict = {};
  const removeItems = (item) =>
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {item , shopId : props.shopId},
    });
  const selectItems = (item) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: {item , shopId : props.shopId},
    });
  const itemsList = useSelector((state) => state.selectedItems.items);
  var selectorId = (useSelector((state) => state.selectedItems.shopId));
  itemsList.forEach((item) => {
    if (item.title in dict) {
      dict[item.title] += 1;
    } else {
      dict[item.title] = 1;
    }
  });
  React.useEffect(()=>{
    const deleteItem = () => dispatch({
      type:'DELETE_CART'
    })
    deleteItem()
  },[])
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        {props.product.map((item, index) => (
          <View key={index}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                margin: 20,
              }}
            >
              <ProductInfo product={item} />
              <ProductImage
                product={item}
                removeItems={removeItems}
                selectItems={selectItems}
                dict={dict}
                shopId={props.shopId}
                selectorId={selectorId}
              />
            </View>
            <View style={{ borderWidth: 0.5, color: "black" }} />
          </View>
        ))}
      </ScrollView>
      {/* VIEW CART BUTTON */}
      <TouchableOpacity
        style={{
          width: 250,
          height: 40,
          alignSelf: "center",
          justifyContent: "center",
          backgroundColor: "black",
          bottom: 30,
          borderRadius: 30,
        }}
      >
        <Text style={{ color: "white", textAlign: "center" }}>View Cart</Text>
      </TouchableOpacity>
    </>
  );
}

const ProductInfo = (props) => (
  <View style={{ width: 240, justifyContent: "space-evenly" }}>
    <Text style={{ fontSize: 19, fontWeight: "600" }}>
      {props.product.title}
    </Text>
    <Text>{props.product.description}</Text>
    <Text>{props.product.price} /Kg</Text>
  </View>
);

const ProductImage = (props) => (
  <View>
    <Image
      source={{ uri: props.product.image }}
      style={{ width: 100, height: 100, borderRadius: 8 }}
    />
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        width: 80,
        alignSelf: "center",
        backgroundColor: "#90ee90",
        padding: 5,
        borderRadius: 8,
        position: "relative",
      }}
    >
      <TouchableOpacity onPress={() => props.removeItems(props.product)}>
        <Text>-</Text>
      </TouchableOpacity>
      {Object.entries(props.dict).map(([key, value]) =>
        key === props.product.title && props.selectorId === props.shopId ? <Text key={key}>{value}</Text> : null
      )}
      <TouchableOpacity onPress={() => props.selectItems(props.product)}>
        <Text>+</Text>
      </TouchableOpacity>
    </View>
  </View>
);
