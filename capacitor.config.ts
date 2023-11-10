import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'conversando.com',
  appName: 'ConversandoEnElAula',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      launchAutoHide: true,
		  backgroundColor: "#EC865E",
		  androidSplashResourceName: "splash",
		  androidScaleType: "CENTER_CROP",
		  splashFullScreen: true,
		  splashImmersive: true,
    }
  }
};

export default config;
