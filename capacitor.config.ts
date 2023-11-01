import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'myApp',
  webDir: 'www/browser',
  server: {
    androidScheme: 'https',
  },
};

export default config;
