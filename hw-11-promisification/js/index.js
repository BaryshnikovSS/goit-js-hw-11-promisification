'use strict'

import {task_01} from './task-01.js'
import {task_02} from './task-02.js'
import {task_03} from './task-03.js'


    let inputMessage = prompt('Пожалуйста, выберите номер задание от 1 до 10!');

    if (isNaN(inputMessage) || inputMessage === null) {
        if (isNaN(inputMessage)) {
            alert('Введите пожалуйста цифру!');
        } else {
            alert('Спасибо за выбор нашего сервиса! До свидания!');
        }
    } else {
        inputMessage = Number(inputMessage);

        switch (inputMessage) {
            case 1:
                task_01();
                break;

            case 2:
                task_02();
                break;

            case 3:
                task_03();
                break;

            default:
                alert('Задание не выбрано! Введите номер задания!');
        }
    }
