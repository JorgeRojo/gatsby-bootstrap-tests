import React, { Component } from "react"; 
import withBootstrapUtility, { AvailableUtilities } from "src/hoc/withBootstrapUtility/withBootstrapUtility";

class Header extends Component {
    render () {
        const { children, tag = 'h1', utilitiesClassName='' } = this.props;  
        const Tag = tag;
        return ( 
            <Tag className={`${utilitiesClassName}`} >{ children }</Tag> 
        );
    }
}

const {spacing, text} = AvailableUtilities;
export default withBootstrapUtility({ spacing, text }, Header);