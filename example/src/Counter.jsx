import React, { useRef, useState } from "react"

const Counter = () => {
  const [count, setCount] = useState(0)
  const [user, setUser] = useState({ name: "dm", age: 44 })
  const [hobbies, setHobbies] = useState(["swimming", "trekking", "cycling"])
  const [hobby, setHobby] = useState("")
  const inputRef = useRef(null)
  const handleAddHobby = () => {
    setHobbies([...hobbies, hobby])
  }
  const increment = () => {
    setCount((prev) => prev + 1)
    setCount((prev) => prev + 1)
  }
  function decrement() {
    setCount((prev) => prev - 1)
    setCount((prev) => prev - 1)
  }
  return (
    <>
      <div>Counter: current value of counter: {count}</div>
      <button onClick={() => increment()} className="py-2 px-4 bg-blue-500 text-white rounded">
        increment
      </button>
      <button onClick={() => decrement()} className="py-2 px-4 bg-blue-500 text-white rounded">
        decrement
      </button>
      <br />
      <br />
      <br />
      <br />
      User: {user.name}......{user.age}
      <br />
      <button onClick={() => setUser({ ...user, age: 43 })} className="py-2 px-4 bg-blue-500 text-white rounded">
        update age
      </button>
      <button onClick={() => setUser({ ...user, name: "DM" })} className="py-2 px-4 bg-blue-500 text-white rounded">
        update name
      </button>
      <hr />
      Hobbies:
      <ul>
        {hobbies.map((h, i) => {
          return (
            <>
              <li key={i}>{h}</li>
              ...
              <button
                onClick={() => {
                  const newHobbies = hobbies.filter((_, index) => index !== i)
                  setHobbies(newHobbies)
                }}
                className="py-2 px-4 bg-blue-500 text-white rounded">
                remove
              </button>
            </>
          )
        })}
      </ul>
      <input
        name="hobby"
        onChange={(e) => setHobby(e.target.value)}
        className="py-2 px-4 border border-gray-300 rounded"></input>
      <button onClick={handleAddHobby} className="py-2 px-4 bg-blue-500 text-white rounded">
        add hobby
      </button>
      <hr />
      <input ref={inputRef} className="py-2 px-4 border border-gray-300 rounded" />
      <button
        onClick={() => {
          inputRef.current.focus()
        }}
        className="py-2 px-4 bg-blue-500 text-white rounded">
        focus input
      </button>
    </>
  )
}

export default Counter
