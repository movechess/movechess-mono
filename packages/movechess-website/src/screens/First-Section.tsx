import React from "react";

export default function FirstSection() {
    return (
        <div className="w-full h-[1000px] relative">
            <div className="bg-[url('/images/background-chess-board.png')] w-full h-full bg-cover bg-center bg-no-repeat mb-8 opacity-60"
            >
                <div className="px-9 flex flex-col md:flex-row h-full">
                    <div className="w-full px-9 pt-[25%]">
                        <p className="mt-3 text-6xl font-bold">
                            MoveChess,
                        </p>
                        <p className="text-6xl">
                            place for brilliant <b> MOVE</b>
                        </p>
                        <p className="py-9 text-4xl opacity-50 font-bold">
                            Chess platform on SUI Netword
                        </p>
                        <div className="flex justify-center mb-6 p-3 bg-[#232020] border-2 border-white rounded-2xl content-center">
                            <div className="relative w-full">
                                <p className="text-center text-3xl">Subscribe your address to receive a free-mint MoveChess NFT</p>
                                <div className="flex mt-3 mb-5 items-center">
                                    <input
                                        className="items-center rounded-full p-4 pl-10 w-full"
                                        type="text"
                                        placeholder="Enter your Sui address"
                                    />
                                    <button className="text-xl absolute rounded-full  p-1 sm:p-3 w-[50px] sm:w-[150px] h-[25px] sm:h-[50px]  m-[4px] sm:m-[3px] bg-[#232020] right-0">
                                        Submit
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