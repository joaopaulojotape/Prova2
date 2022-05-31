import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container:{             
        justifyContent: 'center',
        alignItems: 'center',         
        widt: '100%',
    },
        content:{
        marginTop: -110,
        paddingHorizontal: 44,
        backgroundColor: '#0d133e',
        marginBottom:15
    },
        logo:{
        width: 300,
        height: 400,
        marginTop:-10,       

    },
        titulo:{
        color: 'white',
        textAlign: 'center',
        fontSize: 15,        
        fontWeight: 'bold',
        backgroundColor: '#0d133e' 

    },    
        subtitle: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 64,
        fontWeight: 'bold'        
    },    
        input:{
        height: 40,
        width: 270,
        marginLeft: 40,
        borderBottomWidth: 1,
        margin: 15,
        borderRadius: 7,
        borderColor:'blue',        
        backgroundColor: '#DCDCDC'          
    }
});

export default styles;