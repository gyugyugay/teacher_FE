// import Toast from 'react-native-simple-toast';

function logInfo(message: string): void {
  console.log(message);
  // Toast.show(message, 2000);
}

function logError(e: any): void {
  console.log('[ERROR]', e);
  // Toast.show(e, 2000);
}

export { logInfo, logError };
