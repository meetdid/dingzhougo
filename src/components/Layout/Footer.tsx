import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const quickLinks = [
  { label: "首页", path: "/" },
  { label: "玩转定州", path: "/travel" },
  { label: "文化遗产", path: "/heritage" },
  { label: "攻略指南", path: "/guide" },
  { label: "活动动态", path: "/events" },
  { label: "关于定州", path: "/about" },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-primary-500 to-primary-600 text-white">
      <div className="container mx-auto px-4 py-12 md:px-8 md:py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-2xl font-bold">
              定州<span className="bg-gradient-to-r from-accent-400 to-accent-300 bg-clip-text text-transparent">go</span>
            </h3>
            <p className="mt-4 leading-relaxed text-white/80">
              定州go是定州年轻人的生活指南，带你发现好吃好玩有趣的定州。千年古都，活力无限！
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-accent-300">快速链接</h4>
            <ul className="mt-4 flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/70 transition-colors duration-300 hover:text-accent-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-accent-300">联系我们</h4>
            <ul className="mt-4 flex flex-col gap-3">
              <li className="flex items-center gap-2 text-white/70">
                <MapPin size={16} className="shrink-0 text-accent-300" />
                <span>河北省定州市中山中路1号</span>
              </li>
              <li className="flex items-center gap-2 text-white/70">
                <Phone size={16} className="shrink-0 text-accent-300" />
                <span>185-2286-9131</span>
              </li>
              <li className="flex items-center gap-2 text-white/70">
                <Mail size={16} className="shrink-0 text-accent-300" />
                <span>contact@dingzhougo.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-400">
        <div className="container mx-auto px-4 py-4 text-sm text-center text-white/50 md:px-8">
          <span>&copy; 2026 定州go 版权所有</span>
        </div>
      </div>
    </footer>
  );
}
