let id = 0

export default (state = [{name: "Felix", age: 4, species: "cockatiel"}], action) => {
    const newPet = () => {
        return {
            ...action.payload,
            id: id++
        }
    }
    switch(action.type){
        case "ADD_PET":
            return [...state, newPet()]
        case "REMOVE_PET":
            let newPets = state.filter(pet => pet.id !== action.payload)
            return [...newPets]
        case "EDIT_PET":
            // do something
        default:
            return state
    }
}