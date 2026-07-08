import { useForm, Controller } from "react-hook-form"
import { Listbox } from "@headlessui/react"

const skills = [
  { id: 1, name: "Beginner" },
  { id: 2, name: "Intermediate" },
  { id: 3, name: "Advanced" },
]

export default function SkillForm() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      skillLevel: skills[0],
    },
  })

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="skillLevel"
        control={control}
        rules={{ required: "Skill is required" }}
        render={({ field }) => (
          <Listbox value={field.value} onChange={field.onChange}>
            <Listbox.Button className="border p-2">{field.value.name}</Listbox.Button>

            <Listbox.Options className="border mt-1">
              {skills.map((skill) => (
                <Listbox.Option key={skill.id} value={skill}>
                  {skill.name}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Listbox>
        )}
      />

      <button type="submit">Submit</button>
    </form>
  )
}
