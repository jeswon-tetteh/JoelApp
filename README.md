# JoelApp

#Student ID: 11109432

This is a React Native project created using Expo CLI. This project displays a simple message with customized styling.

## Project Structure

- `App.js`: Main component of the app.
- `node_modules/`: Contains all npm dependencies.
- `package.json`: Contains project metadata and dependencies.
- `app.json`: Configuration file for the Expo project.

## Setup Instructions

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/JoelApp.git
   cd JoelApp
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

### Running the Project

1. **Start the Expo development server:**

   ```bash
   expo start
   ```

2. **Open the app:**

   - Use an android emulator
   - Scan the QR code with the Expo Go app on your mobile device.

## Customizations in `App.js`

- **Background Color:** The background color of the `View` component has been changed to `#add8e6`.
- **Text Message:** The `Text` component displays "My name is Joel Jeswon Tetteh" with "Joel Jeswon Tetteh" in bold.
- **Font Size:** The font size of the text has been increased to 24.
- **Bold Name:** The name "Joel Jeswon Tetteh" is displayed in bold.

### Code

Here's the customized `App.js`:

```jsx
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My name is <Text style={styles.boldText}>Joel Jeswon Tetteh</Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#808080',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
  },
  boldText: {
    fontWeight: 'bold',
  },
});

#Commited by changing font size to 31

#Commited by changing background color to light green

#Committed by changing App text to "I am a student of University Of Ghana"

#Commited by changing background color to light orange

#Committed by changing font size to 35

#Commited by changing App text to "My name is Jeswon Tetteh"

#Commited by adding Student ID and screenshots to README file

![JoelApp screenshot](C:\Users\Lord Buju\JoelApp\Screenshot (388).png)

![JoelApp screenshot2](C:\Users\Lord Buju\JoelApp\Screenshot JoelApp.jpeg)


```
