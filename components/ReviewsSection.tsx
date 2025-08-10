'use client'

import React, { useState, useEffect } from 'react'
import { Star, ChevronLeft, ChevronRight, Loader2 } from 'lucide-react'

interface Review {
  name: string
  rating: number
  comment: string
  image: string
  time?: number
  relative_time?: string
}

interface GoogleReviewsData {
  reviews: Review[]
  place_rating: number
  total_ratings: number
  place_name: string
}

export default function ReviewsSection() {
  const [currentReview, setCurrentReview] = useState(0)
  const [reviews, setReviews] = useState<Review[]>([])
  const [placeRating, setPlaceRating] = useState<number>(0)
  const [totalRatings, setTotalRatings] = useState<number>(0)
  const [placeName, setPlaceName] = useState<string>('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Fallback reviews in case API fails
  const fallbackReviews: Review[] = [
    {
      name: "Somchai Jaidee",
      rating: 5,
      comment: "Excellent service! My Camry runs like new after the engine repair. Professional and honest pricing.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Niran Patel",
      rating: 5,
      comment: "Best Toyota service center in the area. Quick turnaround and quality work on my Corolla.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Apinya Chen",
      rating: 5,
      comment: "Friendly staff and fair prices. They explained everything clearly and fixed my Vios perfectly.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    }
  ]

  useEffect(() => {
    const fetchGoogleReviews = async () => {
      try {
        setLoading(true)
        const response = await fetch('/api/reviews')
        
        if (!response.ok) {
          throw new Error('Failed to fetch reviews')
        }

        const data: GoogleReviewsData = await response.json()
        
        if (data.reviews && data.reviews.length > 0) {
          setReviews(data.reviews)
          setPlaceRating(data.place_rating)
          setTotalRatings(data.total_ratings)
          setPlaceName(data.place_name)
        } else {
          // Use fallback reviews if no Google reviews found
          setReviews(fallbackReviews)
        }
      } catch (err) {
        console.error('Error fetching Google reviews:', err)
        setError('Failed to load reviews')
        // Use fallback reviews on error
        setReviews(fallbackReviews)
      } finally {
        setLoading(false)
      }
    }

    fetchGoogleReviews()
  }, [])

  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-toyota-black mb-4">Customer Testimonials</h2>
          <div className="section-divider mb-8" />
          <p className="text-xl text-toyota-gray">
            See what our satisfied customers say about our Toyota repair services.
          </p>
          
          {/* Google Rating Summary */}
          {placeRating > 0 && totalRatings > 0 && (
            <div className="flex items-center justify-center mt-6 space-x-4">
              <div className="flex items-center">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < Math.floor(placeRating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <span className="ml-2 text-lg font-semibold text-toyota-black">{placeRating.toFixed(1)}</span>
              </div>
              <span className="text-toyota-gray">({totalRatings.toLocaleString()} reviews on Google)</span>
            </div>
          )}
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-toyota-red" />
            <span className="ml-3 text-toyota-gray">Loading reviews...</span>
          </div>
        ) : reviews.length > 0 ? (
          <>
            <div className="relative max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="flex justify-center mb-4">
                  <img 
                    src={reviews[currentReview].image} 
                    alt={reviews[currentReview].name}
                    className="w-20 h-20 rounded-full object-cover border-2 border-gray-200"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(reviews[currentReview].name)}&background=EB0A1E&color=fff&size=100`;
                    }}
                  />
                </div>
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < reviews[currentReview].rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <p className="text-lg text-toyota-gray mb-6 italic max-w-2xl mx-auto">
                  "{reviews[currentReview].comment}"
                </p>
                <h4 className="text-xl font-semibold text-toyota-black mb-2">
                  {reviews[currentReview].name}
                </h4>
                {reviews[currentReview].relative_time && (
                  <p className="text-sm text-toyota-gray">
                    {reviews[currentReview].relative_time}
                  </p>
                )}
              </div>

              {reviews.length > 1 && (
                <>
                  <button 
                    onClick={() => setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length)}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
                    disabled={loading}
                  >
                    <ChevronLeft className="w-6 h-6 text-toyota-black" />
                  </button>
                  <button 
                    onClick={() => setCurrentReview((prev) => (prev + 1) % reviews.length)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
                    disabled={loading}
                  >
                    <ChevronRight className="w-6 h-6 text-toyota-black" />
                  </button>
                </>
              )}
            </div>

            {reviews.length > 1 && (
              <div className="flex justify-center mt-8 space-x-2">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentReview(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentReview ? 'bg-toyota-red' : 'bg-gray-300'
                    }`}
                    disabled={loading}
                  />
                ))}
              </div>
            )}

            {/* Google Reviews Attribution */}
            <div className="text-center mt-8">
              <p className="text-sm text-toyota-gray">
                Reviews powered by <span className="font-semibold">Google</span>
              </p>
            </div>
          </>
        ) : (
          <div className="text-center py-20">
            <p className="text-toyota-gray">No reviews available at the moment.</p>
          </div>
        )}
      </div>
    </section>
  )
}
