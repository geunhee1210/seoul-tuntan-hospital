export default function MapEmbed() {
  return (
    <div className="relative w-full h-full">
      <iframe
        src="https://www.google.com/maps?q=충청북도+증평군+증평읍+중앙로+184-1&output=embed&z=17"
        className="absolute inset-0 w-full h-full border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="서울튼튼재활의학과의원 위치"
      />
    </div>
  );
}
