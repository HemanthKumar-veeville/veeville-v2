import { Card } from "../../components/ui/card";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Megaphone, Sparkles, Code2 } from "lucide-react";

const MainWork = (): JSX.Element => {
  const navigate = useNavigate();

  const businessVerticals = [
    {
      title: "Marketing",
      description:
        "Strategic brand development, digital marketing campaigns, and creative content solutions to elevate your brand presence.",
      link: "/work/marketing",
      icon: Megaphone,
      color: "from-pink-500/20 to-purple-500/20",
      hoverColor: "from-pink-500/30 to-purple-500/30",
    },
    {
      title: "Experiences",
      description:
        "Immersive event designs, interactive installations, and memorable brand activations that connect with your audience.",
      link: "/work/experiences",
      icon: Sparkles,
      color: "from-orange-500/20 to-red-500/20",
      hoverColor: "from-orange-500/30 to-red-500/30",
    },
    {
      title: "Technology",
      description:
        "Innovative digital solutions, custom software development, and tech integrations to power your business growth.",
      link: "/work/technology",
      icon: Code2,
      color: "from-blue-500/20 to-cyan-500/20",
      hoverColor: "from-blue-500/30 to-cyan-500/30",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="flex flex-col min-h-full">
      {/* Main content */}
      <main className="container mx-auto px-4 py-16 md:py-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-8"
        >
          {/* Section Header */}
          <motion.div variants={cardVariants} className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#333333] mb-4">
              Our Expertise
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover how we can transform your vision into reality through our
              three core verticals
            </p>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {businessVerticals.map((vertical, index) => {
              const Icon = vertical.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card
                    className={`relative p-8 cursor-pointer transition-all duration-300 overflow-hidden
                              bg-gradient-to-br ${vertical.color} hover:${vertical.hoverColor}
                              border-none shadow-lg hover:shadow-xl`}
                    onClick={() => navigate(vertical.link)}
                  >
                    {/* Icon Background */}
                    <div className="absolute right-0 top-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
                      <Icon size={120} />
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <div className="bg-white/30 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                        <Icon size={24} className="text-gray-800" />
                      </div>

                      <h2 className="text-2xl font-bold mb-4 text-[#333333]">
                        {vertical.title}
                      </h2>

                      <p className="text-gray-700 mb-6 line-clamp-3">
                        {vertical.description}
                      </p>

                      <div className="flex items-center text-[#333333] font-medium group">
                        <span>Learn More</span>
                        <svg
                          className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default MainWork;
