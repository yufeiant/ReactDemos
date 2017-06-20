import AppDispatcher from './AppDispatcher'
import bankConstants from './constants'

let BankActions = {
    /**
     * 创建账户
     * Create an account with an empty value
     */
    createAccount(){
        AppDispatcher.dispatch({
            type:bankConstants.CREATED_ACCOUNT,
            ammount:0
        })
    },
    /**
     * 存入账户
     * @param(number) ammount to whithdraw
     */
    depositIntoAccount(ammount){
        AppDispatcher.dispatch({
            type:bankConstants.DEPOSITED_INTO_ACCOUNT,
            ammount:ammount
        })
    },
    /**
     * 提取账户
     * @param(number) ammount to whithdraw
     */
    withDrawFromAccount(ammount){
        AppDispatcher.dispatch({
            type:bankConstants.WITHDREW_FROM_ACCOUNT,
            ammount:ammount
        })
    }
}

export default BankActions;