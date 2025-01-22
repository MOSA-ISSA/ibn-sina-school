import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import getImages from '../images/_images'

const size = Dimensions.get('window');


const Rtx = () => {
    return (
        <View style={styles.container}>
            <View style={styles.search}>
                <Text>search</Text>
                <Ionicons name='search-outline' color={'lightgray'} size={30} />
            </View>
            <View style={styles.card}>
                <View style={styles.info}>
                    <Text style={styles.txt}>RTX 4080</Text>
                    <Text style={styles.txt}>999$</Text>
                </View>
                <View style={styles.imag}>
                    <Image source={getImages.x4080()} style={styles.image} />
                </View>
            </View>
            <View style={styles.card}>
                <View style={styles.info}>
                    <Text style={styles.txt}>RTX 4070</Text>
                    <Text style={styles.txt}>849$</Text>
                </View>
                <View style={styles.imag}>
                    <Image source={getImages.x4071()} style={styles.image} />
                </View>
            </View>
            <View style={styles.card}>
                <View style={styles.info}>
                    <Text style={styles.txt}>RTX 4070</Text>
                    <Text style={styles.txt}>549$</Text>
                </View>
                <View style={styles.imag}>
                    <Image source={getImages.x4070()} style={styles.image} />
                </View>
            </View>
            <View style={styles.card}>
                <View style={styles.info}>
                    <Text style={styles.txt}>RTX 4060</Text>
                    <Text style={styles.txt}>549$</Text>
                </View>
                <View style={styles.imag}>
                    <Image source={getImages.x4070()} style={styles.image} />
                </View>
            </View>
        </View >
    )
}

export default Rtx

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: 'center',
        justifyContent: 'center',
        height: size.height
    },
    search: {
        borderWidth: 5,
        borderRadius: 10,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        width: "90%",
        alignSelf: "center",
        padding: 5,
        borderColor: "lightgray"
    },

    card: {
        borderWidth: 5,
        borderColor: "lightgray",
        borderRadius: 10,
        // backgroundColor: "lightgray",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        height: size.height * 0.16,
        width: "90%",
        alignSelf: "center",

        margin: 20
    },

    info: {
        width: "60%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        borderRightWidth: 5,
        borderColor: "lightgray",
    },


    imag: {
        width: "40%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        // borderWidth: 1,

    },
    image: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        // borderWidth: 1,
        resizeMode: 'contain'

    },
    txt: {
        fontSize: 30,
        color: "black"
    }

})

