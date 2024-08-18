import Image from "next/image";
import Logo from "../../public/emergent_logo.png";
import Name from "../../public/emergent_name.png";
import giftBox from "../../public/gift-box.png";
import { MdOutlineLocationSearching } from "react-icons/md";
import { TfiFaceSmile } from "react-icons/tfi";
import { VscReport } from "react-icons/vsc";

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
              className="h-[2rem] w-[2.5rem]"
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
          <div className="">Success</div>
        </div>
        <div className="mt-6 text-[0.835rem]">
          <table className="w-full">
            <thead className="border-y">
              <tr>
                <th className="text-left">Qty</th>
                <th>Description</th>
                <th className="text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr>
                <td className="text-left">x1</td>
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
              <tr className="border-y">
                <td className="flex flex-row items-center gap-1">
                  <Image
                    src={giftBox}
                    alt="gift-box"
                    className="h-[2rem] w-[2rem]"
                  />{" "}
                  <h2>Reward Points</h2>
                </td>
                <td></td>
                <td className="text-right">0 gpts</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div className="flex flex-row justify-around my-5">
          <div className="flex flex-col justify-center items-center gap-1">
            <MdOutlineLocationSearching size={20} />
            <p>Track</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-1">
            <TfiFaceSmile size={20} />
            <p>Rate</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-1">
            <VscReport size={20} />
            <p>Report</p>
          </div>
        </div>
      </main>
      <p className="text-center my-9">
        Do more from your phone, shopping, payment orders, receipts and rewards.
        All in one app
      </p>
    </section>
  );
}
