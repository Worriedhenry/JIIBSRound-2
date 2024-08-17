import React from "react";

export default function Billing({setIsModalOpen}) {
    return (
        <div className="py-6 gap-y-6 flex flex-col" >
            <h1 className="text-2xl font-bold md:text-3xl">Billing</h1>
            <div className="gap-y-2 flex flex-col">
                <h2 className="font-bold md:text-lg text-md" >Billing Type</h2>
                <p className="text-sm text-black">Pay Per Trip </p>
            </div>
            <div className="gap-y-4 mt-5 flex flex-col">
                <h2 className="font-bold text-md md:text-lg" >Payment Method(s)</h2>
                <div className="flex justify-between">
                    <div className="flex gap-x-4 items-center justify-between">
                        <img src="VisaLogo.png " className="h-fit w-fit md:w-8 " />
                        <div>
                            <h3 className="text-sm font-bold">Credit Card ****7019</h3>
                            <p className="text-sm font-bold">October 2026</p>
                        </div>
                    </div >
                    <div className="w-fit flex gap-x-4">
                        <p className="bg-green-100 text-green-600 rounded py-[2px] px-2 w-fit h-fit">Preferred</p>
                         <img className="h-fit w-fit p-2 bg-gray-100 cursor-pointer rounded-full" src="Pencil Icon.png" onClick={() => setIsModalOpen(true)} ></img>
                    </div>
                </div>
            </div>
        </div>
    );
}