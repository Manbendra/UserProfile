/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  Button,
  Image,
  NativeModules,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import ImagePicker from 'react-native-image-picker';

export default class App extends React.Component{
  state = {  
    name: '',
    email: '',
    phone: '',
    imageUrl: ''
  }  

  renderImage() {
    if (this.state.imageUrl) {
      return <Image
        style={{width: 150, height: 150, alignSelf: 'center', margin: 10}}
        source={{uri: this.state.imageUrl}}
      />
    } else {
      return <Image
        style={{width: 150, height: 150, alignSelf: 'center', margin: 10}}
        source={require('./image-placeholder.png')}
      />
    }
    
  }

  render(){
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View>
              <TouchableHighlight onPress={this.showImagePicker}>
                {this.renderImage()}
              </TouchableHighlight>

              <View style={{padding: 10, flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{padding: 10, fontSize: 16}}>
                  Name:
                </Text>
                <TextInput
                  style={{height: 40, paddingLeft: 10, fontSize: 16}}
                  placeholder="Enter your name here!"
                  onChangeText={(text) => this.setState(
                    {...this.state,
                     name: text
                    }
                  )}
                  value={this.state.name}
                />
              </View>
              
              <View style={{padding: 10, flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{padding: 10, fontSize: 16}}>
                  Email:
                </Text>
                <TextInput
                  textContentType={"emailAddress"}
                  style={{height: 40, paddingLeft: 10, fontSize: 16}}
                  placeholder="Enter your name here!"
                  onChangeText={(text) => this.setState(
                    {...this.state,
                     email: text
                    }
                  )}
                  value={this.state.email}
                />
              </View>
              

              <View style={{padding: 10, flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{padding: 10, fontSize: 16}}>
                  Phone Number:
                </Text>
                <TextInput
                  textContentType={"telephoneNumber"}
                  style={{height: 40, paddingLeft: 10, fontSize: 16}}
                  placeholder="Enter your name here!"
                  onChangeText={(text) => this.setState(
                    {...this.state,
                      phone: text
                     }
                  )}
                  value={this.state.phone}
                />
              </View>

              <Button
                title="Submit"
                onPress={this.submit}
              />
              
            </View>
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    );

  };

  showImagePicker = () =>{
    let options = {
      title: 'Select Image',
      customButtons: [
        { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        this.setState({
         imageUrl: response.uri
        });
      }
    });
  }

  submit = () =>{
    NativeModules.ReactInterface.postMessage(this.state.name, this.state.email, this.state.phone, this.state.imageUrl);
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
