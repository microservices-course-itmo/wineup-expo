import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import RadioButton from './RadioButton'
import Input from './Input'
import Button from './Button'

const CountryFilter = () => {
  const [filterValue, setFilterValue] = useState({
    search: '',
    australia: false,
    austria: false,
    argentina: false,
    germany: false,
    greece: false,
    georgia: false,
    israel: false,
    spain: false,
  })
  function resetHandler() {
    setFilterValue({
      search: '',
      australia: false,
      austria: false,
      argentina: false,
      germany: false,
      greece: false,
      georgia: false,
      israel: false,
      spain: false,
    })
  }
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Страна</Text>
        <Text style={styles.textReset} onPress={resetHandler}>
          Сбросить
        </Text>
      </View>
      <Input
        value={filterValue.search}
        onChange={(value) => setFilterValue({ ...filterValue, search: value })}
      />
      <View style={styles.countryWrap}>
        <View style={styles.radioWrap}>
          <RadioButton
            label='Австралия'
            checked={filterValue.australia}
            onPress={(value) => {
              setFilterValue({ ...filterValue, australia: value })
            }}
          />
        </View>
        <View style={styles.radioWrap}>
          <RadioButton
            label='Австрия'
            checked={filterValue.austria}
            onPress={(value) => {
              setFilterValue({ ...filterValue, austria: value })
            }}
          />
        </View>
        <View style={styles.radioWrap}>
          <RadioButton
            label='Аргентина'
            checked={filterValue.argentina}
            onPress={(value) => {
              setFilterValue({ ...filterValue, argentina: value })
            }}
          />
        </View>
        <View style={styles.radioWrap}>
          <RadioButton
            label='Германия'
            checked={filterValue.germany}
            onPress={(value) => {
              setFilterValue({ ...filterValue, germany: value })
            }}
          />
        </View>
        <View style={styles.radioWrap}>
          <RadioButton
            label='Греция'
            checked={filterValue.greece}
            onPress={(value) => {
              setFilterValue({ ...filterValue, greece: value })
            }}
          />
        </View>
        <View style={styles.radioWrap}>
          <RadioButton
            label='Грузия'
            checked={filterValue.georgia}
            onPress={(value) => {
              setFilterValue({ ...filterValue, georgia: value })
            }}
          />
        </View>
        <View style={styles.radioWrap}>
          <RadioButton
            label='Израиль'
            checked={filterValue.israel}
            onPress={(value) => {
              setFilterValue({ ...filterValue, israel: value })
            }}
          />
        </View>
        <View style={[styles.radioWrap, styles.radioWrapLastChild]}>
          <RadioButton
            label='Испания'
            checked={filterValue.spain}
            onPress={(value) => {
              setFilterValue({ ...filterValue, spain: value })
            }}
          />
        </View>
        <Button />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#ffffff',
    padding: 10,
  },

  textContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    width: '100%',
  },

  text: {
    fontSize: 14,
    fontWeight: '600',
  },

  textReset: {
    fontSize: 8,
    fontWeight: '500',
    color: '#814b58',
    alignSelf: 'flex-start',
  },

  countryWrap: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10,
    marginLeft: -10,
    marginRight: -10,
    borderTopWidth: 1,
    borderTopColor: '#f1f1f1',
  },

  radioWrap: {
    width: 256,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    borderBottomColor: '#f1f1f1',
    paddingBottom: 10,
    paddingTop: 10,
  },

  radioWrapLastChild: {
    borderBottomWidth: 0,
    borderBottomColor: 'transparent',
  },
})

export default CountryFilter
