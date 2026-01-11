import { motion } from "framer-motion";
import { CheckCircle, Users, Car, ThumbsUp } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "Quality Assured",
      description: "Every vehicle undergoes a rigorous 150-point inspection before listing.",
    },
    {
      icon: Users,
      title: "Customer First",
      description: "We prioritize your satisfaction with transparent pricing and no hidden fees.",
    },
    {
      icon: Car,
      title: "Wide Selection",
      description: "From sedans to SUVs, we have a diverse inventory to match your needs.",
    },
    {
      icon: ThumbsUp,
      title: "Easy Financing",
      description: "Flexible financing options available to help you drive home today.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 hero-gradient">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Your Trusted Partner in{" "}
              <span className="text-gradient">Pre-Owned Cars</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              With over a decade of experience in the automotive industry, Pooja's Cars has become 
              a trusted name for quality pre-owned vehicles. We believe everyone deserves to drive 
              a reliable car without breaking the bank.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our team of experts carefully selects each vehicle, ensuring you get the best 
              value for your investment. We're not just selling cars – we're building lasting 
              relationships with our customers.
            </p>
          </motion.div>

          {/* Right Content - Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="p-6 rounded-xl card-gradient border border-border card-shadow"
              >
                <feature.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
