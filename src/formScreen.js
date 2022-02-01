import React,{Component} from 'react'
import {View,Text, TextInput, Button, ScrollView, StyleSheet, SafeAreaView} from 'react-native'
import { fireStore } from '../firebase'
// import { fireStore } from '../firebase';
export default class FormScreen extends Component {
constructor(props){
super(props)
this.state={
    post1: "",
    post2: "",
    post3: "",
    post4: "",
    post5: "",
    post6: "",
    sifre:"",
    
}
}
saveHandler = () =>{
    fireStore 
    .collection("pool")
    .add({
     
        add1: this.state.post1,
        add2:this.state.post2,
        add3:this.state.post3,
        add4:this.state.post4,
        add5:this.state.post5,
        add6:this.state.post6,
        
        
    })
    .then((x) => {
        console.log("ekleme tamamlandı.");
        console.log(this.props.route.params);
      })
      
        
     
      .catch((error) => console.log(error.message));
      fireStore 
    .collection("adminpool")
    .add({
     
        add1: this.state.post1,
        add2:this.state.post2,
        add3:this.state.post3,
        add4:this.state.post4,
        add5:this.state.post5,
        add6:this.state.post6,
        
        
    })
    .then((x) => {
        console.log("ekleme tamamlandı.");
        console.log(this.props.route.params);
      })
      
        
     
      .catch((error) => console.log(error.message));
}

render(){
return (
  
  <SafeAreaView style={{flex:1}}>
<View style={{flex:1,flexDirection:"column",alignItems:"flex-start", justifyContent:"flex-start", backgroundColor:"white"}}>
<Text style={{margin:10, flex:1, padding:10, fontSize:20}}>CV BİLGİLERİ</Text>
<ScrollView>
<View style={{flexDirection:"row", flex:1}}> 
<Text  style={{padding:15}}>Ad Soyad : </Text>
<TextInput
          style={this.style.textinput}
          placeholder=""
          onChangeText={(text) => {
            this.setState({
              post1: text,
            });
          }}
        ></TextInput>
</View>
</ScrollView>
<ScrollView>
<View style={{flexDirection:"row", flex:1}}>
<Text  style={{padding:15}}>Cep Numarası : </Text>
<TextInput
          style={this.style.textinput}
          placeholder=""
          onChangeText={(text) => {
            this.setState({
              post2: text,
            });
          }}
        ></TextInput>
</View>
</ScrollView >
<ScrollView >
  <View style={this.style.text}>
<Text  style={{padding:15}}>E-Mail :</Text>
<TextInput
          style={this.style.textinput}
          placeholder=""
          onChangeText={(text) => {
            this.setState({
              post3: text,
            });
          }}
        ></TextInput>
        </View>
        </ScrollView>
<ScrollView>
    <ScrollView>
  <View >
<Text  style={{padding:15}}>Eğitim Bilgileri (Okul/Dönem) : </Text>
<TextInput
          style={this.style.textinput}
          placeholder=""
          onChangeText={(text) => {
            this.setState({
              post4: text,
            });
          }}
        ></TextInput>
        </View>
        </ScrollView>
        </ScrollView>
        <ScrollView style={{flexDirection:"row"}}> 
  <View  >

<Text  style={{padding:15}}>İş Tecrübesi (İşyeri-Yıl-Açıklama) : </Text>
<TextInput
          style={this.style.textinput}
          placeholder=""
          onChangeText={(text) => {
            this.setState({
              post5: text,
            });
          }}
        ></TextInput>
       
        </View>
        </ScrollView>
        <ScrollView>
<View style={this.style.text}>

<Text  style={{padding:15}}>Mesleki Beceri ve Bilgi :</Text>
<TextInput
          style={this.style.textinput}
          placeholder=""
          onChangeText={(text) => {
            this.setState({
              post6: text,
            });
          }}
        ></TextInput>
        </View>
        </ScrollView>
<View style={{flexDirection:"row-reverse", justifyContent:"space-between",  margin:10}}>
        <Button
     
        title='Kaydet'
        onPress={this.saveHandler}> </Button>
        <Button
        
        title='Çıkış'
        onPress={()=>{
          this.props.navigation.navigate("LoginScreen")}}>        
        </Button>
        </View>
</View>
</SafeAreaView>);
}

style= StyleSheet.create({
text:{
  flexDirection:"row", 
  flex:1

},
textinput:{
  borderWidth:2, 
  //borderBottomColor:"black",
  borderColor:"white",
  fontSize:15


},


})
}
