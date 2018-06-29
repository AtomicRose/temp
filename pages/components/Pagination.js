import React from 'react'
import style from 'SCSS/components/pagination.scss'
import I18N from 'I18N'

class Pagination extends React.Component {
    constructor(props) {
        super(props)
        this.lastPage = -1
    }
    componentDidMount() {
        this.lastPage = this.props.currentPage
    }
    handleClickPage(i) {
        if (i === 'prev' && this.props.currentPage > 1) {
            this.lastPage = this.props.currentPage
            this.props.onPageChanged(this.props.currentPage - 1)
        }
        if (i === 'next' && this.props.currentPage < this.props.totalPage) {
            this.lastPage = this.props.currentPage
            this.props.onPageChanged(this.props.currentPage + 1)
        }
        if (typeof i === 'number') {
            this.props.onPageChanged(i)
        }
        
    }
    render() {
        const {currentPage, totalPage, language} = this.props
        const langText = I18N.langText(language)
        let pageItems = []
        if (totalPage < 8) {
            for(let i = 1; i <= totalPage; i++) {
                pageItems.push(<span key={i} className={currentPage === i ? `${style.page} ${style.pageActive}` : style.page} onClick={()=>this.handleClickPage(i)}>{i}</span>)
            }
        } else {
            let first = 0
            let last = totalPage
            if (currentPage <= 3) {
                first = 1
                for(let i = 1; i <= 7; i++) {
                    pageItems.push(<span key={i} className={currentPage === i ? `${style.page} ${style.pageActive}` : style.page} onClick={()=>this.handleClickPage(i)}>{i}</span>)
                    last = i
                }
            } else if ((currentPage + 3) >= totalPage) {
                first = totalPage - 6
                for(let i = totalPage - 6; i <= totalPage; i++) {
                    pageItems.push(<span key={i} className={currentPage === i ? `${style.page} ${style.pageActive}` : style.page} onClick={()=>this.handleClickPage(i)}>{i}</span>)
                    last = i
                }
            } else {
                first = currentPage - 3
                for(let i = currentPage - 3; i <= currentPage + 3; i++) {
                    pageItems.push(<span key={i} className={currentPage === i ? `${style.page} ${style.pageActive}` : style.page} onClick={()=>this.handleClickPage(i)}>{i}</span>)
                    last = i
                }
            }
            if (first > 1) {
                let temp = []
                temp.push(<span key="first" className={style.special} onClick={()=>this.handleClickPage(1)}>{langText.app.pagination.first}</span>)
                // temp.push(<span key="s1" >...</span>)
                pageItems = temp.concat(pageItems)
            }
            if (last < totalPage) {
                // pageItems.push(<span key="s2">...</span>)
                pageItems.push(<span key="last" className={style.special} onClick={()=>this.handleClickPage(totalPage)}>{langText.app.pagination.last}</span>)
                
            }
        }
        // let prev = (<span key={'p_prev'} className={style.prev} onClick={()=>this.handleClickPage('prev')}></span>)
        // let next = (<span key={'p_next'} className={style.next} onClick={()=>this.handleClickPage('next')}></span>)
        // let items = [prev].concat(pageItems).concat([next])
        return (
            <div className={style.pagination}>
                {pageItems}
            </div>
        )
    }
}

export default Pagination