import Image from 'next/image'
import Navbar from './components/navbar'
import image1 from './images/image1.png'
import lume from './images/lume.png'
import dev from './images/development.png'
import design from './images/design.png'
import motion from './images/motion.png'
import graphic from './images/graphic.png'
import video from './images/video.png'
import photo from './images/photo.png'
import about from './images/image2.png'
import Mindbridge from './images/mindbridge.png'
import ui from './images/ui.png'
import web from './images/webdevelopment.png'
import wedding from './images/wedding.png'
import product from './images/product.png'
import cover from './images/cover.png'
import Footer from './components/footer'

export default function Home() {
  return (
    <div>
      <Navbar />

      {/* First section- Intro */}

      <div className="container mx-auto p-4 lg:p-12 animate-fade-up">
        <div className="grid lg:grid-cols-2 gap-4 mt-16 sm:grid-cols-1 md:grid-cols-2  text-grey-900">
          <div className="mt-0 lg:mt-10 md:mt-20" data-aos="fade-right">
            <h1 className="font-bold text-white text-4xl lg:text-5xl font-Jakarta pb-4 animate-flip-up  ">Unleashing untapped potential</h1>
            <p className="pt-5 pb-14 text-gray-100 max-w-sm font-thin font-Jakarta text-l">Drive success by unlocking your brand full potential with data-driven strategies and creative campaigns</p>
            <a className="text-l mt-8 font-Jakarta font-bold text-black px-8 py-4 bg-white rounded-3xl" href="mailto:austin@lume-digital.co.uk">Boost your Business ;</a>
          </div>
          <div className="mt-32 lg:mt-0">
            <Image
              className="max-w-sm max-h-l mx-auto w-fit  md:w-fit lg:w-screen animate-infinite animate-wiggle"
              src={image1}
              alt="image"
            />
          </div>
     
        </div>

        <div className="grid bg-slate-300  p-16 lg:grid-cols-2 gap-4 mt-16 sm:grid-cols-1 md:grid-cols-2 rounded-lg lg:mt-32 animate-fade-up">
          <div className="mt-0 lg:mt-10 md:mt-20" data-aos="fade-right">
            <h1 className="font-bold text-gray-900 text-2xl lg:text-5xl font-Jakarta pb-4 animate-flip-up  ">Why LUME Digital ?</h1>
            <p className="pt-5 pb-14 text-gray-900 max-w-sm font-light font-Jakarta text-sm">Experience brand and digital success as we harness your brands full potential through data-driven strategies and creative campaigns. Our expert team maximizes your brand&quot;s impact, attracting your target audience and delivering exceptional results. Discover the transformative power of our services and take your brand to new heights</p>

          </div>
          <div className="mt-8 lg:mt-0 animate-jump">
            <Image
              className="max-w-l h-auto mx-auto animate-jump"
              src={lume}
              alt="image"
            />
          </div>
        </div>

        {/*Our Services*/}

        <div className="grid grid-cols-1 lg:mt-16 md:mt-8 sm:mt-4 animate-fade-up"id="services">
          <h2 className="font-bold text-white text-2xl lg:text-4xl font-Jakarta mt-24 pb-4 lg:mt-32 max-w-l animate-fade-up animate-flip-up  ">
            Our Services
          </h2>
          <p className="font-thin text-gray-400 text-l lg:text-l font-Jakarta mt-4 pb-4  max-w-2xl">
            We provide a various cross of services that can make your business more brighter or making some memories of your loved ones special moments.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-4 mt-16 sm:grid-cols-1 md:grid-cols-2  text-grey-900 mx-auto">
          <div className="mx-auto text-center p-8">
            <Image
              className="max-w-l max-h-l mx-auto animate-bounce"
              src={dev}
              alt="image"
            />
            <div className="mx-auto mt-8">
              <h3 className="text-center font-bold text-xl ">Development</h3>
              <p className="w-base text-center mt-4 font-thin text-gray-200">We tailor top-tier platforms for your brand&quot;s unique requirements, whether it&quot;s a website or a mobile app.</p>
            </div>

          </div>
          <div className="mx-auto text-center p-8">
            <Image
              className="max-w-l max-h-l mx-auto animate-bounce"
              src={design}
              alt="image"
            />
            <div className="mx-auto mt-8">
              <h3 className="text-center font-bold text-xl">UI/UX Design</h3>
              <p className="w-base text-center mt-4 font-thin text-gray-200">Crafting intuitive UI/UX solutions to enhance your digital experiences, ensuring your users have a seamless journey on your website or app.</p>
            </div>

          </div>
          <div className="mx-auto text-center p-8">
            <Image
              className="max-w-l max-h-l mx-auto animate-bounce"
              src={graphic}
              alt="image"
            />
            <div className="mx-auto mt-8">
              <h3 className="text-center font-bold text-xl">Graphic Design</h3>
              <p className="w-base text-center mt-4 font-thin text-gray-200">Transform your brand&quot;s identity into captivating visual stories with our expert graphic design services, delivering stunning graphics and visuals.</p>
            </div>
          </div>

        </div>
        <div className="grid lg:grid-cols-3 gap-4 mt-8 sm:grid-cols-1 md:grid-cols-2  text-grey-900 mx-auto">
          <div className="mx-auto text-center p-8">
            <Image
              className="max-w-l max-h-l mx-auto animate-bounce"
              src={motion}
              alt="image"
            />
            <div className="mx-auto mt-8">
              <h3 className="text-center font-bold text-xl">Motion Graphic</h3>
              <p className="w-base text-center mt-4 font-thin text-gray-200">Infuse dynamic motion into your brand&quot;s narrative with our skilled motion graphics services, amplifying your visual storytelling with captivating animations and effects</p>
            </div>

          </div>
          <div className="mx-auto text-center p-8">
            <Image
              className="max-w-l max-h-l mx-auto animate-bounce"
              src={photo}
              alt="image"
            />
            <div className="mx-auto  mt-8">
              <h3 className="text-center font-bold text-xl">Photography</h3>
              <p className="w-base text-center mt-4 font-thin text-gray-200">Elevate your brand&quot;s story through the lens of our photography services, capturing moments that resonate with your or your brand&quot;s audience and enhance your visual presence.</p>
            </div>

          </div>
          <div className="mx-auto text-center p-8">
            <Image
              className="max-w-l max-h-l mx-auto animate-bounce"
              src={video}
              alt="image"
            />
            <div className="mx-auto  mt-8">
              <h3 className="text-center font-bold text-xl">Videography</h3>
              <p className="w-base text-center mt-4 font-thin text-gray-200">Unfold your brand &quot;s story through our cinematic videography services, creating captivating videos that engage your audience and elevate your visual narrative.</p>
            </div>
          </div>
        </div>

        {/* About Us */}
        <div className="grid lg:grid-cols-2 gap-4 mt-16 lg:mt-32 sm:grid-cols-1 md:grid-cols-2  text-grey-900 animate-fade-up" id="About">
          <div className="mt-0 lg:mt-10 md:mt-20" data-aos="fade-right">
            <h1 className="font-bold text-white text-3xl lg:text-4xl font-Jakarta pb-4 animate-flip-up  ">About Us</h1>
            <p className="pt-5 pb-14 text-gray-100 max-w-l font-thin font-Jakarta text-l">At <b>Lume Digital</b>, we&quot;re more than just a digital marketing agency; we&quot;re your dedicated partners in the digital realm. With a team of experienced experts, we specialize in crafting unique brand narratives and tailored strategies to enhance your brand&quot;s visibility, engagement, and profitability. We&quot;re committed to delivering measurable results by combining data-driven insights with creative brilliance. Our mission is to navigate the complexities of the digital world on your behalf, creating compelling content, optimizing your online presence, and driving growth. Welcome to <b>Lume Digital</b>, where your brand&quot;s digital journey begins with a passion for innovation and a commitment to your success</p>

          </div>
          <div className="mt-16 lg:mt-0 ">
            <Image
              className="max-w-sm max-h-l mx-auto p-8 lg:p-0"
              src={about}
              alt="image"
            />
          </div>
        </div>



        {/* Works Tech*/}

        <div className="grid grid-cols-1 lg:mt-16 md:mt-8 sm:mt-4 animate-fade-up" id="Works">
          <h2 className="font-bold text-white text-2xl lg:text-4xl font-Jakarta mt-24 pb-4 lg:mt-32 max-w-l animate-flip-up ">
            Turning your ideas into a reality
          </h2>
          <p className="font-thin text-gray-400 text-l lg:text-l font-Jakarta mt-4 pb-4  max-w-l ">
            Some of our Tech related works
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-4 mt-16 sm:grid-cols-1 md:grid-cols-3  text-grey-900 mx-auto animate-fade-up">
          <div className=" text-center">
            <Image
              className="max-w-xl w-full"
              src={Mindbridge}
              alt="image"
            />
            <div className="mx-auto mt-8">
              <h3 className="text-left font-bold text-xl">Mindbridge</h3>
              <p className="w-base text-left mt-4 font-thin text-gray-200">Ux/Ui Design</p>
            </div>

          </div>
          <div className="text-center ">
            <Image
              className="max-w-l  w-full"
              src={ui}
              alt="image"
            />
            <div className="mx-auto mt-8">
              <h3 className="text-left font-bold text-xl">UI Elements</h3>
              <p className="w-base text-left mt-4 font-thin text-gray-200">UI/UX Design</p>
            </div>

          </div>
          <div className="text-center">
            <Image
              className="max-w-xl w-full "
              src={web}
              alt="image"
            />
            <div className="mx-auto mt-8">
              <h3 className="text-left font-bold text-xl">CrowdAfrik</h3>
              <p className="w-base text-left mt-4 font-thin text-gray-200">Web Development</p>
            </div>
          </div>

          {/* Works - Creative*/}
        </div>
        <div className="grid grid-cols-1 lg:mt-16 md:mt-8 sm:mt-4 animate-fade-up">
          <h2 className="font-bold text-white text-2xl lg:text-4xl font-Jakarta mt-24 pb-4 lg:mt-32 max-w-l animate-flip-up  ">
            Creating beautiful memories
          </h2>
          <p className="font-thin text-gray-400 text-l lg:text-l font-Jakarta mt-4 pb-4  max-w-l ">
            Some of our creative works
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-3 mt-16 sm:grid-cols-1 md:grid-cols-3  text-grey-900 mx-auto animate-fade-up">
          <div className="text-center w-full">
            <Image
              className="w-full "
              src={wedding}
              alt="image"
            />
            <div className="mx-auto mt-8">
              <h3 className="text-left font-bold text-xl">Wedding Photography</h3>
            </div>
          </div>
          <div className="text-center w-full">
            <Image
              className="w-full"
              src={product}
              alt="image"
            />
            <div className="mx-auto mt-8">
              <h3 className="text-left font-bold text-xl">Product Photography</h3>
            </div>


          </div>
          <div className="text-center w-full">
            <Image
              className="w-full"
              src={cover}
              alt="image"
            />
            <div className="mx-auto mt-8">
              <h3 className="text-left font-bold text-xl">Cover & Poster Design</h3>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>

  )
}
