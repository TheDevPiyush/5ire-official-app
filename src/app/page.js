'use client'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export default function page() {

  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();
  useEffect(() => {
    isLogin 
      ?
      router.replace('/dashboard')
      :
      router.replace('/login')
  }, [])

  return (
    <></>
  )
}
