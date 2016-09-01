import React, { Component } from 'react';
import ReactNative, {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';


import snapshot from './snapshot'
import Ok from './ok'


export default (KataComponent, ReferenceComponent) =>{
  const SnapshottedReference = snapshot(ReferenceComponent)
  const SnapshottedKata = snapshot(KataComponent)

  const Klass = class extends Component {
    state = {
      referenceShot: null
    }

    _onCompared = (similar) => {
      this.setState({similar})
      this.props.onCompared(similar)

    }

    _onToggleReference = () => {
      this.setState({showReference: !this.state.showReference})
    }

    render() {
      if (this.state.similar) {
        return <Ok/>
      }

      if (this.state.showReference) {
        return (
          <TouchableOpacity
            style={{flex:1}}
            onPress={this._onToggleReference.bind(this)}>
            <ReferenceComponent/>
          </TouchableOpacity>
        );
      }

      return (
        <TouchableOpacity style={{flex:1}} onPress={this._onToggleReference.bind(this)}>
          {
            (this.state.showReference || !this.state.referenceShot) &&
              <SnapshottedReference
                onSnapshot={(base64Image) => this.setState({referenceShot: base64Image})}
              />
          }
          {
            (!this.state.showReference && this.state.referenceShot) &&
              <SnapshottedKata
                referenceShot={this.state.referenceShot}
                onCompared={this._onCompared}
              />
          }
         </TouchableOpacity>
      );
    }
  }
  Klass.displayName = ReferenceComponent.displayName
  return Klass
}


