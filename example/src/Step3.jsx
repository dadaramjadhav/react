import { useFormContext } from "react-hook-form"

export default function Step3({ onBack }) {
  const { getValues, handleSubmit } = useFormContext()

  const onSubmit = (data) => {
    console.log("Final Submit:", data)
  }

  return (
    <>
      <h3>Step 3: Review</h3>

      <pre>{JSON.stringify(getValues(), null, 2)}</pre>

      <button type="button" onClick={onBack}>
        Back
      </button>
      <button onClick={handleSubmit(onSubmit)}>Submit</button>
    </>
  )
}
