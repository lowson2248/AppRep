import React, {Component} from 'react';
import { StyleSheet, Text, View,Alert,StatusBar,ToolbarAndroid,Button,DrawerLayoutAndroid} from 'react-native';
import { SearchBar,Icon,Header } from 'react-native-elements';
import MapPreview from './MapPreview';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state={
      icon: 'search',
      drawerOpen: false
    }

  }//constructor END


  render() {

    var drawerView = (
      <View style={styles.drawerStyle}>
        <Text style={{color: "white"}}>TESTTESTTEST</Text>
      </View>
    );

    return (
      <View style={styles.base}>
      
      <StatusBar barStyle="light-content" hidden={true}/>

      <Header

      leftComponent={{
        icon:this.state.icon,
        size:50,
        color:'#fff',
        onPress:this.display_search
      }}

      centerComponent={
        <SearchBar
          inputStyle={{backgroundColor: '#fff',width: 350}}
          containerStyle={{backgroundColor: '#000'}}
          noIcon
          clearIcon={{ color: '#444' }}
          placeholder='Search...!??' />
        }

      rightComponent={{
        icon:'menu',
        size:50,
        color:'#fff',
        onPress:this.openDrawer
      }}

      innerContainerStyles={{
        backgroundColor:'#000'
      }}
        
      outerContainerStyles={{
        height:80,
        backgroundColor:'#000'
      }}/>

      <DrawerLayoutAndroid
        drawerWidth={200}
        ref={'DRAWER'}
        drawerPosition={DrawerLayoutAndroid.positions.Right}
        renderNavigationView={()=> drawerView}>
        
        <Text>Test</Text>

      </DrawerLayoutAndroid>

      </View>
    );
  }


  //ドロワー開閉用メソッド
  openDrawer=()=> {

    this.refs['DRAWER'].openDrawer()

  }


  //検索欄表示
  display_search = ()=>{
    Alert.alert('TEST！!?');
    this.setState=({icon:'menu'});

  }

}//App END


const styles = StyleSheet.create({

  icon: {
    padding: 20
  },

  header: {
    backgroundColor: '#000',
  },

  drawerStyle: {
    backgroundColor: '#000',
    flex: 1
  },

  base: {
    backgroundColor: '#fff',
    flex: 1
  },

});
