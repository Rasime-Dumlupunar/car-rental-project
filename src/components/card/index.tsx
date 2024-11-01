import { useState } from "react";
import { CarType } from "../../types";
import Button from "../button/index";
import Info from './Info'
import Modal from "../modal";
import { motion } from 'framer-motion';
import generateImage from "../../utils/generateImage";

const Card = ({car} : { car: CarType }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
  <motion.div
  initial={{scale:0.5, opacity:0}}
  whileInView={{scale:1, opacity:1}}
  className=" group flex flex-col p-6 justify-center items-start text-black-100 bg-primary-blue-100 hover:bg-white hover:shadow-md rounded-3xl"> 
  {/* araba ismi */}

  <h2 className="text-[22px] leading-[26px] font-bold capitalize">
    {car.make} {car.model}
  </h2>
  {/* araba fiyatı */}
  <div className="flex mt-6 text-[19px]">
    <span className="font-semibold">₺</span>
    <span className="text-[32px]">
        {/*  1500 -8500*/}
        {(Math.floor(Math.random() * 7000) + 1000).toLocaleString('tr-TR')}
    </span>
    <span className="font-semibold self-end">/gün</span>
  </div>
    {/* RESİM ALANI */}
    <div className="relative w-full h-40 my-3">
        <img 
        className="w-full h-full object-contain" 
        src={generateImage(car)} 
        alt="" />
    </div>
    {/* alt kısım */}
    <div className="w-full">
        <Info car={car}/>
    
    <div className="hidden group-hover:flex mt-[4px]">
        <Button title="Daha Fazla" designs=" w-full py-[25px]"
        icon="right-arrow.svg"
        handleClick={() => setIsOpen(true)}/>
    </div>
    </div> 
    <Modal car={car} isOpen={isOpen} close={() => setIsOpen(false)}/>
  </motion.div>
  )
};
 
export default Card;
