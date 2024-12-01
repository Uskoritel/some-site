import Paper from '../components/CreatePaper/Paper';
import Travel from "../components/Travel/Travel";
import Features from "@/components/Features/Features";
import SomethingFun from "@/components/Something/Something";
import TravelWithUs from "@/components/TravelWithUs/TravelWithUs";
import AboutUs from "@/components/AboutUs/AboutUs";
import CreateOrIn from '@/components/AuthReg/CreateOrIn';

export default function Home() {
  return (
    <>
    <main className='bg-main-img bg-no-repeat w-full h-screen bg-cover relative'>
      <div className='flex flex-col w-full h-full items-center justify-center gap-y-8'>
        <div className='text-3xl uppercase text-center'>
           In nature, nothing is perfect
        </div>
        <h1 className='text-7xl font-bold text-center'>
           and everything is perfect
        </h1>
      </div>
      <span className='flex justify-center absolute mx-auto left-0 right-0 text-red-200 bottom-12 animate-pulse duration-100 ease-in'>Logo</span>      
    </main>
    <Paper/>
    <Travel/>
    <Features/>
    <SomethingFun/>
    <TravelWithUs/>
    <AboutUs/>
    <CreateOrIn/>
    </>
  );
}
