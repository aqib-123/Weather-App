

import {WEATHER_INFO} from '../actions';

export default function(state=[], action){

   switch(action.type){
      
      case WEATHER_INFO:
         return [action.payload.data,...state];
   }

   return state;
}