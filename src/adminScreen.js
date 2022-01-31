import React,{Component} from 'react'
import {View,Text, StyleSheet, FlatList, TouchableOpacity, Button} from 'react-native'
import { fireStore } from '../firebase';
export default class AdminScreen extends Component {
constructor(props){
super(props)
this.state = {
    host: [],

  };
}

   


componentDidMount() {
   
   
    fireStore
      .collection("pool")
      .get()
      .then((response) => {
        var list = [];
        response.forEach((item) => {
          list.push({
            docId: item.id,
        host: item.data(),
            
          });
        });

        this.setState({
          host: list,
         
        });
       
      }
      
      );
      
  }
  
 
  renderItem = ({ item }) => {
    
  
    return (
         
      <View style={this.styles.body}>
          <TouchableOpacity onPress={()=>{
            this.props.navigation.navigate("DetailScreen", {
                email: item.host.add3
            })
        }}>
        <Text>ad soyad     {item.host.add1}</Text>
        <Text>telefon:   {item.host.add2}</Text>
        <Text>email:  {item.host.add3}</Text>
        </TouchableOpacity>
      </View>
    );
    
  };
 
render(){
//{this.state.host.map((item)=> console.log(item.docId))}
return (
    
<View>
  
<FlatList
        data={this.state.host}
        renderItem={this.renderItem}
        keyExtractor={(item) => item.docId}
      />

<Button
       title='ÇIKIŞ'
    onPress={()=>{
        this.props.navigation.navigate("LoginScreen")}}></Button>
</View>);

}

styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    alignItems: "center",
    margin:20
  },
  body:{
    
    paddingTop: 10,
    alignItems: "flex-start",
    justifyContent:"flex-start",
    margin:20,
    alignContent:"flex-start",
    borderColor:"black",
    borderWidth:2,
    
    

  }
});
}

