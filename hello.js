import { DiffieHellmanGroup } from 'crypto';
import React from 'react'
import {text, View} from 'react-native';


class App extends React.Component {
  render() {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{textAlign: 'center'}}>
                hello,world
            </Text>
        </View>
        );
  }
}

const hello = "Hello World";

const world = "How are you?";

export default App; 