import { useState } from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle, Globe } from "lucide-react";
import SectionTitle from "@/components/Layout/SectionTitle";
import AnimatedSection from "@/components/UI/AnimatedSection";
import { cityInfo } from "@/data/city";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("感谢您的留言！");
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    { icon: MapPin, label: "地址", value: cityInfo.location },
    { icon: Phone, label: "电话", value: "185-2286-9131" },
    { icon: Mail, label: "邮箱", value: "contact@dingzhougo.com" },
    { icon: Clock, label: "工作时间", value: "周一至周五 9:00-17:00" },
  ];

  const inputClassName =
    "w-full rounded-lg border border-warm-300 bg-white px-4 py-3 text-ink-500 placeholder:text-ink-200 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20";

  return (
    <section className="section-padding bg-warm-100">
      <div className="container">
        <SectionTitle title="联系我们" subtitle="期待您的来访与咨询" />
        <div className="mt-16 grid gap-12 md:grid-cols-2">
          <AnimatedSection>
            <div>
              <h3 className="font-serif text-2xl text-primary-500">联系方式</h3>
              <div className="mt-6 space-y-5">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary-500/10">
                      <item.icon className="h-5 w-5 text-primary-500" />
                    </div>
                    <div>
                      <p className="text-sm text-ink-300">{item.label}</p>
                      <p className="text-ink-500">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <p className="text-sm text-ink-300">关注我们</p>
                <div className="mt-3 flex gap-3">
                  {[
                    { Icon: MessageCircle, label: "微信" },
                    { Icon: Globe, label: "微博" },
                  ].map(({ Icon, label }) => (
                    <button
                      key={label}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-500 text-white transition-colors hover:bg-primary-600"
                      title={label}
                    >
                      <Icon className="h-5 w-5" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="mb-1 block text-sm text-ink-400">姓名</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="请输入您的姓名"
                  className={inputClassName}
                  required
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-ink-400">邮箱</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="请输入您的邮箱"
                  className={inputClassName}
                  required
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-ink-400">消息</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="请输入您的留言"
                  rows={5}
                  className={inputClassName}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-gradient-to-r from-primary-500 to-teal-500 px-8 py-3 font-semibold text-white transition-colors hover:shadow-lg"
              >
                提交留言
              </button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
