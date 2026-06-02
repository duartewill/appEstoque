import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:'#f5f5f5',
    padding:15,
  },

  title:{
    fontSize:22,
    fontWeight:'bold',
    marginBottom:15,
  },

  card:{
    backgroundColor:'#fff',
    padding:15,
    borderRadius:12,
    marginBottom:12,
    elevation:3,
    flexDirection:'row',
    justifyContent:'space-between',
  },

  clientName:{
    fontSize:18,
    fontWeight:'bold',
  },

  material:{
    fontWeight:'bold',
    fontSize:16,
  },

  empty:{
    textAlign:'center',
    color:'#999',
    marginTop:20,
  },

  button:{
    backgroundColor:'#495a6d',
    padding:12,
    borderRadius:8,
    alignItems:'center',
    marginTop:10,
  },

  confirmButton:{
    backgroundColor:'#2e7d32',
    padding:12,
    borderRadius:8,
    alignItems:'center',
    marginTop:10,
  },

  cancelOrderButton:{
    backgroundColor:'#c62828',
    padding:12,
    borderRadius:8,
    alignItems:'center',
    marginTop:10,
  },

  cancelButton:{
    backgroundColor:'#777',
    padding:12,
    borderRadius:8,
    alignItems:'center',
    marginTop:10,
  },

  buttonText:{
    color:'#fff',
    fontWeight:'bold',
  },

  modalContainer:{
    flex:1,
    backgroundColor:'rgba(0,0,0,.5)',
    justifyContent:'center',
    alignItems:'center',
  },

  modalContent:{
    width:'85%',
    backgroundColor:'#fff',
    padding:20,
    borderRadius:15,
  },

  modalTitle:{
    fontSize:20,
    fontWeight:'bold',
    marginBottom:15,
  },

  pickerBox:{
    borderWidth:1,
    borderColor:'#ccc',
    borderRadius:10,
    overflow:'hidden',
    marginBottom:15,
  },

  input:{
    borderWidth:1,
    borderColor:'#ccc',
    borderRadius:10,
    padding:12,
    marginBottom:15,
  },

});