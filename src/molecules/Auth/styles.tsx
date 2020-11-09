import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  label: {
    position: 'absolute',
    top: -30,
    fontSize: 14,
    color: '#FFF',
    fontFamily: 'PTSans_400Regular',
  },
  formatLabel: {
    textAlign: 'center',
    position: 'absolute',
    top: 5,
    width: 320,
    fontSize: 8,
    fontFamily: 'PTSans_400Regular',
  },
  container: {
    alignItems: 'center',
    marginTop: 53,
  },
  input: {
    flex: 1,
    minHeight: 57,
    maxHeight: 57,
    minWidth: 217,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    color: '#000000',
    backgroundColor: '#FFF',
  },
  inputSuccessColor: {
    borderColor: '#BCBCBC',
    color: '#000000',
  },
  inputFailedColor: {
    borderColor: '#E20338',
    color: '#E20338',
  },
  dropdownContainer: {
    width: 217,
    minHeight: 57,
  },
  dropdownStyle: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderWidth: 0,
    zIndex: 10,
  },
  textAreaStyle: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'PTSans_400Regular',
    fontWeight: 'normal',
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
    marginTop: 26,
    width: 307,
    borderWidth: 0,
    backgroundColor: 'transparent',
  },
  checkBoxText: {
    paddingLeft: 10,
    marginBottom: 2,
    fontSize: 12,
    fontWeight: 'normal',
    color: '#FFF',
    fontFamily: 'PTSans_400Regular',
  },
})

export default styles
