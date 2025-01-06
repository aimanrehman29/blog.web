import Image from "next/image";

export default function About() {
    return <div><section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto flex flex-col">
      <div className="lg:w-4/6 mx-auto">
        <div className="rounded-lg h-64 overflow-hidden">
          <Image
            alt="content"
            className="object-cover object-center h-full w-full"
            src="/images/logo.webp"
            width={500}
            height={300}
          />
        </div>
        <div className="flex flex-col sm:flex-row mt-10">
          <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
            <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-10 h-10"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx={12} cy={7} r={4} />
              </svg>
            </div>
            <div className="flex flex-col items-center text-center justify-center">
              <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                Aiman Rehman
              </h2>
              <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4" />
              <p className="text-base">
                
Canvas Blog is your digital canvas for creativity and inspiration, where ideas come to life and stories connect us all. Join us to explore, create, and share meaningful content!
              </p>
            </div>
          </div>
          <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
            <p className="leading-relaxed text-lg mb-4">
            <b className="text-3xl">About Us: Canvas Blog</b><br></br>

Welcome to Canvas Blog, your digital space for creativity, inspiration, and insightful stories! Whether you're an avid reader, a passionate writer, or someone looking to explore innovative ideas, Canvas Blog is your platform to paint the world with words and ideas.

<br /><b className="text-3xl">Our Vision</b><br/>
At Canvas Blog, we believe that everyone has a unique story to tell. Just like an artist uses a blank canvas to create masterpieces, we provide a digital canvas for writers, creators, and thinkers to share their voices with the world.

<br/><b className="text-3xl">What We Offer</b><br/>
Inspiring Content: Explore a variety of blog posts spanning topics like lifestyle, technology, personal growth, art, and culture.
Engaging Community: Join a vibrant community of readers and writers who share a love for thoughtful discussions and creative ideas.
Platform for Creators: Publish your blogs, share your experiences, and connect with a wider audience.
<br/><b className="text-3xl">Why Canvas Blog?</b><br/>
The world is full of endless possibilities, and Canvas Blog is here to capture them. With every article and story, we aim to empower, educate, and entertain our readers. Our platform is designed to be intuitive and inviting, ensuring that whether you’re here to read or write, you feel right at home.

<br/><b className="text-3xl">Join Us</b><br/>
Lets create, share, and inspire together. Canvas Blog is more than just a blog—it's a community where ideas come to life and stories are celebrated.

Discover your next inspiration with us! 🌟
            </p>
            <a className="text-indigo-500 inline-flex items-center hover:arrow">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>;
  }
  