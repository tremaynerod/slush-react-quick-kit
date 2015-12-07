'use strict'
import { ADD_NEW_NUMBER } from '../constants/ActionTypes';

const initialState = {
    numberList : [2, 5]
};

export default function reducer(state = initialState, action) {

  switch (action.type) {
    
        case ADD_NEW_NUMBER:
            var newNum = Math.floor(Math.random() * 9) + 0;  
            return {
                numberList : [...state.numberList, newNum]
            };
 
        default:
            return state;
        }
}