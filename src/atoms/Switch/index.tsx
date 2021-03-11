import React, { Component } from 'react'
import styled from 'styled-components/native'
import { Animated, TouchableWithoutFeedback } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

interface SwitchProps {
  checked?: boolean
  onChange?: (value: boolean) => void
}

class Switch extends Component<SwitchProps> {
  static defaultProps = {
    onChange: () => {},
  }

  animated = new Animated.Value(0)

  componentDidMount() {
    const { checked } = this.props

    this.animated.setValue(checked ? 14 : 0)
  }

  componentDidUpdate(prevProps: Readonly<SwitchProps>) {
    const { checked } = this.props

    if (checked !== prevProps.checked) {
      Animated.timing(this.animated, {
        toValue: checked ? 14 : 0,
        useNativeDriver: false,
        duration: 200,
      }).start()
    }
  }

  onPress = () => {
    const { onChange, checked } = this.props

    onChange!(!checked)
  }

  render() {
    const { checked } = this.props

    return (
      <TouchableWithoutFeedback onPress={this.onPress}>
        <Track checked={checked}>
          <Thumb
            as={Animated.View}
            style={{
              left: this.animated,
            }}
            checked={checked}
          >
            {checked && <Check size={18} name='ios-checkmark' color='#fff' />}
          </Thumb>
        </Track>
      </TouchableWithoutFeedback>
    )
  }
}

const Track = styled.View<{ checked?: boolean }>`
  position: relative;
  width: 34px;
  height: 16px;

  background: ${({ checked }) => (checked ? '#680e24' : '#eeeeee')};
  border-radius: 150px;
`

const Thumb = styled.View<{ checked?: boolean }>`
  position: absolute;
  top: -2px;
  width: 20px;
  height: 20px;

  align-items: center;
  justify-content: center;

  border-radius: 10px;

  background: ${({ checked }) => (checked ? '#931332' : '#ececec')};
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
`

const Check = styled(Ionicons)`
  margin-left: 3px;
  margin-top: 1px;
`

export default Switch
