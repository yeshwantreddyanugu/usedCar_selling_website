import { motion } from "framer-motion";
import { Fuel, Gauge, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Car } from "@/data/cars";

interface CarCardProps {
  car: Car;
  index: number;
}

const CarCard = ({ car, index }: CarCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(price);
  };

  const formatMileage = (mileage: number) => {
    return new Intl.NumberFormat("en-US").format(mileage);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group card-gradient rounded-xl overflow-hidden border border-border card-shadow"
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {car.featured && (
          <div className="absolute top-3 left-3 px-3 py-1 rounded-full accent-gradient text-xs font-semibold text-primary-foreground">
            Featured
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
              {car.name}
            </h3>
            <p className="text-2xl font-bold text-primary mt-1">{formatPrice(car.price)}</p>
          </div>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-3 gap-3">
          <div className="flex flex-col items-center p-2 rounded-lg bg-secondary">
            <Calendar className="w-4 h-4 text-primary mb-1" />
            <span className="text-xs text-muted-foreground">{car.year}</span>
          </div>
          <div className="flex flex-col items-center p-2 rounded-lg bg-secondary">
            <Gauge className="w-4 h-4 text-primary mb-1" />
            <span className="text-xs text-muted-foreground">{formatMileage(car.mileage)} mi</span>
          </div>
          <div className="flex flex-col items-center p-2 rounded-lg bg-secondary">
            <Fuel className="w-4 h-4 text-primary mb-1" />
            <span className="text-xs text-muted-foreground">{car.fuelType}</span>
          </div>
        </div>

        {/* Transmission Badge */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">{car.transmission}</span>
          <Button variant="ghost" size="sm" className="group/btn">
            View Details
            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default CarCard;
