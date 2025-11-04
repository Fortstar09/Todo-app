import { StatusBar } from 'expo-status-bar';
import './global.css';
import Index from 'components/ScreenContent';

export default function App() {
  return (
    <>
      <Index />
      <StatusBar style="auto" />
    </>
  );
}
