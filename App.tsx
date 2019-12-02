import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import ExpandingPanel from './components/expanding-panel';
import CommentaryItem from './components/commentary-item'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.mainView}>
        <ScrollView>
          <CommentaryItem itemDescription={"A thing happened at this time. It was REALLY GOOD A thing happened at this time. It was REALLY GOOD A thing happened at this time. It was REALLY GOOD A thing happened at this time. It was REALLY GOOD"} itemMinute={12} />
          <CommentaryItem itemDescription={"A thing happened at this time. It was REALLY GOOD"} itemMinute={12} />
          <CommentaryItem itemDescription={"A thing happened at this time. It was REALLY GOOD"} itemMinute={12} />
          <CommentaryItem itemDescription={"A thing happened at this time. It was REALLY GOOD"} itemMinute={12} />
          <CommentaryItem itemDescription={"A thing happened at this time. It was REALLY GOOD"} itemMinute={12} />
          <CommentaryItem itemDescription={"A thing happened at this time. It was REALLY GOOD"} itemMinute={12} />
          <CommentaryItem itemDescription={"A thing happened at this time. It was REALLY GOOD"} itemMinute={12} />
          <CommentaryItem itemDescription={"A thing happened at this time. It was REALLY GOOD"} itemMinute={12} />
          <CommentaryItem itemDescription={"A thing happened at this time. It was REALLY GOOD"} itemMinute={12} />
          <CommentaryItem itemDescription={"A thing happened at this time. It was REALLY GOOD"} itemMinute={12} />
          <CommentaryItem itemDescription={"A thing happened at this time. It was REALLY GOOD"} itemMinute={12} />
          <CommentaryItem itemDescription={"A thing happened at this time. It was REALLY GOOD"} itemMinute={12} />
          <CommentaryItem itemDescription={"A thing happened at this time. It was REALLY GOOD"} itemMinute={12} />
        </ScrollView>
      </View>
      <View style={styles.bottomDrawer}>
        <ExpandingPanel title="Key Moments">
          <ScrollView>
            <View style={styles.keyMoment}>
              <Text style={styles.keyMomentText}>15</Text>
              <Text style={styles.keyMomentText}>Key Moment</Text>
            </View>

            <View style={styles.keyMoment}>
              <Text style={styles.keyMomentText}>15</Text>
              <Text style={styles.keyMomentText}>Key Moment</Text>
            </View>

            <View style={styles.keyMoment}>
              <Text style={styles.keyMomentText}>15</Text>
              <Text style={styles.keyMomentText}>Key Moment</Text>
            </View>

            <View style={styles.keyMoment}>
              <Text style={styles.keyMomentText}>15</Text>
              <Text style={styles.keyMomentText}>Key Moment</Text>
            </View>

            <View style={styles.keyMoment}>
              <Text style={styles.keyMomentText}>15</Text>
              <Text style={styles.keyMomentText}>Key Moment</Text>
            </View>

            <View style={styles.keyMoment}>
              <Text style={styles.keyMomentText}>15</Text>
              <Text style={styles.keyMomentText}>Key Moment</Text>
            </View>

            <View style={styles.keyMoment}>
              <Text style={styles.keyMomentText}>15</Text>
              <Text style={styles.keyMomentText}>Key Moment</Text>
            </View>

          </ScrollView>
        </ExpandingPanel>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  mainView: {
    flex: 1,
    flexGrow: 5,
    backgroundColor: "#fff",
    justifyContent: "center",
    marginTop: 60
  },
  bottomDrawer: {
    flex: -1,
    backgroundColor: "#ffa",
    justifyContent: "flex-end",
    alignItems: "stretch"
  },
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
  }
});

