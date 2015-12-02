# @scdhhs/ui-loader

A spinner component for react.

## Installation
```shell
$ npm install --save @scdhhs/ui-loader
```

## Usage
```javascript
import UILoader from '@scdhhs/ui-loader';
import React from 'react';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {ready: false};
  }
  render() {
    return (
      <UILoader ready={this.state.ready}>
        <p>Hi. I am a MyComponent instance.</p>
      </UILoader>
    );
  }
}
```
## Running Tests
```shell
$ npm test
```

## Development
To test the component in the browser you can run the example app:
```shell
$ npm run example
```
