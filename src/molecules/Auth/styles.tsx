import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  label: {
    position: 'absolute',
    top: -28,
    fontSize: 16,
    color: '#888888',
    fontFamily: 'Merriweather_400Regular',
  },
  formatLabel: {
    position: 'absolute',
    top: 57,
    width: 320,
    fontSize: 10,
    fontFamily: 'Merriweather_400Regular',
  },
  container: {
    marginTop: 53,
    width: 320,
    height: 56,
  },
  input: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#BCBCBC',
    color: '#000000',
  },
  inputSuccessColor: {
    borderColor: '#BCBCBC',
    color: '#000000',
  },
  inputFailedColor: {
    borderColor: '#C23232',
    color: '#C23232',
  },
  dropdownContainer: {
    width: 320,
    height: 56,
  },
  dropdownStyle: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderColor: '#BCBCBC',
    zIndex: 10,
  },
  textAreaStyle: {
    textAlign: 'center',
    fontSize: 16,
  },
  dropdownItems: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  dropdownArrow: {
    display: 'none',
  },
  checkBoxContainer: {
    marginTop: 19,
    width: 330,
    borderWidth: 0,
    backgroundColor: 'transparent',
  },
  checkBoxText: {
    paddingLeft: 5,
    marginBottom: 3,
    fontSize: 12,
    fontWeight: 'normal',
    color: '#000000',
  },
})

export default styles
