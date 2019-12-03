# Fantastec Commentary

A code example for Fantastec

## Installation


- Node v12
- Yarn 1.19

Clone repository then  
  `yarn install`  
  `yarn start`  
This will start the local Expo client which will allow you to run on iOS Simulator (requires XCode and command line tools setup) or Android Emulator/Device (requires connected Android device with USB Debugging enabled)

Or using the Expo client app install from `https://expo.io/@rickhawkins/FantastecCommentary`

## Discussion

I have not added a title bar or other navigation/general controls. I considered using `SafeAreaView` for the main container but as the space this left for controls is unused it looked bad. In a complete app there may be top and bottom bars for navigation these would be easy to adjust for.

The styling is only an absolute basic grey palette to separate elements and move it on from looking like a wireframe.

In order to take this example UI to production we would need to implement the `getItemLayout` and `onScrollToIndexFailed` props.
In likely real world usage the number of items in the list could grow enough so that off screen items are unloaded. Then the scroll to key moment function would fail if moving to a item that was outside of the render window.

This is slightly complicated by the commentary rows being able to be different sizes. A method of calculating the height for any given index would be needed.

Also a more sophisticated method of loading the data would be implemented. Probably from an app data store like Redux or Mobx.

I have not used typescript before this exercise so although I have set up types for my components props and state I may not have followed best practice or missed some explicit typing where it is using `any`. For example I couldn't find the correct type to use for the `onLayout` event callback so it has resolved to `any`.

No tests have been set up nor did I particularly consider the ability to test the components in their creation. The expanding panel may need to be refactored slightly to aid testability depending on the test framework being used.

I "tested" the example on USB connected Galaxy S7 iOS Simulator 11 Pro Max and an iPhoneX via Expo client.
