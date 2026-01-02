import bhulvaImg from "@/assets/images/bhulva.png";

export default function bhulvaAbout() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Developer, Designer, Creator
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={bhulvaImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
  Hello! I’m a Front-End Developer with a strong passion for building clean, responsive, 
  and user-friendly web interfaces. I specialize in JavaScript and modern front-end technologies, 
  focusing on transforming ideas and designs into interactive, high-quality web experiences that users enjoy.
</p>

<p className="text-white">
 My work emphasizes creating intuitive user interfaces with a strong attention to detail, performance
  optimization, and accessibility. I strive to ensure that applications look and function consistently across 
 different devices, browsers, and screen sizes while maintaining clean and maintainable code.
</p>

<div className="pt-6">
  <blockquote className="border-l-4 border-gray-300 pl-4">
    <p className="text-white">
      As a continuous learner, I enjoy exploring new UI trends and
      best practices to deliver polished and effective front-end
      solutions.
    </p>


                  <div className="mt-6">
  <cite className="block font-medium text-white">
    Shubham Kumar
  </cite>
</div>

                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
