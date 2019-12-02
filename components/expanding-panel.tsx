import * as React from 'react';
import {
    TouchableHighlight,
    StyleSheet,
    Text,
    View,
    Image,
    Animated
} from 'react-native';

type MyProps = {
    title: string;
}

type MyState = {
    title: string;
    expanded: boolean;
    minHeight: number;
    maxHeight: number;
    animation: Animated.Value;
}

class ExpandingPanel extends React.Component<MyProps, MyState> {
    icons: object;

    constructor(props) {
        super(props);

        this.icons = {
            'up': require('../assets/arrow_up.png'),
            'down': require('../assets/arrow_down.png')
        };

        this.state = {
            title: props.title,
            expanded: false, // start closed
            minHeight: 65,
            maxHeight: 65,
            animation: new Animated.Value(65), // set starting heights to the min height
        };
    }

    _setMaxHeight(event) {
        this.setState({
            maxHeight: event.nativeEvent.layout.height
        });
    }

    _setMinHeight(event) {
        this.setState({
            minHeight: event.nativeEvent.layout.height
        });
    }

    toggleExpanded() {
        // start and end values flip depending on expanded state
        /* 
        end value for open animations has extra height added as the calculated value 
        from the onLayout seems to fall short. Then when calculating the other way it causes a jump in
        height befor shrinking. Have looked in debugger and can see that the values passed in the onLayout 
        event are different depending on direction. 
        I think it might be something to do with the child scroll view not reporting required size correctly when shrunk, but thats 
        just a guess really. 
        Quick fix is to add some extra height on the way up.
        */
        let startValue = this.state.expanded ? this.state.maxHeight  : this.state.minHeight,
            endValue = this.state.expanded ? this.state.minHeight : this.state.maxHeight + 200; 

        this.setState({
            expanded: !this.state.expanded  //reverse the state
        });

        // start the animation
        this.state.animation.setValue(startValue);
        Animated.spring(     
            this.state.animation,
            {
                toValue: endValue
            }
        ).start(); 
    }

    render() {
        // icon is up unless down :)
        let icon = this.icons['up'];
        if (this.state.expanded) {
            icon = this.icons['down'];
        }

        return (
            <Animated.View style={[styles.container, {height: this.state.animation}]} >
                <View style={styles.titleContainer} onLayout={this._setMinHeight.bind(this)}>
                    <Text style={styles.title}>{this.state.title}</Text>
                    <TouchableHighlight
                        onPress={this.toggleExpanded.bind(this)}
                        underlayColor="#f1f1f1">
                        <Image
                            style={styles.buttonImage}
                            source={icon}
                        ></Image>
                    </TouchableHighlight>
                </View>

                <View style={styles.body} onLayout={this._setMaxHeight.bind(this)}>
                    {this.props.children}
                </View>
            </Animated.View>
        );
    }
};

export default ExpandingPanel;

var styles = StyleSheet.create({
    container: {
        flex: -1,
        backgroundColor: "#fff",
        overflow: "hidden",
        marginTop: 5,
        marginBottom: 10,
    },
    titleContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 10,
        paddingRight: 10
    },
    title: {
        flex: 1,
        padding: 20,
        paddingLeft: 50, // add extra to center text
        color: "#2a2f43",
        backgroundColor: "#f1f1f1",
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center",
        alignSelf: "stretch"
    },
    buttonImage: {
        width: 30,
        height: 30
    },
    body: {
        padding: 10,
        paddingTop: 0,
    }
});