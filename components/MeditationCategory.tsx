import { View, Text, Pressable, ImageBackground } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

interface MeditationCategoryProps {
  imageSource: number;
  imageStyle: object;
  onPress: () => void;
  linearGradientStyle: object;

  title: string;
}
const MeditationCategory = ({
  imageSource,
  imageStyle,
  linearGradientStyle,
  title,
  onPress,
}: MeditationCategoryProps) => {
  return (
    <View>
      <Pressable
        onPress={onPress}
        className="h-48 my-3 rounded-md overflow-hidden"
      >
        <ImageBackground
          source={imageSource} // Set the background image
          resizeMode="cover" // Resize the image to cover the entire area
          style={imageStyle} // Style for the background image
        >
          <LinearGradient
            // Apply a gradient from transparent to black
            colors={["transparent", "rgba(0,0,0,0.8)"]}
            style={linearGradientStyle} // Style for the gradient overlay
          >
            <Text className="text-gray-100 text-3xl font-bold text-center">
              {title}
            </Text>
          </LinearGradient>
        </ImageBackground>
      </Pressable>
    </View>
  );
};

export default MeditationCategory;
