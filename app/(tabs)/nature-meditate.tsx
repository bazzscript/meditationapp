// Import necessary modules and components from Expo and React Native
import { LinearGradient } from "expo-linear-gradient"; // For applying linear gradients
import { StatusBar } from "expo-status-bar"; // For customizing the status bar
import { router } from "expo-router"; // For navigation (commented out in the code)
import React from "react"; // Import React
import {
  FlatList, // For rendering a list of items
  ImageBackground, // For displaying background images
  Pressable, // For creating pressable areas
  StyleSheet, // For defining styles
  Text, // For rendering text
  View, // For creating view containers
} from "react-native";

// Import constants for meditation images and data
import MEDITATION_IMAGES from "@/constants/meditation-images"; // Array of images used for meditation

import { MEDITATION_DATA, MeditationType } from "@/constants/MeditationData"; // Meditation data and types
import AppGradient from "@/components/AppGradient"; // Custom component for applying a gradient background
import { SafeAreaProvider } from "react-native-safe-area-context";
import MeditationCategory from "@/components/MeditationCategory";

const NatureMeditatePage = () => {
  return (
    <SafeAreaProvider>
      <View className="flex-1">
        <AppGradient
          // Apply a background linear gradient with specified colors
          colors={["#161b2e", "#0a4d4a", "#766e67"]}
        >
          <View className="mb-6">
            <Text className="text-gray-200 mb-3 font-bold text-4xl text-left">
              Welcome To Serenity
            </Text>
            <Text className="text-indigo-100 text-xl font-medium">
              Start your meditation practice today
            </Text>
          </View>
          <View>
            <FlatList
              // Render a list of meditation items
              data={MEDITATION_DATA} // Data source for the FlatList
              contentContainerStyle={styles.list} // Style for the list container
              keyExtractor={(item) => item.id.toString()} // Unique key for each item
              showsVerticalScrollIndicator={false} // Hide the vertical scroll indicator
              renderItem={({ item }) => (
                <MeditationCategory
                  imageSource={MEDITATION_IMAGES[item.id - 1]}
                  imageStyle={styles.backgroundImage}
                  linearGradientStyle={styles.gradient}
                  title={item.title}
                  onPress={() =>  router.push(`/meditate/${item.id}`) }
                />
              )}
            />
          </View>
        </AppGradient>
        <StatusBar style="light" />
      </View>
    </SafeAreaProvider>
  );
};

// Define styles for the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    borderRadius: 10,
    justifyContent: "center",
  },
  gradient: {
    alignItems: "center",
    height: "100%",
    justifyContent: "center",
    width: "100%",
  },
  list: {
    paddingBottom: 150, // Add padding at the bottom of the list
  },
});

export default NatureMeditatePage; // Export the NatureMeditatePage component
