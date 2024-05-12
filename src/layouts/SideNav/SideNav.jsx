import Icons from '../../components/Icon';

const SideNav = () => {
  return (
    <div className='bg-onblue w-0 md:w-[9%] p-5 md:flex hidden  rounded-bl-3xl rounded-tl-3xl lg:h-[90vh] fixed mt-[30px] top-0  flex-col gap-20'>
      <div className=' relative w-fit'>
        <Icons
          icon='fluent:teardrop-bottom-right-32-filled'
          className='text-white'
        />
        <Icons
          icon='ph:chat-teardrop-duotone'
          hFlip='horizontal'
          className='absolute top-0 left-2 text-gray-50'
        />
      </div>
      <div className='flex relative flex-col gap-14'>
        <Icons
          icon='heroicons:chart-pie-20-solid'
          width={25}
          className='text-ongrey mt-44 hover:text-white cursor-pointer'
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
  );
};

export default SideNav;
