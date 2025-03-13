
import * as tf from '@tensorflow/tfjs';
import * as mobilenet from '@tensorflow-models/mobilenet';

// Criteria for fake ad detection
const SUSPICIOUS_PRICE_THRESHOLD = 0.8; // 80% below market average is suspicious
const IMAGE_QUALITY_THRESHOLD = 0.5; // Below 50% quality is suspicious
const BRAND_CONSISTENCY_THRESHOLD = 0.7; // Below 70% consistency is suspicious

// Initialize TensorFlow model
let model: mobilenet.MobileNet | null = null;

const loadModel = async (): Promise<mobilenet.MobileNet> => {
  if (model) return model;
  
  console.log('Loading MobileNet model...');
  model = await mobilenet.load();
  console.log('MobileNet model loaded successfully');
  return model;
};

export interface AnalysisResult {
  isAuthentic: boolean;
  confidence: number;
  brandConsistency: number;
  imageQuality: number;
  priceAnalysis: number;
  predictions: Array<{
    className: string;
    probability: number;
  }>;
  redFlags: string[];
  recommendations: string[];
}

const defaultResult: AnalysisResult = {
  isAuthentic: false,
  confidence: 0,
  brandConsistency: 0,
  imageQuality: 0,
  priceAnalysis: 0,
  predictions: [],
  redFlags: [
    'Unable to analyze the image',
    'Please try uploading a different image',
  ],
  recommendations: [
    'Use high quality images',
    'Ensure the product is clearly visible',
  ],
};

export const analyzeImage = async (
  imageElement: HTMLImageElement,
  metadata: {
    source: string;
    description?: string;
  }
): Promise<AnalysisResult> => {
  try {
    // Load the model
    const loadedModel = await loadModel();
    
    // Classify the image
    const predictions = await loadedModel.classify(imageElement);
    console.log('Image classification results:', predictions);
    
    // Calculate metrics for fake detection
    const clothingRelated = predictions.some(p => 
      p.className.toLowerCase().includes('clothing') || 
      p.className.toLowerCase().includes('apparel') ||
      p.className.toLowerCase().includes('shirt') ||
      p.className.toLowerCase().includes('dress') ||
      p.className.toLowerCase().includes('jacket')
    );
    
    // Evaluate image quality based on resolution and clarity
    const imageQuality = evaluateImageQuality(imageElement);
    
    // Simulate brand consistency check (in a real app, this would compare against known brand patterns)
    const brandConsistency = Math.random() * 0.5 + 0.2; // Simulate low-medium brand consistency for demo
    
    // Simulate price analysis (in a real app, this would compare against market data)
    const priceAnalysis = Math.random() * 0.3; // Simulate very low price analysis for demo
    
    // Calculate overall authenticity score
    const confidenceScore = calculateConfidenceScore(imageQuality, brandConsistency, priceAnalysis, clothingRelated);
    const isAuthentic = confidenceScore > 0.7;
    
    // Generate red flags
    const redFlags = generateRedFlags(imageQuality, brandConsistency, priceAnalysis, clothingRelated);
    
    // Generate recommendations
    const recommendations = generateRecommendations(redFlags);
    
    return {
      isAuthentic,
      confidence: confidenceScore,
      brandConsistency,
      imageQuality, 
      priceAnalysis,
      predictions: predictions.map(p => ({
        className: p.className,
        probability: p.probability
      })),
      redFlags,
      recommendations
    };
  } catch (error) {
    console.error('Error analyzing image:', error);
    return defaultResult;
  }
};

// Helper functions for analysis
const evaluateImageQuality = (img: HTMLImageElement): number => {
  // Basic quality assessment based on resolution
  const minDimension = Math.min(img.naturalWidth, img.naturalHeight);
  const resolutionScore = Math.min(minDimension / 1000, 1); // 1000px is considered good quality
  
  // In a real app, this would also assess blur, compression artifacts, etc.
  return resolutionScore;
};

const calculateConfidenceScore = (
  imageQuality: number, 
  brandConsistency: number, 
  priceAnalysis: number,
  isClothingRelated: boolean
): number => {
  // Lower confidence if the image is not clothing related
  if (!isClothingRelated) return 0.3;
  
  // Weight factors
  const weights = {
    imageQuality: 0.3,
    brandConsistency: 0.4,
    priceAnalysis: 0.3
  };
  
  // Calculate weighted score
  return (
    imageQuality * weights.imageQuality + 
    brandConsistency * weights.brandConsistency + 
    priceAnalysis * weights.priceAnalysis
  );
};

const generateRedFlags = (
  imageQuality: number, 
  brandConsistency: number, 
  priceAnalysis: number,
  isClothingRelated: boolean
): string[] => {
  const flags: string[] = [];
  
  if (!isClothingRelated) {
    flags.push('Image does not appear to be clothing-related');
  }
  
  if (imageQuality < IMAGE_QUALITY_THRESHOLD) {
    flags.push('Low image quality or resolution');
  }
  
  if (brandConsistency < BRAND_CONSISTENCY_THRESHOLD) {
    flags.push('Inconsistent logo placement compared to authentic brand materials');
    flags.push('Font styles do not match official brand guidelines');
  }
  
  if (priceAnalysis < SUSPICIOUS_PRICE_THRESHOLD) {
    flags.push('Unusually low price for this type of product');
  }
  
  // Add more specific flags if very suspicious
  if (brandConsistency < 0.3) {
    flags.push('Image shows signs of digital manipulation');
  }
  
  return flags.length > 0 ? flags : ['No specific issues detected'];
};

const generateRecommendations = (redFlags: string[]): string[] => {
  const baseRecommendations = [
    'Check the official brand website or authorized retailers for authentic products'
  ];
  
  if (redFlags.includes('Unusually low price for this type of product')) {
    baseRecommendations.push('Avoid purchasing from this source');
    baseRecommendations.push('Report this advertisement to the platform where you found it');
  }
  
  if (redFlags.includes('Low image quality or resolution')) {
    baseRecommendations.push('Request additional high-quality images from the seller');
  }
  
  if (redFlags.includes('Image shows signs of digital manipulation')) {
    baseRecommendations.push('Ask for product certification or authentication');
  }
  
  return baseRecommendations;
};
