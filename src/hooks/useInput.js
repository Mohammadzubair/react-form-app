import { useState } from "react";

export function useInput(defaultValue, validationFN) {
  const [enteredValue, setEnteredValue] = useState(defaultValue);

  const [didEdit, setDidEdit] = useState(false);

  const valueIsValid = validationFN(enteredValue)

  function handleInputChange(event) {
    setEnteredValue(event.target.value);

    setDidEdit(false);
  }

  function handleBlur() {
    setDidEdit(true);
  }

  return {
    value: enteredValue,
    handleInputChange,
    handleBlur,
    hasError: didEdit && !valueIsValid
  }
}