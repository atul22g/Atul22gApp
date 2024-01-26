import React from 'react'
import { ScrollView, Text, View, TouchableOpacity } from 'react-native'
import { Paragraph, Avatar } from 'react-native-paper';
import style from '../styles/style';
import Projects from './Projects';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { handlePress } from './allFunc';

export default function Main() {
    return (
        <ScrollView style={{ backgroundColor: "white" }}>
            {/* Avatar */}
            <Avatar.Image style={style.avatar} size={100} source={require('../image/avtar.png')} />
            {/* Heading */}
            <Text style={style.heading}>Atul22g</Text>
            {/* Social Media */}
            <Text style={style.sociamediaTitle}>Social Media</Text>
            <View style={style.sociamedia}>
                {/* Github */}
                <TouchableOpacity onPress={() => handlePress("https://github.com/Atugatran")}><FontAwesome6 style={style.sociamediaIcon1} size={30} name={'github'} /></TouchableOpacity>
                {/* Instagram */}
                <TouchableOpacity onPress={() => handlePress("https://www.instagram.com/atul857086/")}><FontAwesome6 style={style.sociamediaIcon2} size={30} name={'instagram'} /></TouchableOpacity>
                {/* Mail */}
                <TouchableOpacity onPress={() => handlePress("https://www.facebook.com/Atul857086")}><FontAwesome6 style={style.sociamediaIcon3} size={30} name={'facebook'}/></TouchableOpacity>
            </View>
            {/* SubHeading */}
            <Text style={style.subheading}>This is All My Things</Text>
            {/* Paragrap */}
            <Paragraph style={style.paragrap}>Most Of The Projects I Made In My Fun Times.</Paragraph>
            <Paragraph style={[style.paragrap, style.spacebottom]}>I you like these projects give it a Star on Github</Paragraph>
            {/* Projects */}
            <Projects API="Projects/index.json" bg="#f2f5fd" title="Projects" demo="Live"/>
            {/* Appliction */}
            <Projects API="App/index.json" bg="#e0e0e0" title="Application" demo="Download"/>
            {/* Mini - Projects */}
            <Projects API="Mini-Projects/index.json" bg="#ebebeb" title="Mini - Projects" demo="Live"/>
            {/* Backend */}
            <Projects API="backend/index.json" bg="#f2f5fd" title="Backend" demo="Live"/>
            {/* Libaries */}
            <Projects API="Js_Libaries/index.json" bg="#cdd5cd" title="Libaries" demo="Live"/>
            {/* Repositories */}
            <Projects API="Repositories/index.json" bg="#e8e8e8" title="Repositories" demo="Live"/>
        </ScrollView>
    )
}