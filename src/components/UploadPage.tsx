
import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShieldCheck, Upload } from 'lucide-react';
import { toast } from "@/hooks/use-toast";
import { analyzeImage } from '../utils/imageAnalysis';

const UploadPage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [description, setDescription] = useState('');
  const [source, setSource] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      
      // Check file size (10MB max)
      if (selectedFile.size > 10 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please select an image under 10MB",
          variant: "destructive",
        });
        return;
      }
      
      // Check file type
      if (!selectedFile.type.startsWith('image/')) {
        toast({
          title: "Invalid file type",
          description: "Please select an image file (JPG, PNG, etc.)",
          variant: "destructive",
        });
        return;
      }
      
      setFile(selectedFile);
      toast({
        title: "Image selected",
        description: `File "${selectedFile.name}" ready for analysis`,
      });
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFile = e.dataTransfer.files[0];
      
      // Check file size and type as above
      if (droppedFile.size > 10 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please select an image under 10MB",
          variant: "destructive",
        });
        return;
      }
      
      if (!droppedFile.type.startsWith('image/')) {
        toast({
          title: "Invalid file type",
          description: "Please select an image file (JPG, PNG, etc.)",
          variant: "destructive",
        });
        return;
      }
      
      setFile(droppedFile);
      toast({
        title: "Image dropped",
        description: `File "${droppedFile.name}" ready for analysis`,
      });
    }
  };

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!file) {
      toast({
        title: "No image selected",
        description: "Please upload an image to analyze",
        variant: "destructive",
      });
      return;
    }
    
    if (!source) {
      toast({
        title: "Source required",
        description: "Please select where you found this advertisement",
        variant: "destructive",
      });
      return;
    }
    
    setIsUploading(true);
    
    try {
      // Create an image element to analyze
      const img = new Image();
      img.src = URL.createObjectURL(file);
      
      img.onload = async () => {
        // Analyze the image
        const result = await analyzeImage(img, {
          source,
          description
        });
        
        // Store result in session storage (in a real app, this would go to a database)
        sessionStorage.setItem('analysisResult', JSON.stringify({
          ...result,
          imageUrl: URL.createObjectURL(file),
          metadata: {
            filename: file.name,
            filesize: file.size,
            filetype: file.type,
            source,
            description
          }
        }));
        
        // Navigate to results page
        navigate('/results');
      };
      
      img.onerror = () => {
        throw new Error("Failed to load image");
      };
    } catch (error) {
      console.error("Analysis error:", error);
      toast({
        title: "Analysis failed",
        description: "There was a problem analyzing your image. Please try again.",
        variant: "destructive",
      });
      setIsUploading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-white py-4">
        <div className="container mx-auto container-padding">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                <ShieldCheck size={20} />
              </div>
              <h1 className="text-xl font-bold">TrustTrend</h1>
            </Link>
            <nav className="hidden md:flex space-x-4">
              <Link to="/" className="font-medium text-muted-foreground hover:text-primary">Home</Link>
              <Link to="/upload" className="font-medium text-primary">Upload</Link>
              <Link to="/results" className="font-medium text-muted-foreground hover:text-primary">Results</Link>
            </nav>
            <Link to="/login" className="btn btn-outline">
              Login
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 py-12 container mx-auto container-padding">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Upload Advertisement</h1>
            <p className="text-muted-foreground">
              Upload a clothing advertisement image to check its authenticity
            </p>
          </div>

          <div className="card">
            <div className="card-content">
              <form className="space-y-8" onSubmit={handleAnalyze}>
                <div 
                  className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                    file 
                      ? 'border-green-500 bg-green-50' 
                      : 'border-primary/30 hover:border-primary/60'
                  }`}
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                >
                  <input 
                    type="file" 
                    id="file-upload" 
                    className="hidden" 
                    accept="image/*" 
                    required
                    ref={fileInputRef}
                    onChange={handleFileChange}
                  />
                  
                  {file ? (
                    <div className="space-y-4">
                      <div className="relative w-full max-w-xs mx-auto">
                        <img 
                          src={URL.createObjectURL(file)} 
                          alt="Preview" 
                          className="w-full h-auto rounded-lg shadow-md"
                          onLoad={() => URL.revokeObjectURL(URL.createObjectURL(file))}
                        />
                        <button
                          type="button"
                          className="absolute -top-2 -right-2 bg-white rounded-full p-1 shadow-md text-gray-500 hover:text-red-500"
                          onClick={() => setFile(null)}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                      <p className="text-sm text-muted-foreground">{file.name}</p>
                      <button
                        type="button"
                        className="text-primary hover:underline text-sm inline-flex items-center"
                        onClick={() => fileInputRef.current?.click()}
                      >
                        Change image
                      </button>
                    </div>
                  ) : (
                    <label 
                      htmlFor="file-upload" 
                      className="cursor-pointer flex flex-col items-center justify-center"
                    >
                      <div className="w-16 h-16 mb-4 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <Upload className="h-8 w-8" />
                      </div>
                      <div className="space-y-2">
                        <p className="text-lg font-medium">Drop your image here, or browse</p>
                        <p className="text-sm text-muted-foreground">Supports JPG, PNG and GIF up to 10MB</p>
                      </div>
                    </label>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="description" className="block text-sm font-medium">
                    Description (optional)
                  </label>
                  <textarea
                    id="description"
                    placeholder="Enter additional details about the advertisement"
                    className="input min-h-[100px]"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium">
                    Source of the advertisement
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="source-social"
                        name="source"
                        className="text-primary focus:ring-primary"
                        value="social"
                        checked={source === "social"}
                        onChange={() => setSource("social")}
                      />
                      <label htmlFor="source-social" className="text-sm">
                        Social Media
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="source-website"
                        name="source"
                        className="text-primary focus:ring-primary"
                        value="website"
                        checked={source === "website"}
                        onChange={() => setSource("website")}
                      />
                      <label htmlFor="source-website" className="text-sm">
                        Website
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="source-email"
                        name="source"
                        className="text-primary focus:ring-primary"
                        value="email"
                        checked={source === "email"}
                        onChange={() => setSource("email")}
                      />
                      <label htmlFor="source-email" className="text-sm">
                        Email
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="source-other"
                        name="source"
                        className="text-primary focus:ring-primary"
                        value="other"
                        checked={source === "other"}
                        onChange={() => setSource("other")}
                      />
                      <label htmlFor="source-other" className="text-sm">
                        Other
                      </label>
                    </div>
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary w-full"
                  disabled={isUploading || !file}
                >
                  {isUploading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Analyzing...
                    </span>
                  ) : "Analyze Advertisement"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t py-6">
        <div className="container mx-auto container-padding text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} TrustTrend. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default UploadPage;
