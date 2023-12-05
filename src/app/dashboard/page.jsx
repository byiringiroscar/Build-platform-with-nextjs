"use client"
import useSWR from 'swr'
import React, { useEffect, useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"

const Dashboard = () => {
  // const [data, setData] = useState([]);
  // const [err, setErr] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const getData  = async () => {
  //     setIsLoading(true)
  //     const res = await fetch('https://jsonplaceholder.typicode.com/posts', 
  //     { cache: 'no-store' }
  //     )
     
  //     if (!res.ok) {
  //       // This will activate the closest `error.js` Error Boundary
  //       setErr(true)
  //     }
  //     const data = await res.json()
  //     setData(data);
  //     setIsLoading(false)
  //   }
  //   getData();

  // }, [])

  // console.log(data)
  // const { data: session, status } = useSession()
  // const userEmail = session?.user?.email

  const session  = useSession();
  console.log(session)
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)

  console.log(data)
  if (status === "loading") {
    return <p>Hang on there...</p>
  }
  return (
    <div>
       Dashboard
    </div>
  )
}

export default Dashboard
