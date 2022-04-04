import React from 'react';
import { storiesOf } from '@storybook/react';

const boxStyle = {border: '1px red solid', padding: 30};

storiesOf('Doit-UI/Flex', module)
    .addWithJSX('flexDirection 예제', () => (
        <div>
            <h4>flexDirection 예제: 'row'</h4>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div style={boxStyle}>Box 1</div>
                <div style={boxStyle}>Box 2</div>
                <div style={boxStyle}>Box 3</div>
            </div>
            <h4>flexDirection 예제: 'column'</h4>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <div style={boxStyle}>Box 1</div>
                <div style={boxStyle}>Box 2</div>
                <div style={boxStyle}>Box 3</div>
            </div>
        </div>
    ));

