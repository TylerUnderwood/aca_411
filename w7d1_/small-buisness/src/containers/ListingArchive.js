import { connect } from 'react-redux'
import ListingArchive from '../components/ListingArchive'
// import { removeCar } from '../redux/actions'

const mapStateToProps = ( state ) => {
    return {
        user: state.user,
        business: state.business,
    }
}

// add mapDispatchToProps function here
const mapDispatchToProps = ( dispatch ) => {
    return {
        // removeCar: (index) => dispatch(removeCar(index))
    }
}

export default connect( mapStateToProps, mapDispatchToProps )(ListingArchive)