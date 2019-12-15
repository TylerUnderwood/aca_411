import { connect } from 'react-redux'
import Login from '../components/Login'
import { login } from '../redux/actions'


const mapDispatchToProps = ( dispatch ) => {
    return {
        login: ( ) => dispatch( login( ) )
    }
}

export default connect( null, mapDispatchToProps )(Login)