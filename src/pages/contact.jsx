import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineShopping } from "react-icons/ai";

export default function Contact() {
  return (
    <>
      <header className="flex">
        <img src="./img/contact.png" alt="header" className="w-screen"/>
      </header>

      <div className="grid grid-cols-2 p-10 md:p-16 md:gap-10">
        <div className="font-nav text-[24px] w-[280px]">
          <p>0812-2001-0015</p>
          <p>Regol, Kota Bandung, Indonesia</p>
          <p className="mb-10">Since 2017</p>
          
          <div className="text-[16px] flex-col">
            <div className="flex items-center gap-2">
              <AiOutlineInstagram size="1.5rem" /> 
              <p className="mt-1">@hirka.official</p>
            </div>
            <div className="flex items-center gap-2">
              <AiOutlineFacebook size="1.5rem" /> 
              <p className="mt-1">@hirka.official</p>
            </div>
            <div className="flex items-center gap-2">
              <AiOutlineShopping size="1.5rem" /> 
              <p className="mt-1">@hirka.official</p>
            </div>
          </div>
        </div>

      </div>
      <div className="px-10 mb-10 md:p-16">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1439.9396024720845!2d107.60841563901045!3d-6.942347011646117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e891e9aa4369%3A0x206b82d881f70575!2sHIRKA%20SHOES!5e0!3m2!1sid!2sid!4v1690443368592!5m2!1sid!2sid" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded-xl shadow-md aspect-video md:w-[800px] md:-mt-[5rem]"></iframe>
      </div>
    </>
  )
}