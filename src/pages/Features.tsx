
import React from 'react';
import Layout from '@/components/Layout';
import { Eye, Upload, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Features = () => {
  return (
    <Layout>
      <div className="container mx-auto container-padding py-12">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="font-bold mb-6">Our Features</h1>
          <p className="text-lg text-muted-foreground">
            TrustTrend offers powerful tools to enhance your shopping experience
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
        
        {/* Fake Ad Detection */}
        <section className="mb-20">
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-2 order-1">
              <div className="bg-gradient-to-br from-red-100/50 to-orange-50 p-8 rounded-lg">
                <div className="rounded-lg overflow-hidden border border-border">
                  <div className="bg-white p-4">
                    <div className="w-full aspect-square bg-secondary flex items-center justify-center rounded-md">
                      <AlertTriangle className="h-16 w-16 text-amber-500/70" />
                    </div>
                    <div className="mt-4 space-y-2">
                      <div className="h-3 w-full rounded bg-secondary"></div>
                      <div className="h-3 w-3/4 rounded bg-secondary"></div>
                    </div>
                    <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md text-sm text-red-700 font-medium">
                      Warning: Likely Manipulated Image ⚠️
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-3 order-2">
              <div className="space-y-4">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-red-100 text-red-700">
                  <AlertTriangle className="mr-1 h-3 w-3" />
                  Fraud Prevention
                </div>
                <h2 className="text-3xl font-bold tracking-tight">Fake Ad Detection</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our system identifies suspicious editing, unrealistic claims, and other deceptive tactics 
                  used in clothing advertisements. We flag potential issues so you can make informed decisions 
                  before purchasing.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Risk Assessment</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        Assigns a risk score to advertisements based on detected manipulations and known deceptive patterns.
                      </CardDescription>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Report Generation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        Creates detailed reports highlighting specific concerns found in the analyzed advertisements.
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="pt-6">
                  <Link to="/upload" className="btn btn-primary">Upload Ad for Analysis</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Feature List - All Free */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold">TrustTrend Features</h2>
            <p className="text-muted-foreground">All features available for free</p>
          </div>
          
          <div className="border rounded-lg overflow-hidden max-w-3xl mx-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-secondary">
                  <th className="px-4 py-3 text-left">Feature</th>
                  <th className="px-4 py-3 text-center">Availability</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-4 py-3">Ad Detection</td>
                  <td className="px-4 py-3 text-center">✓ (5/month)</td>
                </tr>
                <tr className="border-t bg-secondary/30">
                  <td className="px-4 py-3">Basic Analysis</td>
                  <td className="px-4 py-3 text-center">✓</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3">Brand Verification</td>
                  <td className="px-4 py-3 text-center">✓</td>
                </tr>
                <tr className="border-t bg-secondary/30">
                  <td className="px-4 py-3">Community Access</td>
                  <td className="px-4 py-3 text-center">✓</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3">Report Suspicious Ads</td>
                  <td className="px-4 py-3 text-center">✓</td>
                </tr>
                <tr className="border-t bg-secondary/30">
                  <td className="px-4 py-3">Reporter Badges</td>
                  <td className="px-4 py-3 text-center">✓</td>
                </tr>
              </tbody>
              <tfoot>
                <tr className="border-t">
                  <td className="px-4 py-4"></td>
                  <td className="px-4 py-4 text-center">
                    <Link to="/signup" className="btn btn-primary">Sign Up Free</Link>
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
