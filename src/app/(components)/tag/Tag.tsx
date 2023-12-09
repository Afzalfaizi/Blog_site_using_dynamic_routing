import React from 'react'
import { TagPropType } from '../../../../types/componentsTypes'

export default function Tag(props:TagPropType) {
  return (
    <span className=" bg-gray-200 text-gray-800 px-2 py-1 rounded-full mr-2 mb-2 ">
        {props.tagtext}
      </span>
  )
}
