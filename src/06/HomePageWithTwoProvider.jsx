import React, {PureComponent} from 'react';
import {
    ButtonWithDefaultLoadingContext,
    ButtonWithOtherLoadingContext,
} from './ButtonWithLoadingContextAndKey';
import LoadingProviderWithKey from './LoadingProviderWithKey';
import ButtonWithLoadingContextAndKey from "./createButtonWithLoadingContextAndKey";

const LoadingProvider1 = LoadingProviderWithKey();
const LoadingProvider2 = LoadingProviderWithKey('otherLoading');

function TableComponent() {
    return (
        <table>
            <ButtonWithDefaultLoadingContext>컨텍스트1</ButtonWithDefaultLoadingContext>
            <ButtonWithOtherLoadingContext>컨텍스트2</ButtonWithOtherLoadingContext>
            <ButtonWithLoadingContextAndKey>다중 소비자 예제</ButtonWithLoadingContextAndKey>
        </table>
    )
}

export class HomePageWithTwoProvider extends PureComponent {
    render() {
        return (
            <LoadingProvider1>
                <LoadingProvider2>
                    <TableComponent />
                </LoadingProvider2>
            </LoadingProvider1>
        );
    }
}

export default HomePageWithTwoProvider;
