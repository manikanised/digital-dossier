'use client';

import KUTE from 'kute.js';
import { useEffect, useState } from 'react';

export default function StartScreen() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    const tween = KUTE.fromTo(
      '#path1',
      { path: '#path1' },
      { path: '#path2' },
      { repeat: 999, duration: 10000, yoyo: true }
    );
    tween.start();
    setIsLoading(false);
  }, []);
  return (
    <div className="absolute bottom-0 h-screen w-screen bg-blue-950">
      <div className="flex h-full w-full">
        <div
          className={`absolute bottom-10 z-10 w-full justify-center text-center text-xl text-white transition-opacity duration-[7000ms] ${
            isLoading ? 'opacity-0' : 'opacity-80'
          }`}
        >
          Start
        </div>
        <svg
          className={`fixed -bottom-32 ${
            !isLoading && '-translate-y-28'
          } transition-transform duration-[2000ms] ease-in-out`}
          id="visual"
          viewBox="0 0 1920 1080"
          width="1920"
          height="1080"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
        >
          <path
            id="path1"
            d="M0 966L45.7 973.7C91.3 981.3 182.7 996.7 274.2 990.3C365.7 984 457.3 956 548.8 948.8C640.3 941.7 731.7 955.3 823 964.5C914.3 973.7 1005.7 978.3 1097 980.2C1188.3 982 1279.7 981 1371.2 985.7C1462.7 990.3 1554.3 1000.7 1645.8 993.7C1737.3 986.7 1828.7 962.3 1874.3 950.2L1920 938L1920 1081L1874.3 1081C1828.7 1081 1737.3 1081 1645.8 1081C1554.3 1081 1462.7 1081 1371.2 1081C1279.7 1081 1188.3 1081 1097 1081C1005.7 1081 914.3 1081 823 1081C731.7 1081 640.3 1081 548.8 1081C457.3 1081 365.7 1081 274.2 1081C182.7 1081 91.3 1081 45.7 1081L0 1081Z"
            fill="#0066FF"
            strokeLinecap="round"
            strokeLinejoin="miter"
          ></path>
          <path
            id="path2"
            className="hidden"
            d="M0 939L40 939.8C80 940.7 160 942.3 240 928.2C320 914 400 884 480 888.3C560 892.7 640 931.3 720 955.2C800 979 880 988 960 975.5C1040 963 1120 929 1200 907.2C1280 885.3 1360 875.7 1440 880.5C1520 885.3 1600 904.7 1680 914C1760 923.3 1840 922.7 1880 922.3L1920 922L1920 1081L1880 1081C1840 1081 1760 1081 1680 1081C1600 1081 1520 1081 1440 1081C1360 1081 1280 1081 1200 1081C1120 1081 1040 1081 960 1081C880 1081 800 1081 720 1081C640 1081 560 1081 480 1081C400 1081 320 1081 240 1081C160 1081 80 1081 40 1081L0 1081Z"
            fill="#0066FF"
            strokeLinecap="round"
            strokeLinejoin="miter"
          ></path>
        </svg>
      </div>
    </div>
  );
}
