import { signInWithGoogle } from "../service/firebase";
import '../App.css';

const Login = () => {
    return (
        <div>
            <button className="button" onClick={signInWithGoogle}> <i className="fa fa-google"></i>Sign in with google</button>
        </div>
    );
};

export default Login;