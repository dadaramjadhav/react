import React from "react"

const users = [
  { id: 1, name: "Amit Sharma", email: "amit@gmail.com", role: "Admin" },
  { id: 2, name: "Priya Singh", email: "priya@gmail.com", role: "User" },
  { id: 3, name: "Rahul Verma", email: "rahul@gmail.com", role: "Manager" },
  { id: 4, name: "Neha Patel", email: "neha@gmail.com", role: "User" },
]
const UserPage = () => {
  return (
    <>
      <hr />
      image:
      <img src="../assets/image.jpg" alt="User" className="w-full h-64 object-cover rounded-lg mb-6" />
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">User page</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {users.map((user, id) => (
            <div
              key={id}
              className="bg-white rounded-lg shadow p-5 hover:shadow-lg transition min-h-[300px] flex flex-col">
              <div className="flex-1    text-center">
                <h2 className="text-lg font-semibold">{user.name}</h2>
                <p className="text-gray-600 text-sm">{user.email}</p>
                <span className="inline-block mt-3 px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-700">
                  {user.role}
                </span>
              </div>
              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-2xl hover:bg-blue-700">
                View Profile
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="overflow-x-auto p-4">
        <table className="min-w-full border border-gray-200 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border">Name</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border">Email</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border">Role</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border">{user.name}</td>
                <td className="px-4 py-2 border">{user.email}</td>
                <td className="px-4 py-2 border">{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default UserPage
