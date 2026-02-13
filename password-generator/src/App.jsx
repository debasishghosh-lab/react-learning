import { useCallback, useState } from 'react'

function App() {
  const [length, setlength] = useState(8)
  const[numbers, setNumbers] = useState(false)
  const[characters, setCharacters] = useState(false)
  const[password, setPassword] = useState('')

  const generatePassword = useCallback(() => {
    let generatedPassword = ''
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const numbersString = '0123456789'
    const specialCharacters = '!@#$%^&*()-+'

    let charactersSet = letters

    if(numbers) {
      charactersSet += numbersString
    }

    if(characters) {
      charactersSet += specialCharacters
    }

    for(let i=0; i<length; i++) {
      const randomIndex = Math.floor(Math.random() * charactersSet.length)
      generatedPassword += charactersSet[randomIndex]
    }

    setPassword(generatedPassword)
  }, [length, numbers, characters])

  return (
    <>

    </>
  )
}

export default App
