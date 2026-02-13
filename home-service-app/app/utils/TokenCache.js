import * as SecureStore from 'expo-secure-store';

const tokenCache = {
    async getToken(key) {
        try {
            return await SecureStore.getItemAsync(key);
        } catch (error) {
            console.error('Error getting token:', error);
            return null;
        }
    },
    async saveToken(key, value) {
        try {
            return await SecureStore.setItemAsync(key, value);
        } catch (error) {
            console.error('Error saving token:', error);
        }
    },    
};

export default tokenCache;