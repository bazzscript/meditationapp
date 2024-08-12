import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AppGradient = ({
    children,
    colors,
}: {
    children: any;
    colors: string[];
}) => {
    return (
        <LinearGradient colors={colors} className="flex-1">
            <SafeAreaView className="pt-11 " style={styles.container}>{children}</SafeAreaView>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20, // Approximate conversion of TailwindCSS px-5
        paddingVertical: 12, // Approximate conversion of TailwindCSS py-3
    },
});


export default AppGradient;
