
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { MessageSquare, ThumbsUp, ThumbsDown, Star } from 'lucide-react';
import { toast } from "@/hooks/use-toast";
import { Link } from 'react-router-dom';

interface Review {
  id: string;
  userName: string;
  brandName: string;
  rating: number;
  comment: string;
  date: string;
  likes: number;
  dislikes: number;
}

// Mock data for initial reviews
const initialReviews: Review[] = [
  {
    id: '1',
    userName: 'Jane Smith',
    brandName: 'Fashion Forward',
    rating: 4,
    comment: 'I ordered a dress that looked exactly like the advertisement. Very satisfied with the quality and fit!',
    date: '2023-06-15',
    likes: 24,
    dislikes: 2
  },
  {
    id: '2',
    userName: 'John Doe',
    brandName: 'Trend Setters',
    rating: 2,
    comment: 'The t-shirt I received was a completely different shade than what was shown in the ad. Disappointing experience.',
    date: '2023-05-23',
    likes: 45,
    dislikes: 5
  },
  {
    id: '3',
    userName: 'Alex Johnson',
    brandName: 'Urban Style',
    rating: 5,
    comment: 'Everything about my purchase was perfect. The jeans fit well and look exactly as advertised.',
    date: '2023-07-02',
    likes: 31,
    dislikes: 0
  }
];

const BrandReviews = () => {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [newReview, setNewReview] = useState({
    brandName: '',
    rating: 5,
    comment: ''
  });
  const [filter, setFilter] = useState('all');

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newReview.brandName || !newReview.comment) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    
    const review: Review = {
      id: Date.now().toString(),
      userName: "Anonymous User", // In a real app, this would be the logged-in user
      brandName: newReview.brandName,
      rating: newReview.rating,
      comment: newReview.comment,
      date: new Date().toISOString().split('T')[0],
      likes: 0,
      dislikes: 0
    };
    
    setReviews([review, ...reviews]);
    setNewReview({
      brandName: '',
      rating: 5,
      comment: ''
    });
    
    toast({
      title: "Review Submitted",
      description: "Thank you for sharing your experience!",
    });
  };
  
  const handleVote = (id: string, voteType: 'like' | 'dislike') => {
    setReviews(reviews.map(review => {
      if (review.id === id) {
        return {
          ...review,
          likes: voteType === 'like' ? review.likes + 1 : review.likes,
          dislikes: voteType === 'dislike' ? review.dislikes + 1 : review.dislikes
        };
      }
      return review;
    }));
  };
  
  const filteredReviews = filter === 'all' 
    ? reviews 
    : reviews.filter(review => {
        if (filter === 'positive') return review.rating >= 4;
        if (filter === 'negative') return review.rating <= 2;
        return review.rating === 3;
      });
  
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        size={16} 
        className={i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} 
      />
    ));
  };

  return (
    <Layout>
      <div className="container mx-auto container-padding py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="font-bold mb-4">Brand Reviews & Experiences</h1>
            <p className="text-muted-foreground">
              Share your experiences with clothing brands and help others make informed purchasing decisions.
            </p>
          </div>
          
          {/* Submit Review Form */}
          <Card className="mb-10">
            <CardHeader>
              <CardTitle>Share Your Experience</CardTitle>
              <CardDescription>
                Tell us about your experience with a clothing brand
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmitReview} className="space-y-4">
                <div>
                  <label htmlFor="brandName" className="block text-sm font-medium mb-1">
                    Brand Name*
                  </label>
                  <input
                    id="brandName"
                    type="text"
                    className="input w-full"
                    value={newReview.brandName}
                    onChange={(e) => setNewReview({...newReview, brandName: e.target.value})}
                    placeholder="Enter the brand name"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Rating*
                  </label>
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setNewReview({...newReview, rating: star})}
                        className="focus:outline-none"
                      >
                        <Star 
                          size={24} 
                          className={star <= newReview.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} 
                        />
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="comment" className="block text-sm font-medium mb-1">
                    Your Experience*
                  </label>
                  <textarea
                    id="comment"
                    rows={4}
                    className="input w-full"
                    value={newReview.comment}
                    onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
                    placeholder="Describe your experience with this brand..."
                    required
                  ></textarea>
                </div>
                
                <div className="pt-2">
                  <button type="submit" className="btn btn-primary">
                    <MessageSquare size={16} className="mr-2" />
                    Post Review
                  </button>
                </div>
              </form>
            </CardContent>
          </Card>
          
          {/* Filter Options */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              <button 
                onClick={() => setFilter('all')}
                className={`px-3 py-1 text-sm rounded-full ${filter === 'all' ? 'bg-primary text-white' : 'bg-secondary text-foreground'}`}
              >
                All Reviews
              </button>
              <button 
                onClick={() => setFilter('positive')}
                className={`px-3 py-1 text-sm rounded-full ${filter === 'positive' ? 'bg-primary text-white' : 'bg-secondary text-foreground'}`}
              >
                Positive (4-5 ★)
              </button>
              <button 
                onClick={() => setFilter('neutral')}
                className={`px-3 py-1 text-sm rounded-full ${filter === 'neutral' ? 'bg-primary text-white' : 'bg-secondary text-foreground'}`}
              >
                Neutral (3 ★)
              </button>
              <button 
                onClick={() => setFilter('negative')}
                className={`px-3 py-1 text-sm rounded-full ${filter === 'negative' ? 'bg-primary text-white' : 'bg-secondary text-foreground'}`}
              >
                Negative (1-2 ★)
              </button>
            </div>
          </div>
          
          {/* Reviews List */}
          <div className="space-y-6">
            {filteredReviews.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-muted-foreground">No reviews match your filter criteria.</p>
              </div>
            ) : (
              filteredReviews.map((review) => (
                <Card key={review.id}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{review.brandName}</CardTitle>
                        <div className="flex items-center mt-1 space-x-1">
                          {renderStars(review.rating)}
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {review.date}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground">{review.comment}</p>
                    <div className="mt-2 text-sm text-muted-foreground">
                      Posted by {review.userName}
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0 flex justify-between">
                    <div className="flex space-x-4">
                      <button 
                        onClick={() => handleVote(review.id, 'like')}
                        className="flex items-center space-x-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ThumbsUp size={14} />
                        <span>{review.likes}</span>
                      </button>
                      <button 
                        onClick={() => handleVote(review.id, 'dislike')}
                        className="flex items-center space-x-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ThumbsDown size={14} />
                        <span>{review.dislikes}</span>
                      </button>
                    </div>
                    <Link 
                      to={`/brands?brand=${encodeURIComponent(review.brandName)}`}
                      className="text-sm text-primary hover:underline"
                    >
                      View Brand Products
                    </Link>
                  </CardFooter>
                </Card>
              ))
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BrandReviews;
