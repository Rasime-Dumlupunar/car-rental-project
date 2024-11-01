import { useEffect, useRef, useState } from "react";
import Filter from "./components/Filter";
import Header from "./components/header";
import Hero from "./components/hero";
import Searchbar from "./components/searchbar";
import './index.css'
import fetchCars from "./utils/fetchCars";
import { CarType } from "./types";
import { Warning } from "./components/warning";
import Card from "./components/card";
import LoadMore from "./components/loadmore";
import { useSearchParams } from "react-router-dom";
import Year from "./components/Filter/year";



const App = () => {
  const [params, setParams] = useSearchParams();

  const [cars, setCars] = useState<CarType[] | null> (null);
  const [isError, setIsError] = useState<boolean>(false);
  const [limit, setLimit] = useState<number>(5);

  useEffect(() => {
    // URL'deki bütün paramsları bir nesne haline getir
    const paramsObj = Object.fromEntries(params.entries());

    fetchCars({limit, ...paramsObj}) 
    .then((data) => setCars(data))
    .catch(() => setIsError(true)); 
  }, [limit, params]);

  const catalogueRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen text-white bg-[rgb(23,23,23)]">
      <Header/>
      <Hero catalogueRef= {catalogueRef}/>
      <div 
      ref={catalogueRef} 
      className="mt-12 padding-x padding-y max-width">
        <div className="flex flex-col items-start justify-start gap-y-2.5">
          <h1 className="text-4xl font-extrabold">Araba Kataloğu</h1>
          <p>Beğenebileceğin Arabaları Keşfet!</p>
        </div>
        <div className="mt-12 w-full flex-between items-center flex-wrap gap-5">
          <Searchbar/>
          <div className="flex justify-start flex-wrap items-center gap-2">
            <Filter/>
            <Year/>
          </div>
        </div>
        {/* 
        * Araçları listeleme
        1) Cars null ise > Henüz Apı'da cevap gelmemiştir.
        2) isError true ise > API'DAN HATA gelmiştir.
        3) Cars boş dizi ise >> aranılan kriterlere uygun veri yok
        4) Cars dolu bir dizi ise >> API dan araçlar (veri) gelmiştir.
        */}

          {!cars ? (
            <Warning>Yükleniyor</Warning> 
          ) : isError ? (
          <Warning>Üzgünüz bir sorun oluştu!</Warning> 
          ) : cars.length < 1 ? (
          <Warning>Aranılan kriterlere uygun araç bulunamadı.</Warning> 
          ) : (
            cars.length > 1 && (
            <section> 
              <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14" >
                {cars.map((car, i) => (
                  <Card car={car} key={i}/>
                ))}
              </div>
              <LoadMore 
              limit={limit} 
              handleClick={() => {
                setLimit(limit + 5);
             }}/>
             </section>
            )
          )}
      </div>
    </div>
  );
};

export default App;
  