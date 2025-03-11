
import React from 'react';
import Layout from '@/components/Layout';
import { Eye, Wand2, ShirtIcon, Sparkles } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Features = () => {
  return (
    <Layout>
      <div className="container mx-auto container-padding py-12">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="font-bold mb-6">Our Features</h1>
          <p className="text-lg text-muted-foreground">
            AdDetector offers a suite of powerful tools to enhance your shopping experience
            and help you make confident decisions about clothing purchases.
          </p>
        </div>
        
        {/* Ad Detection */}
        <section className="mb-20">
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-3 order-2 md:order-1">
              <div className="space-y-4">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-primary/10 text-primary">
                  <Eye className="mr-1 h-3 w-3" />
                  Core Feature
                </div>
                <h2 className="text-3xl font-bold tracking-tight">Ad Detection</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our flagship feature uses advanced AI to analyze clothing advertisements and
                  determine their authenticity. By examining multiple aspects of an image, our
                  system can identify signs of manipulation, unrealistic representations, and
                  misleading marketing tactics.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Image Analysis</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        Detects image manipulation, including excessive filtering, unrealistic body proportions, and digitally altered clothing.
                      </CardDescription>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Pattern Recognition</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        Identifies patterns associated with deceptive marketing tactics used by known fraudulent sellers.
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="pt-6">
                  <Link to="/upload" className="btn btn-primary">Try Ad Detection Now</Link>
                </div>
              </div>
            </div>
            <div className="md:col-span-2 order-1 md:order-2">
              <div className="bg-gradient-to-br from-primary/10 to-accent/5 p-8 rounded-lg">
                <div className="rounded-lg overflow-hidden border border-border">
                  <div className="bg-white p-4">
                    <div className="w-full aspect-square bg-secondary flex items-center justify-center rounded-md">
                      <Eye className="h-16 w-16 text-muted-foreground/30" />
                    </div>
                    <div className="mt-4 space-y-2">
                      <div className="h-3 w-full rounded bg-secondary"></div>
                      <div className="h-3 w-3/4 rounded bg-secondary"></div>
                      <div className="h-3 w-1/2 rounded bg-secondary"></div>
                    </div>
                    <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-md text-sm text-green-700 font-medium">
                      Authentic Advertisement ✓
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* AI Dress Styling */}
        <section className="mb-20">
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-2">
              <div className="bg-gradient-to-br from-primary/10 to-accent/5 p-8 rounded-lg">
                <div className="rounded-lg overflow-hidden border border-border">
                  <div className="bg-white p-4">
                    <div className="flex gap-4 mb-4">
                      <div className="w-1/3 aspect-square bg-secondary rounded-md flex items-center justify-center">
                        <ShirtIcon className="h-8 w-8 text-muted-foreground/30" />
                      </div>
                      <div className="w-1/3 aspect-square bg-secondary rounded-md flex items-center justify-center">
                        <ShirtIcon className="h-8 w-8 text-muted-foreground/30" />
                      </div>
                      <div className="w-1/3 aspect-square bg-secondary rounded-md flex items-center justify-center">
                        <ShirtIcon className="h-8 w-8 text-muted-foreground/30" />
                      </div>
                    </div>
                    <div className="w-full aspect-square bg-secondary rounded-md flex items-center justify-center mb-3">
                      <Wand2 className="h-16 w-16 text-muted-foreground/30" />
                    </div>
                    <div className="mt-2 space-y-2">
                      <div className="h-3 w-full rounded bg-secondary"></div>
                      <div className="h-3 w-2/3 rounded bg-secondary"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-3">
              <div className="space-y-4">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-primary/10 text-primary">
                  <Wand2 className="mr-1 h-3 w-3" />
                  Premium Feature
                </div>
                <h2 className="text-3xl font-bold tracking-tight">AI Dress Styling</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our AI styling assistant helps you discover your perfect look. By analyzing your preferences,
                  body type, and current fashion trends, our system provides personalized clothing recommendations
                  that match your unique style.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Style Analysis</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        Upload your favorite outfits to help our AI understand your personal style preferences.
                      </CardDescription>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Custom Recommendations</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        Receive curated outfit suggestions from reliable brands that complement your style.
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="pt-6">
                  <Link to="/signup" className="btn btn-primary">Try AI Styling</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Virtual Try-On */}
        <section className="mb-16">
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-3 order-2 md:order-1">
              <div className="space-y-4">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-primary/10 text-primary">
                  <Sparkles className="mr-1 h-3 w-3" />
                  Premium Feature
                </div>
                <h2 className="text-3xl font-bold tracking-tight">AI Virtual Try-On</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Experience clothes before you buy them with our virtual try-on technology.
                  Upload your photo and see how different garments would look on you, eliminating
                  the uncertainty of online clothing purchases.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Realistic Rendering</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        Advanced AI generates realistic visualizations of how clothing items will look on your body.
                      </CardDescription>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Multi-View Display</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        See how garments look from different angles to make informed purchasing decisions.
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="pt-6">
                  <Link to="/signup" className="btn btn-primary">Try Virtual Try-On</Link>
                </div>
              </div>
            </div>
            <div className="md:col-span-2 order-1 md:order-2">
              <div className="bg-gradient-to-br from-primary/10 to-accent/5 p-8 rounded-lg">
                <div className="rounded-lg overflow-hidden border border-border">
                  <div className="bg-white p-4">
                    <div className="flex gap-3 mb-4">
                      <div className="w-1/2 aspect-[3/4] bg-secondary rounded-md flex items-center justify-center">
                        <div className="text-muted-foreground/30 text-xs text-center">
                          <Sparkles className="h-8 w-8 mx-auto mb-1" />
                          Before
                        </div>
                      </div>
                      <div className="w-1/2 aspect-[3/4] bg-secondary rounded-md flex items-center justify-center">
                        <div className="text-muted-foreground/30 text-xs text-center">
                          <Sparkles className="h-8 w-8 mx-auto mb-1" />
                          After
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-3 w-full rounded bg-secondary"></div>
                      <div className="h-3 w-4/5 rounded bg-secondary"></div>
                      <div className="h-3 w-3/5 rounded bg-secondary"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Feature Comparison */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold">Compare Features</h2>
            <p className="text-muted-foreground">Find the right plan for your needs</p>
          </div>
          
          <div className="border rounded-lg overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-secondary">
                  <th className="px-4 py-3 text-left">Feature</th>
                  <th className="px-4 py-3 text-center">Free</th>
                  <th className="px-4 py-3 text-center">Premium</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-4 py-3">Ad Detection</td>
                  <td className="px-4 py-3 text-center">✓ (5/month)</td>
                  <td className="px-4 py-3 text-center">✓ Unlimited</td>
                </tr>
                <tr className="border-t bg-secondary/30">
                  <td className="px-4 py-3">Detailed Analysis</td>
                  <td className="px-4 py-3 text-center">Basic</td>
                  <td className="px-4 py-3 text-center">Advanced</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3">AI Dress Styling</td>
                  <td className="px-4 py-3 text-center">-</td>
                  <td className="px-4 py-3 text-center">✓</td>
                </tr>
                <tr className="border-t bg-secondary/30">
                  <td className="px-4 py-3">Virtual Try-On</td>
                  <td className="px-4 py-3 text-center">-</td>
                  <td className="px-4 py-3 text-center">✓</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3">Brand Verification</td>
                  <td className="px-4 py-3 text-center">✓</td>
                  <td className="px-4 py-3 text-center">✓</td>
                </tr>
                <tr className="border-t bg-secondary/30">
                  <td className="px-4 py-3">Priority Support</td>
                  <td className="px-4 py-3 text-center">-</td>
                  <td className="px-4 py-3 text-center">✓</td>
                </tr>
              </tbody>
              <tfoot>
                <tr className="border-t">
                  <td className="px-4 py-4"></td>
                  <td className="px-4 py-4 text-center">
                    <Link to="/signup" className="btn btn-outline">Sign Up Free</Link>
                  </td>
                  <td className="px-4 py-4 text-center">
                    <Link to="/signup" className="btn btn-primary">Go Premium</Link>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Features;
