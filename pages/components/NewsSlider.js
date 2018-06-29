import React from 'react'
import style from 'SCSS/components/newsSlider.scss'

export default class Slider extends React.Component {
    constructor(props) {
        super(props)
        this.nodeLength = 0
        this.index = 0
        this.interval = null
        this.state = {
            index: 0,
            nodeLength: 0
        }
    }
    componentWillMount() {
        this.nodeLength = this.props.children.props.children.length
    }
    componentDidMount() {
        let container = document.getElementById('homeContainer')
        let content = document.getElementById('homeContent')
        let items = document.getElementsByClassName(style.item)
        let containerWidth = container.clientWidth
        for (let i = 0; i < items.length; i++) {
            items[i].style.width = containerWidth + 'px'
        }
        content.style.width = containerWidth * this.nodeLength + 'px'

        if (!this.interval) {
            this.interval = setInterval(() => {
                this.index = this.index >= (this.nodeLength - 1) ? 0 : this.index + 1
                this.transform(container, content, this.index)
                this.setState({
                    index: this.index
                })
            }, 3000)
        }
    }
    componentWillUpdate() {
        this.nodeLength = this.props.children.props.children.length
    }
    componentDidUpdate() {
        let container = document.getElementById('homeContainer')
        let content = document.getElementById('homeContent')
        let items = document.getElementsByClassName(style.item)
        let containerWidth = container.clientWidth
        for (let i = 0; i < items.length; i++) {
            items[i].style.width = containerWidth + 'px'
        }
        content.style.width = containerWidth * this.nodeLength + 'px'

        if (!this.interval) {
            this.interval = setInterval(() => {
                this.index = this.index >= (this.nodeLength - 1) ? 0 : this.index + 1
                this.transform(container, content, this.index)
                this.setState({
                    index: this.index
                })
            }, 3000)
        }
    }
    handleStopInterval() {
        clearInterval(this.interval)
    }
    handleContinueInterval() {
        clearInterval(this.interval)
        let container = document.getElementById('homeContainer')
        let content = document.getElementById('homeContent')
        this.interval = setInterval(() => {
            this.index = this.index >= (this.nodeLength - 1) ? 0 : this.index + 1
            this.transform(container, content, this.index)
            this.setState({
                index: this.index
            })
        }, 3000)
    }
    handleClickDot(i) {
        let container = document.getElementById('homeContainer')
        let content = document.getElementById('homeContent')
        this.index = i
        this.transform(container, content, i)
        this.setState({
            index: this.index
        })
    }
    transform(container, content, i) {
        let containerWidth = container.clientWidth
        content.style.transform = `translate(${-i * containerWidth}px,0)`
    }
    render() {
        let dots = [];
        for (let i = 0; i < this.nodeLength; i++) {
            dots.push(<span key={i} className={this.state.index === i ? `${style.dot} ${style.dotActive}` : style.dot} onClick={() => this.handleClickDot(i)}></span>)
        }

        let children = [];
        this.props.children.props.children.forEach((e, i) => {
            children.push(
                <div key={i} className={style.item}>{e.props.children}</div>
            )
        })
        return (
            <div className={style.sliderBox}>
                <div className={style.sliderContainer} id="homeContainer">
                    <div className={style.sliderContent} id="homeContent" onMouseOver={() => this.handleStopInterval()} onMouseOut={() => this.handleContinueInterval()}>
                        {children}
                    </div>
                    <div className={style.dotBox}>
                        {dots}
                    </div>
                </div>
            </div>
        )
    }
}