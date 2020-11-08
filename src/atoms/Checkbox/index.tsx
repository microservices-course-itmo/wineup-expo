import { AntDesign, Feather } from '@expo/vector-icons'
import React from 'react'

interface CheckboxProps {
  checked?: boolean
  size?: number
  color?: string
}

function Checkbox({ checked, size = 16, color = '#9a3043' }: CheckboxProps) {
  return checked ? (
    <AntDesign name='checksquare' size={size} color={color} />
  ) : (
    <Feather name='square' size={size} color={color} />
  )
}

export default Checkbox
