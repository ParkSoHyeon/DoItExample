import React from 'react';
import { DEFAULT_KEY, contextPropTypes } from "./LoadingProviderWithKey";
import PropTypes from "prop-types";

export default (contextKey = DEFAULT_KEY) => {
    function LoadingContext({ render }, context) {
        return render(context[contextKey]);
    }
    LoadingContext.contextTypes = {
        [contextKey]: contextPropTypes,
    };
    LoadingContext.propTypes = {
        render: PropTypes.func.isRequired
    }

    return LoadingContext;
}