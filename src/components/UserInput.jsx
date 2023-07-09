import arrow from '../assets/icon-arrow.svg'

export default function UserInput({inputValue, setInputValue, handleSubmit}) {
    return (
        <header className='w-full h-[230px] lg:h-[250px] xl:h-[260px] bg-mobile-view sm:bg-desktop-view bg-cover 
        flex flex-col items-center justify-start gap-5 font-Rubik px-4 pt-8'>
        <h1 className='text-white text-2xl sm:text-3xl lg:text-4xl font-normal'>IP Address Tracker</h1>
        <div className='flex w-full justify-center'>
            <input type="text" placeholder="Search for any IP address" 
            className="font-Rubik indent-4 py-3 rounded-l-xl rounded-r-none md:w-[40%] lg:w-[35%] xl:w-[25%] outline-none text-lg 
            placeholder:text-sm sm:placeholder:text-base" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
            <button type='submit' className='bg-black rounded-r-xl px-3 xs:px-6 sm:px-8' onClick={handleSubmit}>
                <img src={arrow} className='object-contian'/>
            </button>
        </div>
       </header>
    )
}