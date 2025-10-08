"use client"

import { useMutation, useQuery } from "convex/react"
import { api } from "@workspace/backend/_generated/api"
import { Button } from "@workspace/ui/components/button"

export default function Page() {
  const users = useQuery(api.user.getMany)
  const addUser = useMutation(api.user.add)

  return (
    <div className="flex items-center justify-center min-h-svh">
      <p>appS/WEB</p>
      <Button onClick={()=> addUser()}>Add User</Button>
      {JSON.stringify(users)}
    </div>
  )
}
