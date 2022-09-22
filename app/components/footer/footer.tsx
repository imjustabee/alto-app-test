import React from "react"
import { View, ViewStyle, TextStyle, ImageStyle } from "react-native"
import { FooterProps } from "./footer.props"
import { Button } from "../button/button"
import { Text } from "../text/text"
import { Icon } from "../icon/icon"
import { AutoImage as Image} from "../auto-image/auto-image"
import { spacing } from "../../theme"
import { translate } from "../../i18n/"
import Moment from "moment"
import { format } from "date-fns"

// static styles
const ROOT: ViewStyle = {
    flexDirection: "row",
    paddingHorizontal: spacing[4],
    alignItems: "center",
    paddingTop: spacing[5],
    paddingBottom: spacing[5],
    justifyContent: "flex-start",
}
const TITLE: TextStyle = { textAlign: "center" }
const TITLE_MIDDLE: ViewStyle = { flex: 1, justifyContent: "center" }
const LEFT: ViewStyle = { width: 45 }
const RIGHT: ViewStyle = { width: 45 }

/**
 * Footer that appears on many screens. Will hold navigation buttons.
 */
export function Footer(props: FooterProps) {
  const {
    onLeftPress,
    onRightPress,
    rightIcon,
    leftIcon,
    footerText,
    footerTx,
    subText,
    subTx,
    style,
    titleStyle,
    subStyle
  } = props
  const footer = footerText || (footerTx.split("-")[0] && translate(footerTx).split("-")[0]) || ""
  const subFooter = subText || Moment(new Date(subTx)).format('LT') && Moment(new Date(translate(subTx))).format('LT') || ""

  return (
    <View style={[ROOT, style]}>
      {leftIcon ? (
        <Button preset="link" onPress={onLeftPress}>
          <Icon icon={leftIcon} />
        </Button>
      ) : (
        <View style={LEFT} />
      )}
      <View style={TITLE_MIDDLE}>
        <Text style={[TITLE, titleStyle]} text={footer} />
        <Text style={[TITLE, subStyle]} text={subFooter} />
      </View>

      {rightIcon ? (
        <Button preset="link" onPress={onRightPress}>
          <Icon icon={rightIcon} />
        </Button>
      ) : (
        <View style={RIGHT} />
      )}
    </View>
  )
}
