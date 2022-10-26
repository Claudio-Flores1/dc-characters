import React, { useEffect, useState } from 'react' 
import { Link } from 'react-router-dom'
import { characIndex } from '../api/charac'

const CharacIndex = ({ user, msgAlert }) => {

    const [allCharacs, setAllCharacs] = useState([])

    useEffect(() => {
        characIndex(user)
        .then(res => {
            setAllCharacs(res.data.characs)
        })
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Index Characs Failure' + error,
                variant: 'danger'
            })
        })
    }, [])

    const allCharacsJSX = allCharacs.map(charac => {
        return (
            <Link to={charac._id} key={charac._id}>
            <li>Name: {charac.name} Affiliation: {charac.affiliation}</li>
            </Link>
        )
    })

    return (
        <>
            <ul>{allCharacsJSX}</ul>
        </>
    )
}

export default CharacIndex