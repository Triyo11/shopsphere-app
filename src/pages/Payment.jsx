// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoArrowBackCircle } from "react-icons/io5";
import Header from "../components/macro/Header";
import Footer from "../components/macro/Footer";
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
        <div className="flex w-11/12 justify-around">
          <div className="">
            <Link
              to="/"
              type="button"
              className=" border-color-primary border-2 text-color-light text-md rounded-2xl my-2 px-2 py-2 hover:border-color-secondary  hover:text-color-light"
            >
              <IoArrowBackCircle className="text-4xl fill-color-primary hover:fill-color-secondary" />
            </Link>
          </div>

          <h1 className="text-4xl justify-center text-center">Payment</h1>

          <div></div>
        </div>

        <div className="w-10/12 px-14 py-8 glass flex justify-between gap-1 mx-24 mb-24">
          <div className="w-11/12 my-3 ml-14 mr-4">
            <form action="" className="inline-block py-4">
              <div className="py-3">
                <label htmlFor="" className="text-2xl py-3">
                  Province
                </label>
                <select
                  onChange={handleProvinceChange}
                  id=""
                  className="block w-80 h-12 bg-color-accent1 px-4  outline-none"
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

              <div className="py-3">
                <label htmlFor="" className="text-2xl py-3">
                  City
                </label>
                <select
                  onChange={handleCityChange}
                  className="block w-80 h-12 bg-color-accent1 px-4  outline-none"
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

              <div className="py-3">
                <label htmlFor="" className="text-2xl mb-3">
                  Curier
                </label>
                <select
                  onChange={handleExpedisiChange}
                  className="block w-80 h-12 bg-color-accent1 px-4  outline-none"
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

              <div className="py-3">
                <label htmlFor="" className="text-2xl mb-3">
                  Service
                </label>
                <select
                  onChange={handleServiceChange}
                  className="block w-80 h-12 bg-color-accent1 px-4  outline-none"
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
            </form>
          </div>

          <div className="w-11/12 my-14 flex justify-between mx-8">
            <div className="text-2xl ">
              <p className="text-center text-sm mb-5">Description</p>
              <div className="w-10/15 flex justify-between gap-24  mb-5">
                <div>Sub Total:</div>
                <div className="px-20">Rp {subtotal}</div>
              </div>
              <div className="w-10/15 flex justify-between gap-24  mb-3">
                <div>Shipping Cost:</div>
                <div className="px-20">Rp {selectedService}</div>
              </div>
              <div className="border-b-color-secondary border-b-4 mb-3"></div>
              <div className="w-10/15 flex justify-between gap-24 ">
                <div className="text-3xl">Total:</div>
                <div className="px-20">Rp {total}</div>
              </div>

              <div className="flex justify-center mt-3">
                <button className="bg-color-primary text-color-light px-4 py-3 mt-5 text-sm hover:bg-color-secondary hover:text-color-light rounded">
                  Process Payment
                </button>
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
