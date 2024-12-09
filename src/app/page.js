'use client'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export default function page() {

  const [isLogin, setIsLogin] = useState(false);
  const router = useRouter();
  useEffect(() => {
    isLogin ?
      router.replace('/home')
      :
      router.replace('/login')
  }, [])

  return (
    <></>
  )
}
