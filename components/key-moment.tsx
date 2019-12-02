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
                    <Text style={styles.keyMomentText}>{this.props.itemMinute}</Text>
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
        paddingTop: 10,
        flexDirection: "row"
    },
    keyMomentText: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        fontWeight: "normal",
        fontSize: 16,
        textAlign: "center"
    },
});