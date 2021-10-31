import React, {Children, useEffect, useState} from 'react';
import {TextInput, View, StyleSheet, Text, Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {loginId, loginPassword} from '../redux/auth/auth';

const Input = props => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const id = useSelector(state => state.auth.loginId);
  const password = useSelector(state => state.auth.loginPassword);
  const onPress = () => {
    if (id === '' && password === '') {
      Alert.alert('카첵', '아이디와 비밀번호를 입력해주세요.');
    } else if (id === '') {
      Alert.alert('카첵', '아이디를 입력해주세요.');
    } else if (password === '') {
      Alert.alert('카첵', '비밀번호를 입력해주세요.');
    } else {
      Alert.alert('카첵', '로그인이 완료되엇습니다.');
    }
  };

  useEffect(() => {
    if (props.type === 'ID') {
      dispatch(loginId({loginId: text}));
    } else if (props.type === 'Password') {
      dispatch(loginPassword({loginPassword: text}));
    }
  }, [text]);

  return (
    <View>
      <Text>{props.name}</Text>
      <TextInput
        placeholder={props.placeholder}
        style={styles.container}
        onChange={e => {
          setText(e.nativeEvent.text);
        }}
        value={text}
        autoCapitalize="none"
        returnKeyType="done"
        onSubmitEditing={() => onPress()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    borderWidth: 1,
    padding: 10,
    color: '#333333',
    marginTop: 12,
    borderRadius: 15,
    fontSize: 20,
  },
});

export default Input;
