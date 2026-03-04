interface SubHeroProps {
  title: string;
  subtitle?: string;
  imageSrc?: string;
}

export default function SubHero({ title, subtitle, imageSrc }: SubHeroProps) {
  return (
    <div
      className="relative h-80 md:h-96 flex items-center justify-center bg-gradient-to-r from-[#1A2B4C] to-[#0C2E86]"
      style={
        imageSrc
          ? {
              backgroundImage: `url(${imageSrc})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : {}
      }
    >
      <div className="absolute inset-0 bg-black/55"></div>

      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">{title}</h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-gray-200">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
