import React from 'react'

class Form extends React.Component {
    constructor(props) {
        super(props)
    }
    componentWillMount() {
       
    }
    componentDidMount() {
        
    }
    handleInputChange() {
    }
    render() {
        return (
            <div onChange={()=>this.handleInputChange()}>
                {this.props.children}
            </div>
        )
    }
}

export default Form