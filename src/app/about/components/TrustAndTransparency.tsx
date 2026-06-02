"use client";

import { motion } from "framer-motion";
import { ShieldCheck, MapPin, Building, ExternalLink, HeartHandshake } from "lucide-react";
import {
  aboutBodyStack,
  aboutEyebrow,
  aboutH2,
  aboutSectionPad,
  aboutSurfaceCard,
  aboutIconWrap,
} from "../aboutTypography";

export default function TrustAndTransparency() {
  return (
    <section className={`relative overflow-hidden bg-white pt-20 sm:pt-24 lg:pt-28 pb-4 sm:pb-6 lg:pb-8`}>
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-teal/[0.04] blur-3xl"
      />
      
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-8 xl:max-w-[1600px] xl:px-20">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className={aboutEyebrow}>Trust & Transparency</span>
            <h2
              className={`${aboutH2} mb-6 text-wrap leading-[1.15] sm:leading-[1.2]`}
            >
              <span className="block">Registered & Recognized</span>
              <span className="block">in Ghana</span>
            </h2>
            <div className={aboutBodyStack}>
              <p>
                Sylfi&apos;s Child Health Corner (LBG) was officially incorporated 
                under the Companies Act 2019 (Act 992) as a Limited by Guarantee 
                organization on June 19th, 2025.
              </p>
              <p>
                Certified by the Office of the Registrar of Companies in Kumasi, 
                Ghana, we operate with full transparency and accountability, 
                upholding the highest standards of governance in our mission to 
                improve child health and well-being.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div
              aria-hidden
              className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/[0.04] via-transparent to-teal/[0.06]"
            />
            
            <div className={`relative ${aboutSurfaceCard} p-6 sm:p-8 max-w-[26rem] mx-auto lg:mx-0 lg:ml-auto`}>
              <div className="flex items-center gap-4 mb-6">
                <span className={aboutIconWrap}>
                  <ShieldCheck className="h-5 w-5 text-primary" strokeWidth={2} />
                </span>
                <h3 className="font-semibold text-lg text-dark-text">Official Registration</h3>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Building className="h-5 w-5 text-primary/60 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-dark-text">Entity Type</p>
                    <p className="text-sm text-dark-text/70 mt-0.5">Registered Limited by Guarantee</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary/60 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-dark-text">Location</p>
                    <p className="text-sm text-dark-text/70 mt-0.5">Ghana</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 text-primary/60 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-dark-text">Registration Number</p>
                    <p className="text-sm text-dark-text/70 mt-0.5">CG042370625</p>
                  </div>
                </div>
              </div>
              
              <a 
                href="/schc-certified.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary-dark px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:shadow-md hover:shadow-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 active:scale-[0.98]"
              >
                View Certificate
                <ExternalLink 
                  size={16} 
                  strokeWidth={2.25} 
                  className="transition-transform duration-200 group-hover:-translate-y-[1px] group-hover:translate-x-[1px]" 
                  aria-hidden 
                />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Decorative HeartHandshake Divider */}
        <div className="relative mt-20 sm:mt-24 w-full z-10">
          <div className="mx-auto flex w-full items-center justify-center">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-primary/20 to-primary/60" />
            <div className="mx-4 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white shadow-[0_4px_24px_rgba(31,168,74,0.15)] ring-1 ring-primary/10">
              <HeartHandshake className="h-6 w-6 text-primary" strokeWidth={2.25} />
            </div>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-teal/20 to-teal/60" />
          </div>
        </div>
      </div>
    </section>
  );
}
