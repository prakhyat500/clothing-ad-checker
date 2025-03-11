
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { ShoppingBag, Search, Heart, CreditCard, Check, Filter } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';

const ClothingBrands = () => {
  const { toast } = useToast();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [cartItems, setCartItems] = useState<{id: number, name: string, price: number, quantity: number}[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  const brands = [
    { id: 1, name: "EcoCloth", verified: true, category: "sustainable" },
    { id: 2, name: "FashionForward", verified: true, category: "luxury" },
    { id: 3, name: "UrbanThreads", verified: true, category: "casual" },
    { id: 4, name: "SportiFit", verified: true, category: "athletic" },
    { id: 5, name: "ClassicWear", verified: true, category: "formal" },
    { id: 6, name: "ModernBasics", verified: true, category: "casual" },
  ];
  
  const products = [
    { id: 1, name: "Organic Cotton T-Shirt", brand: "EcoCloth", price: 24.99, category: "sustainable" },
    { id: 2, name: "Designer Jeans", brand: "FashionForward", price: 199.99, category: "luxury" },
    { id: 3, name: "Urban Hoodie", brand: "UrbanThreads", price: 49.99, category: "casual" },
    { id: 4, name: "Performance Leggings", brand: "SportiFit", price: 79.99, category: "athletic" },
    { id: 5, name: "Business Suit", brand: "ClassicWear", price: 299.99, category: "formal" },
    { id: 6, name: "Everyday Jeans", brand: "ModernBasics", price: 59.99, category: "casual" },
    { id: 7, name: "Recycled Fleece Jacket", brand: "EcoCloth", price: 89.99, category: "sustainable" },
    { id: 8, name: "Luxury Sweater", brand: "FashionForward", price: 149.99, category: "luxury" },
    { id: 9, name: "Graphic Tee", brand: "UrbanThreads", price: 29.99, category: "casual" },
    { id: 10, name: "Running Shorts", brand: "SportiFit", price: 44.99, category: "athletic" },
    { id: 11, name: "Dress Shirt", brand: "ClassicWear", price: 89.99, category: "formal" },
    { id: 12, name: "Basic Tee", brand: "ModernBasics", price: 19.99, category: "casual" },
  ];
  
  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(product => product.category === selectedCategory);
  
  const addToCart = (product: {id: number, name: string, price: number}) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      
      if (existingItem) {
        return prevItems.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
    
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };
  
  const removeFromCart = (productId: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };
  
  const updateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === productId 
          ? { ...item, quantity: newQuantity } 
          : item
      )
    );
  };
  
  const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  
  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };
  
  const completeOrder = () => {
    setIsCheckoutOpen(false);
    setCartItems([]);
    toast({
      title: "Order placed!",
      description: "Your order has been successfully placed.",
    });
  };
  
  return (
    <Layout>
      <div className="container mx-auto container-padding py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Verified Clothing Brands</h1>
          
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Search products..." 
                className="pl-9 pr-4 py-2 border rounded-md w-full md:w-64"
              />
            </div>
            <Button 
              variant="outline" 
              size="icon"
              onClick={() => setIsCartOpen(true)}
              className="relative"
            >
              <ShoppingBag className="h-5 w-5" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-primary text-white text-xs flex items-center justify-center">
                  {cartItems.reduce((total, item) => total + item.quantity, 0)}
                </span>
              )}
            </Button>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <div className="md:w-64 flex-shrink-0">
            <div className="sticky top-24">
              <div className="bg-white border rounded-lg p-4 mb-4">
                <div className="flex items-center gap-2 mb-4">
                  <Filter className="h-4 w-4" />
                  <h2 className="font-semibold">Categories</h2>
                </div>
                <div className="space-y-2">
                  <button
                    className={`w-full text-left px-3 py-2 rounded-md ${selectedCategory === 'all' ? 'bg-primary/10 text-primary' : 'hover:bg-secondary'}`}
                    onClick={() => setSelectedCategory('all')}
                  >
                    All Products
                  </button>
                  {['sustainable', 'luxury', 'casual', 'athletic', 'formal'].map((category) => (
                    <button
                      key={category}
                      className={`w-full text-left px-3 py-2 rounded-md capitalize ${selectedCategory === category ? 'bg-primary/10 text-primary' : 'hover:bg-secondary'}`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="bg-white border rounded-lg p-4">
                <h2 className="font-semibold mb-4">Verified Brands</h2>
                <div className="space-y-3">
                  {brands.map(brand => (
                    <div key={brand.id} className="flex items-center justify-between">
                      <span>{brand.name}</span>
                      {brand.verified && (
                        <div className="flex items-center text-xs text-green-600 font-medium">
                          <Check className="h-3 w-3 mr-1" />
                          Verified
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <Card key={product.id} className="overflow-hidden">
                  <div className="aspect-square bg-secondary relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <ShoppingBag className="h-12 w-12 text-muted-foreground/30" />
                    </div>
                    <button className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white shadow-sm flex items-center justify-center">
                      <Heart className="h-4 w-4 text-muted-foreground" />
                    </button>
                  </div>
                  <CardContent className="p-4">
                    <div className="text-xs text-muted-foreground mb-1">{product.brand}</div>
                    <h3 className="font-medium">{product.name}</h3>
                    <div className="mt-2 font-semibold">${product.price.toFixed(2)}</div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button 
                      className="w-full"
                      onClick={() => addToCart(product)}
                    >
                      Add to Cart
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Shopping Cart Dialog */}
      <Dialog open={isCartOpen} onOpenChange={setIsCartOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Shopping Cart</DialogTitle>
            <DialogDescription>
              {cartItems.length === 0 
                ? "Your cart is empty." 
                : `You have ${cartItems.reduce((total, item) => total + item.quantity, 0)} items in your cart.`}
            </DialogDescription>
          </DialogHeader>
          
          {cartItems.length > 0 && (
            <div className="space-y-4 my-4 max-h-[60vh] overflow-auto">
              {cartItems.map(item => (
                <div key={item.id} className="flex justify-between items-center border-b pb-4">
                  <div>
                    <h4 className="font-medium">{item.name}</h4>
                    <div className="text-sm text-muted-foreground">${item.price.toFixed(2)}</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center border rounded-md">
                      <button 
                        className="px-2 py-1"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >-</button>
                      <span className="px-3">{item.quantity}</span>
                      <button 
                        className="px-2 py-1"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >+</button>
                    </div>
                    <button 
                      className="text-muted-foreground hover:text-destructive"
                      onClick={() => removeFromCart(item.id)}
                    >
                      &times;
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {cartItems.length > 0 && (
            <>
              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              
              <DialogFooter className="flex flex-col sm:flex-row gap-2 mt-4">
                <Button variant="outline" onClick={() => setIsCartOpen(false)}>
                  Continue Shopping
                </Button>
                <Button onClick={handleCheckout}>
                  Checkout
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
      
      {/* Checkout Dialog */}
      <Dialog open={isCheckoutOpen} onOpenChange={setIsCheckoutOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Checkout</DialogTitle>
            <DialogDescription>
              Complete your order by providing payment information.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 my-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Contact Information</label>
              <input type="email" placeholder="Email address" className="input w-full" />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Shipping Address</label>
              <input type="text" placeholder="Name" className="input w-full mb-2" />
              <input type="text" placeholder="Address" className="input w-full mb-2" />
              <div className="flex gap-2">
                <input type="text" placeholder="City" className="input w-full" />
                <input type="text" placeholder="Postal code" className="input w-full" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Payment Information</label>
              <div className="relative">
                <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input type="text" placeholder="Card number" className="input w-full pl-9" />
              </div>
              <div className="flex gap-2">
                <input type="text" placeholder="MM/YY" className="input w-full" />
                <input type="text" placeholder="CVC" className="input w-full" />
              </div>
            </div>
            
            <div className="border-t pt-4">
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <span>$4.99</span>
              </div>
              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>${(cartTotal + 4.99).toFixed(2)}</span>
              </div>
            </div>
          </div>
          
          <DialogFooter className="flex flex-col sm:flex-row gap-2">
            <Button variant="outline" onClick={() => setIsCheckoutOpen(false)}>
              Back to Cart
            </Button>
            <Button onClick={completeOrder}>
              Place Order
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default ClothingBrands;
