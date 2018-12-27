import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Alert,
    View,
    Text,
    Image,
} from 'react-native';
import MapView, {
    Marker,
    Overlay,
    Callout
} from 'react-native-maps';


export default class MapPreview extends Component {
    constructor(props) {
        super(props);

        const markers = [
            {
                id: 1,
                title: "Okayama Station",
                image: "station",
                latlng: {
                    latitude: 34.666352,
                    longitude: 133.918138,
                }
                },
            {
                id: 2,
                title: "Bic camera",
                image: "sim",
                latlng: {
                    latitude: 34.666019,
                    longitude: 133.919613,
                }
            },
        ];

        this.state = {
            map: {
                latitude: 34.666352,
                longitude: 133.918138,
                latitudeDelta: 0.003,
                longitudeDelta: 0.003,
            },
            markers: markers,
        };
    }
    render() {
        return(
                <
                MapView style = {
                    styles.map
                }

                showsUserLocation = {
                    true
                }

                //ローディングインジケータを表示
                loadingEnabled = {
                    true
                }

                //ローディングインジケータの色設定
                loadingIndicatorColor = {
                    "#2E2EFE"
                }

                //マップによって表示される初期領域
                initialRegion = {
                    this.state.map
                }>

                {
                    this.state.markers.map((marker) => ( <
                        Marker key = {
                            marker.id
                        }

                        title = {
                            marker.title
                        }

                        coordinate = {
                            marker.latlng
                        }
                        image = {
                            require("../../Images/station.png")
                        }
                        />
                    ))
                }

                </MapView>
        )
    }
}

const styles = StyleSheet.create({
    map: {
        width: 530,
        height: 650,
    },
});
