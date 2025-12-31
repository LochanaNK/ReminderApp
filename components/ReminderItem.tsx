import {View,Text,TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {Reminder} from '../types/Reminder';

interface Props{
    item:Reminder;
    onToggle: (id:string)=>void;
}

export default function ReminderItem({item,onToggle}:Props){
    return(
        <View className="flex-row items-center bg-white p-4 mb-3 rounded-2xl border border-slate-100 shadow-sm">
            <TouchableOpacity onPress={()=>onToggle(item.id)}>
                <Ionicons
                name={item.completed ? "checkbox" : "square-outline"}
                size={24}
                color={item.completed ? "#10b981" : "#94a3b8"}
                />
            </TouchableOpacity>
            <Text className={`ml-3 text-lg flex-1 ${item.completed ? 'line-through text-slate-400' :'text-slate-800'}`}>
                {item.text}
            </Text>

        </View>
    );
}