import { useState } from 'react'
import { Alert, FlatList, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Participant } from '../components/Participant';
import { homeStyle } from './style';

export function Home() {
  const [participants, setParticipants] = useState<string[]>([])
  const [participantsInputValue, setParticipantsInputValue] = useState<string>('')

  function addParticipant() {
    if (participants.includes(participantsInputValue)) {
      Alert.alert(`O participante ${participantsInputValue} já esta cadatrado`)
    } else {
      setParticipants(currentParticipants => [...currentParticipants, participantsInputValue].sort())
      setParticipantsInputValue('')
    }
  }

  function removeParticipant(name: string) {
    Alert.alert('Remover?', `Tem certeza que deseja remover ${name} da lista?`, [
      {
        text: 'Não'
      },
      {
        text: 'Sim',
        onPress: () => { setParticipants(currentParticipants => currentParticipants.filter(participant => participant != name)) }
      },
    ])
  }


  return (
    <SafeAreaView style={homeStyle.container}>
      <Text style={homeStyle.eventName}>Nome do Evento</Text>
      <Text style={homeStyle.eventDate}>Sexta, 4 de Novembro de 2022</Text>

      <View style={homeStyle.participantInputContainer}>
        <TextInput
          value={participantsInputValue}
          onChangeText={setParticipantsInputValue}
          style={homeStyle.participantInput}
          placeholder='Nome do Participante'
          placeholderTextColor={'#58535c'}
        />
        <TouchableOpacity
          style={homeStyle.addButton}
          onPress={addParticipant}
        >
          <Text style={homeStyle.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>


      <FlatList
        data={participants}
        keyExtractor={(_item, index) => (index + '')}
        renderItem={({ item }) => (
          <Participant
            name={item}
            onRemove={() => removeParticipant(item)}
          />
        )}
        ListEmptyComponent={() => (
          <>
            <Text style={homeStyle.emptyListText}>
              Não há nenhum convidado
            </Text>
            <Text style={homeStyle.emptyListText}>
              na sua lista 😕
            </Text>
          </>
        )}
      />
    </SafeAreaView>
  )
}