import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:'#f5f5f5',
    padding:20,
  },

  title:{
    fontSize:24,
    fontWeight:'bold',
    marginBottom:15,
  },

  input:{
    borderWidth:1,
    borderColor:'#ccc',
    borderRadius:10,
    padding:12,
    marginBottom:10,
    backgroundColor:'#fff',
  },

  button:{
    backgroundColor:'#495a6d',
    padding:12,
    borderRadius:8,
    alignItems:'center',
    marginBottom:15,
  },

  buttonText:{
    color:'#fff',
    fontWeight:'bold',
  },

  card:{
    backgroundColor:'#fff',
    padding:15,
    borderRadius:10,
    marginBottom:10,
    elevation:2,
  },
  cardRow:{
  backgroundColor:'#fff',
  padding:15,
  borderRadius:10,
  marginBottom:10,
  elevation:2,
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center',
},

});