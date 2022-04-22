import * as React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {checked: false};
        // [checked, setChecked] = React.useState(false)
    }


    handleChange = () => {
        this.setState({checked: !this.state.checked});
        // console.log(this.state.checked);
    };

    render() {
        // console.log("initila"+this.state.checked);
        return (

            <div>
                <Checkbox
                    label={this.props.label}
                    value={
                        this.checked
                    }

                    onChange=
                        {
                            this.handleChange
                        }
                />

                {/*<p>Is "My Value" checked? {this.checked.toString()}</p>*/}
            </div>
        )
            ;
    }
};

const Checkbox = ({label, value, onChange}) => {
    return (
        <label>
            <input type="checkbox" checked={value} onChange={onChange}/>
            {label}
        </label>
    );
};

export default App;