import React from 'react'

const CharacUpdate = ({ charac, handleChange, handleUpdateCharac }) => {
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
            value={charac.type} 
            name='type' 
            onChange={handleChange} 
            />
			<button onClick={handleUpdateCharac}>Update Character</button>
		</>
	)
}

export default CharacUpdate