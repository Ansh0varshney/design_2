import { Shield, Users, Heart } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const features = [
  {
    title: "Why Peer-to-Peer Support?",
    description: "Connect with people who understand because they've been there. Share experiences and grow together.",
    icon: Users,
  },
  {
    title: "Anonymity First",
    description: "Your privacy matters. Share freely in a secure space where you control what you reveal.",
    icon: Shield,
  },
  {
    title: "Empathy in Action",
    description: "Whether you're here to listen or to be heard, you're part of a community that cares.",
    icon: Heart,
  },
];

export function Features() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature) => (
          <Card key={feature.title} className="border-2 hover:border-primary/50 transition-colors">
            <CardHeader>
              <feature.icon className="h-12 w-12 mb-4 text-primary" />
              <CardTitle>{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}