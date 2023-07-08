
export default function Detail({locationData, getTime}) {
    return (
        <div className="absolute z-[1] bg-white 
        transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-[35%] xs:top-[32%] sm:top-auto
        flex flex-col sm:flex-row gap-4 p-5 justify-center items-center sm:items-start 
        rounded-xl font-Rubik w-max max-w-[90%]">
            <div className="flex flex-col text-center sm:text-left">
                <p className="text-xs text-slate-400">IP Address</p>
                <h4 className="text-sm xs:text-lg sm:text-xl xl:text-2xl break-words">{locationData.ipAddress}</h4>
            </div>
            <div className="bg-slate-300 w-[2px] h-[5.5rem] hidden sm:block"></div>

            <div className="flex flex-col text-center sm:text-left">
                <p className="text-xs text-slate-400">Location</p>
                <h4 className="text-sm xs:text-lg sm:text-xl xl:text-2xl">{locationData.location}</h4>
            </div>
            <div className="bg-slate-300 w-[2px] h-[5.5rem] hidden sm:block"></div>

            <div className="flex flex-col text-center sm:text-left">
                <p className="text-xs text-slate-400">Time</p>
                <h4 className="text-sm xs:text-lg sm:text-xl xl:text-2xl">{getTime}</h4>
            </div>
            <div className="bg-slate-300 w-[2px] h-[5.5rem] hidden sm:block"></div>

            <div className="flex flex-col text-center sm:text-left">
                <p className="text-xs text-slate-400">ISP</p>
                <h4 className="text-sm xs:text-lg sm:text-xl xl:text-2xl">{locationData.isp}</h4>
            </div>
        </div>
    )
}