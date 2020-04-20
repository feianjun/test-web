import React, {
    useState, 
    Component,
    forwardRef,
    createRef,
} from 'react';



const AppText = forwardRef((props, ref) => {
    let [conut, setCount] = useState(0)
    return (
        <div className="App">
            <p>{conut}</p>
            <button
                onClick={()=>{
                    setCount(conut + 1)
                }}
            >点击</button>
        </div>
    );
});
class App extends Component{

    constructor(props) {
        super(props);
        // 创建一个 ref 来存储 textInput 的 DOM 元素
        window.aaaaaaaaaaa = this;
        this.ref = createRef();
    }
    

    render(){
        return <AppText 
            ref={this.ref}
        />
    }
}
export default App;


