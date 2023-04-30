import './App.css';
import { AppShell, MantineProvider, useMantineTheme } from '@mantine/core';
import { Routes, Route, useLocation } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getPerformance } from "firebase/performance";

import CustomHeader from "./components/Header";
import CustomFooter from "./components/Footer";
import Landing from "./pages/Landing";

const firebaseConfig = {
  apiKey: "AIzaSyDUzofkj9Mjyy2iVd4JtW5l_OQiYhCi5Qs",
  authDomain: "aditya-agrawal-website.firebaseapp.com",
  databaseURL: "https://aditya-agrawal-website.firebaseio.com",
  projectId: "aditya-agrawal-website",
  storageBucket: "aditya-agrawal-website.appspot.com",
  messagingSenderId: "75469441120",
  appId: "1:75469441120:web:259d26c14ac3d6073d9b05",
  measurementId: "G-YJ3XWCBGZ9"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const performance = getPerformance(app);

export default function App() {
  const theme = useMantineTheme();
  const location = useLocation();

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS
      theme={{
        colorScheme: 'light',
        colors: {
          'onlyGreen': ['#0FBA00'],
          'customGreen': ['#E1F6DF', '#C3EEBF', '#87DC80', '#4BCB40', '#0FBA00', '#0B8B00', '#075D00', '#042E00', '#021700'],
          'customYellow': ['#FFF9DF', '#FFF2BF', '#FFE680', '#FFD940', '#FFCC00', '#DFB300', '#BF9900', '#806600', '#403300', '#201A00'],
          'customBlue': ['#E2F2FA', '#C4E6F5', '#8ACCEB', '#4FB3E1', '#1499D7', '#0F73A1', '#0A4D6C', '#052636', '#03131B'],
          'customRed': ['#FFE6E6', '#FFCCCC', '#FF9A9A', '#FF6868', '#FF3535', '#BF2828', '#801B1B', '#400D0D', '#200707']
        },
      }}>
      <AppShell
        header={<CustomHeader />}
        footer={<CustomFooter />}
        padding={location.pathname === "/" ? 0 : theme.spacing.md}
        style={{ overflowX: 'hidden', backgroundColor: '#383F51' }}
      >
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </AppShell>
    </MantineProvider>
  );
}