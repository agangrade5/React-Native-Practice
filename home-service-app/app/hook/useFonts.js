import { useFonts } from "expo-font";

export default function useCustomFonts() {
  const [fontsLoaded] = useFonts({
    OutfitBold: require("../../assets/fonts/Outfit-Bold.ttf"),
    OutfitSemiBold: require("../../assets/fonts/Outfit-SemiBold.ttf"),
    OutfitMedium: require("../../assets/fonts/Outfit-Medium.ttf"),
    OutfitRegular: require("../../assets/fonts/Outfit-Regular.ttf"),
    OutfitLight: require("../../assets/fonts/Outfit-Light.ttf"),
  });

  return fontsLoaded;
}
