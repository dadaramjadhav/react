import React, { useState } from "react"
import { useForm, FormProvider } from "react-hook-form"
import Step1 from "./Step1"
import Step2 from "./Step2"
import Step3 from "./Step3"

export default function MultiStepForm() {
  const methods = useForm({
    mode: "onTouched",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  })

  const [step, setStep] = useState(1)

  return (
    <FormProvider {...methods}>
      <form autoComplete="off">
        {step === 1 && <Step1 onNext={() => setStep(2)} />}
        {step === 2 && <Step2 onNext={() => setStep(3)} onBack={() => setStep(1)} />}
        {step === 3 && <Step3 onBack={() => setStep(2)} />}
      </form>
    </FormProvider>
  )
}
