import { StyleProp, TextStyle, ViewStyle } from "react-native"
import { IconTypes } from "../icon/icons"
import { TxKeyPath } from "../../i18n"

export interface FooterProps {
  /**
   * Main header
   */
  footerTx?: TxKeyPath

  /**
   * header non-i18n
   */
  footerText?: string

   /**
   * Sub header
   */
  subTx?: TxKeyPath

    /**
     * sub header non-i18n
     */
  subText?: string

  /**
   * Icon that should appear on the left
   */
  leftIcon?: IconTypes

  /**
   * What happens when you press the left icon
   */
  onLeftPress?(): void

  /**
   * Icon that should appear on the right
   */
  rightIcon?: IconTypes

  /**
   * What happens when you press the right icon
   */
  onRightPress?(): void

  /**
   * Container style overrides.
   */
  style?: StyleProp<ViewStyle>

  /**
   * Title style overrides.
   */
  titleStyle?: StyleProp<TextStyle>

    /**
   * Sub Title style overrides.
   */
  subStyle?: StyleProp<TextStyle>
}
