import Image from "next/image";
import Card from "./card";

export default function Home() {
  return (
    <main className="">
      <section className=" flex items-center justify-between">
        <div className=" w-1/2">
          <h1 className="text-[46px] font-extrabold"> <span className="text-transparent  bg-clip-text bg-gradient-to-r from-left to-right">Dive</span> Into The Depths <br /> Of <span className=" text-transparent bg-clip-text bg-gradient-to-r from-left to-right">Virtual Reality</span></h1>
          <p className=" pt-[36px] pb-[66px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget. Lectus mauris eros in vitae .</p>
          <div className="flex">
            <div className="flex flex-col justify-center">
              <button className=' uppercase py-4 px-9 rounded-full font-bold bg-gradient-to-r from-left to-right text-primary'>BUILD YOUR WORLD</button>
            </div>
            <Image src={'/arrow-small-right.svg'} height={48} width={100} alt="arrow" />
          </div>
        </div>
        <div >
          <div className=" relative rounded-bl-[240px] rounded-tr-[100px] rounded-tl-[100px] rounded-br-[100px] shadow-2xl shadow-black  h-[426px] w-[490px] overflow-hidden">
            <Image src={'/main-section.png'} alt="photo" fill blurDataURL={'/main-section.png'} sizes="100" />
          </div>
        </div>
      </section>
      <section className="py-[88px]">
        <div className=" flex justify-between  bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#3a3456f2] to-[#211E2E] rounded-full p-12 shadow-2xl shadow-black">
          <div className=" flex items-center gap-2">
            <Image src={'/location.svg'} height={65} width={65} alt="image" blurDataURL={'/location.svg'} />
            <div>
              <h1 className=" font-bold text-xl">Pay Us a Visit</h1>
              <p className=" text-xs">Union St, Seattle, WA 98101, United States</p>
            </div>
          </div>
          <div className=" h-[120] w-0 border-[1px] border-white border-solid"></div>
          <div className=" flex items-center gap-2">
            <Image src={'/phone.svg'} height={65} width={65} alt="image" blurDataURL={'/phone.svg'} />
            <div>
              <h1 className=" font-bold text-xl">Give Us a Call</h1>
              <p className=" text-xs">(110) 1111-1010</p>
            </div>
          </div>
          <div className=" h-[120] w-0 border-[1px] border-white border-solid"></div>
          <div className=" flex items-center gap-2">
            <Image src={'/mail.svg'} height={65} width={65} alt="image" />
            <div>
              <h1 className=" font-bold text-xl">Send Us a Message</h1>
              <p className=" text-xs">Contact@HydraVTech.com</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className=" grid grid-cols-2 grid-rows-auto place-content-center">
          <div className=" text-4xl h-min">
            <h1 className=" text-5xl font-extrabold">INTRODUCTION</h1>
            <div className=" flex font-normal items-center gap-8  ">
              <p>TO HYDRA VR</p>
              <Image src={'/big-arrow-right.svg'} width={228} height={30} alt="arrow" blurDataURL={'/big-arrow-right.svg'} />
            </div>
          </div>
          <div className="  h-min">
            <p>Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.</p>
          </div>
          <div className="">
            <div className=" relative rounded-bl-[100px] rounded-tr-[100px] rounded-tl-[240px] rounded-br-[240px] shadow-2xl shadow-black  h-[557px] w-[524px] overflow-hidden">
              <Image src={'/section_2.png'} alt="photo" fill blurDataURL={'/section_2.png'} sizes="100" />
            </div>
          </div>
          <div className=" flex flex-col justify-around">
            <div className=" text-4xl">
              <h1 className=" text-5xl font-extrabold py-2">ABOUT</h1>
              <p>HYDRA VR</p>
            </div>
            <p>Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus
              urna neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida
              dictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing at in.
              Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdiet
              sed. Consequat semper viverra nam libero justo laoreet sit amet. Aliquam
              etiam erat velit scelerisque in dictum non consectetur a. Laoreet sit amet
              cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pha
              retra diam sit amet nisl suscipit adipiscing bibendum. Leo a diam sollicitudi
              n tempor.</p>
            <div>
              <button className=' uppercase py-4 px-9 rounded-full font-bold bg-gradient-to-r from-left to-right text-primary'>LET’S GET IN TOUCH</button>
            </div>
          </div>
          <div className=" text-4xl h-min pt-12 ">
            <h1 className=" text-5xl font-extrabold">WHY BUILD</h1>
            <div className=" flex font-normal items-center gap-8  ">
              <p>WITH HYDRA?</p>
              <Image src={'/big-arrow-right.svg'} width={228} height={30} alt="arrow" />
            </div>
          </div>
          <div className="pt-12 h-min">
            <p>Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.</p>
          </div>
        </div>
      </section>
      <section className=" flex justify-between pt-20">
        <Card img={'/card-4.png'} title="simulation" body={'Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae.'} button='Try it now' />
        <Card img={'/card-3.png'} title="education" body={'Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae.'} button='Try it now' />
        <Card img={'/card-2.png'} title="self care" body={'Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae.'} button='Try it now' />
        <Card img={'/card-1.png'} title="outdoor" body={'Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae.'} button='Try it now' />
      </section>
      <section>
        <div className=" relative rounded-[160px] border-2 border-white w-full h-[303px] overflow-hidden">
          <Image src={'/bg-image.png'} alt="photo" fill blurDataURL={'/bg-image.png'} sizes="100" />
        </div>
      </section>
    </main>
  )
}
