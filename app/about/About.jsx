import React from 'react';
import Image from 'next/image';
import "./About.css"
//import the json file
import data from './StudentCouncil.json';
import mediaclub from './MediaClub.json';


export default function AboutPage() {
  return (
    <div className='bg-[#D6ECEC] flex flex-col justify-center items-center gap-8'>
      <nav className="flex items-center justify-between p-6 w-full h-[20vh]">
        <div className="text-2xl font-bold">Logo</div>
      </nav>
      <p className='text-xl sm:text-2xl md:text-3xl lg:text-4xl our-team-main-text mt-9'>OUR TEAM</p>
      <p className="w-full h-10 sm:h-16 md:h-20 lg:h-24 py-auto mt-[-5vh] font-[GoodDog] text-lg sm:text-xl md:text-2xl lg:text-3xl self-center text-center text-black">
        The Heroes, the Legends, the Myths
      </p>
      <div className="w-full min-h-[140vh] sm:min-h-[150vh] md:min-h-[160vh] lg:min-h-[170vh] bg-[url('/about/about-people-2.png')] bg-cover bg-no-repeat bg-bottom">
        {/* Background Image */}
      </div>
        <StudentCouncil data={data} />
        <MediaClub data={mediaclub} title={"Media Club"}/>
        <MediaClub data={mediaclub} title={"Web Dev"} />
    </div>
  );
};



function StudentCouncil({data}){
  data.Leads.map((lead) => {
    console.log(lead)
  })
  return (
<div className="flex flex-col items-center space-y-4 min-h-fit max-h-[280vh]">
  <p className="text-8xl text-[#285F5F] font-[Bangers]">Student Council</p>
  <div className="flex flex-wrap justify-center space-x-4 h-max ">
    {data.Leads.map((lead, index) => (
      <div key={index} className="relative flex flex-col items-center w-64 min-h-10 space-y-2 bg-center bg-cover" style={{backgroundImage: `url(/about/FrameMain.png)`}}>
        <img src={lead.image} alt={lead.name} className="object-cover w-full h-full" />
        <div className="absolute bottom-10 text-center text-white">
          <h3 className="text-xl  font-[Bangers]">{lead.name}</h3>
          <p className="text-lg font-[GoodDog]">{lead.designation}</p>
        </div>
      </div>
    ))}
  </div>
  <div className="flex flex-wrap justify-center space-x-4 space-y-4 h-max border-2 border-white">
    {data.Members.map((member, index) => (
      <div key={index} className="relative flex flex-col items-center w-48 h-72 bg-center bg-cover mt-1" style={{backgroundImage: `url(/about/FrameMain.png)`}}>
      <img src={member.image} alt={member.name} className="object-cover w-full h-full" />
      <div className="absolute bottom-10 text-center text-white">
        <h3 className="text-xl  font-[Bangers]">{member.name}</h3>
        <p className="text-lg font-[GoodDog]">{member.designation}</p>
      </div>
    </div>
    ))}
  </div>
</div>
  );

}

function MediaClub({data,title}){
  data.Members.map((member) => {
    console.log(member)
  })
  return (
    <div className="flex flex-col items-center min-h-fit max-h-[280vh] mt-16">
      <p className="text-8xl text-[#285F5F] font-[Bangers]">{title}</p>
      <div className="flex flex-wrap justify-center space-x-4 space-y-4 h-max ">
        {data.Members.map((member, index) => (
          <div key={index} className="relative flex flex-col items-center w-48 min-h-10 space-y-2 bg-center bg-cover" style={{backgroundImage: `url(/about/FrameMain.png)`}}>
            <img src={member.image} alt={member.name} className="object-cover w-full h-full" />
            <div className="absolute bottom-4 text-center text-white">
              <h3 className="text-xl  font-[Bangers]">{member.name}</h3>
              <p className="text-lg font-[GoodDog]">{member.designation}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

}