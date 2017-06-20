import {EventEmitter} from 'fbemitter'
import AppDispatcher from './AppDispatcher'
import bankConstants from './constants'

const CHANGE_EVENT = 'change';
let __emitter = new EventEmitter();
let balance = 0; //账户余额
let BankBalanceStore = { //订阅store的变化事件
    /**
     * 获取账户余额
     * @returns {number}
     */
    getState(){
       return balance;
    },
    /**
     * 订阅store的变化事件
     * @param callback
     */
    addListener:(callback) =>{
       return __emitter.addListener(CHANGE_EVENT, callback);
    },
};

BankBalanceStore.dispatchToken = AppDispatcher.register((action)=>{
   switch (action.type){
       case bankConstants.CREATED_ACCOUNT:
           balance = 0;
           __emitter.emit(CHANGE_EVENT); //
           break;
       case bankConstants.DEPOSITED_INTO_ACCOUNT:
           balance = balance+action.ammount;
           __emitter.emit(CHANGE_EVENT); //
           break;

       case bankConstants.WITHDREW_FROM_ACCOUNT:
           balance = balance-action.ammount;
           __emitter.emit(CHANGE_EVENT); //
           break;
   }
});

export default BankBalanceStore;