import useForm from '../hooks/form.js'

import Input from './Input.js'
import Button from './Button.js'

const UserForm = ({ submit }) => {
	const [form, handleChange, reset] = useForm({ name: '', lastName: '', email: '' })
	const handleSubmit = (e) => {
		e.preventDefault()

		submit(form)

		reset()
	}

	return (
		<form onSubmit={handleSubmit}>
			<Input
				label={'Nombre'}
				placeholder={'Nombre'}
				name={'name'}
				value={form.name}
				onChange={handleChange}
			/>
			<Input
				label={'Apellido'}
				placeholder={'Apellido'}
				name={'lastName'}
				value={form.lastName}
				onChange={handleChange}
			/>
			<Input
				label={'Correo'}
				placeholder={'Correo'}
				name={'email'}
				value={form.email}
				onChange={handleChange}
			/>

			<Button>Enviar</Button>
		</form>
	)
}

export default UserForm
