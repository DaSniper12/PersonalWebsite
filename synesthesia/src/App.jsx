import { MantineProvider } from '@mantine/core'
import './App.css'
import '@mantine/core/styles.css'

import EbookReader from './reader'
import EbookReactReader from './rereader'

function App() {
  return (
    <MantineProvider>
      <EbookReactReader epubUrl="https://react-reader.metabits.no/files/alice.epub" />
    </MantineProvider>
  )
}

export default App
