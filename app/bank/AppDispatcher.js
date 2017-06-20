import {Dispatcher} from 'flux';
//export default new Dispatcher(); //其实写成这样就可以了，但是为了更好的理解，我们扩展一下
class AppDispatcher extends Dispatcher{
    dispatch(action={}){
        console.log("Dispatched",action);
        super.dispatch(action)
    }
}
export default new AppDispatcher();