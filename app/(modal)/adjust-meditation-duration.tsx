import AppGradient from "@/components/AppGradient";
import CustomButton from "@/components/CustomButton";
import { TimerContext } from "@/context/TimerContext";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useContext } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";

const AdjustMeditationDuration = () => {
  const { setDuration } = useContext(TimerContext);

  const handlePress = (duration: number) => {
    setDuration(duration);
    router.back();
  };

  return (
    <View className="flex-1 relative">
      <AppGradient
        // Background Linear Gradient
        colors={["#161b2e", "#0a4d4a", "#766e67"]}
      >
        <Pressable
          onPress={() => router.back()}
          className="absolute top-16 left-6 z-10"
        >
          <AntDesign name="leftcircleo" size={50} color="white" />
        </Pressable>

        <View className="flex-1 justify-center h-4/5 pt-24 pb-10">
          <View>
            <Text className="text-center font-bold text-3xl text-white mb-8">
              Adjust your meditation duration
            </Text>
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
            <View>
              <CustomButton
                title="10 seconds"
                onPress={() => handlePress(10)}
                containerStyles="mb-5"
              />
              <CustomButton
                title="5 minutes"
                onPress={() => handlePress(5 * 60)}
                containerStyles="mb-5"
              />
              <CustomButton
                title="10 minutes"
                onPress={() => handlePress(10 * 60)}
                containerStyles="mb-5"
              />
              <CustomButton
                title="15 minutes"
                onPress={() => handlePress(15 * 60)}
                containerStyles="mb-5"
              />
              <CustomButton
                title="20 minutes"
                onPress={() => handlePress(20 * 60)}
                containerStyles="mb-5"
              />
              <CustomButton
                title="25 minutes"
                onPress={() => handlePress(25 * 60)}
                containerStyles="mb-5"
              />
              <CustomButton
                title="30 minutes"
                onPress={() => handlePress(30 * 60)}
                containerStyles="mb-5"
              />
              <CustomButton
                title="35 minutes"
                onPress={() => handlePress(35 * 60)}
                containerStyles="mb-5"
              />
              <CustomButton
                title="40 minutes"
                onPress={() => handlePress(40 * 60)}
                containerStyles="mb-5"
              />
              <CustomButton
                title="45 minutes"
                onPress={() => handlePress(45 * 60)}
                containerStyles="mb-5"
              />
              <CustomButton
                title="50 minutes"
                onPress={() => handlePress(50 * 60)}
                containerStyles="mb-5"
              />
              <CustomButton
                title="55 minutes"
                onPress={() => handlePress(55 * 60)}
                containerStyles="mb-5"
              />
              <CustomButton
                title="60 minutes"
                onPress={() => handlePress(60 * 60)}
                containerStyles="mb-5"
              />
            </View>
          </ScrollView>
        </View>
      </AppGradient>
    </View>
  );
};

export default AdjustMeditationDuration;
