import React,{Component} from 'react'
import {View,Text, StyleSheet, FlatList, TouchableOpacity, Button} from 'react-native'
import { fireStore } from '../firebase'
export default class DetailScreen extends Component {
constructor(props){
super(props)
this.state={
    host:"",
}
console.log(this.props.route.params.email)

}


componentDidMount() {
   
   const s="bbb";
    fireStore
      .collection("pool")
      .where("add3","==", this.props.route.params.email)
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
          <TouchableOpacity >
        <Text>ad soyad     {item.host.add1}</Text>
        <Text>telefon:   {item.host.add2}</Text>
        <Text>email:  {item.host.add3}</Text>
        <Text>okul:  {item.host.add4}</Text>
        <Text>iş:  {item.host.add5}</Text>
        <Text>mesleki :  {item.host.add6}</Text>

        </TouchableOpacity>
      </View>
    );
  };
render(){
return (
<View>
  
<FlatList
        data={this.state.host}
        renderItem={this.renderItem}
        keyExtractor={(item) => item.docId}
      />
      <View style={{justifyContent:"center", alignContent:"center"}}>
      <Button
       title='<= CV HAVUZUNA DÖN '
    onPress={()=>{
        this.props.navigation.navigate("AdminScreen")}}></Button>
</View>
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


