import React from 'react';
import '../styles/App.css'

class EmployeeComponent extends React.Component {
    empList = [];
    state = {}

    constructor(props) {
        super(props);
        this.cardRef = React.createRef()
    }

    componentDidMount(){
        console.log("this is componentDidMount")
        console.log(this.cardRef)
    }

    render() {
        this.empList = this.props.empList;
        var emp = this.empList.map((x) => {
            return (
                <div className='col-6 my-1' key={x.Id} ref={this.cardRef}>
                    <div className="card bg-dark text-light card-shadow">
                        <div className="card-header">
                            {x.Name}
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{x.Title}</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <button onClick={this.goToBootstrap} className="btn btn-primary">Go To Bootstrap</button>
                        </div>
                    </div>
                </div>)
        })
        return (<div className='row'>{emp}</div>)
    }

    goToBootstrap() {
        window.open('https://getbootstrap.com/docs/5.1/components/card/', '_blank');
    }
}
export default EmployeeComponent;

