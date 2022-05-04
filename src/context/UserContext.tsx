import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface IUserContext {
    name: string;
    enter(name: string): void;
    getUser(): string;
}

interface IProps {
    children: React.ReactElement;
}

export const UserContext = React.createContext<IUserContext>({} as IUserContext,);

export const UserProvider: React.FunctionComponent<Iprops> = ({children}: IProps) => {

    const [userName, setUserName] = useState<string>('');

    const enter = async (name: string) => {
        await AsyncStorage.setItem('user', JSON.stringify(name));
        setUserName(name);
    }

    const getUser = async (): string => {
        const userName = await AsyncStorage.getItem('user');
        setUserName(JSON.parse(userName));
        return userName;
    }

    return (
        <UserContext.Provider value={{name: userName, enter, getUser}}>
            {children}
        </UserContext.Provider>
    )
}