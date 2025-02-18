export const validateValue = (
  value: string, 
  setValue: React.Dispatch<React.SetStateAction<string>>, 
  setError: React.Dispatch<React.SetStateAction<string>>
) => {
  if (/^\d*\.?\d*$/.test(value) && value[0] !== "-") {
    setValue(value);
    setError(""); 
  } else {
    setError("Por favor, insira um valor válido e não negativo.");

    setTimeout(() => {
      setError("");
    }, 3000);
  }
};
