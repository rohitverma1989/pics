import React from 'react';
import '../styles/App.css'

class EmployeeComponent extends React.Component {
    state = {
        employeeList: [
            { name: 'Rohit', title: 'Software Engineer' },
            { name: 'Rivanya', title: 'Kiddo' },
            { name: 'Saurabh', title: 'Software Engineer' },
            { name: 'Saurabh', title: 'Software Engineer' },
            { name: 'Saurabh', title: 'Software Engineer' },
            { name: 'Saurabh', title: 'Software Engineer' },
            { name: 'Saurabh', title: 'Software Engineer' },
        ]
    }

    render() {

        var emp = this.state.employeeList.map((x) => {
            return (
                <div className='col-6 my-1'>
                    <div className="card bg-dark text-light card-shadow">
                        <div className="card-header">
                            {x.name}
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{x.title}</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <button onClick={this.goToBootstrap} className="btn btn-primary">Go To Bootstrap</button>
                        </div>
                    </div>
                </div>)
        })
        //   console.log(emp)
        return (<div className='row'>{emp}</div>)
    }

    goToBootstrap(){
        window.open('https://getbootstrap.com/docs/5.1/components/card/', '_blank');
    }
}

export default EmployeeComponent;