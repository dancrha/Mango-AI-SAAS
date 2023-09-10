"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const Testimonials = [
  {
    name: "Jessica Thomspson",
    avatar: "J",
    title: "Senior Software Engineer",
    description: `"Mango AI is a true masterpiece. The chat functionality is so lifelike, it feels like talking to a human expert. And the code, photo, video, and music generation features have saved me countless hours."`,
  },
  {
    name: "Brian Patel",
    avatar: "B",
    title: "Full Stack Developer",
    description: `"I'm amazed at what this AI web app can do! The code generation is like having a coding genius at my fingertips."`,
  },
  {
    name: "Maria Lopez",
    avatar: "M",
    title: "UI/UX Designer",
    description: `"This AI web app is a dream come true for designers like me. The photo generation feature provides an endless source of inspiration, and the video generation tool helps me visualize concepts effortlessly."`,
  },
  {
    name: "David Rodriguez",
    avatar: "D",
    title: "Content Creator",
    description: `"As a content creator, your AI web app has been a game-changer for me. I use the photo generation feature to create eye-catching visuals, and the video generation tool has boosted engagement on my social media channels. It's a creative powerhouse!"`,
  },
];

const LandingContent = () => {
  return (
    <div className='px-10 pb-20'>
      <h2 className='text-center text-4xl text-white font-extrabold mb-10'>
        Testimonials
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {Testimonials.map((item) => (
          <Card
            key={item.description}
            className='bg-[#192339] border-none text-white'
          >
            <CardHeader>
              <CardTitle className='flex items-center gap-x-2'>
                <div>
                  <p className='text-lg'>{item.name}</p>
                  <p className='text-zinc-400 text-sm'>{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className='pt-4 px-0'>
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LandingContent;
