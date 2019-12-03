import * as React from 'react';
import { StyleSheet, Text, View, ScrollView, SectionList } from 'react-native';

import ExpandingPanel from './expanding-panel';
import CommentaryItem from './commentary-item';
import KeyMoment from './key-moment';

type CommentaryDataItem = {
    key: string;
    time: number;
    description: string;
    isKeyMoment: boolean;
    keyMomentTitle: string;
}

type MyProps = {
    commentaryData: CommentaryDataItem[];
}

type MyState = {
    highlightIndex: number;
}

class LiveCommentary extends React.Component<MyProps, MyState> {
    // declare type for self.commentaryList
    commentaryList: SectionList<CommentaryDataItem>;

    constructor(props: MyProps) {
        super(props);

        this.state = {
            highlightIndex: -1,
        };
    };

    _higlightAndScroll(index: number) {
        this.setState({
            highlightIndex: index
        });
        this.commentaryList.scrollToLocation({ itemIndex: index, sectionIndex: 0, viewPosition: 0.5 });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.mainView}>
                    <SectionList
                        ref={(ref: any) => (this.commentaryList = ref)}
                        sections={[{ title: "Live Commentary", data: this.props.commentaryData }]}
                        renderItem={({ item, index }) =>
                            <CommentaryItem
                                itemMinute={item.time}
                                itemDescription={item.description}
                                isLast={index === this.props.commentaryData.length - 1}
                                isHighlight={index === this.state.highlightIndex}
                            />}
                        renderSectionHeader={({ section: { title } }) => (
                            <Text style={styles.header}>{title}</Text>
                        )} 
                        extraData={this.state}
                    />
                </View>
                <View style={styles.bottomDrawer}>
                    <ExpandingPanel title="Key Moments">
                        <ScrollView style={{ height: 150 }}>
                            {this.props.commentaryData.map((item, index) => {
                                if (item.isKeyMoment === true) {
                                    return (<KeyMoment key={item.key} itemMinute={item.time} itemDescription={item.keyMomentTitle} onPress={() => { this._higlightAndScroll(index) }} />);
                                }
                            })}
                        </ScrollView>
                    </ExpandingPanel>
                </View>
            </View>
        );
    }
}

export default LiveCommentary;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#CFD8DC"
    },
    mainView: {
        flex: 1,
        flexGrow: 5,
        backgroundColor: "#CFD8DC",
        justifyContent: "center",
        marginTop: 60
    },
    bottomDrawer: {
        flex: -1,
        backgroundColor: "#CFD8DC",
        justifyContent: "flex-end",
        alignItems: "stretch"
    },
    header: {
        fontSize: 32,
        textAlign: "center",
        backgroundColor: "#546E7A",
        color: "#fff",
        padding: 20,
        marginBottom: 10
    },
});