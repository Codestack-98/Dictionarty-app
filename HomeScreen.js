import React from 'react';
import './App.css';
// import { render } from 'react-dom';
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity} from 'react-native';

  

export default class App extends React.Component {
    constructor(){
        super();
        this.state = {
            text:'',
            display:'',
    };
    
   return (
       <View>
            <TextInput style={styles.inputBox}
                onChangeText={text =>{
                    this.setstate ({
                       isSearchedPressed: false,
                        word:"Loading...",
                        lexicalCategory:'',
                        example:[],
                        definition :""
                    })
                }}
                value={this.state.text}
            />
            <TouchableOpacity style={styles.searchButton}
            onPress={() =>{
                this.setState({ isSearchedPressed: true});
                this.getWord(this.state.text)
            }}/>                       
        </View>
    )
   }
}

const styles = StyleSheet.create({
    inputBox: {
            marginTop: 200,
            width: '80%',
            alignSelf: 'center',
            height: 40,
            textAlign: 'center',
            borderWidth: 4,
            outline: 'none',
    },
    
})
 