import { Tabs } from 'expo-router';

export default function TabLayout() {

  return (
    <Tabs
    screenOptions={{
      tabBarStyle:{
        backgroundColor:'#1c1917',
        borderTopWidth:0,
      },
      headerStyle:{
        backgroundColor:'#1c1917',
        borderBottomWidth:2,
        borderBottomColor:'#292524'
        
      },
      tabBarActiveTintColor:'#fb923c',
      tabBarInactiveTintColor:'#ffff',
      headerTintColor:'#fb923c',
      headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 24,
    },
    }}>
      <Tabs.Screen
      name="index"
      options={{
        title: 'My Reminders',
      }}
      />
      <Tabs.Screen
      name="addReminder"
      options={{
        title: 'Add Reminder',
      }}
      />
    </Tabs>
  );
}
