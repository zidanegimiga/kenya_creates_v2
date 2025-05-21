"use client";

const panels = [
  {
    imageSrc: "/images/img1_marquee.png",
    text: "For how long will we wait for the world to change",
    bgColor: "bg-[#D3D0D2]",
    textColor: "text-[#70606F]",
  },
  {
    imageSrc: "/images/adele_marquee.png",
    text: "We are the reason it will change for the better",
    bgColor: "bg-purple-600",
    textColor: "text-white",
  },
  {
    imageSrc: "/images/group_marquee_photo.png",
    text: "Join our movement, because we can’t do it alone",
    bgColor: "bg-[#880286]",
    textColor: "text-white",
  },
];

const items = [...panels, ...panels]

export default function MarqueeSection() {
  return (
    <section className="relative overflow-hidden w-full h-[150px]">
      {/* Marquee row */}
      <ul className="relative flex h-full animate-marquee">
        {items.map((p, idx) => (
          <li
            key={idx}
            className={`
              ${p.bgColor}
              flex-shrink-0 flex items-end h-full
              overflow-hidden
            `}
          >
            {/* Image on the left, auto-width, full height */}
            <div className="h-full flex-shrink-0">
              <img
                src={p.imageSrc}
                alt=""
                className="h-full object-cover object-bottom block"
              />
            </div>

            {/* Text always to the right */}
            <div className="px-6 py-6">
              <p className={`font-satoshi text-lg ${p.textColor}`}>
                {p.text}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-10">
        <img
          src="/images/marquee_art.svg"
          alt=""
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  )
}
