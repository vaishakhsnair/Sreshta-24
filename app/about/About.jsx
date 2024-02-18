import React from 'react';
import Image from 'next/image';
import "./About.css"
//import the json file
import data from './StudentCouncil.json';
import mediaclub from './MediaClub.json';


export default function AboutPage() {
  return (
    <div className='bg-[#D6ECEC] flex-col justify-center'>
      <nav className="flex items-center justify-between p-6 ">
        <div className="text-2xl font-bold">Logo</div>
      </nav>
      <p className='our-team-main-text'>OUR TEAM</p>
      <p className="w-full h-[10vh] py-auto mt-[-5vh] font-[GoodDog] text-[2em] self-center text-center text-black">
        The Heroes, the Legends, the Myths
      </p>
      <div className="w-full min-h-[140vh] bg-[url('/about/about-people-2.png')] bg-cover bg-no-repeat bg-bottom">
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