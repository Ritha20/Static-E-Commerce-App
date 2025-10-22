import socks from '../images/socks.jpg';
import flannelCloth from '../images/flannel cloth.jpg';
import teethToys from '../images/teething toys.jpg';
import BabyBottle from '../images/baby bottle.webp';
import Silicon from '../images/silicon.jpg';
import Light from '../images/light.jpg';
import BathSet from '../images/bath set.webp';
import soap from '../images/soap.webp';
import monitor from '../images/monitor.webp';
import babyBag from '../images/baby bag.webp';

export const babyProducts = [
    // Clothing Category
    {
      id: 1,
      name: "Organic Cotton Onesies (3-Pack)",
      price: 24.99,
      category: "Clothing",
      image: socks,
      description: "Soft organic cotton onesies for your little one",
      ageRange: "0-6 months"
    },
    {
      id: 2,
      name: "Flannel cloth",
      price: 32.99,
      category: "Clothing",
      image: flannelCloth,
      description: "Adorable romper set for special occasions",
      ageRange: "6-12 months"
    },
    
    // Toys Category
    {
      id: 3,
      name: "Sensory Activity Gym",
      price: 49.99,
      category: "Toys",
      image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=400",
      description: "Interactive play gym for sensory development",
      ageRange: "0-12 months"
    },
    {
      id: 4,
      name: "Teething Toys",
      price: 15.99,
      category: "Toys",
      image: teethToys,
      description: "Safe silicone teething rings for soothing gums",
      ageRange: "3-12 months"
    },
    
    // Feeding Category
    {
      id: 5,
      name: "Baby Bottle Set",
      price: 29.99,
      category: "Feeding",
      image: BabyBottle,
      description: "BPA-free baby bottle set with different sizes",
      ageRange: "0-12 months"
    },
    {
      id: 6,
      name: "Silicone Bibs (4-Pack)",
      price: 19.99,
      category: "Feeding",
      image: Silicon,
      description: "Easy-to-clean silicone bibs for messy eaters",
      ageRange: "6-24 months"
    },
    
    // Nursery Category
    {
      id: 7,
      name: "Baby Mobile",
      price: 39.99,
      category: "Nursery",
      image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=400",
      description: "Musical mobile with cute animal characters",
      ageRange: "0-12 months"
    },
    {
      id: 8,
      name: "Nursery Night Light",
      price: 25.99,
      category: "Nursery",
      image: Light,
      description: "Soft glow night light with color changing features",
      ageRange: "All ages"
    },
    
    // Bath & Care
    {
      id: 9,
      name: "Baby Bath Set",
      price: 34.99,
      category: "Bath & Care",
      image: BathSet,
      description: "Complete bath time set with gentle products",
      ageRange: "0-24 months"
    },
    {
      id: 10,
      name: "Baby Care Kit",
      price: 28.99,
      category: "Bath & Care",
      image: soap,
      description: "Essential care items for baby grooming",
      ageRange: "0-12 months"
    },
    
    // Safety
    {
      id: 11,
      name: "Baby Monitor",
      price: 89.99,
      category: "Safety",
      image: monitor,
      description: "HD video baby monitor with night vision",
      ageRange: "All ages"
    },
    {
      id: 12,
      name: "Outlet Covers (12-Pack)",
      price: 9.99,
      category: "Safety",
      image: babyBag,
      description: "Safety bag for mother to carry children",
      ageRange: "0-2years"
    }
  ];