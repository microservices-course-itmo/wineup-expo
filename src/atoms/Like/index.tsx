import React, { useState } from 'react'
import { FontAwesome } from '@expo/vector-icons'
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
        <FontAwesome
          name={isLiked ? 'heart' : 'heart-o'}
          size={36}
          color={isLiked ? 'red' : 'black'}
        />
      </TouchableOpacity>
    </View>
  )
}

export default Like
