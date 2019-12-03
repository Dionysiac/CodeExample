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
    isLast?: boolean;
}

type MyState = {
    itemMinute: number;
    itemDescription: string;
    isLast: boolean;
}

class CommentaryItem extends React.Component<MyProps, MyState> {
    constructor(props) {
        super(props);

        this.state = {
            itemMinute: props.itemMinute,
            itemDescription: props.itemDescription,
            isLast: (false || props.isLast)
        };
    }

    render() {
        let lineSource = require('../assets/vert_line.png');
        let lineStyle = this.state.isLast ? styles.noLine : styles.image;
        return (
            <View style={styles.container}>
                <View style={styles.timelineContainer}>
                    <View style={styles.circle}>
                        <Text style={styles.text}>{this.state.itemMinute}</Text>
                    </View>
                    <View style={styles.vertLine}>
                        <Image style={lineStyle} source={lineSource} />
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
        backgroundColor: "#CFD8DC"
    },
    timelineContainer: {
        flex: -1,
        flexDirection: "column",
        paddingLeft: 10
    },
    circle: {
        width: 40,
        height: 40,
        borderRadius: 40 / 2,
        backgroundColor: "#ECEFF1",
        borderColor: "#263238",
        borderWidth: 3,
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "normal"
    },
    vertLine: {
        flex: 1,
        width: 40,
        justifyContent: "center",
        alignItems: "center"
    },
    noLine: {
        opacity: 0
    },
    image: {
        flex: 1,
        width: 3,
    },
    body: {
        flex: 1,
        padding: 10,
        paddingTop: 10,
        flexDirection: "row",
        alignItems: "flex-start",
        backgroundColor: "#ECEFF1",
        marginBottom: 20,
        marginLeft: 10,
        marginRight: 20,
        borderRadius: 10,
    },
    text: {
        fontSize: 16
    }
});