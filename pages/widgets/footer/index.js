import React from 'react'
import SiteMap from './SiteMap'
import SiteInfo from './SiteInfo'
class Footer extends React.Component {
    render() {
        return (
            <div>
                <SiteMap language={this.props.language} router={this.props.router} />
                <SiteInfo language={this.props.language} router={this.props.router} />
            </div>
        )
    }
}
export default Footer