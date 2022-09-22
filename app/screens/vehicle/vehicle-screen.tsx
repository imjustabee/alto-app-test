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
  GradientBackground,
  AutoImage as Image,
} from "../../components"
import { color, spacing, typography } from "../../theme"
import { NavigatorParamList } from "../../navigators"

const vehicleImage = require("../../../assets/images/Vehicle_photo.png")

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
//   paddingTop: spacing[3],
//   paddingBottom: spacing[4] + spacing[1],
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
  alignContent: "space-between"
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
  paddingBottom: spacing[2]
}
const SECTION_CONTENT: TextStyle = {
  ...TEXT,
  ...BOLD,
  textAlign: "left",
}
const HEAD_IMAGE: ImageStyle = {
  alignSelf: "center",
  maxWidth: "100%",
  width: "100%",
  height: "12em",
  resizeMode: "cover",
  marginTop:"30%",
  marginBottom:"30%",
}
const CONTENT: TextStyle = {
  ...TEXT,
  ...BOLD,
  color: color.palette.lightBrown,
  fontSize: 15,
  lineHeight: 22,
  marginBottom: spacing[2],
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

export const VehicleScreen: FC<StackScreenProps<NavigatorParamList, "vehicle">> = observer(
  ({ navigation }) => {
    const nextScreen = () => navigation.navigate("ride")

    return (
      <View testID="WelcomeScreen" style={FULL}>
        <SafeAreaView style={STICKY}>
          <Header 
            style={HEADER} 
            titleStyle={HEADER_TITLE} 
          />
        </SafeAreaView>        
        <Screen style={CONTAINER} preset="scroll" backgroundColor={color.background}>
        <Image source={vehicleImage} style={HEAD_IMAGE} />
          <Text style={CONTENT} text="YOUR VEHICLE"/>
          <Text style={FOCUS} tx="vehicle.license" />
          <Text style={SECTION}>
          <Text style={SECTION_WRAPPER}>
              <Text style={SECTION_HEADER} text="Make / Model"/>
              <Text style={SECTION_CONTENT} tx="vehicle.make"/>
            </Text>
            <Text style={SECTION_WRAPPER}>
              <Text style={SECTION_HEADER} text="Color"/>
              <Text style={SECTION_CONTENT} tx="vehicle.color"/>
            </Text>
          </Text>
        </Screen>
        <SafeAreaView style={BUTTON_CONTAINER}>
          <Button
              testID="next-screen-button"
              style={CONTINUE}
              textStyle={CONTINUE_TEXT}
              text="IDENTIFY VEHICLE"
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
