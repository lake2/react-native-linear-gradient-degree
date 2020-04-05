<h1 align="center">react-native-linear-gradient-degree</h1>
<p align="center">Transform css linear-gradient degree to start and end coordinates <br/> in <a href="https://www.npmjs.com/package/react-native-linear-gradient">react-native-linear-gradient</a> or <a href="https://www.npmjs.com/package/expo-linear-gradient">expo-linear-gradient</a></p>
<p align="center">
<a href="https://travis-ci.org/lake2/imdux"><img src="https://travis-ci.org/lake2/imdux.svg?branch=master" alt="CI Status"></a>
<a href="https://coveralls.io/github/lake2/imdux?branch=master"><img src="https://coveralls.io/repos/github/lake2/imdux/badge.svg?branch=master" alt="Coverage Status"></a>
<a href="https://npmjs.com/package/imdux"><img src="https://img.shields.io/npm/v/imdux" alt="Version"></a>
<a href="https://npmjs.com/package/imdux"><img src="https://img.shields.io/npm/dt/imdux" alt="Download"></a>
<a href="https://github.com/lake2/imdux"><img src="https://img.shields.io/bundlephobia/minzip/imdux" alt="Mini size"></a>
<a href="https://github.com/lake2/imdux"><img src="https://img.shields.io/npm/l/imdux" alt="MIT License"></a>
</p>

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
