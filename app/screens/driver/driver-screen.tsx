import React, { FC } from "react"
import { View, ViewStyle, TextStyle, ImageStyle, SafeAreaView } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import {
  Button,
  Header,
  Footer,
  Screen,
  Text,
  AutoImage as Image,
} from "../../components"
import { color, spacing, typography } from "../../theme"
import { NavigatorParamList } from "../../navigators"

const driverImage = require("../../../assets/images/Driver_photo.png")

const FULL: ViewStyle = { flex: 1 }
const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[4],
}
const TEXT: TextStyle = {
  color: color.palette.deepBrown,
  fontFamily: "PxGrotesk",
}
const BOLD: TextStyle = { fontWeight: "bold" }
const STICKY: ViewStyle = {
    zIndex: 99,
    position: "absolute",
    width: "100%",
}
const HEADER: TextStyle = {
  paddingTop: spacing[3],
  paddingBottom: spacing[4] + spacing[1],
  paddingHorizontal: 0,
}
const HEADER_TITLE: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 12,
  lineHeight: 15,
  textAlign: "center",
  letterSpacing: 1.5,
  marginVertical: spacing[5],
}
const FOOTER: TextStyle = {
  paddingHorizontal: spacing[3],
  backgroundColor: color.background,
  borderTopWidth: 1,
  borderTopColor: color.palette.lightGrey
}
const FOOTER_TITLE: TextStyle = {
    ...TEXT,
    ...BOLD,
    fontSize: 18,
    lineHeight: 15,
    textAlign: "center",
    letterSpacing: 1.5,
    color: color.palette.darkGrey
  }
const FOCUS: TextStyle = {
  ...TEXT,
  fontWeight:"normal",
  fontFamily: "PxGrotesk-Light",
  fontSize: 80,
  lineHeight: 55,
  textAlign: "left",
  paddingTop: spacing[6],
  paddingBottom: spacing[6],
}
const SECTION: TextStyle = {
  ...TEXT,
  display: "flex",
  alignItems: "stretch",
  alignContent: "space-between",
  width:"50%"
}
const SECTION_WRAPPER: TextStyle = {
  ...TEXT,
  textAlign: "left",
  borderTopWidth: 2,
  borderTopColor: color.primary,
  marginRight: spacing[4],
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 0
}
const SECTION_HEADER: TextStyle = {
  ...TEXT,
  textAlign: "left",
  display: "flex",
  paddingTop: spacing[2],
  paddingBottom: spacing[2],
  width: "200%",
  color: color.palette.darkGrey
}
const HEAD_IMAGE: ImageStyle = {
  alignSelf: "center",
  maxWidth: "100%",
  width: "100%",
  height: "45%",
}
const CONTENT: TextStyle = {
    ...TEXT,
    ...BOLD,
    color: color.palette.lightBrown,
    fontSize: 15,
    lineHeight: 22,
    marginBottom: spacing[2],
    marginTop: spacing[6],
    letterSpacing: 2
  }
  const BUTTON_CONTAINER: ViewStyle = {
      paddingHorizontal: spacing[4],
      paddingVertical: spacing[6],
      backgroundColor: color.palette.background
  }
  const CONTINUE: ViewStyle = {
    paddingVertical: spacing[3],
    paddingHorizontal: spacing[4],
    backgroundColor: color.palette.background,
    borderColor: color.palette.lightTan,
    borderWidth: 2,
  }
  const CONTINUE_TEXT: TextStyle = {
    ...TEXT,
    ...BOLD,
    fontSize: 13,
    letterSpacing: 2,
    color: color.palette.lightTan,
  }

export const DriverScreen: FC<StackScreenProps<NavigatorParamList, "driver">> = observer(
  ({ navigation }) => {
    const nextScreen = () => navigation.navigate("vehicle")

    return (
      <View testID="WelcomeScreen" style={FULL}>
        <SafeAreaView style={STICKY}>
            <Header style={HEADER} titleStyle={HEADER_TITLE} />
        </SafeAreaView>
        <Image source={driverImage} style={HEAD_IMAGE} />
        <Screen style={CONTAINER} preset="scroll" backgroundColor={color.background}>
          <Text style={CONTENT} text="YOUR DRIVER"/>
          <Text style={FOCUS} preset="header" tx="driver.name" />
          <Text style={SECTION}>
            <Text style={SECTION_WRAPPER}>
              <Text style={SECTION_HEADER} tx="driver.bio"/>
            </Text>
          </Text>
        </Screen>
        <SafeAreaView style={BUTTON_CONTAINER}>
          <Button
              testID="next-screen-button"
              style={CONTINUE}
              textStyle={CONTINUE_TEXT}
              text="CONTACT DRIVER"
              onPress={nextScreen}
            />
        </SafeAreaView>
        <SafeAreaView style={FOOTER}>
          <Footer
            footerTx="trip.dropoff_location.name"
            subTx="trip.estimated_arrival"
            leftIcon="profile"
            rightIcon="vibes"
            titleStyle={FOOTER_TITLE}
          />
        </SafeAreaView>
      </View>
    )
  },
)
