This solution uses Expo's `SecureStore` to generate and store a unique device identifier.  If an ID already exists, it's retrieved; otherwise, a new UUID is generated and stored. 

```javascript
import * as SecureStore from 'expo-secure-store';
import { v4 as uuid } from 'uuid';

async function getDeviceId() {
  let deviceId = await SecureStore.getItemAsync('deviceId');
  if (!deviceId) {
    deviceId = uuid();
    await SecureStore.setItemAsync('deviceId', deviceId);
  }
  return deviceId;
}

// Example usage:
async function run(){
  const uniqueId = await getDeviceId();
  console.log('Unique Device ID:', uniqueId);
}
run();
```
This approach offers a reliable way to maintain a unique identifier per device while respecting Android's privacy policies.  Remember to handle potential errors during `SecureStore` operations in a production environment.