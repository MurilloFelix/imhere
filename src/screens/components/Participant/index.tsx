import { Text, TouchableOpacity, View } from 'react-native';
import { participantStyles } from './style';

interface Props {
  name: string,
  onRemove: () => void
}

export function Participant(props: Props) {
  return (
    <View style={participantStyles.container}>
      <Text style={participantStyles.name}>{props.name}</Text>
      <TouchableOpacity
        style={participantStyles.removeButton}
        onPress={props.onRemove}
      >
        <Text style={participantStyles.removeButtonText}>-</Text>
      </TouchableOpacity>
    </View>
  )
}