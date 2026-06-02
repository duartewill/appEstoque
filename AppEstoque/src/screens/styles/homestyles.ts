import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:'#f5f5f5',
  },

  header:{
    height:90,
    backgroundColor:'#1e1e1e',
    justifyContent:'center',
    alignItems:'center',
  },

  title:{
    color:'#fff',
    fontSize:22,
    fontWeight:'bold',
  },

  main:{
    flex:1,
    padding:15,
  },

  emptyContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },

  emptyText:{
    marginTop:10,
    fontSize:18,
    color:'#999',
  },

  card:{
    backgroundColor:'#fff',
    padding:15,
    marginBottom:12,
    borderRadius:12,
    elevation:3,
  },

  productName:{
    fontSize:18,
    fontWeight:'bold',
  },

  quantity:{
    marginTop:5,
    color:'#666',
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

  materialName:{
    marginBottom:15,
    fontSize:16,
  },

  input:{
    borderWidth:1,
    borderColor:'#ccc',
    borderRadius:8,
    padding:12,
    marginBottom:15,
  },

  addButton:{
    backgroundColor:'#2e7d32',
    padding:12,
    borderRadius:8,
    alignItems:'center',
  },

  removeButton:{
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

  nav:{
    height:100,
  paddingBottom:30,
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    backgroundColor:'#eee',
  },

});