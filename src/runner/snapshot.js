import React from 'react';
import { View } from 'react-native';
import { takeSnapshot } from 'exponent';

export default (Subject) => {
  return class extends React.Component {
    componentDidMount() {
      const { referenceShot } = this.props;

      requestAnimationFrame(async () => {
        try {
          if (!referenceShot) {
            let base64ReferenceImage = await takeSnapshot(this._view, {format: 'png', result: 'base64', quality: 1.0});
            this.props.onSnapshot(base64ReferenceImage);
          } else {
            let base64AttemptImage = await takeSnapshot(this._view, {format: 'png', result: 'base64', quality: 1.0});

            if (referenceShot === base64AttemptImage) {
              this.props.onCompared(true);
            }
          }
        } catch(e) {
          alert(e);
        }
      });
    }

    render() {
      return (
        <View
          ref={view => { this._view = view; }}
          style={{flex: 1, backgroundColor: '#fff'}}>
          <Subject />
        </View>
      );
    }
  }
}

