import {Button} from "@material-tailwind/react";
import React from "react";

export default function Landing() {
    return (
        <React.Fragment>
            <div className="flex h-screen justify-center align-middle">
                <div className="flex flex-col items-center justify-center gap-4 h-80vh">
                    <h1 className="scroll-m-20 text-center text-4xl lg:text-5xl text-blue-600">
                        Social Media for Devs
                    </h1>
                    <div className="flex items-center gap-4">
                        <a href="#buttons-with-link">
                            <Button ripple={true} variant="gradient">Sign Up</Button>
                        </a>
                        <a href="#buttons-with-link">
                            <Button variant="outlined">Learn More</Button>
                        </a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}