# KeyboardAvoidingView on Android edge-to-edge

A minimal Expo app for [expo/expo#52032](https://github.com/expo/expo/pull/52032) (docs:
[Keyboard handling](https://docs.expo.dev/guides/keyboard-handling/)).

The guide's example sets
`behavior={Platform.OS === 'ios' ? 'padding' : undefined}`. Expo apps are
edge-to-edge on Android, and on Android 15 and later the window no longer
resizes for the keyboard. With `behavior` undefined, the keyboard covers the
input. The PR changes the example to `behavior="padding"` on both platforms.

The app is one screen with a `KeyboardAvoidingView` and a `TextInput` at the
bottom. Two buttons switch between the two versions of the example:

- **Before**: `behavior={Platform.OS === 'ios' ? 'padding' : undefined}`
- **After**: `behavior="padding"`

## Run

Expo SDK 58, React Native 0.88. Works in Expo Go, no native code.

```sh
npm install
npx expo start
```

Scan the QR code with Expo Go on an Android 15+ device (or emulator) and on an
iPhone.

## Steps

1. Tap **Before**, then tap the input at the bottom.
2. Tap **After**, then tap the input again.

## Expected

| Variant | Android 15+                      | iOS                              |
| ------- | -------------------------------- | -------------------------------- |
| Before  | The keyboard covers the input    | The input is above the keyboard  |
| After   | The input is above the keyboard  | The input is above the keyboard  |

<!-- Screenshots: Android Before / After, iOS After -->
