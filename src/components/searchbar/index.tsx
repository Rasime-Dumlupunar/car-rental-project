
import ReactSelect from "react-select";
import { makes } from "../../utils/constants";
import { FormEvent, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";


const Button = ({designs} : {designs? : string}) => {
  return (
    <button className={` ml-3 ${designs}`}>
      <img src="/search.svg" width={40} height={40} alt="" />
    </button>
  );
};



const Searchbar = () => {
  const [params, setParams] = useSearchParams();
  const [make, setMake] = useState<string>("")
  const [model, setModel] = useState<string>("")

  // markalar dizisini react-select kütüphanesinin istediği formata çevirdik
  const options = useMemo(
    () => makes.map((make) => ({value: make, label: make})),
    []
  );
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // marka ve modeli url'e arama parametresi olarak ekle
    setParams({make: make.toLowerCase(), model: model.toLowerCase()});
  };

  const selected = {
    label: params.get("make"),
    value: params.get("make"),
  };

  return (
    <form 
    onSubmit={handleSubmit}
    className="flex items-center gap-3 justify-start max-sm:flex-col w-full relative max-sm:gap-4 max-w-3xl">
      <div 
      className="flex-1 max-sm:w-full flex justify-start items-center relative">
        <ReactSelect 
        defaultValue={selected}
        options={options}
        onChange={(e) => e && setMake(e.value || "")}
        placeholder="Marka Seçiniz" 
        className="w-full text-black"/>
      <Button 
      designs="sm:hidden"/>
      </div>
      <div 
      className="flex-1  max-sm:w-full flex justify-start items-center relative">
        <img 
        src="/model-icon.png" 
        className="absolute ml-3" 
        width={27} />
        <input 
        defaultValue={params.get("model") || ""}
        onChange={(e) => setModel(e.target.value)}
        type="text" 
        placeholder="Örn: Focus" 
        className="w-full h-[38px] pl-12 p-4 outline-none cursor-pointer text-sm rounded text-black" />
      <Button/>
      </div>
    </form>
  )
}

export default Searchbar;
