import { render } from '@testing-library/react';
import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = { title: 'App Component' }
    }

    render() {
        return (
            <div className='container-fluid text-center bg-info'>
                <div className='row'>
                    <div className='col'>
                        <h1>
                            {this.state.title}
                            <SearchBar testaaa='ss' onSubmitTermCallback={this.onGetTerm}></SearchBar>
                        </h1>
                    </div>
                </div>

            </div>
        );
    }

    onGetTerm(term){
        console.log(term);
    }
}
export default App;

// const Asks = (props) => {
//     return (
//         <div>he this is good </div>
//     )
// }
// export default Asks;