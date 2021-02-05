import React from 'react'
import {
    Image,
    Text,
    View,
    StyleSheet
} from 'react-native'
import SkiiImage from '../assets/ski.png' 

export default function CategoryListItem(props) {
    return <View style={styles.container}>
        <Text style={styles.title}>Category List Item</Text>
        <Image style={styles.categoryImage} source={SkiiImage} />
    </View>
}

const styles = StyleSheet.create({
    categoryImage: {
        width: 64,
        height: 64
    },
    container: {
        alignItems: 'center',
        padding: 16,
        borderRadius: 4,
        backgroundColor: '#FFF',
        shadowColor: '#000',
        shadowOpacity: 0.5,
        shadowRadius: 10,
        shadowOffset: {width: 0, height: 0},
        elevation: 14,
        marginBottom: 16
    },
    title: {
        textTransform: 'uppercase',
        marginBottom: 8,
        fontWeight: '700'
    }
})