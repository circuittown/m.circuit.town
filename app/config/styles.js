import {
    StyleSheet
} from 'react-native'; 

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#9e9280',
        flexDirection: 'column', 
        height: '100%'
    },
    masthead: {
        color: 'rgb(86, 77, 66)', 
        fontFamily: 'Helvetica',
        fontSize: 24,
        fontWeight: '700',
        textShadowColor: 'rgb(68, 61, 51) 2px 2px 0px', 
        textShadowOffset: {width:2,height:2},
        padding:20
    },
    brightTextShadow: {
        color: 'white', 
        fontFamily: 'Helvetica',
        fontSize: 24,
        fontWeight: '700',
        textShadowColor: 'black', 
        textShadowOffset: {width:2,height:2} 
    },
    areasChoice: {
        backgroundColor: 'rgb(52, 46, 37)',
        padding:20
    }
});
