import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Alert } from 'react-native';
import { useSelector } from 'react-redux';
import Button from '../../../elements/Button'

const LoginButtonContainer = (props) => {
    const navigation = useNavigation();
    const id = useSelector(state => state.auth.loginId);
    const password = useSelector(state => state.auth.loginPassword)
    const onPress =() => {
        if(id === "" && password === ""){
            Alert.alert("카첵", "아이디와 비밀번호를 입력해주세요.");
        }else if(id === ""){
            Alert.alert("카첵", "아이디를 입력해주세요.");
        }else if(password === ""){
            Alert.alert("카첵", "비밀번호를 입력해주세요.")
        }else{
            Alert.alert("카첵", "로그인이 완료되엇습니다.");
            navigation.navigate("BottomTabs")
        }
    }
    return(
        <Button name="로그인" onPress={onPress}/>
    )
}

export default LoginButtonContainer