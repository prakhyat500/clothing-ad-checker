
import React from 'react';
import Layout from '@/components/Layout';
import { 
  Award, 
  Flag, 
  BadgeCheck, 
  Shield, 
  Star, 
  TrendingUp, 
  AlertTriangle, 
  Trophy, 
  BookOpen 
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

interface BadgeType {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  level: number;
  maxLevel: number;
  progress: number;
  unlocked: boolean;
  premium: boolean;
}

const ReporterBadges = () => {
  const [activeTab, setActiveTab] = React.useState<'earned' | 'available'>('earned');
  
  const badges: BadgeType[] = [
    {
      id: 'starter',
      name: 'Truth Seeker',
      description: 'Successfully reported your first fake ad',
      icon: <Flag className="h-6 w-6" />,
      color: 'text-blue-500',
      level: 1,
      maxLevel: 1,
      progress: 100,
      unlocked: true,
      premium: false
    },
    {
      id: 'vigilant',
      name: 'Vigilant Eye',
      description: 'Reported 5 fake ads that were confirmed by moderators',
      icon: <AlertTriangle className="h-6 w-6" />,
      color: 'text-amber-500',
      level: 2,
      maxLevel: 3,
      progress: 66,
      unlocked: true,
      premium: false
    },
    {
      id: 'defender',
      name: 'Consumer Defender',
      description: 'Helped protect 100+ shoppers through your reports',
      icon: <Shield className="h-6 w-6" />,
      color: 'text-green-500',
      level: 1,
      maxLevel: 5,
      progress: 20,
      unlocked: true,
      premium: false
    },
    {
      id: 'verified',
      name: 'Verified Reporter',
      description: 'Your reports are trusted and fast-tracked by our team',
      icon: <BadgeCheck className="h-6 w-6" />,
      color: 'text-indigo-500',
      level: 1,
      maxLevel: 1,
      progress: 100,
      unlocked: true,
      premium: true
    },
    {
      id: 'expert',
      name: 'Fashion Expert',
      description: 'Specialized in spotting counterfeit luxury brands',
      icon: <Award className="h-6 w-6" />,
      color: 'text-purple-500',
      level: 0,
      maxLevel: 3,
      progress: 45,
      unlocked: false,
      premium: true
    },
    {
      id: 'trend',
      name: 'Trend Spotter',
      description: 'First to identify new patterns in misleading ads',
      icon: <TrendingUp className="h-6 w-6" />,
      color: 'text-pink-500',
      level: 0,
      maxLevel: 3,
      progress: 30,
      unlocked: false,
      premium: true
    },
    {
      id: 'champion',
      name: 'Community Champion',
      description: 'Top 1% of reporters by volume and accuracy',
      icon: <Trophy className="h-6 w-6" />,
      color: 'text-amber-500',
      level: 0,
      maxLevel: 1,
      progress: 10,
      unlocked: false,
      premium: true
    }
  ];
  
  const earnedBadges = badges.filter(badge => badge.unlocked);
  const availableBadges = badges.filter(badge => !badge.unlocked);
  
  const userStats = {
    totalReports: 14,
    confirmedReports: 8,
    rank: "Silver",
    nextRank: "Gold",
    pointsToNextRank: 50,
    currentPoints: 120,
    pointsNeeded: 200
  };
  
  return (
    <Layout>
      <div className="container mx-auto container-padding py-12">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="font-bold mb-3">Reporter Badges</h1>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Earn badges by identifying and reporting fake or misleading clothing advertisements.
              Level up your badges to unlock special rewards and recognition.
            </p>
          </div>
          
          {/* User Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl flex items-center">
                  <Flag className="mr-2 h-5 w-5 text-primary" />
                  Reporting Stats
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Total Reports:</span>
                    <span className="font-medium">{userStats.totalReports}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Confirmed Reports:</span>
                    <span className="font-medium">{userStats.confirmedReports}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Accuracy Rate:</span>
                    <span className="font-medium">{Math.round((userStats.confirmedReports / userStats.totalReports) * 100)}%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl flex items-center">
                  <Star className="mr-2 h-5 w-5 text-primary" />
                  Reporter Rank
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-2">
                  <div className="text-3xl font-bold text-amber-500">{userStats.rank}</div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {userStats.pointsToNextRank} points to {userStats.nextRank}
                  </div>
                  <div className="mt-3">
                    <Progress value={(userStats.currentPoints / userStats.pointsNeeded) * 100} className="h-2" />
                    <div className="flex justify-between text-xs mt-1">
                      <span>{userStats.currentPoints} pts</span>
                      <span>{userStats.pointsNeeded} pts</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl flex items-center">
                  <BookOpen className="mr-2 h-5 w-5 text-primary" />
                  Your Impact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shoppers Protected:</span>
                    <span className="font-medium">240+</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Money Saved:</span>
                    <span className="font-medium">$3,500+</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Badges Earned:</span>
                    <span className="font-medium">{earnedBadges.length}/{badges.length}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Badge Tabs */}
          <div className="flex space-x-4 border-b mb-6">
            <button
              className={cn(
                "pb-2 px-1 font-medium text-sm",
                activeTab === 'earned' 
                  ? "border-b-2 border-primary text-primary" 
                  : "text-muted-foreground hover:text-foreground"
              )}
              onClick={() => setActiveTab('earned')}
            >
              Earned Badges ({earnedBadges.length})
            </button>
            <button
              className={cn(
                "pb-2 px-1 font-medium text-sm",
                activeTab === 'available' 
                  ? "border-b-2 border-primary text-primary" 
                  : "text-muted-foreground hover:text-foreground"
              )}
              onClick={() => setActiveTab('available')}
            >
              Available Badges ({availableBadges.length})
            </button>
          </div>
          
          {/* Badges Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {(activeTab === 'earned' ? earnedBadges : availableBadges).map((badge) => (
              <Card key={badge.id} className={cn(
                "overflow-hidden transition-all duration-200",
                !badge.unlocked && "opacity-75"
              )}>
                <CardHeader className={cn(
                  "pb-2 relative",
                  badge.premium && !badge.unlocked && "bg-gray-100"
                )}>
                  {badge.premium && (
                    <div className="absolute right-6 top-6">
                      <Badge variant="premium">Premium</Badge>
                    </div>
                  )}
                  <div className="flex items-center mb-2">
                    <div className={cn(
                      "w-12 h-12 rounded-full flex items-center justify-center mr-4", 
                      badge.unlocked ? "bg-primary/10" : "bg-gray-200",
                      badge.color.replace('text-', 'text-')
                    )}>
                      {badge.icon}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{badge.name}</CardTitle>
                      <CardDescription className="text-xs">
                        Level {badge.level}/{badge.maxLevel}
                      </CardDescription>
                    </div>
                  </div>
                  <Progress 
                    value={badge.progress} 
                    className={cn(
                      "h-1 mt-2",
                      !badge.unlocked && "bg-gray-200"
                    )} 
                  />
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-sm text-muted-foreground">
                    {badge.description}
                  </p>
                </CardContent>
                <CardFooter className="border-t bg-secondary/10 justify-between py-2">
                  <div className="text-xs text-muted-foreground">
                    {badge.unlocked ? 'Unlocked' : badge.premium ? 'Premium Required' : 'In Progress'}
                  </div>
                  <div className="text-xs font-medium">
                    {badge.progress}% complete
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          {/* Help Text */}
          <div className="bg-secondary/20 rounded-lg p-6 mt-10">
            <h3 className="font-medium text-lg mb-2">How to Earn Badges</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Report misleading or fake clothing advertisements to earn badges and progress through levels.
              Premium users get access to exclusive badges and accelerated progression.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-medium text-sm">Free User Badges:</h4>
                <ul className="text-sm space-y-1">
                  <li className="flex items-center">
                    <Flag className="h-4 w-4 text-blue-500 mr-2" />
                    <span>Truth Seeker</span>
                  </li>
                  <li className="flex items-center">
                    <AlertTriangle className="h-4 w-4 text-amber-500 mr-2" />
                    <span>Vigilant Eye (up to level 2)</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-4 w-4 text-green-500 mr-2" />
                    <span>Consumer Defender (up to level 3)</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-medium text-sm">Premium User Badges:</h4>
                <ul className="text-sm space-y-1">
                  <li className="flex items-center">
                    <BadgeCheck className="h-4 w-4 text-indigo-500 mr-2" />
                    <span>Verified Reporter</span>
                  </li>
                  <li className="flex items-center">
                    <Award className="h-4 w-4 text-purple-500 mr-2" />
                    <span>Fashion Expert</span>
                  </li>
                  <li className="flex items-center">
                    <TrendingUp className="h-4 w-4 text-pink-500 mr-2" />
                    <span>Trend Spotter</span>
                  </li>
                  <li className="flex items-center">
                    <Trophy className="h-4 w-4 text-amber-500 mr-2" />
                    <span>Community Champion</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ReporterBadges;
