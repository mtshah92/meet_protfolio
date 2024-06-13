import { Title } from "../common/Title";
export const Contact = () => {
  return (
    <>
      <section
        id="contact"
        className="w-full py-20 border-b-[1px] border-b-gray-600"
      >
        <div className="flex justify-center text-center items-center">
          <Title title="Contact" desc="Get In Touch" />
        </div>
        <div className="flex flex-col gap-4 justify-center items-center text-center rounded-lg shadow-shadowOne p-20 bg-gradient-to-r from body-Color to-[#202327] group transition-colors duration-1000 ">
          <h3 className="text-3xl font-bold text-white">Meet Shah</h3>
          <p className="text-lg font-normal text-designColor">
            Full Stack Developer
          </p>
          <p className="text-base text-gray-400 tracking-wide">
            Hello, Thank you for taking time to visit my portfolio! So if
            you&apos;re looking for a versatile and passionate Full Stack
            Developer to take your project to the next level, look no further.
            Let&apos;s build something amazing together&#33;
          </p>
          <p className="text-base text-md text-gray-400 flex items-center gap-2">
            Email:
            <span className="text-lightText">
              <a href="mailto:mthshah98@gmail.com">mthshah98@gmail.com</a>
            </span>
          </p>
        </div>
      </section>
    </>
  );
};
