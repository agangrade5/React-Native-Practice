import { useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import { useAuth } from "@clerk/clerk-expo";
import { Redirect } from "expo-router";
import Login from "./screens/auth/Login";
import Colors from "./utils/Colors";

export default function Index() {
    const { isLoaded, isSignedIn } = useAuth();

    // Show loading while checking auth state
    if (!isLoaded) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color={Colors.primary} />
            </View>
        );
    }

    // Redirect to tabs if signed in
    if (isSignedIn) {
        return <Redirect href="/(tabs)/home" />;
    }

    // Show login screen if not signed in
    return (
        <View style={{ flex: 1, backgroundColor: Colors.white }}>
            <Login />
        </View>
    );
}