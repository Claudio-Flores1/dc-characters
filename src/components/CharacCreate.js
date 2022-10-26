import React, { useState } from 'react' 
import { characCreate } from '../api/charac'

const CharacCreate = ({ user, msgAlert }) => {

    const defaultCharac = {
        name: '',
        afiliation: ''
    }

    const [charac, setCharac] = useState(defaultCharac)

    const handleChange = (event) => {
        // to keep the values as users input info 
        // first spread the current pet
        // then comma and modify the key to the value you need
        setCharac({...charac, [event.target.name]: event.target.value})
    }

    const handleCreateCharac = () => {
        characCreate(charac, user)
        .then(() => {
            msgAlert({
                heading: 'Success',
                message: 'Create Character',
                variant: 'success'
            })
        })
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Create Character Failure' + error,
                variant: 'danger'
            })
        })
    }

    return (
			<>
				<input
					type='text'
					value={charac.name}
					name='name'
					onChange={handleChange}
				/>
				<input
					type='text'
					value={charac.affiliation}
					name='affiliation'
					onChange={handleChange}
				/>
				<button onClick={handleCreateCharac}>Create Character</button>
			</>
		)
}

export default CharacCreate