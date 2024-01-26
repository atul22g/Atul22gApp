import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import axios from 'axios';
import { Title, Card, ActivityIndicator, MD2Colors } from 'react-native-paper';
// css
import style from '../styles/style'
import { handlePress } from './allFunc';

export default function Projects(props) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    // Fetch Api Data
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://atugatranapi.pages.dev/' + props.API);
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <View style={{ backgroundColor: props.bg, paddingBottom: 15 }}>
            <Title style={style.projectTitle}>{props.title}</Title>
            {loading ? (
                <ActivityIndicator style={style.loading} animating={true} color={MD2Colors.blue800} />
            ) : (
                data.map((item, index) => (
                    <Card key={index} style={style.card}>

                        <Card.Cover source={   { uri: item.img }} style={style.cardImg} />
                        <Card.Content>
                            {/* Card Title */}
                            <Title style={style.cardTitle}>{item.title}</Title>
                            {/* Links */}
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10, gap: 100 }}>
                                <TouchableOpacity onPress={() => handlePress(item.demo)}>
                                    <Text style={style.cardLink}>{props.demo}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => handlePress(item.src)}>
                                    <Text style={style.cardLink}>Source Code</Text>
                                </TouchableOpacity>
                            </View>
                        </Card.Content>
                    </Card>
                ))
            )}
        </View>
    )
}