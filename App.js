import { StatusBar } from 'expo-status-bar';
import { Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import Homescreen from './screens/Homescreen';

export default function App() {
  return (
    <SafeAreaView 
      className="flex-1 bg-white justify-start"
    >
      <StatusBar style="auto" />
      
      <Homescreen />
    </SafeAreaView>
  );
}