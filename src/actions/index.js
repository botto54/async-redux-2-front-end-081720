export const fetchPets = () => {
    return(dispatch) => {
        return fetch('http://localhost:3000/pets')
        .then(resp => resp.json())
        .then(pets => {
            dispatch({ type: "SET_PETS", payload: pets })
        })
    }
}


export const addPet = pet => {
    return(dispatch) => {
        return fetch('http://localhost:3000/pets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({pet:pet})
        })
        .then(resp => resp.json())
        .then(pet => {
            dispatch({ type: "ADD_PET", payload: pet })
        })
    }
}

export const removePet = petID => {
    return(dispatch) => {
        return fetch(`http://localhost:3000/pets/${petID}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(pet => {
            dispatch({ type: "REMOVE_PET", payload: pet.id })
        })
    }
}

