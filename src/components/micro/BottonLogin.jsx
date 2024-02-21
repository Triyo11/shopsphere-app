// eslint-disable-next-line no-unused-vars
import { useNavigate } from "react-router-dom";


export default function BottonLogin() {
  const navigate = useNavigate();
  const handleLogin = () => {
    // Handle login logic
    console.log('Login button clicked');
    // Add your login logic here
    navigate('/');
  }

  return (
    <div>
        <div className="mx-5 my-7 py-2 text-center">
            <button onClick={handleLogin} className=" text-center   w-full h-[40px] rounded-sm bg-color-secondary text-color-light hover:bg-color-light hover:text-color-secondary ">Login</button>
        </div>
    </div>
  )
}
