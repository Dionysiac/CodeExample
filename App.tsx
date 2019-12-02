import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import ExpandingPanel from './components/expanding-panel';
import CommentaryItem from './components/commentary-item'

let dummyData = [
  {
    id: "1",
    time: 46,
    description: "West Ham 1-1 Man Utd West Ham - in their claret and blue home kit - get the second half started. Will it be as dramatic as the first few minutes of the first half?",
    isKeyMoment: true,
    keyMomentTitle: "Second Half"
  },
  {
    id: "2",
    time: 49,
    description: "West Ham's Alisha Lehmann is hurt so on comes Canada's Adriana Leon for the hosts.",
    isKeyMoment: false,
    keyMomentTitle: null  
  },
  {
    id: "3",
    time: 54,
    description: "Leah Galton does well down the left for the visitors and her cross picks out Jackie Groenen in the middle, but the Netherlands midfielder scuffs well wide. That was a big chance.",
    isKeyMoment: true,
    keyMomentTitle: "Close!"  
  },
  {
    id: "4",
    time: 58,
    description: "Man Utd youngster Lauren James is brought on, as Scotland striker Jane Ross comes off.",
    isKeyMoment: true,
    keyMomentTitle: "Substitution"  
  },
  {
    id: "5",
    time: 61,
    description: "Man Utd are bidding for an eighth win in their past nine games in all competitions, but West Ham are on the hunt for a second goal too, and Martha Thomas sees a header blocked from close range.",
    isKeyMoment: false,
    keyMomentTitle: null  
  },
  {
    id: "6",
    time: 65,
    description: "The songs in the stands have been almost non-stop throughout this game and the atmosphere is intensifying again as both sets of fans know their teams need a lift, as we enter the final 25 minutes.",
    isKeyMoment: false,
    keyMomentTitle: null  
  },
  {
    id: "7",
    time: 70,
    description: "With 20 minutes to go, West Ham defender Gilly Flaherty concedes a free-kick right on the edge of the box, bringing down Leah Galton. This'll be dangerous.",
    isKeyMoment: false,
    keyMomentTitle: null  
  },
  {
    id: "8",
    time: 74,
    description: "Nothing comes of that free-kick for Man Utd, but they look slightly the more likely to grab a late winner as things stand.",
    isKeyMoment: false,
    keyMomentTitle: null  
  },
  {
    id: "9",
    time: 76,
    description: "Challenging for a header, Gilly Flaherty and Leah Galton have clashed heads, and that looks painful. They're both down.",
    isKeyMoment: true,
    keyMomentTitle: "Ouch!"  
  },
  {
    id: "10",
    time: 78,
    description: "The Hammers' Gilly Flaherty looks to be in a lot of pain, grimacing, but she's determined to continue.",
    isKeyMoment: false,
    keyMomentTitle: null  
  },
  {
    id: "11",
    time: 80,
    description: "Substitute Lauren James only needs one chance - she may just have won it! \nThe 18-year-old breaks clear down the right and, inside the area, has the composure to power the ball in to the bottom left-hand-corner to restore the visitors' lead.",
    isKeyMoment: true,
    keyMomentTitle: "GOAL: West Ham 1-2 Man Utd"  
  },
  {
    id: "12",
    time: 83,
    description: "Katharina Baunach's inswinging, left-footed free-kick from the right goes all the way through, bouncing past everybody waiting in the middle, and the hosts are level.",
    isKeyMoment: true,
    keyMomentTitle: "GOAL: West Ham 2-2 Man Utd"  
  },
  {
    id: "13",
    time: 85,
    description: "We saw two goals in the first three minutes of this game and now we've seen two in the space of four minutes towards the end of it.",
    isKeyMoment: false,
    keyMomentTitle: null  
  },
  {
    id: "14",
    time: 89,
    description: "West Ham's Leanne Kiernan is shown a second yellow for an off-the-ball scuffle and the Hammers will finish this game with 10 players.",
    isKeyMoment: true,
    keyMomentTitle: "RED CARD (West Ham)"  
  },
  {
    id: "15",
    time: 90,
    description: "But from the set-piece, West Ham take a dramatic late lead - it's Katharina Baunach direct from the free-kick for the second time in the final seven minutes. \nThis time she's lined up centrally, in front of goal, inside the D... It's up, over the wall and in to the bottom corner.",
    isKeyMoment: true,
    keyMomentTitle: "GOAL: West Ham 3-2 Man Utd"  
  },
  {
    id: "16",
    time: 92,
    description: "West Ham were on the wrong end of a 3-2 scoreline last time out, losing after more late drama against Reading. This time the points look set to head their way, which would end the Hammers' three-game losing run in the league.",
    isKeyMoment: false,
    keyMomentTitle: null  
  },
  {
    id: "17",
    time: 92,
    description: "It's all over. It's a win that'll give West Ham a big lift. What late drama we've seen!",
    isKeyMoment: true,
    keyMomentTitle: "FULL-TIME - West Ham 3-2 Man Utd"  
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.mainView}>
        <ScrollView>
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

