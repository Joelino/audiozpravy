import * as React from "react";
import { useState } from "react";
import { View, Dimensions, Text } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import Color from "../../shared/colors";
import FriendsNavList from "./friends-list";

const renderTabBar = (props) => {
  return (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: "white" }}
      style={{
        backgroundColor: "white",
        shadowColor: "white",
      }}
      tabStyle={{ width: "auto" }}
      renderLabel={({ route, focused }) => (
        <View
          style={{
            borderTopWidth: focused ? 2 : null,
            borderTopColor: focused ? Color["black-100"] : null,
          }}
        >
          <Text
            style={{
              color: focused ? Color["black-100"] : Color["black-64"],
              fontFamily: "RobotoBold",
              fontSize: 16,
              marginRight: 4,
              paddingTop: 5,
            }}
          >
            {route.title}
          </Text>
        </View>
      )}
    />
  );
};

const initialLayout = { width: Dimensions.get("window").width };

const renderScene = SceneMap({
  selection: () => <FriendsNavList topic="Výběr" />,
  listening: () => <FriendsNavList topic="Co poslouchají" />,
  favourites: () => <FriendsNavList topic="Oblíbené kategorie" />,
});

export default function TabViewFriends() {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "selection", title: "Výběr" },
    { key: "listening", title: "Co poslouchají" },
    { key: "favourites", title: "Oblíbené kategorie" },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      renderTabBar={renderTabBar}
      style={{
        backgroundColor: "white",
        marginTop: 72,
        width: "95%",
        alignSelf: "center",
      }}
    />
  );
}