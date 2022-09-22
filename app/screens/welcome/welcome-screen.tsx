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
import Moment from "moment"
import { translate } from "../../i18n/"
import { Icon } from "../../components/icon/icon"

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
  fontWeight:"normal",
  fontFamily: "PxGrotesk-Light",
  fontSize: 80,
  lineHeight: 55,
  textAlign: "left",
  paddingTop: spacing[6],
  paddingBottom: spacing[2],
}
const DAY: TextStyle = {
  ...TEXT,
  fontWeight:"normal",
  fontFamily: "PxGrotesk-Light",
  fontSize: 35,
  lineHeight: 55,
  textAlign: "left",
  marginTop: "auto",
}
const SECTION: TextStyle = {
    ...TEXT,
    display: "flex",
    alignItems: "stretch",
    alignContent: "space-between",
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
    fontSize:14
  }
  const SECTION_CONTENT: TextStyle = {
    ...TEXT,
    ...BOLD,
    textAlign: "left",
    fontSize:16,
    color: color.palette.darkGrey
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
  const SUB_FOCUS: TextStyle = {
    ...TEXT,
    fontSize: 15,
    lineHeight: 22,
    marginBottom: spacing[5]
  }

  const READ: ViewStyle = {
    ...TEXT,
    marginTop: spacing[8],
    width: "65%"
  }

 const INFO: TextStyle = {
  ...TEXT,
  fontSize: 15
 }

 const DEST: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 15,
  marginTop: spacing[3],
  marginBottom: spacing[3],
  paddingTop:spacing[3],
  paddingBottom: spacing[3],
  borderTopWidth:1,
  borderTopColor: color.palette.lightGrey
 }

 const TITLE: TextStyle = {
  ...TEXT,
  fontSize: 35,
  fontFamily: "Linotype",
  marginTop: "30%",
  marginBottom: "10%",
 }

export const WelcomeScreen: FC<StackScreenProps<NavigatorParamList, "welcome">> = observer(
  ({ navigation }) => {
    const nextScreen = () => navigation.navigate("driver")

    return (
      <View testID="WelcomeScreen" style={FULL}>
        <SafeAreaView style={STICKY}>
          <Header 
            style={HEADER} 
            titleStyle={HEADER_TITLE} 
          />
        </SafeAreaView> 
        <Screen style={CONTAINER} preset="scroll" backgroundColor={color.background}>
          <Text style={TITLE} text="Your Trip" />
          <Text style={SECTION}>
            <Text style={FOCUS} preset="header">{Moment(translate("trip.estimated_arrival")).format('h:mm')}</Text>
            <Text style={DAY}>{Moment(translate("trip.estimated_arrival")).format('a')}</Text>
          </Text>
          <Text style={SUB_FOCUS}>Estimated arrival at {translate("trip.dropoff_location.name")}</Text>
          {/* <Image source={bowserLogo} style={BOWSER} /> */}
          <Text style={SECTION}>
            <Text style={SECTION_WRAPPER}>
              <Text style={SECTION_HEADER} text="Estimated Fare:"/>
              <Text style={SECTION_CONTENT}>${translate("trip.estimated_fare_min")} - ${translate("trip.estimated_fare_max")} <Icon icon="info"/></Text>
            </Text>
            <Text style={SECTION_WRAPPER}>
              <Text style={SECTION_HEADER} text="Passengers:"/>
              <Text style={SECTION_CONTENT}>{translate("trip.passengers_min")} - {translate("trip.passengers_max")}</Text>
            </Text>
            <Text style={SECTION_WRAPPER}>
              <Text style={SECTION_HEADER} text="Payment:"/>
              <Text style={SECTION_CONTENT} tx="trip.payment"/>
            </Text>
          </Text>
          <View style={READ}>
            <Text style={INFO}>
              {translate("trip.pickup_location.street_line1")}<br/>
              {translate("trip.pickup_location.city")}, {translate("trip.pickup_location.state")} {translate("trip.pickup_location.zipcode")}
            </Text>
            <Text style={DEST}>
              DFW International Airport<br/>
              American Airlines Terminal E<br/>
              Irving, Texas 75261
            </Text>
            <Text style={INFO}>
            {translate("trip.notes")} <Icon icon="edit"/>
            </Text>
          </View>
        </Screen>
        <SafeAreaView style={BUTTON_CONTAINER}>
          <Button
              testID="next-screen-button"
              style={CONTINUE}
              textStyle={CONTINUE_TEXT}
              text="CANCEL TRIP"
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
