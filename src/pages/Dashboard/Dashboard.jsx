import Header from '../../components/Header';
import Icons from '../../components/Icon';
import TopCard from '../../components/TopCard2';
import './style.css';
import {
  // StatisticsChart,
  ApexChart,
} from '../../components/statistics-chart';
import SideNav from '../../layouts/SideNav/SideNav';
import './Dashboard.css';
import Lottie from 'react-lottie';
// import animationData from '../../assets/Spinner.json';
// import animationData from '../../assets/turner.json';
// import animationData from '../../assets/deal.json';
import { deal, card } from '../../assets';
import Transaction from '../../components/transaction';
import ConnectCard from '../../components/connect-card';
import SpenTimeCard from '../../components/spent-time-card';
import { useEffect, useState } from 'react';
import TopCard2 from '../../components/TopCard2';

const Dashboard = () => {
  const [isLeftSelected, setIsLeftSelected] = useState(false);
  const [isMobileOn, setisMobileOn] = useState(false);
  const [isDesktopOn, setisDesktopOn] = useState(true);

  const toggleSwitch = () => {
    setIsLeftSelected(!isLeftSelected);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 767) {
        setisMobileOn(true);
        setisDesktopOn(false);
      } else {
        setisMobileOn(false);
        setisDesktopOn(true);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='bg-white rounded-tl-3xl rounded-br-xl  rounded-tr-xl rounded-bl-3xl  0'>
      <div className='lg:max-h-[90vh]  w-full  overflow-auto'>
        <div className='flex'>
          <div className='md:w-[5%] md:block hidden'>
            <SideNav />
          </div>
          <div
            className={`w-[100%] md:relative  md:p-10 md:pr-14 ${
              !isLeftSelected ? 'bg-white ' : 'bg-[#f6f8fe]'
            } rounded-3xl z-10  ${
              isMobileOn == true &&
              'r rounded-bl-[100px] rounded-br-[80px] min-h-[100vh]'
            } ${isDesktopOn && 'bg-white'}`}
          >
            {' '}
            {isMobileOn && (
              <div className='fixed left-0 bottom-0 w-full z-50'>
                <div className='absolute bottom-0  w-full p-4 py-7 rounded-[50px] bg-[#3326ae]'>
                  <div className='flex relative justify-evenly'>
                    <Icons
                      icon='mingcute:home-3-fill'
                      width={45}
                      className='text-[#fe382b]   shadow-shede bg-white p-2 rounded-lg z-[999px] absolute left-5 -top-12  hover:text-white hover:bg-[#fe382b]  cursor-pointer'
                    />{' '}
                    <Icons
                      icon='heroicons:chart-pie-20-solid'
                      width={25}
                      className='text-ongrey ml-14 hover:text-white cursor-pointer'
                    />
                    <Icons
                      icon='ri:chat-smile-fill'
                      hFlip='horizontal'
                      width={25}
                      className='text-ongrey hover:text-white cursor-pointer'
                    />
                    <Icons
                      icon='ion:wallet'
                      width={25}
                      className='text-ongrey hover:text-white cursor-pointer'
                    />
                  </div>
                </div>
              </div>
            )}
            <div className='p-5 md:p-0'>
              <Header />
              <div className='block md:hidden   '>
                <div className=' flex justify-center items-center'>
                  <div className='rounded-lg w-[200px] h-[50px] shadow-2xl'>
                    <div className='toggle '>
                      <Icons
                        icon='game-icons:network-bars'
                        width={25}
                        className={` left-[18%] ${
                          isLeftSelected == false
                            ? 'text-[#fff] bg-[#01c2f8]'
                            : 'text-[#01c2f8] bg-white'
                        } top-[22%] absolute z-50 cursor-pointer`}
                      />
                      <Icons
                        icon='ph:credit-card-duotone'
                        width={25}
                        className={` left-[68%] ${
                          isLeftSelected == false
                            ? 'text-slate-300'
                            : 'text-white'
                        } top-[22%] absolute z-50 cursor-pointer`}
                      />
                      <input
                        type='checkbox'
                        name='toggle'
                        id='toggle'
                        className='shadow-2xl'
                        checked={isLeftSelected}
                        onChange={toggleSwitch}
                      />
                      <label htmlFor='toggle'></label>
                    </div>
                  </div>
                </div>{' '}
                {!isLeftSelected && (
                  <div className='mt-14'>
                    {' '}
                    <TopCard />
                    <div className=' my-5 mb-16 p-3 rounded-xl bg-ongrey2'>
                      {/* <StatisticsChart /> */}
                      <ApexChart />
                    </div>
                  </div>
                )}
                {isLeftSelected && (
                  <div className='mt-10 relative'>
                    {' '}
                    <div className='absolute -right-7 z-[200px] top-14 shadow-lg p-2 px-4 rounded-lg bg-[#3326ae] text-white'>
                      $10,600
                    </div>
                    <div className='flex mt-6 flex-col   items-center justify-center'>
                      <h3 className='text-slate-500 mb-8 font-semibold'>
                        Total Sales
                      </h3>

                      <div className='bg-white rounded-full w-36 h-36 relative'>
                        <div className='flex items-center justify-center h-36'>
                          <div className='bg-white rounded-full w-24 shadow-md h-24'>
                            <div className='h-24 flex items-center justify-center'>
                              <p className='text-onblue font-bold text-2xl'>
                                38<span className='text-sm font-normal'>%</span>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className='h-36 w-36 absolute top-0'>
                          {' '}
                          <Lottie
                            options={{
                              animationData: deal,
                              loop: false,
                              autoplay: true,
                            }}
                            height={150}
                            width={150}
                          />
                        </div>
                      </div>
                    </div>{' '}
                    <div className='mt-9 '>
                      <div className='flex justify-between items-center'>
                        <h6 className='font-semibold text-slate-500'>
                          My card
                        </h6>
                        <span className=' tracking-widest font-semibold text-slate-400'>
                          ..
                        </span>
                      </div>
                      <img src={card} className='mt-5 w-full mb-2 z-0' />
                    </div>
                  </div>
                )}
              </div>
              <div className='md:grid hidden gap-7 lg:grid-cols-12'>
                <div className=' lg:col-span-8'>
                  <div className=''>
                    <TopCard2 />
                  </div>{' '}
                  <div className='fixed'>
                    <div className='absolute'>
                      <Icons
                        icon='mingcute:home-3-fill'
                        width={35}
                        className='text-[#fe382b] shadow-lg bg-white p-2 rounded-lg z-[999px] md:absolute  md:block hidden  -left-[58px]  hover:text-white -top-16 hover:bg-[#fe382b]  cursor-pointer'
                      />
                    </div>
                  </div>
                  <div className=' my-5 p-3 rounded-xl bg-ongrey2'>
                    {/* <StatisticsChart /> */}
                    <ApexChart />
                  </div>
                  <div className='flex gap-5 flex-col md:flex-row justify-between'>
                    <div className='md:w-1/2 w-full'>
                      <SpenTimeCard />
                    </div>
                    <div className='md:w-1/2 w-full'>
                      <ConnectCard />
                    </div>
                  </div>
                </div>
                <div className='relative lg:col-span-4 p-6 bg-ongrey2 rounded-xl'>
                  <div className='flex justify-end text-boldgrey'>
                    <Icons icon='iconamoon:edit-light' />
                  </div>
                  <div className='absolute -right-7 top-14 shadow-lg p-2 px-4 rounded-lg bg-[#3326ae] text-white'>
                    $10,600
                  </div>
                  <div className='flex mt-6 items-center justify-center'>
                    <div className='bg-white rounded-full w-36 h-36 relative'>
                      <div className='flex items-center justify-center h-36'>
                        <div className='bg-white rounded-full w-24 shadow-md h-24'>
                          <div className='h-24 flex items-center justify-center'>
                            <p className='text-onblue font-bold text-2xl'>
                              38<span className='text-sm font-normal'>%</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className='h-36 w-36 absolute top-0'>
                        {' '}
                        <Lottie
                          options={{
                            animationData: deal,
                            loop: false,
                            autoplay: true,
                          }}
                          height={150}
                          width={150}
                        />
                      </div>
                    </div>
                  </div>
                  <div className='mt-9 '>
                    <div className='flex justify-between items-center'>
                      <h6 className='font-semibold text-slate-700'>My card</h6>
                      <span className='t tracking-widest font-semibold text-slate-400'>
                        ..
                      </span>
                    </div>
                    <img src={card} className='mt-5 w-full mb-2' />
                    <Transaction />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
