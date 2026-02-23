"use client";

import Image from "next/image";
import { FaCircleCheck, FaPhone, FaHeadset } from "react-icons/fa6";
import { useMemo } from "react";
import { useSearchParams } from "next/navigation";

function getFormattedDate() {
  const newDate = new Date();
  const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  const month = monthNames[newDate.getMonth()];
  const day = newDate.getDate();
  const daySuffix =
    day % 10 === 1 && day !== 11 ? "st"
    : day % 10 === 2 && day !== 12 ? "nd"
    : day % 10 === 3 && day !== 13 ? "rd"
    : "th";
  let hours = newDate.getHours();
  const minutes = String(newDate.getMinutes()).padStart(2, "0");
  const ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12 || 12;
  return `${month} ${day}${daySuffix} ${newDate.getFullYear()}, ${String(hours).padStart(2, "0")}:${minutes} ${ampm}`;
}

export default function Home() {
  const searchParams = useSearchParams();
  const date = useMemo(() => getFormattedDate(), []);

  return (
    <main className="min-h-screen flex justify-center items-center bg-[#e8e8e8] py-12 px-4">
      <section className="w-full max-w-[30rem]">
        <div className="rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-white p-6 md:p-8 flex flex-col gap-6">
          {/* Header */}
          <div className="flex justify-between items-start">
            <div className="min-w-0">
              <h1 className="font-bold text-base md:text-lg text-gray-800 uppercase tracking-tight">
                {searchParams.get("merchant") || "AFRIKIKO LEISURE LIMITED"}
              </h1>
              <p className="text-xs text-gray-500 mt-0.5">{date}</p>
            </div>
            <div className="flex items-center shrink-0">
              <Image
                src="/full emergent logo.png"
                alt="Emergent Payments"
                width={160}
                height={54}
                className="h-12 w-auto object-contain"
                priority
              />
            </div>
          </div>
          <div className="border-b border-gray-200" />

          {/* Transaction details */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            <div>
              <p className="text-gray-400 uppercase text-xs tracking-wide">
                Receipt #
              </p>
              <p className="font-semibold text-gray-800 mt-0.5">
                {searchParams.get("trans_ref_no") || "—"}
              </p>
            </div>
            <div>
              <p className="text-gray-400 uppercase text-xs tracking-wide">
                Customer Number
              </p>
              <p className="font-semibold text-gray-800 mt-0.5">
                {searchParams.get("mobile") || "—"}
              </p>
            </div>
            <div>
              <p className="text-gray-400 uppercase text-xs tracking-wide">
                Customer Name
              </p>
              <p className="font-semibold text-gray-800 mt-0.5 break-words">
                {searchParams.get("name") || "—"}
              </p>
            </div>
          </div>

          {/* Transaction status */}
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-400 uppercase tracking-wide">
              Transaction Status
            </span>
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500 text-white text-sm font-medium"
              role="status"
            >
              <FaCircleCheck className="w-4 h-4" />
              Success
            </span>
          </div>

          {/* Transaction items table */}
          <div className="border-t border-b border-gray-200 pt-4 pb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-gray-400 uppercase text-xs tracking-wide">
                  <th className="text-left py-2 font-medium">Type</th>
                  <th className="text-left py-2 font-medium">Description</th>
                  <th className="text-right py-2 font-medium">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-gray-800">
                  <td className="py-2.5 font-medium">Payment</td>
                  <td className="py-2.5">
                    {searchParams.get("payment_mode") || "Mobile Money (MTN)"}
                  </td>
                  <td className="py-2.5 text-right font-medium">
                    GHS {searchParams.get("amount") || "0.00"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Summary */}
          <div className="space-y-2 text-sm">
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Subtotal</span>
              <span className="font-medium text-gray-800">
                GHS {searchParams.get("amount") || "0.00"}
              </span>
            </div>
            <div className="flex justify-between items-baseline pt-1">
              <span className="text-gray-500 font-medium">Total Amount</span>
              <span className="font-bold text-lg text-black">
                GHS {searchParams.get("amount") || "0.00"}
              </span>
            </div>
          </div>

          </div>

          {/* Footer – greyish section */}
          <div className="bg-gray-100 rounded-b-2xl px-6 py-3 text-center shadow-[0_4px_6px_-2px_rgba(0,0,0,0.05)]">
            <p className="text-gray-400 text-xs">
              Transaction processed securely. Keep this receipt for your records.
            </p>
          </div>
        </div>

        {/* Powered by + contact footer */}
        <footer className="mt-8 text-center">
          <p className="text-gray-400 text-sm">
            Powered by{" "}
            <span className="font-semibold text-gray-600">
              Emergent Payments GH
            </span>
          </p>
          <div className="mt-3 flex items-center justify-center gap-3 text-gray-400 text-sm">
            <span className="inline-flex items-center gap-1.5">
              <FaPhone className="w-3.5 h-3.5" />
              0302263016
            </span>
            <span className="h-4 w-px bg-gray-300" aria-hidden />
            <span className="inline-flex items-center gap-1.5">
              <FaHeadset className="w-3.5 h-3.5" />
              Contact Support
            </span>
          </div>
        </footer>
      </section>
    </main>
  );
}
