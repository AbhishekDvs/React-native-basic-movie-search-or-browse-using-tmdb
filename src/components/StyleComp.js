import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    padding: 20,
    fontFamily: 'notoserif',
    fontStyle: 'italic',
    textAlign: 'justify',
    color: '#FFD700',
  },
  viewStyle: {
    backgroundColor: '#232b2b',
    flex: 1,
  },
  inputBarStyle: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 10,
    marginHorizontal: 30,
    marginVertical: 10,
    flexDirection: 'row',
    borderWidth: 1,
  },
  pickerStyle:{
    height: 70, 
    width: 150,
    color:'#FFD700',
    marginHorizontal:15

  },
  headStyle:{
    backgroundColor:'#FFD700',
    height:50,
    color:'#232b2b',
    textAlign:'center',
    fontSize:25
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#FFD700',
    borderRadius: 10,
    marginHorizontal: 50,
    marginVertical:10,
    padding: 10,
    fontStyle:'italic'
  },
  nameStyle: {
    color:'#FFFFE0',
    fontSize: 18,
    padding: 10,
    margin:5,
    fontFamily: 'notoserif',
    fontStyle: 'italic',
    textAlign: 'justify',
  }
})

export default styles;
