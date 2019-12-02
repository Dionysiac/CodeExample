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
            expanded: true, // start open
        };
    }

    toggleExpanded() {
        // do nothing yet
    }

    render() {
        // icon is up unless down :)
        let icon = this.icons['up'];
        if (this.state.expanded) {
            icon = this.icons['down'];
        }

        return (
            <View style={styles.container} >
                <View style={styles.titleContainer} >
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

                <View style={styles.body} >
                    {this.props.children}
                </View>
            </View>
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