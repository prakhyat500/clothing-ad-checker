
import React from 'react';
import Layout from '@/components/Layout';
import { CheckCircle2, AlertTriangle, Award, Users } from 'lucide-react';

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto container-padding py-12">
        <section className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="font-bold mb-6">About AdDetector</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            AdDetector was founded in 2023 with a simple mission: to help consumers 
            make informed choices by identifying deceptive clothing advertisements.
            As online shopping continues to grow, so does the prevalence of misleading
            advertising. We're here to change that.
          </p>
        </section>
        
        <section className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground mb-4">
              At AdDetector, we believe transparency is essential in digital commerce.
              Our mission is to empower consumers with technology that can identify
              misleading clothing advertisements, helping them make confident purchasing decisions.
            </p>
            <p className="text-muted-foreground">
              Through advanced AI and machine learning, we've developed tools that can detect
              manipulated images, unrealistic expectations, and deceptive marketing tactics in
              clothing advertisements across the web.
            </p>
          </div>
          <div className="bg-secondary rounded-lg p-8">
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Consumer Protection</h3>
                  <p className="text-sm text-muted-foreground">We help shoppers avoid misleading advertisements and make informed decisions.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Ethical Marketing</h3>
                  <p className="text-sm text-muted-foreground">We promote honest advertising practices in the fashion industry.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Technological Innovation</h3>
                  <p className="text-sm text-muted-foreground">We continually improve our AI to detect increasingly sophisticated deception.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Why Choose AdDetector?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 border rounded-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium mb-2">Fraud Detection</h3>
              <p className="text-sm text-muted-foreground">
                Our AI accurately identifies deceptive clothing advertisements with high precision.
              </p>
            </div>
            <div className="text-center p-6 border rounded-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium mb-2">Community Driven</h3>
              <p className="text-sm text-muted-foreground">
                User feedback continuously improves our detection algorithms.
              </p>
            </div>
            <div className="text-center p-6 border rounded-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium mb-2">Industry Leading</h3>
              <p className="text-sm text-muted-foreground">
                Recognized for our innovation in consumer protection technology.
              </p>
            </div>
            <div className="text-center p-6 border rounded-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium mb-2">Easy to Use</h3>
              <p className="text-sm text-muted-foreground">
                Simple interface that anyone can use to verify clothing advertisements.
              </p>
            </div>
          </div>
        </section>
        
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {['CEO & Founder', 'CTO', 'Head of AI Research'].map((role, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl text-muted-foreground/50">👤</span>
                </div>
                <h3 className="font-medium">Team Member {index + 1}</h3>
                <p className="text-sm text-muted-foreground">{role}</p>
              </div>
            ))}
          </div>
        </section>
        
        <section className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-muted-foreground mb-6">
            Whether you're a consumer looking to shop smarter or a brand committed to honest marketing,
            we invite you to join us in promoting transparency in fashion advertising.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="btn btn-primary">Contact Us</a>
            <a href="#" className="btn btn-outline">Learn More</a>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
