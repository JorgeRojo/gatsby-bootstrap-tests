import React, { Component, PureComponent } from 'react';

export const AvailableUtilities = {
    align: 'align', 
    borders: 'borders', 
    background: 'background', 
    clearfix: 'clearfix',
    display: 'display',
    embed: 'embed',
    flex: 'flex',
    float: 'float',
    overflow: 'overflow',
    position: 'position',
    screenreaders: 'screenreaders',
    shadows: 'shadows',
    sizing: 'sizing',
    spacing: 'spacing', 
    stretched_link: 'stretched-link',
    text: 'text',  
    visibility: 'visibility',
};
 
/**
 * @param {String|AvailableUtilities} utilities 
 * @param {Component} WrappedComponent 
 */

function withBootstrapUtility(utilities = {}, WrappedComponent) {

    const snakeToCamel = str => str.replace(/-([a-z0-9])/g, (m, w) => w.toUpperCase());
    const availableValues = Object.values(AvailableUtilities);
    let styleModules = {};
    let utilityList = [];

    if(typeof utilities == 'string') {
        utilityList = utilities.split(/[\s,\+]+/g) || [];
    }
    else {
        utilityList = Object.values(utilities); 
    }  
 
    utilityList.forEach(utility => { 
        if(availableValues.includes(utility)) { 
            styleModules = {
                ...styleModules,
                ...require(`./${utility}.module.scss`), 
            }
        }
    });  

    const getClassNames = (props) => {
        const classes = [];
        const stylesKeys = Object.keys(styleModules);

        //by className
        const classKeys = (props.className || '').split(/\s+/g).map(c => snakeToCamel(c));
        classKeys.forEach(prop => { 
            classes.push(stylesKeys.includes(prop) ? styleModules[prop] : prop); 
        });
        
        //by component props
        Object.keys(props).forEach(prop => {
            if (stylesKeys.includes(prop)) {
                classes.push(styleModules[prop]);
            }
        });

        return classes.join(' ');
    } 

    return class extends PureComponent { 
             
        constructor (props) {
            super(props);  
            this.state = {
                utilitiesClassName: getClassNames(props),
            } 
        } 

        componentWillReceiveProps(nextProps) {
            const utilitiesClassName = getClassNames(nextProps);
            if(utilitiesClassName !== this.state.utilitiesClassName) { 
                this.setState({ utilitiesClassName });  
            }
        } 

        render() { 
            return <WrappedComponent {...{
                ...this.props,
                utilitiesClassName: this.state.utilitiesClassName
            }}/>;
        };

    } 

}

export default withBootstrapUtility;