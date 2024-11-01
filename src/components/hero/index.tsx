import { motion } from "framer-motion";
import Button from "../button";
import { RefObject } from "react";

type Props =  {
  // useRef ile referans alanına bir elementin tipini tanımlarken RefObject kullanırız.
  catalogueRef: RefObject<HTMLDivElement>;
};

const Hero = ({catalogueRef}: Props) => {
  // katalog alanına sürükle
  const handleClick = () => {
    catalogueRef.current?.scrollIntoView({behavior: "smooth"});
  };

  return (
    <div className="hero">
      <div className="pt-36 padding-x flex-1 max-h-[920px]">
        <h1 className="2xl:text-[72px] sm:text-[64px] text-[50px] font-extrabold">Özgürlüğü Hisset, Yolculuğa Başla!</h1>
        <p className="text-[27px]  font-light mt-5"> Altın standartta hizmetle unutulmaz bir yolculuğa hazır mısın?
            Araç kiralama deneyimini Altın Seçenekleri ile taçlandırarak her anını özel kılabilirsin.
        </p>
        <Button handleClick={handleClick} title="Arabaları Keşfet" designs="mt-10"></Button>
      </div>
      <div className="flex justify-center">
        <motion.img 
        initial={{translateX: 200,
            scale: 0.7,
        }}  
        animate={{ 
            translateX: 0,
            scale: 1, 
            }}
        transition={{duration:0.9}}
        className="object-contain" 
        src="/hero.png" 
        alt="bmw" />
      </div>
    </div>
  )
};

export default Hero; 