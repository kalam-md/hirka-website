import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from "/img/p1.png";
import image2 from "/img/p2.png";
import image3 from "/img/p3.png";
import image4 from "/img/p4.png";
import image5 from "/img/p5.png";

import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function ProductTafiaro() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const images = [
    './img/p3.png',
    './img/tafiaro/2.png',
    './img/tafiaro/3.png',
    './img/tafiaro/4.png',
    './img/tafiaro/5.png',
    './img/tafiaro/6.png',
    './img/tafiaro/1.png',
    './img/tafiaro/7.png',
    './img/tafiaro/8.png',
    './img/tafiaro/9.png',
    './img/tafiaro/10.png',
    './img/tafiaro/11.png',
    './img/tafiaro/12.png',
    './img/tafiaro/13.png',
  ];

  return (
    <>
      <div className="md:p-16 p-10">
        <div className="text-3xl font-nav md:mb-5 md:ml-[10rem]">Tafiaro SERIES</div>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className=''>
              <img src={image} alt={`Image ${index + 1}`} className='aspect-video w-[900px] bg-cover bg-center mx-auto shadow-xl'/>
            </div>
          ))}
        </Slider>

        <div className="grid md:grid-cols-2 md:px-[10rem] md:mt-20 mt-10">
          <div className="flex gap-2">
            <img src={image3} alt="" className='md:w-[180px] w-[140px] shadow-md'/>
            <img src={image5} alt="" className='md:w-[180px] w-[140px] shadow-md'/>
          </div>
          <div className="mt-5">
          Tafiaro Series Sepatu seri kasual yang dibuat Hirka. Berbahan kulit Kaki Ayam yang menjadi ciri khas Hirka sebagai aksen di sisi sepatu, membuat Tafiaro sangat mengundang pandang. Tafiaro adalah Paduan dari nilai estetik yang tinggi, kenyamanan yang maksimal, eksotis dan eksklusif.
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-3 md:px-[10rem] md:mt-20 mt-10">
          <div className="flex-col gap-2">
            <Link to="/product/renjana">
              <img src={image4} alt="poto" className='md:w-[480px] w-[340px] shadow-md'/>
            </Link>
            <p className='font-nav mt-2 text-xl'>Renjana</p>
          </div>
          <div className="flex-col gap-2 my-7 md:my-0">
            <Link to="/product/jokka">
              <img src={image2} alt="" className='md:w-[480px] w-[340px] shadow-md'/>
            </Link>
            <p className='font-nav mt-2 text-xl'>Jokka</p>
          </div>
          <div className="flex-col gap-2">
            <Link to="/product/astakona">
              <img src={image1} alt="" className='md:w-[480px] w-[340px] shadow-md'/>
            </Link>
            <p className='font-nav mt-2 text-xl'>Astakona</p>
          </div>
        </div>

        <div className="md:px-[10rem] md:mt-20 mt-10">
          <div className="text-3xl font-nav md:my-5">PRODUCT REVIEW</div>
          <div className="flex-row md:flex gap-2">
            <div className="flex-col md:ml-3 md:mr-10">
              <span className='font-nav text-[5.5rem] ml-3'>4.8</span>
              <div className="flex">
                <AiFillStar size="1.5rem"/>
                <AiFillStar size="1.5rem"/>
                <AiFillStar size="1.5rem"/>
                <AiFillStar size="1.5rem"/>
                <AiFillStar size="1.5rem"/>
              </div>
              <p className='ml-4'>800 Ratings</p>
            </div>
            <div className="flex-col my-4">
              <div className="flex mb-2">
                <AiFillStar size="1.5rem" />
                <AiFillStar size="1.5rem" />
                <AiFillStar size="1.5rem" />
                <AiFillStar size="1.5rem" />
                <AiFillStar size="1.5rem" />
                <div className="ml-2 bg-slate-400 rounded-md w-[200px]">
                  <div className="bg-slate-800 rounded-md w-[170px]"><span className='text-slate-800'>text</span></div>
                </div>
              </div>
              <div className="flex mb-2">
                <AiFillStar size="1.5rem"/>
                <AiFillStar size="1.5rem" />
                <AiFillStar size="1.5rem" />
                <AiFillStar size="1.5rem" />
                <AiFillStar size="1.5rem" className='text-gray-500'/>
                <div className="ml-2 bg-slate-400 rounded-md w-[200px]">
                  <div className="bg-slate-800 rounded-md w-[70px]"><span className='text-slate-800'>text</span></div>
                </div>
              </div>
              <div className="flex mb-2">
                <AiFillStar size="1.5rem" />
                <AiFillStar size="1.5rem" />
                <AiFillStar size="1.5rem" />
                <AiFillStar size="1.5rem" className='text-gray-500'/>
                <AiFillStar size="1.5rem" className='text-gray-500'/>
                <div className="ml-2 bg-slate-400 rounded-md w-[200px]">
                  <div className="bg-slate-800 rounded-md w-[30px]"><span className='text-slate-800'>text</span></div>
                </div>
              </div>
              <div className="flex mb-2">
                <AiFillStar size="1.5rem" />
                <AiFillStar size="1.5rem" />
                <AiFillStar size="1.5rem" className='text-gray-500'/>
                <AiFillStar size="1.5rem" className='text-gray-500'/>
                <AiFillStar size="1.5rem" className='text-gray-500'/>
                <div className="ml-2 bg-slate-400 rounded-md w-[200px]">
                  <div className="bg-slate-800 rounded-md w-[20px]"><span className='text-slate-800'>a</span></div>
                </div>
              </div>
              <div className="flex mb-2">
                <AiFillStar size="1.5rem" />
                <AiFillStar size="1.5rem" className='text-gray-500'/>
                <AiFillStar size="1.5rem" className='text-gray-500'/>
                <AiFillStar size="1.5rem" className='text-gray-500'/>
                <AiFillStar size="1.5rem" className='text-gray-500'/>
                <div className="ml-2 bg-slate-400 rounded-md w-[200px]">
                </div>
              </div>
            </div>
            <div className="flex-col md:my-4 hidden md:flex">
              <div className="flex mb-2">
                <span className='ml-2'>780</span>
              </div>
              <div className="flex mb-2">
                <span className='ml-2'>10</span>
              </div>
              <div className="flex mb-2">
                <span className='ml-2'>7</span>
              </div>
              <div className="flex mb-2">
                <span className='ml-2'>3</span>
              </div>
              <div className="flex mb-2">
                <span className='ml-2'>0</span>
              </div>
            </div>
          </div>
        </div>

        <div className="md:px-[10rem] md:mt-20 mt-10">
          <div className="text-3xl font-nav mt-5">Photos & Videos testimony</div>
          
          <div className="my-5">
            <p className='text-xl font-nav'>Fauzan</p>
            <p>Wah, produknya bagus banget kualitas bahannya bagus</p>
            <div className="flex md:flex-row md:justify-between flex-col gap-3 mt-3">
              <img src="./img/p1.png" alt="" className='w-[280px] shadow-md mt-3 md:mt-0'/>
              <img src="./img/p2.png" alt="" className='w-[280px] shadow-md mt-3 md:mt-0'/>
              <img src="./img/p3.png" alt="" className='w-[280px] shadow-md mt-3 md:mt-0'/>
            </div>
          </div>

          <hr />

          <div className="my-5">
            <p className='text-xl font-nav'>Rahmat</p>
            <p>Sepatunya elit, lokal tapi rasa internasional, mantapp</p>
            <div className="flex md:flex-row md:justify-start flex-col gap-8 mt-3">
              <img src="./img/p3.png" alt="" className='w-[280px] shadow-md mt-3 md:mt-0'/>
              <img src="./img/p4.png" alt="" className='w-[280px] shadow-md mt-3 md:mt-0'/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}