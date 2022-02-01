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
      <View style={this.styles.container}>
          <View style={this.styles.body}>
        <Text style={{flex:1}}>Ad Soyad:     {item.host.add1}</Text>
        </View>
        <View style={this.styles.body}>
        <Text  style={{flex:1}}>Cep Numarası:   {item.host.add2}</Text>
        </View>
        <View style={this.styles.body}>

        <Text style={{flex:1}} >E-Mail:  {item.host.add3}</Text>
        </View>
        <View style={this.styles.body}>

        <Text style={{flex:1}}>Eğitim Bilgileri:  {item.host.add4}</Text>
        </View>
        <View style={{
        flex:10,
        paddingTop: 10,
        }}>

       
        <Text >İş yeri Bilgileri:  {item.host.add5}</Text>
        </View>

        <View style={this.styles.body}>

        <Text style={{flex:1}}>Mesleki Bilgiler :  {item.host.add6}</Text>

        </View>

      </View>
    );
  };
render(){
return (
<View style={this.styles.container}>
  
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
  flex:3,
    paddingTop: 10,
    // alignItems: "center",
    margin:20,
    flexDirection:"column"
  },
  body:{
    flex:1,
    paddingTop: 10,
    // alignItems: "flex-start",
    // justifyContent:"flex-start",
    // margin:20,
    // alignContent:"flex-start",
    // borderColor:"black",
    // borderWidth:2,
    // borderWidth:2, 
    // //borderBottomColor:"black",
    // borderColor:"white",
    fontSize:15
  
    
    

  }
});
}


