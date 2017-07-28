import {StyleSheet} from 'react-native'
export default StyleSheet.create({ containerCol: {
        marginTop: 0,
        flex: 1,
        flexDirection: 'column',   
    },
    containerRow: {
        marginTop: 0,
        flex: 1,
        flexDirection: 'row',
    },
    _head: {
        flex: 0.5,
        backgroundColor:'#c70000',
        flexDirection: 'row'
    },
    _console: {
        flex: 0.35,
        backgroundColor:'#c99999',
        flexDirection: 'row',
    },
    _body: {
        flex: 5,
        backgroundColor:'#c55555',
        flexDirection: 'row',
    },
        _console1: {
        flex: 3,
        backgroundColor:'#c99999',
        flexDirection: 'row',
    },
        _console2: {
        flex: 1.25,
        backgroundColor:'#c55555',
        flexDirection: 'row',
    },
        _console3: {
        flex: 1.25,
        backgroundColor:'#c11111',
        flexDirection: 'row',
    },
    xtable:{
        borderWidth:1,
        textAlign:'center',
        backgroundColor:'pink',
        padding:10
    }})