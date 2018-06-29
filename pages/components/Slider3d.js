import React from 'react'
import style from 'SCSS/components/slider3d.scss'

class Slider3d extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            current: Math.ceil(parseInt(this.props.showLength, 10) / 2)
        }
        this.interval
    }
    componentDidMount() {
       this.changeStyle()
       this.interval = setInterval(()=>{
            this.setState({
                current: this.state.current < this.props.showLength ? this.state.current + 1 : 1
            })
       }, 3000)
    }
    componentDidUpdate() {
        this.changeStyle()
    }
    componentWillUnMount() {
        clearInterval(this.interval)
    }
    handleInterval(value) {
        if (value) {
            this.interval = setInterval(()=>{
                    this.setState({
                        current: this.state.current < this.props.showLength ? this.state.current + 1 : 1
                    })
            }, 3000)
        } else {
            clearInterval(this.interval)
        }
    }
    changeStyle() {
        let container = document.getElementById('slider3dContainer')
        let boxWidth = container.clientWidth
        let showLength = parseInt(this.props.showLength, 10)
        let di = Math.floor(showLength / 2)
        let elementLength = this.props.children.props.children.length
        let eles = []
        let current = this.state.current
        for (let i = 0; i < showLength; i++) {
            let index = current - (di - i)
            eles.push(document.getElementById('img_' + (index > 0 ? (index % elementLength) === 0 ? elementLength : (index % elementLength) : elementLength + index)))
        }
        let wp = boxWidth / showLength / 2
        let pp = 100 / showLength
        let L = eles.slice(0, di)
        let R = eles.slice(di + 1, eles.length)
        let C = eles[di]
        let CWidth = wp * showLength
        C.style.width = CWidth + 'px'
        C.style.transform = 'translate(' + (boxWidth - CWidth) / 2 + 'px, -50%)'
        C.style.zIndex = 10
        L.map((e, i)=>{
            let eWidth = wp * showLength / (2 - i / 2)
            e.style.width = eWidth + 'px'
            e.style.transform = 'translate(' + (i * wp) + 'px, -50%)'
            e.style.zIndex = 10 - (di - i)
        })
         R.reverse().map((e, i)=>{
             let eWidth = wp * showLength / (2 - i / 2)
            e.style.width = eWidth + 'px'
            e.style.transform = 'translate(' + (boxWidth - eWidth - i * wp) + 'px, -50%)'
            e.style.zIndex = 10 - (di - i)
            // e.style.transition = 'right .5s ease-in-out, width .5s ease-in-out'
        })
    }
    handleClickPage(index) {
        this.setState({
            current: index
        })
    }
    render() {
        let children = []
        this.props.children.props.children.forEach((e, i) => {
            children.push(
                <div key={i} className={style.imgBox} id={`img_${i + 1}`} onClick={()=>this.handleClickPage(i + 1)}>
                    <div className={style.pdBox}></div>
                    {e.props.children}
                </div>
            )
        })
        let dots = [];
        for (let i = 0; i < this.props.children.props.children.length; i++) {
            dots.push(<span key={i} className={this.state.current === (i + 1) ? `${style.dot} ${style.dotActive}` : style.dot} onClick={() => this.handleClickPage(i + 1)}></span>)
        }
        return (
            <div className={style.slider3dContainer} id={'slider3dContainer'}>
                <div className={style.contentBox} onMouseOver={()=>this.handleInterval(false)} onMouseOut={()=>this.handleInterval(true)}>
                    {children}
                </div>
                
                <div className={style.dotBox}>
                    {dots}
                </div>
            </div>
        )
    }
}

export default Slider3d