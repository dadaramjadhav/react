const apiUrl = import.meta.env.VITE_API_URL

export const checkUsername = async (username) => {
  console.log("Checking username:", username)

  // simulate network delay
  await new Promise((res) => setTimeout(res, 800))

  const takenUsernames = ["admin", "john", "react", "java"]
  return takenUsernames.includes(username.toLowerCase())
}

export async function fetchUser(userId) {
  const res = await fetch(`${apiUrl}/users/${userId}`)
  if (!res.ok) throw new Error("Failed")
  return res.json()
}
export async function fetchPosts(userId) {
  const res = await fetch(`${apiUrl}/posts?userId=${userId}`)
  if (!res.ok) throw new Error("Failed")
  return res.json()
}
export async function createUser(newUser) {
  const res = await fetch(`${apiUrl}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  })

  if (!res.ok) throw new Error("Failed to create user")
  return res.json()
}
