import React from 'react'
import Head from 'next/head'
import { Provider } from 'mobx-react'
import { initRootStore } from 'STORE/RootStore'
import DevTools from 'mobx-react-devtools'
import Header from '../widgets/header/index'
import Footer from '../widgets/footer/index'
import commonStyle from 'SCSS/common.scss'
import layoutStyle from 'SCSS/layout.scss'
import Dialog from 'COMPONENTS/Dialog'
class Layout extends React.Component {

    static getInitialProps({ req }) {
        const isServer = !!req
        return { isServer }
    }
    constructor(props) {
        super(props)
        this.rootStore = initRootStore(props.isServer)
    }
    render() {
        return (
            <Provider rootStore={this.rootStore}>
                <div className={layoutStyle.appLayout}>
                    <Header language={this.props.language} router={this.props.router} />
                    <div>
                        {this.props.children}
                    </div>
                    <Footer language={this.props.language} router={this.props.router} />
                    <Dialog language={this.props.language} />
                    {/* {__DEV__ === true ? <DevTools /> : null} */}
                </div>
            </Provider>
        )
    }

}


export default Layout