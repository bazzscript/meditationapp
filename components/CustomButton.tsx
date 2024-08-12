import React from "react";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

interface CustomButtonProps {
    onPress: () => void; // Function to be called when the button is pressed
    title: string; // Text to be displayed on the button
    textStyles?: string; // Optional additional styles for the button text
    containerStyles?: string; // Optional additional styles for the button container  
}

const CustomButton = ({
    onPress,
    title,
    textStyles = "",
    containerStyles = "",
}: CustomButtonProps) => {
    return (
        <TouchableOpacity
        activeOpacity={0.7} // Set opacity when the button is pressed
        className={`bg-white rounded-xl min-h-[62px] justify-center items-center ${containerStyles} `}
        onPress={onPress} // Set the function to be called on press
        >
            <Text
                className={`text-primary font-semibold text-lg ${textStyles}`}
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export default CustomButton;
