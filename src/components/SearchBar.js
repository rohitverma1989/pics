import React from 'react';
class SearchBarComponent extends React.Component {
    state = { term: 'Hi There !s', isLogin: 1 }

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
                {this.state.isLogin === 1 ? (
                    <div>Hellow this is conditional rendering</div>
                ) : (
                    <div className='btn btn-primary'>world</div>
                )}
            </div>
        );
    }

    onSubmitForm = (event) => {
        event.preventDefault();
        this.props.onSubmitTermCallback(this.state.term);
        console.log(this.props.testaaa);
    }

    onChangeText = (event) => {
        debugger;
        this.setState({ term: event.target.value });
        console.log(this.state.term);
    }
}

export default SearchBarComponent;