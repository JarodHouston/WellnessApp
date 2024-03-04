import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Pressable,
  Button
} from "react-native";
import { useFonts } from "expo-font";

export default function Calendar({ navigation }) {
    const [fontsLoaded] = useFonts({
        Baloo: require("../assets/fonts/Baloo2-VariableFont_wght.ttf"),
        "Baloo-Regular": require("../assets/fonts/Baloo2-Regular.ttf"),
        "Baloo-Bold": require("../assets/fonts/Baloo2-Bold.ttf"),
        "Baloo-ExtraBold": require("../assets/fonts/Baloo2-ExtraBold.ttf"),
    });

    return (
        <SafeAreaView style={{backgroundColor:"dodgerblue", height:"100%"}}>
            <View style={styles.container}>
                <Text style={styles.schedule_text}>Today's schedule</Text>
                <View style = {{marginTop:30,backgroundColor:"#fff",height:32, borderRadius: 25}}/>
                <View style={{
                    marginTop: 10,
                    flexDirection: "row",
                    justifyContent:"space-between",
                    alignItems: "center",
                    height:42,
                    display: "flex",
                    }}>
                    <View style={styles.date}>
                        <Text style={{textAlign:'center'}}>Friday {"\n"} 21</Text>
                    </View>
                    <View style={styles.date}>
                        <Text style={{textAlign:'center'}}>Saturday {"\n"} 22</Text>
                    </View>
                    <View style={styles.date}>
                        <Text style={{textAlign:'center'}}>Sunday {"\n"} 23</Text>
                    </View>
                </View>
                <View style = {{marginTop:10, backgroundColor:"#fff",height:32, borderRadius: 25}}/>
                
                <View>
                    <Text style={styles.schedule}>8:30 am - 12:00 pm</Text>
                    <View style={{backgroundColor: '#fff', height: 100, borderRadius: 6.5}}>
                        <View style={styles.tag}>
                            <Text>8:30 am - 9:15 am</Text>
                            <Text style={styles.task_text}>Breakfast</Text>
                            <View style={{flexDirection: "row"}}>
                                <View style={styles.type_tag}><Text style={{fontSize:12, textAlign:'center'}}>Meals</Text></View>
                                <View style={{marginLeft:10}}><Text>B-Plate</Text></View>
                            </View>
                            </View>
                    </View>
                </View>
                
            </View>        
        </SafeAreaView>

    );
}
    
const styles = StyleSheet.create({
    container: {
        width: 290,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    schedule_text: {
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "left",
        fontFamily: "Baloo-ExtraBold",
        marginTop: 50
      },
    date: {
        backgroundColor:"#fff",
        height: '100%',
        width: 89,
        borderRadius: 60
        //flex:1
    }, 
    tag: {
        width:250,
        marginTop: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    task_text: {
        fontSize: 20,
        fontWeight: "bold",
        fontFamily: "Baloo-ExtraBold",
        marginTop: 10
    },
    type_tag: {
        backgroundColor:'#EC9DC3',
        width: 50,
        height: 17,
        borderRadius: 12
    }

})

