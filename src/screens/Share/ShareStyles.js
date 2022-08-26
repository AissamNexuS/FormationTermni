import { ScaledSheet } from 'react-native-size-matters/extend';
const styles = ScaledSheet.create({
  container: {
    width: '100%',
    height: '80@s',
    backgroundColor: '#E1FAF6',
    position: 'absolute',
    bottom: 100,
  },
  footer: {
    flexDirection: 'row',
  },

  icon: {
    width: '30@s',
    height: '30@s',
    margin: 5,
  },
  iconPartage: {
    width: '26@s',
    height: '26@s',

  },

  touch: {
    width: '15%',
    height: '100%',
    left: '-6%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E1FAF6',
  },
});

export default styles;
