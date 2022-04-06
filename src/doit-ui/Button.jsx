import React, {PureComponent} from 'react';
import PropTypes from "prop-types";
import { withStyles, css } from './withStyles';

class Button extends PureComponent {
    render() {
        const {
            children,
            disabled,
            styles,
            large,
            xlarge,
            small,
            xsmall,
            primary,
            secondary,
            onPress
        } = this.props;
        return (
            <button
                {...css(
                    styles.default,
                    xsmall && styles.xsmall,
                    small && styles.small,
                    large && styles.large,
                    xlarge && styles.xlarge,
                    secondary && styles.secondary,
                    primary && styles.primary,
                )}
                onClick={onPress}
            >
                {children}
            </button>
        );
    }
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    large: PropTypes.bool,
    xlarge: PropTypes.bool,
    small: PropTypes.bool,
    xsmall: PropTypes.bool,
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    onPress: PropTypes.func,
}
Button.defaultProps = {
    large: false,
    xlarge: false,
    small: false,
    xsmall: false,
    primary: false,
    secondary: false,
    onPress: () => {},
}

export default withStyles(({ color, size, unit, depth, fontWeight, responsive }) => ({
    default: {
        ...depth.level1,
        border: 1,
        borderStyle: 'solid',
        borderColor: color.default,
        borderRadius: unit,
        color: color.default,
        fontSize: size.md,
        fontWeight: fontWeight.bold,
        padding: unit * 2,
        paddingLeft: unit * 4,
        paddingRight: unit * 4,
        outline: 0,
        cursor: 'pointer',
        ':hover': {
            backgroundColor: color.grayLight,
        },
        ':focus': {
            bowShadow: '0 0 0 2px rgba(0, 0, 0, 0.3)',
        },
        [responsive.small]: {
            width: '100%'
        }
    },
    xlarge: {
        fontSize: size.xg
    },
    large: {
        fontSize: size.lg
    },
    small: {
        fontSize: size.sm,
        padding: unit,
    },
    xsmall: {
        fontSize: size.xs,
        padding: unit,
    },
    primary: {
        borderColor: color.primary,
        color: color.white,
        backgroundColor: color.primary,
        ':hover': {
            backgroundColor: color.primaryDark,
        },
    },
    secondary: {
        borderColor: color.secondary,
        color: color.secondary,
        ':hover': {
            backgroundColor: color.secondaryDark,
        },
    },
    disabled: {
        borderColor: color.grayDark,
        color: color.grayLight,
        cursor: 'default',
        opacity: 0.5,
        backgroundColor: color.gray,
        ':hover': {
            backgroundColor: color.gray
        }
    }
}))(Button);
