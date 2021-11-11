import React from "react";
import { View, Text } from "react-native";
import MapView, { Callout, Marker } from "react-native-maps";
import { MapViewDirections } from 'react-native-maps-directions';
const GOOGLE_MAP_API = "AIzaSyCC8eoRVLMatjpED8vou4sZl6NK8leiStI"
const DeliveryScreen = () => {
  const origin = { latitude: 37.3318456, longitude: -122.0296002 };
  const destination = { latitude: 37.771707, longitude: -122.4053769 };
  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ width: "100%", height: "65%" }}
        loadingEnabled={true}
        region={{
          latitude: 37.42159,
          longitude: -122.0837,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        provider="google"
      >
        <MapViewDirections origin={origin} destination={destination} apikey={GOOGLE_MAP_API}/>
      </MapView>
    </View>
  );
};

export default DeliveryScreen;
