import React,{useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  FlatList,
} from 'react-native';
import { Reminder } from '../../types/Reminder';
import ReminderItem from '@/components/ReminderItem';
import ReminderInput from '@/components/ReminderInput';

export default function HomeScreen() {
  const[reminders ,setReminders] = useState<Reminder[]>([]);

  const addReminder = (text:string)=>{
    const newReminder: Reminder = {id:Date.now().toString(), text, completed:false};
    setReminders([newReminder, ...reminders]);
  }

  const toggleComplete = (id:string)=>{
    setReminders(prev=> prev.map(item =>
      item.id ===id ? {...item, completed: !item.completed}:item
    ));
  };
  return (
    <View className="flex-1 bg-slate-50">
      <FlatList
        data={reminders}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 16, paddingBottom: 120 }}
        renderItem={({ item }) => (
          <ReminderItem item={item} onToggle={toggleComplete} />
        )}
        ListEmptyComponent={<Text className="text-center text-slate-400 mt-20">No tasks!</Text>}
      />
      
      <ReminderInput onAdd={addReminder} />
    </View>
  );
}

