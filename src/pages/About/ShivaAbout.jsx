import ShivaImg from "@/assets/images/shivaimage.jpeg";

export default function ShivaAbout() {
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
                  src={ShivaImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
             <p className="text-white">
  Hello! I'm a Java Full-Stack Developer passionate about building
  scalable, secure, and high-performance web applications with
  clean and intuitive user interfaces. I specialize in Java, Spring Boot,
  and modern front-end technologies to deliver reliable end-to-end solutions.
</p>

<p className="text-white">
  My focus is on designing RESTful APIs, implementing efficient
  backend logic, and integrating them seamlessly with responsive front-end
  applications. I follow best practices in API design, database management,
  and application architecture to ensure maintainable and scalable systems.
</p>

<div className="pt-6">
  <blockquote className="border-l-4 border-gray-300 pl-4">
    <p className="text-white">
      I am a continuous learner driven by problem-solving and system design.
      With hands-on experience in Spring Boot, REST APIs, and full-stack
      development workflows, I strive to build solutions that are
      reliable, efficient, and aligned with real-world business requirements.
    </p>
                  <div className="mt-6">
  <cite className="block font-medium text-white">
    Shiva Singh
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
