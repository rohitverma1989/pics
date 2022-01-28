import React from 'react';
import SearchBar from './SearchBar';
import EmployeeComponent from './Employee'

class AppComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = { title: 'App Component', searchTerm: "", empList: [] }
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
                        <EmployeeComponent empList={this.state.empList}></EmployeeComponent>
                    </div>
                </div>

            </div>
        );
    }

    onGetTerm = (term) => {
        console.log(term);
        this.setState({ searchTerm: term });
        this.getEmployees();
    }

    getEmployees = () => {
        // axios.get("http://localhost:5510/api/employee/GetEmployeeList").then(
        //     (response) => {
        //         console.log("response from web api ");
        //         console.log(response);
        //         this.setState({ empList: response.data });
        //     },
        //     (error) => {
        //         console.log("error in getting data from api");
        //         console.log(error);
        //     }
        // )

        var emLst = [
            { Id: '1', Name: 'Rohit', Title: 'S.E' },
            { Id: '2', Name: 'Saurabh', Title: 'S.E' },
            { Id: '3', Name: 'Rivanya', Title: 'Kiddo' },
        ]
        this.setState({ empList: emLst });
    }
}
export default AppComponent;