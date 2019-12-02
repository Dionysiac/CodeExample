import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import ExpandingPanel from './components/expanding-panel';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.mainView}>
        <ScrollView>
          <Text>"A thing happened at this time. It was REALLY GOOD"</Text>
          <Text>"A thing happened at this time. It was REALLY GOOD"</Text>
          <Text>"A thing happened at this time. It was REALLY GOOD"</Text>
          <Text>"A thing happened at this time. It was REALLY GOOD"</Text>
          <Text>"A thing happened at this time. It was REALLY GOOD"</Text>
          <Text>"A thing happened at this time. It was REALLY GOOD"</Text>
        </ScrollView>
      </View>
      <View style={styles.bottomDrawer}>
        <ExpandingPanel title="Key Moments">
          <ScrollView>
            <Text>Key Moment</Text>
            <Text>Key Moment</Text>
            <Text>Key Moment</Text>
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
    flex: 1,
    backgroundColor: "#ffa",
    justifyContent: "flex-end",
    alignItems: "stretch"
  }
});

