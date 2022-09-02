import { StyleSheet } from "react-native";


export const participantStyles = StyleSheet.create({
  container:{
    flexDirection: "row",
    marginBottom: 10,
    paddingHorizontal: 5,
  },
  name:{
    flex: 1,
    color: '#fff',
    fontSize: 16,
    padding: 12,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: '#1e1e24',
  },
  removeButton:{
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: "#e43c44",
  },
  removeButtonText:{
    fontSize : 30,
    color: "#fff",
  }
})