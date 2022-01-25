import React from 'react';



class SearchBar extends React.Component {
    state = { term: 'Hi There !s' }
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div>

                <form onSubmit={this.onSubmitForm}>
                    <div className="row align-items-center justify-content-center bg-warning">
                        <div className="col-6">
                            <input type="text" id="inputPassword6"
                                placeholder='Type To Search'
                                className="form-control"
                                onChange={this.onChangeText}
                                value={this.state.term} />
                        </div>
                    </div>
                </form>
            </div>
        );
    }

    onSubmitForm = (event) => {
        event.preventDefault();
        // console.log("Form value is : ");
        // console.log(this.state.term);
        this.props.onSubmitTermCallback(this.state.term);
        console.log(this.props.testaaa);
    }

    onChangeText = (event) => {
        this.setState({ ...this.state.term, term: event.target.value });
        console.log(this.state.term);
    }
}

export default SearchBar;