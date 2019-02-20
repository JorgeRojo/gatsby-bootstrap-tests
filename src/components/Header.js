import React, { Component } from "react";
import withBootstrapSpacing from 'src/hoc/withBootstrapSpacing';

class Header extends Component {
    render () {
        const { children, tag = 'h1', classNameSpacing='' } = this.props;  
        const Tag = tag;
        return ( 
            <Tag className={`hola-mundo ${classNameSpacing}`} >{ children }</Tag> 
        );
    }
}

export default withBootstrapSpacing(Header);