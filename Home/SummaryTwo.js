import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import axios from "axios";
import { Long, serialize, deserialize ,EJSON } from 'bson';
export default function SummaryTwo() {
  const [data, setData] = useState([]);
  useEffect(async () => {
    return await fetch(
      "https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/application-0-fkimm/service/StallDetailsAPI/incoming_webhook/STALLDETAILAPI?secret=ZAGAGETSTALLAPI"
    )
      .then((res) => 
        res.json())
      .then((json) => {
        setData(json);
      });
  }, []);
  const dataString = JSON.stringify(data[0]);
  const parsing = EJSON.parse(dataString);
  console.log(parsing);
    return (
        <View>
        {data.map((item,index) => (
            <Text key={index}>{Object.values(item.name)}</Text>
        ))}
        </View>
    );
}
