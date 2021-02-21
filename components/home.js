import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useQuery } from '@apollo/react-hooks'
import { USER_QUERY } from '../graphQL/queries'

export default function Home(){
    const { loading, data } = useQuery(USER_QUERY)
    
    return(
        
        <View style = {[styles.container]}>
            {!loading && data && data.user && (
                <Text> {'Hi, ' + data.user[1].username + '!'} </Text>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15
    }
})