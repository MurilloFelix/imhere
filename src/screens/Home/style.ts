import { Platform, StatusBar, StyleSheet } from 'react-native';


export const homeStyle = StyleSheet.create({

  container: {
    flex: 1,
    paddingHorizontal: 22,
    backgroundColor: '#131016',
    paddingTop: Platform.OS === 'android' ? (StatusBar.currentHeight ?? 0) + 30 : 30,
  },

  eventName: {
    color: '#fff',
    fontSize: 22
  },

  eventDate: {
    color: '#58535c',
    fontSize: 12
  },

  participantInput: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
    paddingVertical: 7.5,
    paddingHorizontal: 15,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: '#1e1e24',
  },

  participantInputContainer: {
    marginVertical: 30,
    flexDirection: 'row',
  },

  addButton: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2ed168',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },

  addButtonText: {
    fontSize: 22,
    color: '#fff',
  },
  
  emptyListText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16
  }
})