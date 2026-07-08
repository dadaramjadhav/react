import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import React from "react"
import { createUser, fetchPosts, fetchUser } from "./api"

const Users = () => {
  const queryClient = useQueryClient()

  const userQuery = useQuery({
    queryKey: ["users", 1],
    queryFn: () => fetchUser(1),
    staleTime: 1000 * 3,
  })
  const postsQuery = useQuery({
    queryKey: ["posts", 1],
    queryFn: () => fetchPosts(1),
    enabled: !!userQuery.data,
  })
  const createUserMutation = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      // 🔁 Re-fetch users after successful mutation
      queryClient.invalidateQueries({ queryKey: ["users"] })
    },
  })

  if (userQuery.isLoading) return <p>Loading user...</p>
  if (userQuery.isError) return <p>User error</p>

  if (postsQuery.isLoading) return <p>Loading posts...</p>
  if (postsQuery.isError) return <p>Posts error</p>
  return (
    <div>
      <h2>Username: {userQuery.data.name}</h2>
      <ul>
        <button
          onClick={() =>
            createUserMutation.mutate({
              name: "New User",
              email: "new@user.com",
            })
          }>
          Add User
        </button>
        {createUserMutation.isLoading && <p>Creating user...</p>}

        {postsQuery.data.map((post) => (
          <li key={post.id}>
            {post.id}.{post.title}
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Users
