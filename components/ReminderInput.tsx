import React,{useState} from 'react';
import {View,TextInput,TouchableOpacity,KeyboardAvoidingView,Platform} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

interface Props{
    onAdd:(text:string)=>void;
}

export default function ReminderInput({onAdd}:Props){
    const [text, setText] = useState('');

    const handleAdd = ()=>{
        if(text.trim()){
            onAdd(text);
            setText('');
        }
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding':'height'}
            keyboardVerticalOffset={110}
            className='absolute bottom w-full p-4 bg-background border-t border-slate-200'
        >
            <View className='flex-row items-center space-x-3'>
                <TextInput
                    className='flex-1 bg-slate-100 p-4 mr-2 rounded-2xl text-lg'
                    placeholder='Add a new reminder...'
                    value={text}
                    onChangeText={setText}
                    onSubmitEditing={handleAdd}
                />
                <TouchableOpacity onPress={handleAdd} className='bg-button_bg p-3 rounded-2xl'>
                    <Ionicons name="add" size={24} color="background"/>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}