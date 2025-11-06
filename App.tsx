import { StatusBar } from 'expo-status-bar';
import './global.css';
import Index from 'components/Index';

import { ConvexProvider, ConvexReactClient } from 'convex/react';

const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
  unsavedChangesWarning: false,
});

export default function App() {
  return (
    <ConvexProvider client={convex}>
        <Index />
        <StatusBar style="auto" />
    </ConvexProvider>
  );
}
