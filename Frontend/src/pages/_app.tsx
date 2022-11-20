import '@styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from '@redux/store'
import Navbar from "./conponents/navbar"
import footer from "./conponents/footer"
/**
 * App: App component
 * @return {JSX.Element} The JSX Code for the Home Page
 */

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
      <Navbar/>
        <Component {...pageProps} />
        <footer/>
      </Provider>
    </>
  )
}

export default MyApp
