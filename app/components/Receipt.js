import Image from "next/image";
import Logo from "../../public/emergent_logo.png";
import Name from "../../public/emergent_name.png";
import { FaCircleCheck } from "react-icons/fa6";

export default function Receipt() {
  return (
    <section className="flex flex-col justify-center items-center px-2">
      <main className="bg-white p-4 w-auto mt-[5rem] md:w-[30rem] shadow-2xl flex flex-col justify-center border">
        <div className="flex justify-between">
          <div>
            <h2 className="font-semibold text-[1.3rem]">Onyame Ent.</h2>
            <p>0540000001</p>
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
              src={Name}
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
              <p>2337766578887_88776</p>
              <p>2335530000001</p>
              <p>DANIEL AMOAKO</p>
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
                <td>Paid via *789*5*0#</td>
                <td className="text-right">GHS 400.00</td>
              </tr>
            </tbody>
            <tfoot className="w-full text-center">
              <tr className="text-left">
                <td>SubTotal</td>
                <td></td>
                <td className="text-right">GHS 400.00</td>
              </tr>
              <tr className="text-[22px] font-semibold">
                <td className="text-left">Total</td>
                <td></td>
                <td className="text-right">GHS 404.00</td>
              </tr>
              <tr className="border-y"></tr>
            </tfoot>
          </table>
        </div>
      </main>
      <p className="text-center my-9">Powered by Emergent Payments Africa</p>
    </section>
  );
}
