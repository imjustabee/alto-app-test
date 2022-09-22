import * as Font from "expo-font"

export const initFonts = async () => {
  // Refer to ./assets/fonts/custom-fonts.md for instructions.
  // ...
  // Welcome back! Just uncomment this and replace/append with your font file names!
  // ⬇
  await Font.loadAsync({
    PxGrotesk: require("./PxGrotesk-Regular.otf"),
    "PxGrotesk-Regular": require("./PxGrotesk-Regular.otf"),
    "PxGrotesk-RegularIta": require("./PxGrotesk-RegularIta.otf"),
    "PxGrotesk-Bold": require("./PxGrotesk-Bold.otf"),
    "PxGrotesk-BoldIta": require("./PxGrotesk-BoldIta.otf"),
    "PxGrotesk-Light": require("./PxGrotesk-Light.otf"),
    "PxGrotesk-LightIta": require("./PxGrotesk-LightIta.otf"),
    "PxGrotesk-Screen": require("./PxGrotesk-Screen.otf"),
    Linotype: require("./Linotype - OptimaLTStd.otf"),
    "Linotype - OptimaLTStd": require("./Linotype - OptimaLTStd.otf"),
    "Linotype - OptimaLTStd-Black": require("./Linotype - OptimaLTStd-Black.otf"),
    "Linotype - OptimaLTStd-BlackItalic": require("./Linotype - OptimaLTStd-BlackItalic.otf"),
    "Linotype - OptimaLTStd-Bold": require("./Linotype - OptimaLTStd-Bold.otf"),
    "Linotype - OptimaLTStd-BoldItalic": require("./Linotype - OptimaLTStd-BoldItalic.otf"),
    "Linotype - OptimaLTStd-DemiBold": require("./Linotype - OptimaLTStd-DemiBold.otf"),
    "Linotype - OptimaLTStd-DemiBoldItalic": require("./Linotype - OptimaLTStd-DemiBoldItalic.otf"),
    "Linotype - OptimaLTStd-ExtraBlack": require("./Linotype - OptimaLTStd-ExtraBlack.otf"),
    "Linotype - OptimaLTStd-Italic": require("./Linotype - OptimaLTStd-Italic.otf"),
    "Linotype - OptimaLTStd-Medium": require("./Linotype - OptimaLTStd-Medium.otf"),
    "Linotype - OptimaLTStd-MediumItalic": require("./Linotype - OptimaLTStd-MediumItalic.otf"),
    "Linotype - OptimaLTStd-XBlackItalic": require("./Linotype - OptimaLTStd-XBlackItalic.otf"),
  })
}
