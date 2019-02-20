import React, { Component } from "react";
import containerStyles from "./spacing.module.scss";

function withBootstrapSpacing(WrappedComponent) {
    return class extends Component {
        classNameSpacing = '';

        getClassNames = () => {
            const classes = [];
            const stylesKeys = Object.keys(containerStyles);
            Object.keys(this.props).forEach(prop => {
                if (stylesKeys.includes(prop)) {
                    classes.push(containerStyles[prop]);
                }
            });
            this.classNameSpacing = classes.join(' ');
        }

        componentWillMount() {
            this.getClassNames();
        }

        componentWillUpdate() {
            this.getClassNames();
        }

        render() {
            const { children } = this.props;
            return <WrappedComponent classNameSpacing={this.classNameSpacing} >{children}</WrappedComponent>;
        };
    }
}

export default withBootstrapSpacing;