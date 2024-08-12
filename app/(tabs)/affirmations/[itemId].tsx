import { AntDesign } from "@expo/vector-icons";
import { GalleryPreviewData } from "@/constants/models/AffirmationCategory";
import { router, useLocalSearchParams } from "expo-router";
import {
  View,
  Text,
  ImageBackground,
  Pressable,
  ScrollView,
} from "react-native";
import AFFIRMATION_GALLERY from "@/constants/affirmation-gallary";
import AppGradient from "@/components/AppGradient";
import React, { useEffect, useState } from "react";

const AffirmationPractice = () => {
  const { itemId } = useLocalSearchParams(); // Extract `itemId` from the URL parameters using `useLocalSearchParams` hook.

  const [affirmation, setAffirmation] = useState<GalleryPreviewData>(); // State to hold the selected affirmation data.
  const [sentences, setSentences] = useState<string[]>([]); // State to hold the array of sentences derived from the affirmation text.

  useEffect(() => {
    // Loop through each item in the AFFIRMATION_GALLERY array to find the affirmation that matches the `itemId`.
    for (let idx = 0; idx < AFFIRMATION_GALLERY.length; idx++) {
      const affirmationData = AFFIRMATION_GALLERY[idx].data; // Get the `data` array from the current gallery item.

      // Find the specific affirmation that matches the `itemId` by checking the `id` property.
      const affirmationToStart = affirmationData.find(
        (a) => a.id === Number(itemId) // Convert `itemId` to a number for comparison.
      );

      // If the matching affirmation is found:
      if (affirmationToStart) {
        setAffirmation(affirmationToStart); // Update the `affirmation` state with the selected affirmation.

        // Split the `text` property of the affirmation into sentences based on periods.
        const affirmationsArray = affirmationToStart.text.split(".");

        // Remove the last element of the array if it's an empty string (which can happen if there's a trailing period).
        if (affirmationsArray[affirmationsArray.length - 1] === "") {
          affirmationsArray.pop();
        }

        setSentences(affirmationsArray); // Update the `sentences` state with the processed array of sentences.
        return; // Exit the loop early since the matching affirmation has been found.
      }
    }
  }, []); // The empty dependency array ensures this effect only runs once when the component mounts.

  return (
    <View className="flex-1">
      <ImageBackground
        source={affirmation?.image}
        resizeMode="cover"
        className="flex-1"
      >
        <AppGradient colors={["rgba(0,0,0,0.3)", "rgba(0,0,0,0.9)"]}>
          <Pressable
            onPress={() => router.back()}
            className="absolute top-16 left-6 z-10"
          >
            <AntDesign name="leftcircleo" size={50} color="white" />
          </Pressable>

          <ScrollView className="mt-20" showsVerticalScrollIndicator={false}>
            <View className="h-full border-white justify-center">
              <View className="h-4/5 justify-center">
                {sentences.map((sentence, index) => (
                  <Text
                    className="text-white text-3xl mb-12 font-bold text-center"
                    key={index}
                  >
                    {sentence}.
                  </Text>
                ))}
              </View>
            </View>
          </ScrollView>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default AffirmationPractice;
