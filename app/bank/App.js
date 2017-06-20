import React,{Component} from 'react';
import {render}  from 'react-dom';
import BankBalanceStore from './BankBalanceStore'
import BankActions from './BankActions';

class App extends Component{
    constructor(){
        super(...arguments);
        BankActions.createAccount(); //创建账户
        this.state = {
            balance:BankBalanceStore.getState() //获取账户余额
        }
    }
    /**
     * 注册事件
     */
    componentDidMount(){
        this.storeSubscription = BankBalanceStore.addListener(
            data =>this.handleStoreChange(data)
        );
    }

    componentWillUnmount(){
        this.storeSubscription.remove();
    }

    handleStoreChange(){
        this.setState({
            balance:BankBalanceStore.getState()
        });
    }

    /**
     * 发出存款的action
     */
    deposit(){
        BankActions.depositIntoAccount(Number(this.refs.ammount.value));
        this.refs.ammount.value = '';
    }

    /**
     * 发出取款的action
     */
    withdraw(){
        BankActions.withDrawFromAccount(Number(this.refs.ammount.value));
        this.refs.ammount.value = '';
    }

    render(){
       return (
           <div>
               <header> FluxTrust Bank</header>
               <h1>你的账户余额是${(this.state.balance).toFixed(2)}</h1>
               <div className="atm">
                   <input type="test"  placeholder="Enter Ammount" ref="ammount"/>
                   <br/>
                   <button onClick={this.withdraw.bind(this)}>取钱</button>
                   <button onClick={this.deposit.bind(this)}>存钱</button>
               </div>
           </div>
       );
    }
}

export default App;