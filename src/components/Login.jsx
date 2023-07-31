import {Card, Input, Button, Typography} from "@material-tailwind/react";
import {onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth";
import {Link, useNavigate} from "react-router-dom";
import {auth} from "../config/firebase";
import {useState} from "react";

export default function Login() {

    const [user, setUser] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const login = () => {
        signInWithEmailAndPassword(auth, email, password).then(userData => {
            setUser(userData);
        }).catch(error => {
            console.log(error);
        })
    }

    onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
          navigate('/feed')
        }
    });

    if (!user) {
        return (
            <Card
                className="items-center justify-center h-80vh"
                color="transparent"
                shadow={false}>
                <Typography variant="h4" color="blue-gray">
                    Sign In
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Enter your credentials to sign in.
                </Typography>
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <div className="mb-4 flex flex-col gap-6">
                        <Input
                            onChange={e => {
                            setEmail(e.target.value)
                        }}
                            name="email"
                            size="lg"
                            label="Email"/>
                        <Input
                            onChange={e => {
                            setPassword(e.target.value)
                        }}
                            name="password"
                            type="password"
                            size="lg"
                            label="Password"/>
                    </div>
                    <Button onClick={login} className="mt-6" fullWidth>
                        Login
                    </Button>
                    <Typography color="gray" className="mt-4 text-center font-normal">
                        Don&apos;t have a account?{" "}
                        <Link
                            to={'/signup'}
                            className="font-medium text-blue-500 transition-colors hover:text-blue-700">
                            Sign Up
                        </Link>
                    </Typography>
                </form>
            </Card>
        );
    }
    return (
        <h1>{user.email}</h1>
    )
}