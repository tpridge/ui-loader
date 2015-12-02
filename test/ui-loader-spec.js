import React from 'react';
import UILoader from '../src/ui-loader';
import assert from 'assert';
import TestUtils from 'react-addons-test-utils';

describe('UILoader', () => {
  it('should render a default label if ready === false', () => {
    let renderer = TestUtils.createRenderer();
    renderer.render(<UILoader ready={false}/>);
    let output = renderer.getRenderOutput();
    assert.equal(output.props.children[1].props.children, 'loading...');
  });

  it('should render a custom label if ready === false', () => {
    let renderer = TestUtils.createRenderer();
    let customLabel = 'foobar';
    renderer.render(<UILoader ready={false} label={customLabel}/>);
    let output = renderer.getRenderOutput();
    assert.equal(output.props.children[1].props.children, customLabel);
  });

  it('should render children if ready === true', () => {
    let renderer = TestUtils.createRenderer();
    let childFixture = <div>hi</div>;
    renderer.render(<UILoader ready={true}>{childFixture}</UILoader>);
    let output = renderer.getRenderOutput();
    assert.equal(output.props.children, childFixture);
  });
});
