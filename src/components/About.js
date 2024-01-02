 
import UserClass from "./UserClass";
const About=()=>{
    return (
        <div className="">
       
        <div className="flex justify-center items-center h-[80vh]  flex-col ">
        
        <div className="text-white h-[300px] w-[500px] flex flex-col justify-center items-center   bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg  ">
            {/* <User/> */}
            <UserClass name="Swayam" />
            <div className="flex gap-1"><a target="_blank" href="https://github.com/SwayamRana808"><div className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30">
                <i className="fa-brands fa-github"></i><p className="ml-[5px]">  Github Profile</p>
                </div></a>
            <a target="_blank" href="https://www.linkedin.com/in/swayam-rana-6192b4264"><div className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55">
                <i className="fa-brands fa-linkedin"></i><p className="ml-[5px]">Linkedin profile</p>
            </div></a></div>
        </div>
        </div>
        <h2 className="text-white absolute bottom-0 w-full">THIS IS @ABOUT PAGE</h2>
        </div>

    )
}
export default About;