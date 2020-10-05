import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    width: 270,
    height: 55,
    backgroundColor: '#492048',
  },
  flexedContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 2,
    height: 50,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  image: {
    width: 65,
    height: 40,
  },
  textContainer: {
    flex: 4,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  name: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 26,
  },
  description: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 12,
  },
})
