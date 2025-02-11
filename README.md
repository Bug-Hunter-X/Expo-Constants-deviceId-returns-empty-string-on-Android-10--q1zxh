# Expo Constants.deviceId returns empty string on Android 10+

This repository demonstrates a bug in Expo's `Constants.deviceId` API on Android 10 (API level 29) and higher, where it returns an empty string instead of a unique device identifier.  The solution offers a workaround using the `SecureStore` API for persistent device identification.

## Problem

On Android 10 and later, accessing `Constants.deviceId` often results in an empty string, rendering it unreliable for tasks requiring unique device identification. This is because stricter privacy restrictions in newer Android versions limit access to device identifiers.

## Solution

The recommended solution is to use a persistent storage mechanism like Expo's `SecureStore` to generate and store a unique ID on the device. This workaround ensures persistent identification across app sessions while adhering to Android's privacy guidelines.