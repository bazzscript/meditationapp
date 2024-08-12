import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import beachImage from "@/assets/meditation-images/beach.webp";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import Constants from "expo-constants";
import CustomButton from "@/components/CustomButton";
import { useRouter } from "expo-router";

export default function App() {
  const router = useRouter();

  return (
    <SafeAreaProvider>
      <View className="flex-1">
        <ImageBackground
          source={beachImage}
          resizeMode="cover"
          className="flex-1"
        >
          <LinearGradient
            className="flex-1"
            colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]}
          >
            <SafeAreaView className="flex-1 mx-5 my-12 justify-between">
              <View>
                <Text className=" text-white font-bold text-4xl text-center">
                  Simple Meditation
                </Text>
                <Text className=" text-white text-2xl text-center mt-3">
                  Simplifying Meditation For Everyone
                </Text>
              </View>
 
              <View>
                <CustomButton
                  onPress={() => router.push("/(tabs)/nature-meditate")}
                  title="Get Started"
                />
              </View>
              <StatusBar style="light" />
            </SafeAreaView>
          </LinearGradient>
        </ImageBackground>
      </View>
    </SafeAreaProvider>
  );
}
