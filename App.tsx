import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, ScrollView, SafeAreaView } from 'react-native';
import { getLocation, comprobarHora } from './utils';
import { getLocationKey, getClima, getListHours,errorManager} from './services'
import { mainState, ResponseClima, ListHour } from './types';
import Header from './components/header';
import Listas from './components/list';
import Loader from './components/loader';
export default function App() {

  const [dataProvider, setDataProvider] = useState<mainState>({});
  const [climaData, setDataClima] = useState<ResponseClima>();
  const [listClima, setListClima] = useState<ListHour[]>([]);
  const [load, setload] = useState<boolean>(true);
  useEffect(() => {
    (async () => {
      try {
        const location = await getLocation();
        const country = await getLocationKey(location?.coords.latitude, location?.coords.longitude);
        const clima = await getClima(country?.Key);
        const listas = await getListHours(country?.Key)
        setDataProvider({
          lat: location?.coords.latitude,
          long: location?.coords.longitude,
          keyLocation: country.Key,
          LocalizedName: country?.LocalizedName
        });
        setListClima(listas)
        setDataClima(clima[0]);
        setload(false);
      } catch (error) {
        var e:any = error;
        errorManager(e)
        setload(false);
      }
    })();
  }, []);

  return (
    <>
      {load ? <Loader /> : (
        <ImageBackground
          source={comprobarHora(climaData?.WeatherIcon)}
          style={styles.image}
        >
          <ScrollView style={{ paddingTop: 50 }}>
            <SafeAreaView style={styles.container}>

              <Header
                dataProvider={dataProvider}
                climaData={climaData}
              />
              <Listas list={listClima} />
            </SafeAreaView>
          </ScrollView>
        </ImageBackground>
      )}
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#99dcf7',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  image: {
    //flexDirection: 'column',
    //justifyContent: 'center',
    //alignItems: 'center',
    width: '100%',
    height: '100%'
  },
});


/**
 * <ImageBackground source={require('./assets/sun.jpg')} style={styles.image}>
      <View style={styles.container}>
        <Header
          dataProvider={dataProvider}
          climaData={climaData}
        />
        <Listas />
        <Listas />
        <Listas />
        <Listas />
        
      </View>
      <StatusBar style="auto" />
    </ImageBackground>
 */