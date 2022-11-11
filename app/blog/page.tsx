import Image from 'next/image'
import profilePic from '#/public/profile.jpg';


export default function BlogPage() {
  return (
    <div className="bg-gray-800">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:flex lg:justify-between lg:px-8">
        <div className="max-w-xl">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">Blog </h2>
          <p className="mt-5 text-xl text-gray-400">
            We are learning tailwindcss. 
          </p>
          <Image
        src={profilePic}
        alt="Picture of the author"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
         placeholder="blur" // Optional blur-up while loading
      />
        </div>
      </div>
    </div>
  )
}
