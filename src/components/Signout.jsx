import { useNavigate } from "react-router-dom"

export default function Signout(){
    const navigate = useNavigate();
    navigate('/login',{replace:true});
    return(
        <>hello</>
    );
}