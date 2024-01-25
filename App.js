import React from 'react'
import { ScrollView, Text } from 'react-native'
import { Paragraph } from 'react-native-paper';
// css
import style from './src/styles/style'
// Components
import Projects from './src/components/Projects'

export default function App() {
  return (
    <ScrollView style={{backgroundColor: "white"}}>
      {/* Heading */}
      <Text style={style.heading}>Atul22g</Text>
      {/* SubHeading */}
      <Text style={style.subheading}>This is All My Things</Text>
      {/* Paragrap */}
      <Paragraph style={style.paragrap}>Most Of The Projects I Made In My Fun Times.</Paragraph>
      <Paragraph style={[style.paragrap, style.spacebottom]}>I you like these projects give it a Star on Github</Paragraph>
      {/* Projects */}
      <Projects API="Projects/index.json" bg="#f2f5fd" title="Projects"/>
      {/* Mini - Projects */}
      <Projects API="Mini-Projects/index.json" bg="#ebebeb" title="Mini - Projects"/>
      {/* Backend */}
      <Projects API="backend/index.json" bg="#f2f5fd" title="Backend"/>
      {/* Libaries */}
      <Projects API="Js_Libaries/index.json" bg="#cdd5cd" title="Libaries"/>
      {/* Repositories */}
      <Projects API="Repositories/index.json" bg="#e8e8e8" title="Repositories"/>
    </ScrollView>
  )
}