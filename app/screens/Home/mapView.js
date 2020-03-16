/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  ActivityIndicator,
} from 'react-native';

import MapView, {
  Marker,
  Callout,
  ProviderPropType,
  PROVIDER_GOOGLE,
} from 'react-native-maps';

import { CustomCallOut } from '../../components';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { userData } = this.props;
    let markerIDList = userData.map(item => item._id);
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={styles.container}>
          {!userData.length ? (
            <ActivityIndicator />
          ) : (
            <MapView
              provider={PROVIDER_GOOGLE}
              ref={ref => {
                this.map = ref;
              }}
              style={styles.map}
              initialRegion={{
                latitude: userData[0].latitude,
                longitude: userData[0].longitude,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
              }}
              onMapReady={() => {
                this.map.fitToSuppliedMarkers(markerIDList, {
                  edgePadding: {
                    top: 100,
                    left: 70,
                    bottom: 0,
                    right: 70,
                  },
                  animated: true,
                });
              }}>
              {userData.map(marker => (
                <Marker
                  identifier={marker._id}
                  key={marker._id}
                  coordinate={{
                    latitude: marker.latitude,
                    longitude: marker.longitude,
                  }}
                  pinColor="#880088"
                  title={marker.name}
                  // onCalloutPress={() => this.onMarkerClick(marker._id)}
                >
                  <Callout tooltip>
                    <CustomCallOut>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <Image
                          style={{
                            width: 60,
                            aspectRatio: 1,
                            borderRadius: 10,
                          }}
                          source={{ uri: marker.avatar }}
                          resizeMode={'cover'}
                        />
                        <Text style={{ color: '#000', marginLeft: 10 }}>
                          {marker.name}
                        </Text>
                      </View>
                    </CustomCallOut>
                  </Callout>
                </Marker>
              ))}
            </MapView>
          )}
        </View>
      </View>
    );
  }
}

App.propTypes = {
  provider: ProviderPropType,
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 0,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  customView: {
    width: 140,
    height: 140,
  },
});
