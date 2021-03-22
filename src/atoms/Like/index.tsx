import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity, View } from 'react-native'

export interface LikeProps {
  liked?: boolean
  onPress: (value: boolean) => void
}

const Like = ({ liked = false, onPress: onPressProp }: LikeProps) => {
  const onPress = () => {
    onPressProp(!liked)
  }

  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <Ionicons
          name={liked ? 'ios-heart' : 'ios-heart-empty'}
          size={20}
          color='#931332'
        />
      </TouchableOpacity>
    </View>
  )
}

export default Like
