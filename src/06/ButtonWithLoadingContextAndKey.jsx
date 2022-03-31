import React from 'react';
import PropTypes from "prop-types";
import Button from "../04/Button";
import withLoadingContextAndKey, { loadingPropTypes } from  './withLoadingContextAndKey';

function ButtonWithLoadingContextAndKey({ children, loading, setLoading }) {
    return (
        <Button onPress={() => setLoading(!loading)}>
            {loading ? '로딩 중' : children}
        </Button>
    )
}

ButtonWithLoadingContextAndKey.propTypes = {
    ...loadingPropTypes,
    children: PropTypes.string,
}

export const ButtonWithDefaultLoadingContext = withLoadingContextAndKey()(ButtonWithLoadingContextAndKey);
export const ButtonWithOtherLoadingContext = withLoadingContextAndKey('otherLoading')(ButtonWithLoadingContextAndKey);