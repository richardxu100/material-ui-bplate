import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import injectTapEventPlugin from 'react-tap-event-plugin';

@inject('commentStore') @observer
export default class MainLayout extends Component {

  componentWillMount = () => injectTapEventPlugin();

  render() {
    return (
      <div>
        <AppBar
          title="App"
          showMenuIconButton={false}
          iconElementRight={<FlatButton label="Save" />} />
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
}
