import App from "./index";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StatusBar, StyleSheet, } from "react-native";
export default function RootLayout() {

  // const [Bar, setBar] = useState("#000")

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.view}>
        <StatusBar
          animated={true}
          backgroundColor={"#000"}
        />
        <App />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
});