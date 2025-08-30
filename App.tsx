import React from 'react'
import HomeScreen from './src/Screens/HomeScreen'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
import { store, persistor } from './src/Store'
import { PersistGate } from 'redux-persist/integration/react'

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>

          <HomeScreen />
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  )
}

export default App