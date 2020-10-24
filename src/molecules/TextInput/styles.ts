import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  label: {
    position: 'absolute',
    top: -28,
    fontSize: 16,
    color: '#888888',
    fontFamily: 'Merriweather_400Regular',
  },
  failedLabel: {
    position: 'absolute',
    top: 57,
    width: 320,
    fontSize: 13,
    color: '#C23232',
    fontFamily: 'Merriweather_400Regular',
  },
  container: {
    marginTop: 45,
  },
  input: {
    width: 320,
    height: 56,
    fontSize: 16,
    borderRadius: 10,
    borderWidth: 1,
    paddingLeft: 10,
  },
  inputSuccessColor: {
    borderColor: '#BCBCBC',
  },
  inputFailedColor: {
    borderColor: '#C23232',
  },
})

export default styles
