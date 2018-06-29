import React from 'react'
import style from 'SCSS/components/input.scss'

class Input extends React.Component {
    constructor(props) {
        super(props)
        this.validate = true
        this.state = {
            errorTip: '',
            value: ''
        }
    }
    componentWillMount() {
        if (this.props.defaultValue) {
            this.setState({
                value: this.props.defaultValue
            })
        }
    }
    componentDidMount() {
        if (this.props.rule && typeof this.props.rule === 'function') {
            this.props.rule(this.state.value, (text) => {
                this.validate = (text && typeof text === 'string') ? false : true
            })
        }
        if (this.props.onChange && typeof this.props.onChange === 'function') {
            this.props.onChange({
                [this.props.name]: {
                    value: this.state.value,
                    validate: this.validate
                }
            })
        }
    }
    handleInputChange(e) {
        this.setState({
            value: e.target.value
        })
        if (this.props.rule && typeof this.props.rule === 'function') {
            this.props.rule(e.target.value, (text) => {
                this.setState({
                    errorTip: (text && typeof text === 'string') ? text : ''
                })
                this.validate = (text && typeof text === 'string') ? false : true
            })
        }
        if (this.props.onChange && typeof this.props.onChange === 'function') {
            this.props.onChange({
                [this.props.name]: {
                    value: e.target.value,
                    validate: this.validate
                }
            })
        }
    }
    render () {
        return (
            <div className={style.inputContainer}>
                <p className={style.label}>{this.props.label}</p>
                <div className={style.flexInput}>
                    <div className={style.inputBox}>
                        {
                            this.props.type === 'textarea' ? <textarea ref={this.props.name} value={this.state.value} rows={this.props.rows} cols={this.props.cols} maxLength={this.props.maxLength} minLength={this.props.minLength} style={this.props.inputStyle} className={style.textarea} placeholder={this.props.placeholder} onChange={(e) => this.handleInputChange(e)}/>
                            : <input value={this.state.value} ref={this.props.name} maxLength={this.props.maxLength} minLength={this.props.minLength} style={this.props.inputStyle} className={style.input} type={this.props.type} placeholder={this.props.placeholder} onChange={(e) => this.handleInputChange(e)}/>
                        }
                    </div>
                    <div className={style.operateBox}>
                        {
                            this.props.required ? <span className={style.requiredStyle}>*</span> : null
                        }
                    </div>
                </div>
                <p className={style.errorTip}>{this.state.errorTip}</p>
            </div>
        )
    }
}
export default Input