'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';

interface MenuItem {
  title: string;
  href: string;
  submenu?: {
    title: string;
    href: string;
  }[];
}

const menuItems: MenuItem[] = [
  {
    title: '병원안내',
    href: '/about/introduction',
    submenu: [
      { title: '병원소개', href: '/about/introduction' },
      { title: '의료진소개', href: '/about/medical-staff' },
      { title: '오시는길', href: '/about/directions' },
    ],
  },
  {
    title: '주요 진료과목',
    href: '/departments/spine',
    submenu: [
      { title: '척추 질환', href: '/departments/spine' },
      { title: '어깨·팔 통증', href: '/departments/shoulder-arm' },
      { title: '무릎·다리 질환', href: '/departments/knee-leg' },
      { title: '손·발 통증', href: '/departments/hand-foot' },
      { title: '족부 질환', href: '/departments/foot' },
      { title: '두통', href: '/departments/headache' },
    ],
  },
  {
    title: '물리치료',
    href: '/therapy/physical',
  },
  {
    title: '비수술치료',
    href: '/non-surgical/shockwave',
    submenu: [
      { title: '체외충격파', href: '/non-surgical/shockwave' },
      { title: 'C-ARM', href: '/non-surgical/c-arm' },
      { title: '프롤로주사', href: '/non-surgical/prolotherapy' },
    ],
  },
];

function isMenuActive(pathname: string, item: MenuItem): boolean {
  if (pathname === item.href) return true;
  if (item.submenu) {
    return item.submenu.some((sub) => pathname.startsWith(sub.href));
  }
  return pathname.startsWith(item.href);
}

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        isScrolled ? 'shadow-md' : ''
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-[72px]">
          {/* 좌측: 로고 + 의원명 */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <img
              src="/images/logo.png"
              alt="서울튼튼재활의학과의원 로고"
              className="w-11 h-11 object-contain"
            />
            <div>
              <span className="text-xl md:text-2xl font-bold text-[#0C2E86] whitespace-nowrap block">
                서울튼튼재활의학과의원
              </span>
              <span className="text-xs text-gray-500 hidden md:block">
                근본적인 원인을 해결하는 1:1 맞춤형 재활 파트너
              </span>
            </div>
          </Link>

          {/* 데스크탑 네비게이션 */}
          <nav className="hidden lg:block">
            <ul className="flex items-center">
              {menuItems.map((item, index) => {
                const active = isMenuActive(pathname, item);
                return (
                  <li
                    key={index}
                    className="relative"
                    onMouseEnter={() => setOpenMenu(index)}
                    onMouseLeave={() => setOpenMenu(null)}
                  >
                    <Link
                      href={item.href}
                      className={`block px-5 py-6 font-medium transition-colors ${
                        active
                          ? 'text-[#1A2B4C] border-b-2 border-[#1A2B4C]'
                          : 'text-gray-600 hover:text-[#1A2B4C]'
                      }`}
                    >
                      {item.title}
                    </Link>

                    {item.submenu && (
                      <div
                        className={`absolute left-0 top-full min-w-[200px] bg-white shadow-lg border border-gray-200 transition-all duration-200 ${
                          openMenu === index
                            ? 'opacity-100 visible'
                            : 'opacity-0 invisible'
                        }`}
                      >
                        <ul className="py-2">
                          {item.submenu.map((subitem, subindex) => (
                            <li key={subindex}>
                              <Link
                                href={subitem.href}
                                className={`block px-6 py-3 transition-colors ${
                                  pathname === subitem.href
                                    ? 'text-[#1A2B4C] bg-[#F0F4F8] font-medium'
                                    : 'text-gray-600 hover:bg-[#F0F4F8] hover:text-[#1A2B4C]'
                                }`}
                              >
                                {subitem.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* 모바일 햄버거 */}
          <button
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="메뉴 열기"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <ul className="py-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    className={`flex-1 block px-6 py-4 font-medium ${
                      isMenuActive(pathname, item)
                        ? 'text-[#1A2B4C] bg-[#F0F4F8]'
                        : 'text-gray-700'
                    }`}
                  >
                    {item.title}
                  </Link>
                  {item.submenu && (
                    <button
                      className="px-4 py-4 text-gray-500"
                      onClick={() =>
                        setMobileSubmenu(mobileSubmenu === index ? null : index)
                      }
                    >
                      <ChevronDown
                        className={`w-5 h-5 transition-transform ${
                          mobileSubmenu === index ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  )}
                </div>
                {item.submenu && mobileSubmenu === index && (
                  <ul className="bg-gray-50">
                    {item.submenu.map((subitem, subindex) => (
                      <li key={subindex}>
                        <Link
                          href={subitem.href}
                          className={`block px-10 py-3 text-sm ${
                            pathname === subitem.href
                              ? 'text-[#1A2B4C] font-medium'
                              : 'text-gray-600'
                          }`}
                        >
                          {subitem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
