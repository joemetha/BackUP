import React, {Component} from 'react'
import {View, Text,StyleSheet} from 'react-native'
//import Header from './Header.js'

const styles = StyleSheet.create({
    containerCol: {
        marginTop: 0,
        flex: 1,
        flexDirection: 'column',
    },
    containerRow: {
        marginTop: 0,
        flex: 1,
        flexDirection: 'row',
    },
    one: {
        flex: 8,
        borderWidth: 1,
        borderBottomWidth:0,
        flexDirection: 'row',
    },
    oneTwo: {
        flex: 0.75,
        borderWidth: 1,
        flexDirection: 'row',
    },
    oneThree: {
        flex: 0.5,
        borderWidth: 1,
        flexDirection: 'row',
    },
    Two: {
        flex: 7,
        borderWidth: 1,
        flexDirection: 'row',
        backgroundColor:'#c70000'
    },
    TwoOne: {
        flex: 1.5,
        borderWidth: 1,
        flexDirection: 'row',
    },
    TwoTwo: {
        flex: 2,
        borderWidth: 1,
        flexDirection: 'row',
    },
        ThreeOne: {
        flex: 2,
        borderWidth: 1,
        flexDirection: 'row',
    },
        ThreeTwo: {
        flex: 1.5,
        borderWidth: 1,
        flexDirection: 'row',
    },
            ThreeThree: {
        flex: 1,
        borderWidth: 1,
        flexDirection: 'row',
    },
            ThreeFour: {
        flex: 1.5,
        borderWidth: 1,
        flexDirection: 'row',
        borderBottomWidth:0,
        backgroundColor: '#f4b600'
    },
        FourOne: {
        flex: 2,
        borderWidth: 1,
        flexDirection: 'row',
    },
        FourTwo: {
        flex: 1.5,
        borderWidth: 1,
        flexDirection: 'row',
        backgroundColor: '#f4b600'
    },
        FourThree: {
        flex: 1,
        borderWidth: 1,
        flexDirection: 'row',
    },
        FourFour: {
        flex: 1.5,
        borderWidth: 1,
        flexDirection: 'row',
        backgroundColor:'black'
    },
    FiveOne: {
        flex: 7,
        borderWidth: 1,
        flexDirection: 'row',
        borderBottomWidth:0,
        backgroundColor:'#c70000'
    },
    FiveTwo: {
        flex: 1.5,
        borderWidth: 1,
        borderBottomWidth:0,
        flexDirection: 'row',
    },
    FiveThree: {
        flex: 2,
        borderWidth: 1,
        borderBottomWidth:0,
        flexDirection: 'row',
    },
       FiveOneOne: {
        flex: 7,
        borderWidth: 1,
        flexDirection: 'row'
    }
}
);

class Root extends Component{
    render(){
        return(
            <View style={styles.containerCol}>
                <View style={styles.one}>
                    <View style={styles.containerRow}>
                        <View style={styles.Two}>
                        </View>
                        <View style={styles.TwoOne}>
                            <View style={styles.containerCol}>
                                <View style={styles.ThreeOne}>
                                </View>
                                <View style={styles.ThreeTwo}>
                                </View>
                                <View style={styles.ThreeThree}>
                                </View>
                                <View style={styles.ThreeFour}>
                                </View>
                            </View>
                        </View>
                        <View style={styles.TwoTwo}>
                            <View style={styles.containerCol}>
                                <View style={styles.FourOne}>
                                </View>
                                <View style={styles.FourTwo}>
                                </View>
                                <View style={styles.FourThree}>
                                </View>
                                <View style={styles.FourFour}>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.oneTwo}>
                    <View style={styles.containerRow}>
                        <View style={styles.FiveOne}>
                        </View>
                        <View style={styles.FiveTwo}>
                        </View>
                        <View style={styles.FiveThree}>
                        </View>
                    </View>
                </View>
                 <View style={styles.oneThree}>
                     <View style={styles.containerRow}>
                        <View style={styles.FiveOneOne}>
                        </View>
                        <View style={styles.FiveTwo}>
                        </View>
                        <View style={styles.FiveThree}>
                        </View>
                    </View>
                </View>
                
            </View>
        )
    }
}

export default Root