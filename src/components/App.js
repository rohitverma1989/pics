import React from 'react';
import SearchBar from './SearchBar';
import EmployeeComponent from './Employee'

class AppComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = { title: 'App Component' }
    }

    render() {
        return (
            <div className='container-fluid text-center'>
                <div className='row'>
                    <div className='col'>
                        <h1>
                            {this.state.title}
                        </h1>
                        <SearchBar testaaa='ss' onSubmitTermCallback={this.onGetTerm}></SearchBar>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12'>
                        <EmployeeComponent></EmployeeComponent>
                    </div>
                </div>

            </div>
        );
    }

    onGetTerm(term) {
        console.log(term);
    }
}
export default AppComponent;

// const Asks = (props) => {
//     return (
//         <div>he this is good </div>
//     )
// }
// export default Asks;