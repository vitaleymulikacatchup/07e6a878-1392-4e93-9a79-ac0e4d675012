"use client";
import { ThemeProvider } from '@/providers/ThemeProvider';
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Twitter, Linkedin } from 'lucide-react';

const assetMap = [
  { "id": "heroImage", "url": "https://images.pexels.com/photos/2953806/pexels-photo-2953806.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "A rainy window view from a train in Tallinn, Estonia, capturing an atmospheric and moody landscape." },
  { "id": "aboutImage", "url": "https://images.pexels.com/photos/1031592/pexels-photo-1031592.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Upward view of modern architecture and clear blue sky in Tallinn, reflecting contemporary urban design." },
  { "id": "teamImage", "url": "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Overhead view of a diverse team in a business meeting using laptops and tablets." }
];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal brandName="Estonia" />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroSplit
            title="Explore Estonia"
            description="Discover the beauty and history of Estonia."
            imageSrc={assetMap.find(a => a.id === "heroImage")?.url}
            buttons={[{ text: "Learn More", href: "about" }, { text: "Contact", href: "contact" }]}
            className="bg-blue-50 text-blue-900"
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TextSplitAbout
            title="About Estonia"
            description={[
              "Estonia is a beautiful country located in Northern Europe, known for its medieval architecture, picturesque landscapes, and vibrant culture.",
              "Our mission is to showcase the best of Estonia, providing unique experiences for every traveler."
            ]}
            showBorder={true}
            buttons={[{ text: "Explore More", href: "features" }]}
            className="bg-blue-50 text-blue-900"
          />
        </div>
      </div>
      <div id="features" data-section="features" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardTwo
            features={[
              {
                title: "Digital Society",
                description: "Estonia is a digital leader with advanced e-Services available to everyone.",
                icon: Twitter,
                button: { text: "Learn More", href: "https://example.com" }
              },
              {
                title: "Scenic Beauty",
                description: "Explore stunning landscapes from forests to beaches.",
                icon: Linkedin,
                button: { text: "Explore", href: "https://example.com" }
              }
            ]}
            className="bg-blue-50 text-blue-900"
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactCenter
            tag="Newsletter"
            title="Stay Updated"
            description="Subscribe to our newsletter for updates on Estonia's best attractions and events."
            inputPlaceholder="Your email"
            buttonText="Subscribe"
            termsText="We respect your privacy. Unsubscribe at any time."
            className="bg-blue-50 text-blue-900"
          />
        </div>
      </div>
      <div id="team" data-section="team" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TeamCardTwo
            members={[
              {
                id: "1",
                name: "Maria L.",
                role: "Tour Specialist",
                description: "Expert in Estonian culture and history.",
                imageSrc: assetMap.find(a => a.id === "teamImage")?.url,
                socialLinks: [{ icon: Twitter, url: "https://twitter.com" }, { icon: Linkedin, url: "https://linkedin.com" }]
              },
              {
                id: "2",
                name: "Chris S.",
                role: "Adventure Guide",
                description: "Passionate about outdoor activities.",
                imageSrc: assetMap.find(a => a.id === "teamImage")?.url,
                socialLinks: [{ icon: Twitter, url: "https://twitter.com" }, { icon: Linkedin, url: "https://linkedin.com" }]
              }
            ]}
            className="bg-blue-50 text-blue-900"
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterBase
            columns={[
              {
                title: "Explore",
                items: [{ label: "Home", href: "#" }, { label: "About", href: "about" }]
              },
              {
                title: "Information",
                items: [{ label: "Terms & Conditions", href: "terms" }, { label: "Privacy Policy", href: "policy" }]
              }
            ]}
            copyrightText="© 2025 Estonia Tours"
            className="bg-blue-50 text-blue-900"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}