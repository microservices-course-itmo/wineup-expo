import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import ROUTES from '../../routes'
import styles from './styles'

export type TProps = StackScreenProps<any, typeof ROUTES.AGE_DENIED>

const AgeDenied: React.FC<TProps> = ({ navigation }) => {
  return (
    <View style={[styles.container, { marginBottom: 18 }]}>
      <Text style={[styles.header, { fontSize: 22 }]}>
        Спасибо за честный ответ!
      </Text>
      <Text
        style={[
          styles.header,
          {
            fontFamily: 'PTSans_400Regular',
            textAlign: 'center',
            marginTop: 33,
          },
        ]}
      >
        К сожалению, наше приложение{'\n'} содержит информацию,{'\n'}{' '}
        <Text style={{ fontFamily: 'PTSans_700Bold' }}>не предназначенную</Text>
        {'\n'} для лиц младше 18 лет
      </Text>
      <TouchableOpacity
        style={[styles.buttonStyle, { marginTop: 52 }]}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Вернуться назад</Text>
      </TouchableOpacity>
    </View>
  )
}

export default AgeDenied
