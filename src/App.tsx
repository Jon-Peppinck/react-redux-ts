import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { AppState } from './store/rootStore';
import { incrementCount, decrementCount } from './store/counter/CounterAction';

import HomePage from './components/HomePage';

interface AppProps {
  increment: () => void;
  decrement: () => void;
}

const mapStateToProps = (state: AppState) => ({
  count: state.counterReducer.count,
});

const mapDispatchToProps = (dispatch: Dispatch): AppProps => ({
  increment: () => dispatch(incrementCount()),
  decrement: () => dispatch(decrementCount()),
});

class App extends Component<AppProps, AppState> {
  render(): JSX.Element {
    return <HomePage {...this.props} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
