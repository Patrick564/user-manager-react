import { useState } from 'react'

import Card from './components/Card.js'
import Container from './components/Container.js'
import UserForm from './components/UserForm.js'

const App = () => {
	const [users, setUsers] = useState([])

	const submit = (user) => {
		setUsers([
			...users,
			user,
		])
	}

	return (
		<div style={{ marginTop: '15%' }}>
			<Container>
				<Card>
					<div style={{ padding: 20 }}>
						<UserForm submit={submit} />
					</div>
				</Card>

				<Card>
					<ul>
						{users.map(x =>
							<li key={x.email}>{`${x.name} ${x.lastName} ${x.email}`}</li>
						)}
					</ul>
				</Card>
			</Container>
		</div>
	)
}

export default App
