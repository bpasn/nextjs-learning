import LoadingProvider from '@/providers/loading-provider'
import React from 'react'

const Loading = () => {
  return (
    <LoadingProvider count={12} />
  )
}

export default Loading