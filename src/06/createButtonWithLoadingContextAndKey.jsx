import React from 'react';
import PropTypes from "prop-types";
import Button from "../04/Button";
import createLoadingContextAndKey from  './createLoadingContextAndKey';

const DefaultLoadingContext = createLoadingContextAndKey();
const OtherLoadingContext = createLoadingContextAndKey('otherLoading');

function CreateButtonWithLoadingContextAndKey({ children }) {
    return (
        <React.Fragment>
            <DefaultLoadingContext
                render={({ loading, setLoading }) => (
                    <Button onPress={() => setLoading(!loading)}>
                        {loading ? '컨텍스트1 로딩 중' : children}
                    </Button>
                )}
            />
            <OtherLoadingContext
                render={({ loading, setLoading }) => (
                    <Button onPress={() => setLoading(!loading)}>
                        {loading ? '컨텍스트2 로딩 중' : children}
                    </Button>
                )}
            />
            <DefaultLoadingContext
                render={({ loading, setLoading }) => (
                    <OtherLoadingContext
                        render={({ loading: loading2 }) => (
                            <Button onPress={() => setLoading(!loading)}>
                                {loading || loading2 ? '크악! 로딩 중...' : children}
                            </Button>
                        )}
                    />
                )}
            />
        </React.Fragment>

    )
}

CreateButtonWithLoadingContextAndKey.propTypes = {
    children: PropTypes.string
}

export default CreateButtonWithLoadingContextAndKey;