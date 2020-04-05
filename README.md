# react-native-linear-gradient-degree

Transform css linear-gradient degree to start and end coordinates in  [react-native-linear-gradient](https://www.npmjs.com/package/react-native-linear-gradient) or [expo-linear-gradient](https://www.npmjs.com/package/expo-linear-gradient) .

## Usage

### Add it to your  project

```sh
npm install react-native-linear-gradient-degree --save
```

### Get coordinates from css linear-gradient degree

For example, css background:

```css
background : linear-gradient(240deg,rgba(43,156,225,1) 0%,rgba(46,137,193,1) 100%);
```

```ts
import * as React from 'react';
import { Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { deg } from 'react-native-linear-gradient-degree';

export const App: React.FunctionComponent = function App(props) {
    return (
        <View style={{ marginTop: 200 }}>
            <LinearGradient colors={["rgba(43,156,225,1)", "rgba(46,137,193,1)"]} {...deg(240)}>
                <Text style={{ height: 50, width: 200 }}>apply</Text>
            </LinearGradient>
        </View>
    );
};

console.log(deg(240)) // {"start":{"x":1,"y":0.7886751345948129},"end":{"x":0,"y":0.21132486540518713}}
```

## License

MIT
