import React, { useEffect, useState } from 'react' 
import { useParams, useNavigate } from 'react-router-dom'
import { characDelete, characShow, characUpdate } from '../api/charac'
import CharacUpdate from './CharacUpdate'

const CharacShow = ({ user, msgAlert }) => {

    const [charac, setCharac] = useState({})
    const [isUpdateShown, setIsUpdateShown] = useState(false)
    const [deleted, setDeleted] = useState(false)

    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        characShow(user, id)
        .then((res) => {
            setCharac(res.data.charac)
        })
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Show charac Failure' + error,
                variant: 'danger'
            })
        })
    }, [])

    const toggleShowUpdate = () => {
        setIsUpdateShown(prevUpdateShown => !prevUpdateShown)
    }

    const handleChange = (event) => {
        // to keep the values as users input info 
        // first spread the current pet
        // then comma and modify the key to the value you need
        setCharac({...charac, [event.target.name]: event.target.value})
    }

    const handleUpdateCharac = () => {
        characUpdate(charac, user, id)
        .then(() => {
            msgAlert({
                heading: 'Success',
                message: 'Updating Charac',
                variant: 'success'
            })
        })
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Update Charac Failure' + error,
                variant: 'danger'
            })
        })
    }

    const handleDeleteCharac = () => {
        characDelete(user, id)
        .then(() => {
            setDeleted(true)
            msgAlert({
                heading: 'Success',
                message: 'Deleting a Charac',
                variant: 'success'
            })
            
        })
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Deleting a Charac Failure' + error,
                variant: 'danger'
            })
        })
    }

    // logical &&
    // both sides of this check NEED to be truthy values = true
    // logical ||
    // only one side of this check needs to be truthy = true

    // oneliner
    if (deleted) navigate('/characs')
    // if (deleted) {
    //     navigate('/pets')
    // }

    return (
			<>
				<h3>Name: {charac.name}</h3>
				<p>Affiliation: {charac.affiliation}</p>
				<button onClick={toggleShowUpdate}>Toggle Update</button>
				{isUpdateShown && (
					<CharacUpdate
						charac={charac}
						handleChange={handleChange}
						handleUpdateCharac={handleUpdateCharac}
					/>
				)}
                <button onClick={handleDeleteCharac} >Delete</button>
			</>
		)
}

export default CharacShow