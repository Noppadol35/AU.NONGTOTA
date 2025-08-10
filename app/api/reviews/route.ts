import { NextRequest, NextResponse } from "next/server";
import { getCachedReviews, setCachedReviews } from "@/lib/reviewsCache";

export async function GET() {
    try {
        // Check cache first
        const cachedData = getCachedReviews();
        if (cachedData) {
            return NextResponse.json(cachedData);
        }

        const placeId = process.env.GOOGLE_PLACE_ID;
        const apiKey = process.env.GOOGLE_API_KEY;

        if (!placeId || !apiKey) {
            return NextResponse.json(
                { error: "Missing Google API configuration" },
                { status: 500 }
            );
        }

        const response = await fetch(
            `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews,user_ratings_total&key=${apiKey}&language=th`
        );

        if (!response.ok) {
            throw new Error("Failed to fetch reviews from Google API");
        }

        const data = await response.json();

        if (data.status !== "OK") {
            throw new Error(`Google API error: ${data.status}`);
        }

        // Transform the data to match our component structure
        const transformedReviews =
            data.result.reviews?.map((review: any) => ({
                name: review.author_name,
                rating: review.rating,
                comment: review.text,
                image:
                    review.profile_photo_url ||
                    `https://ui-avatars.com/api/?name=${encodeURIComponent(
                        review.author_name
                    )}&background=EB0A1E&color=fff&size=100`,
                time: review.time,
                relative_time: review.relative_time_description,
            })) || [];

        const responseData = {
            reviews: transformedReviews,
            place_rating: data.result.rating,
            total_ratings: data.result.user_ratings_total,
            place_name: data.result.name,
            cached_at: new Date().toISOString(),
        };

        // Cache the response for 24 hours
        setCachedReviews(responseData);

        return NextResponse.json(responseData);
    } catch (error) {
        console.error("Error fetching Google Reviews:", error);
        return NextResponse.json(
            { error: "Failed to fetch reviews" },
            { status: 500 }
        );
    }
}
