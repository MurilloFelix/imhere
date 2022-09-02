import { FlatList, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Participant } from "../components/Participant";
import { homeStyle } from "./style";

export function Home() {
  const mockedNames = ["Murillo", "Olirum", "Priscila", "Alicsirp", "Alex", "Xela", "Tamires", "Serimat", "Murillo", "Olirum", "Priscila", "Alicsirp", "Alex", "Xela", "Tamires", "Serimat"]

  return (
    <SafeAreaView style={homeStyle.container}>
      <Text style={homeStyle.eventName}>Nome do Evento</Text>
      <Text style={homeStyle.eventDate}>Sexta, 4 de Novembro de 2022</Text>

      <View style={homeStyle.participantInputContainer}>
        <TextInput
          style={homeStyle.participantInput}
          placeholder="Nome do Participante"
          placeholderTextColor={"#58535c"}
        />
        <TouchableOpacity
          style={homeStyle.addButton}
          onPress={(() => { console.log("Add"); })}
        >
          <Text style={homeStyle.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>


      <FlatList
        data={mockedNames}
        keyExtractor={(_item, index) => (index + '')}
        renderItem={({ item }) => (
          <Participant
            name={item}
            onRemove={() => { console.log("Remove"); }}
          />
        )}
      />
    </SafeAreaView>
  )
}