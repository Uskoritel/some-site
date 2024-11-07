import ActiveSvg from './svg/ActiveSvg'
import AdventureSvg from './svg/AdventureSvg'
import AirplaneSvg from './svg/AirplaneSvg'
import AttractionSvg from './svg/AttractionSvg'
import CarSvg from './svg/CarSvg'
import ClimbingSvg from './svg/ClimbingSvg'
import CyclingSvg from './svg/CyclingSvg'
import HikkingSvg from './svg/HikkingSvg'
import HotelSvg from './svg/HotelSvg'

export default function Features(){
    return(
        <section className="bg-features-img w-full bg-no-repeat bg-cover">
            <div className="container mx-auto py-20 h-full flex justify-end items-center">
                    <div className="grid grid-cols-3 grid-rows-3 gap-5 text-[#b89f9f] text-2xl uppercase font-bold
                            sm:grid-cols-2 sm:grid-rows-5 lg:text-[18px]">
                        <div className="bg-white w-[250px] h-[230px] shadow-[5px_5px_20px_0_rgba(41,51,51,0.4)] flex flex-col rounded-2xl p-5 items-center justify-center gap-4
                                    lg:w-full lg:h-[160px] lg:[&_svg]:w-[40px]">
                            <div className='bg-[#dcdcdc] w-[100px] h-[100px]  rounded-full flex  justify-center
                                    lg:w-[75px]'>
                               <AirplaneSvg/>
                            </div>
                            <div>
                                Flights
                            </div>
                        </div>
                        <div className="bg-white w-[250px] h-[230px] shadow-[5px_5px_20px_0_rgba(41,51,51,0.4)] flex flex-col rounded-2xl p-5 items-center justify-center gap-4
                                     lg:w-full lg:h-[160px] lg:[&_svg]:w-[40px]">
                            <div className="bg-[#dcdcdc] w-[100px] h-[100px]  rounded-full flex  justify-center
                                    lg:w-[75px]">
                                <HotelSvg/>
                            </div>
                            <div>
                                Hotels
                            </div>
                        </div>
                        <div className="bg-white w-[250px] h-[230px] shadow-[5px_5px_20px_0_rgba(41,51,51,0.4)] flex flex-col rounded-2xl p-5 items-center justify-center gap-4
                                     lg:w-full lg:h-[160px] lg:[&_svg]:w-[40px]">
                            <div className="bg-[#dcdcdc] w-[100px] h-[100px]  rounded-full flex  justify-center
                                    lg:w-[75px]">
                                <CarSvg/>
                            </div>
                            <div>
                                Transfers 
                            </div>
                        </div>
                        <div className="bg-white w-[250px] h-[230px] shadow-[5px_5px_20px_0_rgba(41,51,51,0.4)] flex flex-col rounded-2xl p-5 items-center justify-center gap-4
                                     lg:w-full lg:h-[160px] lg:[&_svg]:w-[40px]">
                            <div className="bg-[#dcdcdc] w-[100px] h-[100px]  rounded-full flex  justify-center
                                    lg:w-[75px]">
                                <ActiveSvg/>
                            </div>
                            <div>
                                Activities
                            </div>
                        </div>
                        <div className="bg-white w-[250px] h-[230px] shadow-[5px_5px_20px_0_rgba(41,51,51,0.4)] flex flex-col rounded-2xl p-5 items-center justify-center gap-4
                                     lg:w-full lg:h-[160px] lg:[&_svg]:w-[40px]">
                            <div className="bg-[#dcdcdc] w-[100px] h-[100px]  rounded-full flex  justify-center
                                    lg:w-[75px]">
                                <HikkingSvg/>
                            </div>
                            <div>
                                hikking
                            </div>
                        </div>
                        <div className="bg-white w-[250px] h-[230px] shadow-[5px_5px_20px_0_rgba(41,51,51,0.4)] flex flex-col rounded-2xl p-5 items-center justify-center gap-4
                                     lg:w-full lg:h-[160px] lg:[&_svg]:w-[40px]">
                            <div className="bg-[#dcdcdc] w-[100px] h-[100px]  rounded-full flex  justify-center
                                    lg:w-[75px]">
                                <AttractionSvg/>
                            </div>
                            <div>
                                Attractions
                            </div>
                        </div>
                        <div className="bg-white w-[250px] h-[230px] shadow-[5px_5px_20px_0_rgba(41,51,51,0.4)] flex flex-col rounded-2xl p-5 items-center justify-center gap-4
                                     lg:w-full lg:h-[160px] lg:[&_svg]:w-[40px]">
                            <div className="bg-[#dcdcdc] w-[100px] h-[100px]  rounded-full flex  justify-center
                                    lg:w-[75px]">
                                <AdventureSvg/>
                            </div>
                            <div>
                                Adventure
                            </div>
                        </div>
                        <div className="bg-white w-[250px] h-[230px] shadow-[5px_5px_20px_0_rgba(41,51,51,0.4)] flex flex-col rounded-2xl p-5 items-center justify-center gap-4
                                     lg:w-full lg:h-[160px] lg:[&_svg]:w-[40px]">
                            <div className="bg-[#dcdcdc] w-[100px] h-[100px]  rounded-full flex  justify-center
                                    lg:w-[75px]">
                                <ClimbingSvg/>
                            </div>
                            <div>
                                Climbing
                            </div>
                        </div>
                        <div className="bg-white w-[250px] h-[230px] shadow-[5px_5px_20px_0_rgba(41,51,51,0.4)] flex flex-col rounded-2xl p-5 items-center justify-center gap-4
                                     lg:w-full lg:h-[160px] lg:[&_svg]:w-[40px]">
                            <div className="bg-[#dcdcdc] w-[100px] h-[100px]  rounded-full flex  justify-center
                                    lg:w-[75px]">
                                <CyclingSvg/>
                            </div>
                            <div>
                                cycling
                            </div>
                        </div>
                    </div>
            </div>
        </section>
    )
}