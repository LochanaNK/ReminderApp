import {View,Text,TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {Reminder} from '../types/Reminder';

interface Props{
    item:Reminder;
    onToggle: (id:string)=>void;
    onDelete: (id:string)=>void;
}

export default function ReminderItem({item,onToggle,onDelete}:Props){
    return(
        <View className="flex-row items-center bg-background p-4 mb-3 rounded-2xl border border-button_bg shadow-sm">
            <TouchableOpacity onPress={()=>onToggle(item.id)}>
                <Ionicons
                name={item.completed ? "checkbox" : "square-outline"}
                size={24}
                color={item.completed ? "#fde047" : "#fbbf24"}
                />
            </TouchableOpacity>
            <Text className={`ml-3 text-lg flex-1 ${item.completed ? 'line-through text-white' :'text-title'}`}>
                {item.text}
            </Text>
            <TouchableOpacity
                onPress={()=>onDelete(item.id)}
                className='ml-2 p-1'
            >
                <Ionicons name="trash-outline" size={20} color="#fbbf24"/>
            </TouchableOpacity>

        </View>
    );
}