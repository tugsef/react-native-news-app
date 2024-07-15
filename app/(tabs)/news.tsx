import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
} from "react-native";
import NewsCard from "../../components/Card/NewsCard";
import news_data from "../../assets/data/news_data.json";
import NewsBanner from "@/components/NewsBanner";

export default function TabTwoScreen() {
  const renderNews = ({ item ,index}: { item: any,index:any }) => <NewsCard key={index}  news={item} />;


  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>News</Text>
      <FlatList
        ListHeaderComponent={(index) => (
        <NewsBanner key={index}/>
        )}
        keyExtractor={(item) => item.u_id.toString()}
        data={news_data}
        renderItem={renderNews}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eceff1",
  },

  headerText: {
    fontWeight: "bold",
    fontSize: 50,
  },
});
