import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'myApp',
  webDir: 'www/browser',
  server: {
    url: 'http://192.168.2.105:8100',
    androidScheme: 'https',
  },
};

export default config;
