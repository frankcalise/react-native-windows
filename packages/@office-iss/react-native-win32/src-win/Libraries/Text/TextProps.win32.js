/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */

'use strict';

import type {
  AccessibilityActionEvent,
  AccessibilityActionInfo,
  AccessibilityRole,
  AccessibilityState,
  Role,
} from '../Components/View/ViewAccessibility';
import type {ColorValue, TextStyleProp} from '../StyleSheet/StyleSheet';
import type {
  LayoutChangeEvent,
  PointerEvent,
  GestureResponderEvent,
  TextLayoutEvent,
} from '../Types/CoreEventTypes';
import type {Node} from 'react';

export type PressRetentionOffset = $ReadOnly<{
  top: number,
  left: number,
  bottom: number,
  right: number,
}>;

type PointerEventProps = $ReadOnly<{
  onPointerEnter?: (event: PointerEvent) => void,
  onPointerLeave?: (event: PointerEvent) => void,
  onPointerMove?: (event: PointerEvent) => void,
}>;

/**
 * @see https://reactnative.dev/docs/text#reference
 */
export type TextProps = $ReadOnly<{
  ...PointerEventProps,

  /**
   * Indicates whether the view is an accessibility element.
   *
   * See https://reactnative.dev/docs/text#accessible
   */
  accessible?: ?boolean,
  accessibilityActions?: ?$ReadOnlyArray<AccessibilityActionInfo>,
  onAccessibilityAction?: ?(event: AccessibilityActionEvent) => mixed,
  accessibilityHint?: ?Stringish,
  accessibilityLanguage?: ?Stringish,
  accessibilityLabel?: ?Stringish,
  accessibilityRole?: ?AccessibilityRole,
  accessibilityState?: ?AccessibilityState,
  'aria-label'?: ?string,
  accessibilityControls?: ?Stringish, // Win32
  accessibilityDescribedBy?: ?Stringish, // Win32
  accessibilityDescription?: ?Stringish, // Win32
  accessibilityLevel?: ?number, // Win32
  accessibilityPositionInSet?: ?number, // Win32
  accessibilitySetSize?: ?number, // Win32

  /**
   * Whether font should be scaled down automatically.
   *
   * See https://reactnative.dev/docs/text#adjustsfontsizetofit
   */
  adjustsFontSizeToFit?: ?boolean,

  /**
   * Whether fonts should scale to respect Text Size accessibility settings.
   *
   * See https://reactnative.dev/docs/text#allowfontscaling
   */
  allowFontScaling?: ?boolean,

  /**
   * Set hyphenation strategy on Android.
   *
   */
  android_hyphenationFrequency?: ?('normal' | 'none' | 'full'),

  /**
   * alias for accessibilityState
   *
   * see https://reactnative.dev/docs/accessibility#accessibilitystate
   */
  'aria-busy'?: ?boolean,
  'aria-checked'?: ?boolean | 'mixed',
  'aria-disabled'?: ?boolean,
  'aria-expanded'?: ?boolean,
  'aria-selected'?: ?boolean,
  'aria-multiselectable'?: ?boolean, // Win32
  'aria-required'?: ?boolean, // Win32
  'aria-controls'?: ?Stringish, // Win32
  'aria-describedby'?: ?Stringish, // Win32
  'aria-description'?: ?Stringish, // Win32
  'aria-level'?: ?number, // Win32
  'aria-posinset'?: ?number, // Win32
  'aria-setsize'?: ?number, // Win32
  /**
   * Represents the nativeID of the associated label text. When the assistive technology focuses on the component with this props, the text is read aloud.
   * This prop is listed for cross-platform reasons and has no real effect on Android or iOS.
   */
  'aria-labelledby'?: ?string,

  children?: ?Node,

  /**
   * When `numberOfLines` is set, this prop defines how text will be
   * truncated.
   *
   * See https://reactnative.dev/docs/text#ellipsizemode
   */
  ellipsizeMode?: ?('clip' | 'head' | 'middle' | 'tail'),

  /**
   * Used to locate this view from native code.
   *
   * See https://reactnative.dev/docs/text#nativeid
   */
  id?: string,

  /**
   * Specifies largest possible scale a font can reach when `allowFontScaling` is enabled.
   * Possible values:
   * `null/undefined` (default): inherit from the parent node or the global default (0)
   * `0`: no max, ignore parent/global default
   * `>= 1`: sets the maxFontSizeMultiplier of this node to this value
   */
  maxFontSizeMultiplier?: ?number,

  /**
   * Used to locate this view from native code.
   *
   * See https://reactnative.dev/docs/text#nativeid
   */
  nativeID?: ?string,

  /**
   * Used to truncate the text with an ellipsis.
   *
   * See https://reactnative.dev/docs/text#numberoflines
   */
  numberOfLines?: ?number,

  /**
   * Invoked on mount and layout changes.
   *
   * See https://reactnative.dev/docs/text#onlayout
   */
  onLayout?: ?(event: LayoutChangeEvent) => mixed,

  /**
   * This function is called on long press.
   *
   * See https://reactnative.dev/docs/text#onlongpress
   */
  onLongPress?: ?(event: GestureResponderEvent) => mixed,

  /**
   * This function is called on press.
   *
   * See https://reactnative.dev/docs/text#onpress
   */
  onPress?: ?(event: GestureResponderEvent) => mixed,
  onPressIn?: ?(event: GestureResponderEvent) => mixed,
  onPressOut?: ?(event: GestureResponderEvent) => mixed,
  onResponderGrant?: ?(event: GestureResponderEvent) => void,
  onResponderMove?: ?(event: GestureResponderEvent) => void,
  onResponderRelease?: ?(event: GestureResponderEvent) => void,
  onResponderTerminate?: ?(event: GestureResponderEvent) => void,
  onResponderTerminationRequest?: ?() => boolean,
  onStartShouldSetResponder?: ?() => boolean,
  onMoveShouldSetResponder?: ?() => boolean,
  onTextLayout?: ?(event: TextLayoutEvent) => mixed,

  /**
   * Defines how far your touch may move off of the button, before
   * deactivating the button.
   *
   * See https://reactnative.dev/docs/text#pressretentionoffset
   */
  pressRetentionOffset?: ?PressRetentionOffset,

  /**
   * Indicates to accessibility services to treat UI component like a specific role.
   */
  role?: ?Role,

  /**
   * Lets the user select text.
   *
   * See https://reactnative.dev/docs/text#selectable
   */
  selectable?: ?boolean,
  style?: ?TextStyleProp,

  /**
   * Used to locate this view in end-to-end tests.
   *
   * See https://reactnative.dev/docs/text#testid
   */
  testID?: ?string,

  /**
   * Android Only
   */

  /**
   * Specifies the disabled state of the text view for testing purposes.
   *
   * See https://reactnative.dev/docs/text#disabled
   */
  disabled?: ?boolean,

  /**
   * The highlight color of the text.
   *
   * See https://reactnative.dev/docs/text#selectioncolor
   */
  selectionColor?: ?ColorValue,

  dataDetectorType?: ?('phoneNumber' | 'link' | 'email' | 'none' | 'all'),

  /**
   * Set text break strategy on Android.
   *
   * See https://reactnative.dev/docs/text#textbreakstrategy
   */
  textBreakStrategy?: ?('balanced' | 'highQuality' | 'simple'),

  /**
   * iOS Only
   */
  adjustsFontSizeToFit?: ?boolean,

  /**
   * The Dynamic Type scale ramp to apply to this element on iOS.
   */
  dynamicTypeRamp?: ?(
    | 'caption2'
    | 'caption1'
    | 'footnote'
    | 'subheadline'
    | 'callout'
    | 'body'
    | 'headline'
    | 'title3'
    | 'title2'
    | 'title1'
    | 'largeTitle'
  ),

  /**
   * Smallest possible scale a font can reach.
   *
   * See https://reactnative.dev/docs/text#minimumfontscale
   */
  minimumFontScale?: ?number,

  /**
   * When `true`, no visual change is made when text is pressed down.
   *
   * See https://reactnative.dev/docs/text#supperhighlighting
   */
  suppressHighlighting?: ?boolean,

  /**
   * Set line break strategy on iOS.
   *
   * See https://reactnative.dev/docs/text.html#linebreakstrategyios
   */
  lineBreakStrategyIOS?: ?('none' | 'standard' | 'hangul-word' | 'push-out'),
}>;
