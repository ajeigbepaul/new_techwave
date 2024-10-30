import Contact from "@/components/Contact";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Contactus = () => {
  return (
    <section className="w-full min-h-screen lg:mt-14 md:mt-10 mt-10">
      <div className="w-4/5 max-md:w-[90%] mx-auto">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
          <div className="w-full">
            <p className="text-black mb-2 text-[48px] max-lg:text-[36px] max-md:text-[24px] font-bold">
              Consult with our product analytics expert
            </p>
            <p className="text-xs text-subtext mb-8">
              Have questions about pricing, plans, or Growthly? Fill out the
              form, and our product analytics expert will get in touch with you
              directly.
            </p>
            <Image
              src={"/contactus.png"}
              alt="bannerimg"
              width={400}
              height={400}
              className="object-cover"
            />
            <div className="lg:flex gap-12 items-start lg:p-0 p-4 mt-5 space-x-4">
              <div className="text-black flex flex-col gap-4 mb-8">
                <p className="font-semibold">Contact information</p>
                <div className="flex flex-col gap-1 font-light lg:text-sm text-lg text-[#7A8AAB] space-y-3">
                  <p className="text-[#7A8AAB] text-sm">
                    You can also reach us on other platforms
                  </p>
                  <div className="flex items-center space-x-2">
                    <Image
                      src={"/sms.svg"}
                      alt="contactusicon"
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                    <h1 className="text-[#7A8AAB] text-sm">
                      Myidea@techwaveteam.com
                    </h1>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Image
                      src={"/phonecall.svg"}
                      alt="contactusicon"
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                    <h1 className="text-[#7A8AAB] text-sm">
                      +234 905 6578 947
                    </h1>
                  </div>
                </div>
              </div>

              <div className="text-black flex flex-col gap-4 mb-8">
                <p className="font-semibold">Socials</p>
                <div className="flex flex-col gap-1 font-light lg:text-sm text-lg text-[#7A8AAB] space-y-3">
                  <Link href="#">Twitter</Link>
                  <Link href="#">LinkedIn</Link>
                  <Link href="#">Facebook</Link>
                  <Link href="#">Instagram</Link>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="w-full">
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactus;
