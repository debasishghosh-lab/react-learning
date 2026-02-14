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
  }, [length, numbers, characters,setPassword])

  return (
    <>
      <div className='w-full max-w-md mx-auto  shadow-md rounded-lg px-4 my-8 text-center text-amber-500 bg-gray-700'>
        <h1 className='text-white text-shadow-2xs text-center'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text"
            value={password}
            placeholder='password'
            readOnly
            className='outline-amber-50 w-full py-1 px-3'
          />

        </div>
      </div>
    </>
  )
}

export default App
