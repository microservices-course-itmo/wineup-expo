import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity, View } from 'react-native'

export interface LikeProps {
  liked: boolean
}

const Like = ({ liked }: LikeProps) => {
  const [isLiked, setIsLiked] = useState(liked)
  const onPress = () => {
    setIsLiked(!isLiked)
  }

  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <Ionicons
          name={isLiked ? 'ios-heart' : 'ios-heart-empty'}
          size={20}
          color='#931332'
        />
      </TouchableOpacity>
    </View>
  )
}

export default Like
