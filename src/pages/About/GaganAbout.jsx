import ShubhamImg from "@/assets/images/gagan.png";

export default function About() {
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
                  src={ShubhamImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
  Hello! I'm a Front-End Developer passionate about building clean,
  responsive, and user-friendly web interfaces. I specialize in
  JavaScript and modern front-end frameworks to create visually
  appealing and performant web experiences.
</p>

<p className="text-white">
  My focus is on translating designs into interactive applications,
  ensuring accessibility, responsiveness, and smooth user interactions.
  I enjoy crafting interfaces that are both functional and aesthetically
  refined across different devices and screen sizes.
</p>

<div className="pt-6">
  <blockquote className="border-l-4 border-gray-300 pl-4">
    <p className="text-white">
      As a continuous learner, I stay updated with modern UI trends,
      best practices, and performance optimization techniques to
      deliver intuitive and engaging front-end solutions.
    </p>


                  <div className="mt-6">
  <cite className="block font-medium text-white">
    Gagan Kumar
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
