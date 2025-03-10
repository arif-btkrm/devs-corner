import { useState } from 'react'
import PrimaryButton from '../../material-ui/src/Atoms/PrimaryButton/index';
import Text from '../../material-ui/src/Atoms/Text'
import FormContaineer from '../../material-ui/src/Atoms/FormContainer/index';
import { TextField } from '@mui/material'
import Cont from '../../material-ui/src/Atoms/Container/index';
import Input from '../../material-ui/src/Atoms/InputG/index';
import { useForm } from 'react-hook-form';
function App() {
  const [count, setCount] = useState(0)
  const { control, handleSubmit, formState: { errors }, } = useForm({
    defaultValues: {
      username: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: ''
    }
  })
  return (
    <Cont>
      <div>Heoolo</div>
      <PrimaryButton />
      <Text />
      <FormContaineer>
        <Input item={{ name: 'username', type: 'text', }} control={control} />
      </FormContaineer>

    </Cont>
  )
}

export default App
