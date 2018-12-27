import React, {
    Component
} from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';
import SearchHead from './src/containers/SearchHead';
import MapPreview from './src/containers/MapPreview';

export default class App extends Component {
    render() {
        return (
            <SearchHead />
        );
    }
}