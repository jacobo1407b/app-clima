import React, { FunctionComponent } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { BlurView } from 'expo-blur';


interface ICard {
  children?: React.ReactNode
}
const Card: FunctionComponent<ICard> = ({ children }) => {
  return (
    <View
      style={styles.container}
    >
      <BlurView intensity={100} style={styles.mainCardView}>
        {children}
      </BlurView>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
  },
  mainCardView: {
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF40',
    borderRadius: 15,
    //shadowColor: Colors.shadow,
    //shadowOffset: {width: 0, height: 0},
    //shadowOpacity: 1,
    shadowRadius: 8,
    //elevation: 8,
    flexDirection: 'row',
    //justifyContent: 'space-between',
    paddingLeft: 16,
    paddingRight: 14,
    //marginTop: 6,
    //marginBottom: 6,
    marginLeft: 16,
    marginRight: 16,
  },
});

export default Card