"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { business } from "@/data/business";

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

const mockPosts = [
  { id: 1, image: "/images/gallery/gallery-45.jpeg", likes: 124 },
  { id: 2, image: "/images/gallery/gallery-19.jpeg", likes: 89 },
  { id: 3, image: "/images/gallery/gallery-61.jpeg", likes: 210 },
  { id: 4, image: "/images/gallery/gallery-42.jpeg", likes: 156 },
];

export function InstagramFeed() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:py-28 overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <p className="eyebrow flex items-center gap-2">
            <InstagramIcon className="h-4 w-4" /> Sosyal Medya
          </p>
          <h2 className="mt-3 font-display text-[clamp(1.75rem,5vw,2.75rem)] font-semibold text-charcoal">
            Bizi Instagram&apos;da Takip Edin
          </h2>
        </div>
        <a
          href={business.instagramHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-body text-sm font-semibold text-tac-red transition-colors hover:text-tac-deep"
        >
          {business.instagram}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {mockPosts.map((post, idx) => (
          <motion.a
            key={post.id}
            href={business.instagramHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative aspect-square overflow-hidden rounded-2xl bg-linen-warm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <Image
              src={post.image}
              alt="Instagram Post"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <InstagramIcon className="h-8 w-8 text-white" />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
