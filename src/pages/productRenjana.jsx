import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from "/img/p1.png";
import img2 from "/img/p2.png";
import img4 from "/img/p4.png";
import img5 from "/img/p5.png";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function ProductRenjana() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const images = [
    '../img/p4.png',
    '../img/p4.png',
    '../img/p4.png',
  ];

  return (
    <>
      <div className="md:p-16 p-10">
        <div className="text-3xl font-nav md:mb-5 md:ml-[10rem]">Renjana SERIES</div>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className=''>
              <img src={image} alt={`Image ${index + 1}`} className='aspect-video w-[900px] mx-auto shadow-xl'/>
            </div>
          ))}
        </Slider>

        <div className="grid md:grid-cols-2 md:px-[10rem] md:mt-20 mt-10">
          <div className="flex gap-2">
            <img src={img4} alt="" className='md:w-[180px] w-[140px] shadow-md'/>
            <img src={img4} alt="" className='md:w-[180px] w-[140px] shadow-md'/>
          </div>
          <div className="mt-5">
          Dalam diri seorang lelaki, ada hasrat dan kelembutan yang tersembunyi. Renjana adalah simbol dari lain dari seorang pria. Renjana adalah hasrat akan sebuah keindahan juga kelembutan yang dimiliki oleh setiap lelaki
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-3 md:px-[10rem] md:mt-20 mt-10">
          <div className="flex-col gap-2">
            <Link to="/product">
              <img src={img5} alt="poto" className='md:w-[480px] w-[340px] shadow-md'/>
            </Link>
            <p className='font-nav mt-2 text-xl'>Tafiaro</p>
          </div>
          <div className="flex-col gap-2 my-7 md:my-0">
            <Link to="/product/jokka">
              <img src={img2} alt="" className='md:w-[480px] w-[340px] shadow-md'/>
            </Link>
            <p className='font-nav mt-2 text-xl'>Jokka</p>
          </div>
          <div className="flex-col gap-2">
            <Link to="/product/astakona">
              <img src={img1} alt="" className='md:w-[480px] w-[340px] shadow-md'/>
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
              <img src="../img/p1.png" alt="" className='w-[280px] shadow-md mt-3 md:mt-0'/>
              <img src="../img/p2.png" alt="" className='w-[280px] shadow-md mt-3 md:mt-0'/>
              <img src="../img/p3.png" alt="" className='w-[280px] shadow-md mt-3 md:mt-0'/>
            </div>
          </div>

          <hr />

          <div className="my-5">
            <p className='text-xl font-nav'>Rahmat</p>
            <p>Sepatunya elit, lokal tapi rasa internasional, mantapp</p>
            <div className="flex md:flex-row md:justify-start flex-col gap-8 mt-3">
              <img src="../img/p3.png" alt="" className='w-[280px] shadow-md mt-3 md:mt-0'/>
              <img src="../img/p4.png" alt="" className='w-[280px] shadow-md mt-3 md:mt-0'/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}