import { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { Link, useParams, useRoutes, useSearchParams} from "react-router-dom";
// import { FaCheck } from "react-icons/fa6";
import Lottie from 'lottie-react'
import animationData from "../../assets/check.json"


const PaymentSuccess = () => {

    const [search] = useSearchParams();

const sessionId = search.get('session_id');

// Remove the quotes around sessionId in the next line
// eslint-disable-next-line no-unused-vars
const [dynamic, setDynamic] = useState(sessionId);

useEffect(() => {
  async function fetchData() {
    try {
      // Use dynamic directly in the URL
      const response = await fetch(`http://localhost:4200/afterPayment?session_id=${dynamic}`);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  fetchData();
}, [dynamic]);


    return (
        <>

            <div className="min-h-screen bg-color-accent1 item-center text-center ">

                <div className="py-14">
                    <p className=" text-color-secondary text-2xl">Tanks, Process Payment was Successfull</p>
                    <p className="text-color-secondary text-md">We will reach out you soon</p>
                </div>

               
                    <div className="flex justify-center"> 
                        <Lottie animationData={animationData} className="w-3/12 max-sm:w-5/12"/>
                    </div>

                    <div className="flex justify-center">
                    <Link to='/' type='button' className="w-3/12 max-sm:w-5/12 flex items-center justify-center mt-5 text-md bg-color-secondary text-color-light py-4 px-3 hover:bg-color-transparent hover:text-color-secondary hover:border-color-secondary hover:border-solid hover:border-2 rounded"> 
                        Back to Home 
                    </Link>

                    </div>


            </div>
        
        </>
    )
}

export default PaymentSuccess