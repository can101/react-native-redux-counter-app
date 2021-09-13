import React from 'react'
import { StyleSheet, Text, TouchableOpacity, SafeAreaView, StatusBar, View } from 'react-native'
import { connect } from 'react-redux';
import { increase, decrease } from '../../redux/Actions/counterActions'

const Home = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.containerBtn}>
        <TouchableOpacity activeOpacity={.8} onPress={()=>props.increase()} touchSoundDisabled={true} style={styles.btn}>
          <Text style={styles.btnTxt}>+</Text>
        </TouchableOpacity>
        <Text style={styles.count}>{props.count}</Text>
        <TouchableOpacity activeOpacity={.8} onPress={() => props.decrease()} touchSoundDisabled={true} style={styles.btn}>
          <Text style={styles.btnTxt}>-</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const mapStateToProps = state => {
  return {
    count: state.counterReducer
  }
}

export default connect(mapStateToProps, {decrease,increase})(Home);

const styles = StyleSheet.create({
  container:{
    alignItems:"center",
    justifyContent:"center",
    flex:1,
    backgroundColor:"purple"
  },
  count: {
    textAlign: "center",
    fontWeight: "800",
    fontSize: 40,
    color:"#fff",
    marginHorizontal:40,
    paddingTop:13
  },
  containerBtn: {
    flexDirection: "row",
    justifyContent: "center",
    padding:6
  },
  btn: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 8,
    marginHorizontal: 5
  },
  btnTxt: {
    color: "purple",
    fontSize: 28,
    fontWeight: "bold",
    letterSpacing: 1
  }
})
