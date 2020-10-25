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
    marginTop: 45,
  },
  input: {
    textAlignVertical: 'center',
    textAlign: 'center',
    width: 320,
    height: 56,
    fontSize: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#BCBCBC',
  },
  inputSuccessColor: {
    borderColor: '#BCBCBC',
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
  },
  dropdownLabel: {
    textAlign: 'center',
    fontSize: 16,
  },
  dropdownItems: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  dropdownArrow: {
    display: 'none',
  },
  checkboxContainer: {
    marginTop: 16,
    width: 330,
    borderWidth: 0,
    backgroundColor: 'transparent',
  },
  checkboxText: {
    paddingLeft: 5,
    marginBottom: 3,
    fontSize: 12,
    fontWeight: '600',
    color: '#000000',
  },
})

export default styles
