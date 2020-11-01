import React from 'react'
import InsetShadow from 'react-native-inset-shadow'
import styled from 'styled-components/native'
import { Ionicons } from '@expo/vector-icons'
import { StyleProp } from 'react-native'

interface SearchInputProps {
  style?: StyleProp<any>[]
  value: string
  onChange?: (value: string) => void
}

function SearchInput({ style = [], onChange, value }: SearchInputProps) {
  return (
    <InsetShadow
      shadowColor='#000000'
      shadowOffset={0}
      shadowRadius={2}
      shadowOpacity={0.25}
      containerStyle={{
        borderRadius: 50,
        height: 30,
        backgroundColor: '#ffffff',
        ...style[0],
      }}
    >
      <Container>
        <Ionicons name='ios-search' color='#d1d1d1' size={16} />
        <Input
          value={value}
          placeholder='Поиск...'
          placeholderTextColor='#d1d1d1'
          onChangeText={onChange}
        />
      </Container>
    </InsetShadow>
  )
}

export default SearchInput

const Container = styled.View`
  height: 30px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: 0 11px;
`

const Input = styled.TextInput`
  color: #333333;
  font-family: Roboto_400Regular;
  margin-left: 10px;
  font-size: 14px;
`
