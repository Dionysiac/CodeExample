import * as React from 'react';
import {
    TouchableHighlight,
    StyleSheet,
    Text,
    View
} from 'react-native';

type MyProps = {
    itemMinute: number;
    itemDescription: string;
    onPress: () => void;
    key: string;
}

type MyState = {

}

class KeyMoment extends React.Component<MyProps, MyState> {

    render() {
        return (
            <TouchableHighlight
                onPress={this.props.onPress}
                underlayColor="#f1f1f1">
                <View style={styles.keyMoment}>
                    <View style={styles.circle}><Text style={styles.keyMomentMinute}>{this.props.itemMinute}</Text></View>
                    <Text style={styles.keyMomentText}>{this.props.itemDescription}</Text>
                </View>
            </TouchableHighlight>
        );
    }
}

export default KeyMoment;

const styles = StyleSheet.create({
    keyMoment: {
        flex: 1,
        paddingVertical: 10,
        flexDirection: "row",
        backgroundColor: "#78909C",
        alignItems: "center",
        alignContent: "center",
        marginBottom: 1,
    },
    keyMomentMinute: {
        fontWeight: "normal",
        fontSize: 16,
        textAlign: "center",
    },
    keyMomentText: {
        fontWeight: "bold",
        fontSize: 16,
        textAlign: "center",
        marginLeft: 20,
    },
    circle: {
        width: 40,
        height: 40,
        borderRadius: 40 / 2,
        backgroundColor: "#ECEFF1",
        borderColor: "#263238",
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "normal",
        marginLeft: 10,
    }
});