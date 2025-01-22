import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

/*  برشلونة5-2ريال مدريد */

const Games = () => {
  return (
    <View style={styles.container}>

      <Text style={styles.myText} >انتهت 12/1/2025</Text>
      <Text style={styles.myText}>برشلونة 5-2 ريال مدريد</Text>
      <Text style={styles.myText}>انتهت 12/1/2025</Text>
      <Text style={styles.myText}>مانشستر يونايتد1-1ارسنال</Text>
      <Text style={styles.myText}>فاز اليونايتد بركلات الجزاء 3-1</Text>
      <Text style={styles.myText}>اليوم</Text>
      <Text style={styles.myText}>ليفربول 22:00 نوتنجهام فوريست</Text>
      <Text style={styles.myText}>مانشستر ستي 21:30 برينتفورد</Text>

    </View>
  )
}

export default Games

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  myText: {
    fontSize: 30,
  },
})