import * as React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

type MyProps = {
    itemMinute: number;
    itemDescription: string;
}

type MyState = {
    itemMinute: number;
    itemDescription: string;
}

class CommentaryItem extends React.Component<MyProps, MyState> {
    constructor(props) {
        super(props);

        this.state = {
            itemMinute: props.itemMinute,
            itemDescription: props.itemDescription,
        };
    }

    render() {
        let lineSource = require('../assets/vert_line.png');
        return (
            <View style={styles.container}>
                <View style={styles.timelineContainer}>
                    <View style={styles.circle}>
                        <Text style={styles.text}>{this.state.itemMinute}</Text>
                    </View>
                    <View style={styles.vertLine}>
                        <Image source={lineSource} />
                    </View>
                </View>
                <View style={styles.body}>
                    <Text style={styles.text}>{this.state.itemDescription}</Text>
                </View>
            </View>
        );
    }
}

export default CommentaryItem;


var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#fff"
    },
    timelineContainer: {
        flex: 1,
        flexDirection: "column"
    },
    circle: {
        width: 40,
        height: 40,
        borderRadius: 40 / 2,
        backgroundColor: "#fff",
        borderColor: "black",
        borderWidth: 3,
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "normal"
    },
    vertLine: {
        flex: 1,
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center"
    },
    body: {
        flex: 1,
        padding: 10,
        paddingTop: 10,
        flexDirection: "row",
        alignItems: "flex-start"
    },
    text: {
        fontSize: 16
    }
});