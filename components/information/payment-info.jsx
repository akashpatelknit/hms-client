import React from "react";
import { Card } from "../ui/card";

const PaymentInfo = () => {
  return (
    <Card className="p-3 md:p-5 ">
      <h1 className=" text-xl font-semibold py-2">Payment </h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 w-full">
        <Card className="flex items-center gap-3 p-2 ">
          <h1 className=" text-gray-500"> Hostel Fee : </h1>
          <p className=" font-semibold"></p>
        </Card>
        <Card className="flex items-center gap-3 p-2 ">
          <h1 className=" text-gray-500"> Mess Fee : </h1>
          <p className=" font-semibold"></p>
        </Card>
      </div>
    </Card>
  );
};

export default PaymentInfo;
