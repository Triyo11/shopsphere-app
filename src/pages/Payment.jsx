// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoArrowBackCircle } from "react-icons/io5";
import Header from "../components/macro/Header";
import Footer from "../components/macro/Footer";
import ProcessPayment from "../components/macro/ProcessPayment";

import {
  getProvinceOngkir,
  getCityOngkir,
  getCostOngkir,
} from "../../utils/rajaongkirApiFetch";

export default function Payment() {
  const [provinceOngkirData, setProvinceOngkirData] = useState([]);
  const [cityOngkirData, setCityOngkirData] = useState([]);
  const [costOngkirData, setCostOngkirData] = useState([]);
  const [total, setTotal] = useState(0);

  // State untuk menyimpan id provinsi dan city yang dipilih
  const [selectedProvinceId, setSelectedProvinceId] = useState(5);
  const [selectedCityId, setSelectedCityId] = useState(39);
  const [selectedExpedisi, setSelectedExpedisi] = useState("jne");
  const [selectedService, setSelectedService] = useState(0);

  // Fungsi untuk menangani perubahan pilihan provinsi dan kota
  const handleProvinceChange = (event) => {
    setSelectedProvinceId(event.target.value);
  };
  const handleCityChange = (event) => {
    setSelectedCityId(event.target.value);
  };
  const handleExpedisiChange = (event) => {
    setSelectedExpedisi(event.target.value);
  };
  const handleServiceChange = (event) => {
    setSelectedService(event.target.value);
  };

  // get province list
  useEffect(() => {
    const fetchProvinceOngkir = async () => {
      const data = await getProvinceOngkir();
      setProvinceOngkirData(data.rajaongkir.results);
    };
    fetchProvinceOngkir();
  }, []);

  // get Cities list
  useEffect(() => {
    const fetchCityOngkir = async () => {
      if (selectedProvinceId) {
        const data = await getCityOngkir(selectedProvinceId);
        setCityOngkirData(data.rajaongkir.results);
      }
    };
    fetchCityOngkir();
  }, [selectedProvinceId]);

  // get Cost list
  useEffect(() => {
    const fetchCostOngkir = async () => {
      if (selectedCityId) {
        const data = await getCostOngkir(501, selectedCityId, selectedExpedisi);
        setCostOngkirData(data.rajaongkir.results[0].costs);
      }
    };
    fetchCostOngkir();
  }, [selectedCityId, selectedExpedisi, selectedService]);

  console.log(costOngkirData);

  // Menghitung total harga
  const subtotal = 45000;
  useEffect(() => {
    const total = subtotal + Number(selectedService);
    setTotal(total);
  }, [selectedService]);

  return (
    <div>
      <Header />
      <div className="min-h-screen items-center flex flex-wrap justify-center bg-color-light text-color-secondary">
        <div className="flex w-full justify-around max-sm:mb-2 md:mb-0">
          <div className="max-sm:mt-2 mt-3">
            <Link
              to="/"
              type="button"
              className=" border-color-primary border-2 text-color-light text-md rounded-2xl my-2 px-2 max-sm:px-1 max-sm:py-1 max-sm:text-sm hover:border-color-secondary  hover:text-color-light"
            >
              <IoArrowBackCircle className="text-4xl fill-color-primary hover:fill-color-secondary max-sm:text-2xl" />
            </Link>
          </div>

          <h1 className="text-4xl justify-center text-center max-sm:text-2xl max-sm:mt-3 md:mt-3 lg:mb-3">
            Payment
          </h1>

          <div></div>
        </div>

        <div
          className="w-10/12 px-14 py-5 glass flex justify-between gap-1 mx-24 mb-24  max-sm:block max-sm:pl-2 max-sm:pr-2 max-sm:mx-10 max-sm:w-11/12 max-sm:py-2 max-sm:mb-32
        md:mt-2 md:py-1 md:w-11/12 md:block md:mb-40 lg:flex 
        "
        >
          <div className="w-11/12 my-3 ml-14 mr-4  max-sm:my-0 max-sm:w-full max-sm:mr-0  max-sm:ml-0 max-sm:py-2 md:w-full md:mr-0 md:ml-0 ">
            <form
              action=""
              className="inline-block py-4 max-sm:w-full  md:w-full lg:w-11/12"
            >

              <div className="py-3 max-sm:w-full md:w-full lg:w-full ">
                <label htmlFor="" className="text-2xl py-3">Address</label>
                <textarea name="" id="" cols="20" rows="4" className="block  bg-color-accent1 pl-2 pr-2 rounded outline-none max-sm:w-full md:w-full lg:w-full"></textarea>
               
              </div>

              <div className="py-3 max-sm:w-full md:w-full lg:w-full">
                <label htmlFor="" className="text-2xl py-3">
                  Province
                </label>
                <select
                  onChange={handleProvinceChange}
                  id=""
                  className="block w-80 h-12 bg-color-accent1 pl-2 pr-2 rounded outline-none max-sm:w-full md:w-full lg:w-full"
                >
                  <option disabled selected>
                    {" "}
                    Choose province
                  </option>
                  {provinceOngkirData.map((province, index) => (
                    <option key={index} value={province.province_id}>
                      {province.province}
                    </option>
                  ))}
                </select>
              </div>

              
              <div className="py-3  max-sm:w-full md:w-full lg:w-full">
                <label htmlFor="" className="text-2xl py-3">
                  City
                </label>
                <select
                  onChange={handleCityChange}
                  className="block w-80 h-12 bg-color-accent1 pl-2 pr-2 rounded outline-none max-sm:w-full md:w-full lg:w-full"
                  id=""
                >
                  <option disabled selected>
                    Choose City
                  </option>
                  {cityOngkirData.map((city, index) => (
                    <option key={index} value={city.city_id}>
                      {city.city_name}
                    </option>
                  ))}
                </select>
              </div>


              <div className="py-3 mt-3 max-sm:w-full md:w-full lg:w-full border-2 border-solid border-color-secondary">

              

              <div className="py-3 px-3 max-sm:w-full md:w-full lg:w-full">
                <h1 className="mb-3">Seller 1</h1>
                
                <div className="flex flex-wrap justify-between">
                    
                    <div className="flex gap-4 max-sm:gap-2">
                      <div className="w-24 h-20 mb-2 mr-2 border-2 border-solid border-color-secondary">
                        <img src="" alt="" />
                      </div>
                      <div>
                        <p className="text-2xl ">Product 2</p>
                        <p >Qty: 2</p>
                        <p >Rp. 35000</p>
                      
                      </div>

                    </div>
                  </div>

                  <div className="flex flex-wrap justify-between">
                    
                    <div className="flex gap-4 max-sm:gap-2">
                      <div className="w-24 h-20 mb-2 mr-2 border-2 border-solid border-color-secondary">
                        <img src="" alt="" />
                      </div>
                      <div>
                        <p className="text-2xl">Product 2</p>
                        <p >Qty: 2</p>
                        <p >Rp. 35000</p>
                      </div>

                    </div>
                    
                  </div>
              </div>


              <div className="py-3 px-3 max-sm:w-full md:w-full lg:w-full">
                <label htmlFor="" className="text-2xl mb-3">
                  Curier
                </label>
                <select
                  onChange={handleExpedisiChange}
                  className="block w-80 h-12 bg-color-accent1 pl-2 pr-2 rounded outline-none max-sm:w-full md:w-full lg:w-full"
                  id=""
                >
                  <option selected disabled>
                    Choose Curier
                  </option>
                  <option value="jne">JNE</option>
                  <option value="tiki">Tiki</option>
                  <option value="pos">Pos</option>
                </select>
              </div>

              <div className="py-3 px-3 max-sm:w-full md:w-full lg:w-full">
                <label htmlFor="" className="text-2xl mb-3">
                  Service
                </label>
                <select
                  onChange={handleServiceChange}
                  className="block w-80 h-12 bg-color-accent1 pl-2 pr-2 rounded outline-none max-sm:w-full md:w-full lg:w-full"
                  id=""
                >
                  <option selected disabled>
                    Choose Service
                  </option>
                  {costOngkirData.map((service, index) => (
                    <option key={index} value={service.cost[0].value}>
                      {service.service}: Rp. {service.cost[0].value} - Estimate:{" "}
                      {service.cost[0].etd} days
                    </option>
                  ))}
                </select>
              </div>
              </div>
            </form>
          </div>

          <div className="w-11/12 my-14 flex justify-between mx-8  max-sm:my-4 max-sm:w-full max-sm:py-2 max-sm:mx-1 md:w-full  lg:w-full ">
            <div className="text-2xl max-sm:text-sm w-full md:w-full md:text-2xl lg:w-full ">
              <p className="text-center text-sm mb-8">Description</p>
              <div className="w-10/15 flex justify-between gap-24  mb-5 max-sm:gap-2 max-sm:w-full md:w-full lg:w-full">
                <div>Sub Total:</div>
                <div className="px-20 max-sm:px-5 lg:px-3">Rp {subtotal}</div>
              </div>
              <div className="w-10/15 flex justify-between gap-24  mb-3 max-sm:gap-2 max-sm:w-full md:w-full lg:w-full">
                <div>Shipping Cost:</div>
                <div className="px-20 max-sm:px-5 lg:px-3">
                  Rp {selectedService}
                </div>
              </div>
              <div className="border-b-color-secondary border-b-4 mb-3 max-sm:gap-2 max-sm:w-full md:w-full"></div>
              <div className="w-10/15 flex justify-between gap-24 ">
                <div className="text-3xl max-sm:text-2xl">Total:</div>
                <div className="px-20 max-sm:px-5 lg:px-3">Rp {total}</div>
              </div>

              <div className="flex justify-center mt-5">
                    <ProcessPayment/>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
