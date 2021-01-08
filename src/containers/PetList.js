import React, { Component } from 'react'
import PetItem from '../components/PetItem'
import { connect } from 'react-redux'
import { fetchPets } from '../actions/index'


export class PetList extends Component {
  componentDidMount(){
    this.props.fetchPets()
  }

  render() {
    const pets = this.props.pets.map(( pet, i ) => <PetItem key={i} pet={ pet } />)
    return (
      <div>
        <h3>Pet List</h3>
        <ul className="collection">
          { pets }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    pets: state.pets
  }
}


export default connect(mapStateToProps, { fetchPets })(PetList)
