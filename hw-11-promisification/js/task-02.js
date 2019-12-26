'use strict'

// Задание 2

// Перепиши функцию toggleUserState() так, чтобы она не использовала callback-функцию callback, 
// а принимала всего два параметра allUsers и userName и возвращала промис.

/*
 * Сейчас работает так
 */

// const toggleUserState = (allUsers, userName, callback) => {
//     const updatedUsers = allUsers.map(user =>
//         user.name === userName ? {
//             ...user,
//             active: !user.active
//         } : user,
//     );

//     callback(updatedUsers);
// };

/*
 * Сейчас работает так
 */
//   toggleUserState(users, 'Mango', logger);
//   toggleUserState(users, 'Lux', logger);

export function task_02() {

    const users = [{
            name: 'Mango',
            active: true
        },
        {
            name: 'Poly',
            active: false
        },
        {
            name: 'Ajax',
            active: true
        },
        {
            name: 'Lux',
            active: false
        },
    ];



    /*
     * Должно работать так
     */

    const toggleUserState = (allUsers, userName) => {
        return new Promise((resolve) => {
            const updatedUsers = allUsers.map(user =>
                user.name === userName ? {
                    ...user,
                    active: !user.active
                } : user,
            );
            resolve(updatedUsers);
        });

    }
    
    const logger = updatedUsers => console.table(updatedUsers);

    toggleUserState(users, 'Mango').then(logger);
    toggleUserState(users, 'Lux').then(logger);

}