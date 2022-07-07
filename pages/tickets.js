import React, {useState, useEffect} from 'react'
import {useRouter} from 'next/router'

const Tickets = () => {
  const router = useRouter()

  useEffect(() => {
    router.push('/events')
  }, [])
  return (
    <div>

    </div>
  )
}

export default Tickets