import AsyncStorage from '@react-native-async-storage/async-storage'

const TOKEN = 'TOKEN'
const PROFILE = 'PROFILE'

export default {
    getToken: async () => {
        try{
            return await AsyncStorage.getItem(TOKEN) ?? ''
        }catch {
            return ''
        }
    },
    getProfile: async () => {
        try{
            const profile = await AsyncStorage.getItem(PROFILE)
            return profile != null ? JSON.parse(profile) : {name: '', lastName: '', email: ''}
        }catch {
            return {name: '', lastName: '', email: ''}
        }
    },
    setToken: async (token) => {
        try{
            await AsyncStorage.setItem(TOKEN, token)
            return true
        }catch {
            return false
        }
    },
    setProfile: async (profile) => {
        try{
            const jsonProfile = JSON.stringify(profile)
            await AsyncStorage.setItem(PROFILE, jsonProfile)
            return true
        }catch {
            return false
        }
    },
}