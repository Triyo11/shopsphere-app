import axios from "axios";
// import { UseSelector, useSelector } from "react-redux";

const url = "http://localhost:5000";

const ProcessPayment =() => {


    const handleCheckout = () => {
       

        axios.post(`${url}/stripe`,{
         
        }).then((res) => {
            if(res.data.url){
                window.location.href = res.data.url
            }
        }).catch((err) => {
            console.log(err.message);
        })
    }

    return(
        <>
        
        <button className='bg-color-primary text-color-light px-4 py-3 mt-5 text-sm hover:bg-color-secondary hover:text-color-light rounded mx-auto my-10'onClick={() => handleCheckout()}>Process Payment</button>
        
        </>
    );
}

export default ProcessPayment;
