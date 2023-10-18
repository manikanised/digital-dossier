import Image from 'next/image';
import { IBM_Plex_Mono } from 'next/font/google';
import StartScreen from '@/components/StartScreen/StartScreen';

const ibmMono = IBM_Plex_Mono({
  subsets: ['latin', 'latin-ext'],
  weight: '500',
  display: 'swap',
});

export default function Home() {
  return (
    <main
      className={`flex h-screen w-screen overflow-hidden ${ibmMono.className}`}
    >
      <StartScreen />
    </main>
  );
}
