import { SignUp } from '@clerk/clerk-react'
import './signUpPage.css'

const SingUpPage = () => {
    return(
        <div className='singUpPage'>
            <SignUp path="/sign-up" signInUrl='sign-in' />
              </div>
    )
    }

    export default SingUpPage