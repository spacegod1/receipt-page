"use client";

import Image from "next/image";
import Logo from "/public/emergent_logo.png";
import Name1 from "/public/emergent_name.png";
import { FaCircleCheck } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();

  useEffect(() => {
    async function fetchData() {
      const apiUrl = `https://receipt.emergentsms.com${searchParams.toString()}`;
      const response = await fetch(apiUrl);
      const data = await response.json();
      setTransData(data);
    }
  }, [searchParams]);

  const [transData, setTransData] = useState({
    trans_ref_no: "",
    name: "",
    email: "",
    mobile: "",
    status_code: "",
    payment_mode: "",
  });

  return (
    <main className="flex justify-center items-center">
      <section className="flex flex-col justify-center items-center px-2">
        <main className="bg-white p-4 w-auto mt-[5rem] md:w-[30rem] shadow-2xl flex flex-col justify-center border">
          <div className="flex justify-between">
            <div>
              <h2 className="font-semibold text-[1.3rem]">EP Test Ent.</h2>
              <p>0540000002</p>
              <p>July 25th 2024, 10:03:19 pm</p>
            </div>
            <div className="flex p-2">
              <Image
                src={Logo}
                className="h-[2.2rem] w-[2.5rem]"
                alt="Emergent Payment logo"
                priority
              />
              <Image
                src={Name1}
                className="h-[2.2rem] w-[4.7rem]"
                alt="Emergent Payment brand name"
                priority
              />
            </div>
          </div>
          <div className="flex justify-between my-3">
            <div>
              <p>Receipt #</p>
              <p>Customer Number</p>
              <p>Customer Name</p>
            </div>
            <div>
              <div className="text-right">
                <p>{transData.trans_ref_no}</p>
                <p>{transData.mobile}</p>
                <p>{transData.name}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <h3>Status</h3>
            <div className="flex justify-center items-center py-1 rounded-md gap-1 w-[6rem] bg-[#FF9A00] text-white">
              <FaCircleCheck />
              <h3 className="text-[14px]">Success</h3>
            </div>
          </div>
          <div className="mt-6 text-[0.835rem]">
            <table className="w-full">
              <thead className="border-y">
                <tr>
                  <th className="text-left"></th>
                  <th>Description</th>
                  <th className="text-right">Amount</th>
                </tr>
              </thead>
              <tbody className="text-center">
                <tr>
                  <td className="text-left"></td>
                  <td>{transData.payment_mode}</td>
                  <td className="text-right">Paid</td>
                </tr>
              </tbody>
              <tfoot className="w-full text-center">
                <tr className="text-left">
                  <td>SubTotal</td>
                  <td></td>
                  <td className="text-right">GHS {transData.email}</td>
                </tr>
                <tr className="text-[22px] font-semibold">
                  <td className="text-left">Total</td>
                  <td></td>
                  <td className="text-right">
                    <span className="text-[17px]">GHS</span> {transData.email}
                  </td>
                </tr>
                <tr className="border-y"></tr>
              </tfoot>
            </table>
          </div>
        </main>
        <p className="text-center my-9">Powered by Emergent Payments Africa</p>
      </section>
    </main>
  );
}
