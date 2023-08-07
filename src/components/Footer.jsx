import Logo from "/img/logo-white.png"

export default function Footer() {
  return (
    <footer className="flex justify-center items-center gap-4 bg-[#1C1A52] py-6 font-nav text-[16px] text-white">
      <span className="mb-1">
        <img src={Logo} alt="logo" className="w-[96px]"/>
      </span>
      <span>&#8226;</span>
      <span>Design By Flash Team &copy;2023</span>
    </footer>
  )
}