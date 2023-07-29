import {Card, Input, Button, Typography} from "@material-tailwind/react";
import {Link, useNavigate} from "react-router-dom";
import {createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification} from "firebase/auth";
import {auth} from "../config/firebase";
import React, {useState} from "react";

export default function Signup() {

    const [user, setUser] = useState("");
    const navigate = useNavigate();

    const formSubmit = async(event) => {
        event.preventDefault();
        let email = event.target[1].value;
        let password = event.target[2].value;
        try {
            const userData = await createUserWithEmailAndPassword(auth, email, password);
            await sendEmailVerification(userData);
            setUser(userData);
        } catch (error) {
            console.log(error)
        }
    }

    onAuthStateChanged(auth, (userData) => {
        if (userData) {
            navigate('/feed');
        }
    });

    if (!user) {
        return (
            <React.Fragment>
                <Card
                    className="items-center justify-center h-80vh"
                    color="transparent"
                    shadow={false}>
                    <Typography variant="h4" color="blue-gray">
                        Sign Up
                    </Typography>
                    <Typography color="gray" className="mt-1 font-normal">
                        Enter your details to register.
                    </Typography>
                    <form onSubmit={formSubmit} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                        <div className="mb-4 flex flex-col gap-6">
                            <Input size="lg" name="name" label="Name"/>
                            <Input size="lg" name="email" label="Email"/>
                            <Input type="password" name="password" size="lg" label="Password"/>
                        </div>
                        {/* <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-blue-500"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          /> */}
                        <Button type="submit" className="mt-6" fullWidth>
                            Register
                        </Button>
                        <Typography color="gray" className="mt-4 text-center font-normal">
                            Already have an account?{" "}
                            <Link
                                to={'/login'}
                                className="font-medium text-blue-500 transition-colors hover:text-blue-700">
                                Sign In
                            </Link>
                        </Typography>
                    </form>
                </Card>
            </React.Fragment>
        );
    }
    return (
        <h1>{user.email}</h1>
    )
}