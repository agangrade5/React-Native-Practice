import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';

const App = () => {
    return (
        <View style={styles.container}>
            
            <Text>Test!</Text>

            <StatusBar style="auto" />
            <TouchableHighlight onPress={() => alert('Hello!')}>
                <Text>Press Me</Text>
            </TouchableHighlight>

            <TouchableOpacity onPress={() => alert('Hello!')}>
                <Text>Press Me</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Press Me</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: 'royalblue',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
});

export default App;
