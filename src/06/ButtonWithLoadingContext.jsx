import React from 'react';
import PropTypes from "prop-types";
import Button from "../04/Button";
import withLoadingContext from  './withLoadingContext';

function ButtonWithLoadingContext({ children, loading, setLoading }) {
    return (
        <Button onPress={() => setLoading(!loading)}>
            {loading ? '로딩 중' : children}
        </Button>
    )
}

ButtonWithLoadingContext.propTypes = {
    children: PropTypes.string,
    loading: PropTypes.bool,
    setLoading: PropTypes.func,
}

export default withLoadingContext(ButtonWithLoadingContext);
