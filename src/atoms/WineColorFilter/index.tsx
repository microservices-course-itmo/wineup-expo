import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Feather, AntDesign } from '@expo/vector-icons'

const WineColorFilter = () => {
  const [checkedWhite, setCheckedWhite] = useState(false)
  const [checkedRed, setCheckedRed] = useState(false)
  const [checkedRose, setCheckedRose] = useState(false)
  const drop = () => {
    setCheckedWhite(false)
    setCheckedRed(false)
    setCheckedRose(false)
  }
  const apply = () => {
    return { checkedWhite, checkedRed, checkedRose }
  }

  return (
    <View style={styles.container}>
      <View style={styles.filterItem}>
        <View style={styles.titleView}>
          <Text style={styles.filterName}>Цвет</Text>
          <TouchableOpacity onPress={drop}>
            <Text style={styles.dropText}>Сбросить</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.filterItem}>
        <TouchableOpacity onPress={() => setCheckedWhite(!checkedWhite)}>
          <View style={styles.checkedBox}>
            {checkedWhite ? (
              <AntDesign name='checksquare' size={24} color='#9a3043' />
            ) : (
              <Feather name='square' size={24} color='#767676' />
            )}
            <Text style={styles.colorText}>Белое</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.filterItem}>
        <TouchableOpacity onPress={() => setCheckedRed(!checkedRed)}>
          <View style={styles.checkedBox}>
            {checkedRed ? (
              <AntDesign name='checksquare' size={24} color='#9a3043' />
            ) : (
              <Feather name='square' size={24} color='#767676' />
            )}
            <Text style={styles.colorText}>Красное</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.filterItem}>
        <TouchableOpacity onPress={() => setCheckedRose(!checkedRose)}>
          <View style={styles.checkedBox}>
            {checkedRose ? (
              <AntDesign name='checksquare' size={24} color='#9a3043' />
            ) : (
              <Feather name='square' size={24} color='#767676' />
            )}
            <Text style={styles.colorText}>Розовое</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.filterItem && styles.lastItem}>
        <TouchableOpacity onPress={apply}>
          <View style={styles.applyButton}>
            <Text style={styles.applyText}>Применить</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 500,
    paddingHorizontal: 20,
  },
  filterItem: {
    height: 60,
    borderBottomColor: '#c3c7cc',
    borderBottomWidth: 2,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  titleView: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  filterName: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  dropText: {
    color: '#9a3043',
  },
  applyButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#c3c7cc',
    height: 40,
  },
  applyText: {
    color: 'white',
    textTransform: 'uppercase',
  },
  checkedBox: {
    height: 60,
    alignItems: 'center',
    flexDirection: 'row',
  },
  colorText: {
    paddingLeft: 20,
  },
  lastItem: {
    borderWidth: 0,
    paddingVertical: 10,
  },
})

export default WineColorFilter
