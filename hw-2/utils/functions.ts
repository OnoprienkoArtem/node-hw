import { v4 as uuidv4 } from 'uuid';

import { User } from '../model/user';
import { users } from '../data/users';

export function getAutoSuggestUsers(loginSubstring: any, limit: number) {
    const defaultLimit: number = 2;
    let filteredUsers: User[] = users;

    if (loginSubstring) {
        filteredUsers = users.filter(user => user.login.includes(loginSubstring));
    }

    return filteredUsers.slice(0, (Number(limit) || defaultLimit));
}

export function getUserById(id: string) {
    return users.filter(item => item.id === id);
}

export function createUser(user: any) {
    const { login, password, age } = user;
    const newUser: User = {
        id: uuidv4(),
        login,
        password,
        age,
        isDeleted: false
    };

    users.push(newUser);

    return users;
}

export function updateUserById(id: string, response: any) {
    const { login, password, age } = response;
    const isUser = users.some(user => user.id === id.toString());

    if (isUser) {
        users.forEach(user => {
            if (user.id === id.toString()) {
                user.login = login ? login : user.login;
                user.password = password ? password : user.password;
                user.age = age ? age : user.age;

                return user;
            }
        });
    }
}

export function removeUserById(id: string) {
    users.forEach(item => {
        if (item.id === id) {
            item.isDeleted = true;
        }
    });
    return users;
}
