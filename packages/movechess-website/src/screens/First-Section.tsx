import React from "react";

export default function FirstSection() {
    return (
        <div className="w-full max-h-[1100px] h-[1100px] relative">
            <div className="bg-[url('/images/background-chess-board.png')] w-full h-full bg-cover bg-center bg-no-repeat mb-8"
            >
                <div className="px-9 flex flex-col md:flex-row h-full">
                    <div className="w-full px-9 pt-[45%] sm:pt-[40%] md:pt-[35%] lg:pt-[25%]">
                        <p className="mt-3 text-4xl md:text-5xl lg:text-6xl font-bold">
                            MoveChess,
                        </p>
                        <p className="text-4xl md:text-5xl lg:text-6xl mt-3">
                            place for brilliant <b> MOVE</b>
                        </p>
                        <p className="py-9 text-xl md:text-2xl lg:text-3xl opacity-70 font-bold">
                            Chess platform on SUI Network
                        </p>
                        <div className="flex justify-center mb-6 p-3 bg-[#232020] border-2 border-white rounded-2xl content-center shadow-2xl ring-2 ring-gray-200 ring-opacity-10">
                            <div className="relative w-full">
                                <p className="text-center text-xl md:text-2xl lg:text-3xl py-3">Subscribe your address to receive a free-mint MoveChess NFT</p>
                                <div className="sm:flex text-center mt-3 mb-5 items-center">
                                    <input
                                        className="items-center text-xl md:text-2xl lg:text-3xl rounded-full p-4 pl-10 w-full"
                                        type="text"
                                        placeholder="Enter your Sui address"
                                    />
                                    <button className="text-l text-xl md:text-xl lg:text-2xl font-w sm:absolute rounded-full p-1 sm:p-3 w-full sm:w-[150px] h-[50px] m-[4px] sm:m-[3px] mt-3 sm:mt-0 bg-black sm:bg-[#232020] right-0 border-white shadow-2xl py-2 ring-2 ring-gray-200 ring-opacity-60">
                                        <p className="opacity-60 font-bold">Submit</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}