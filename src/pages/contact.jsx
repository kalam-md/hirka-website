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
    </>
  )
}