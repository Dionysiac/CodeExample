import * as React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Animated
} from 'react-native';

type MyProps = {
    itemMinute: number;
    itemDescription: string;
    isHighlight?: boolean;
    isLast?: boolean;
}

type MyState = {
    itemMinute: number;
    itemDescription: string;
    animation: Animated.Value;
}

class CommentaryItem extends React.Component<MyProps, MyState> {
    constructor(props: MyProps) {
        super(props);

        this.state = {
            itemMinute: props.itemMinute,
            itemDescription: props.itemDescription,
            animation: new Animated.Value(0)
        };

      
    }


    componentDidUpdate() {
        if(this.props.isHighlight){
            this.state.animation.setValue(0); // always start from zero
            Animated.timing(this.state.animation, {
                toValue: 150,
                duration: 2000
            }).start();
        }
    }


    render() {
        let lineSource = require('../assets/vert_line.png');

        // hide the line if we are the last item
        let lineStyle = this.props.isLast ? styles.noLine : styles.image;

        // do some color range interpolation for our highlight
        let interpolateColor = this.state.animation.interpolate({
            inputRange: [0, 150],
            outputRange: ['rgb(255,202,40)', 'rgb(236,239,241)']
        })
        let animatedStyle = {backgroundColor: interpolateColor};

        // if highlight then apply interpolation
        let bodyStyle = this.props.isHighlight ? [styles.body, animatedStyle] : styles.body;
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
                <Animated.View style={bodyStyle}>
                    <Text style={styles.text}>{this.state.itemDescription}</Text>
                </Animated.View>
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
    highlight: {
        backgroundColor: "#FFECB3",
    },
    text: {
        fontSize: 16
    }
});