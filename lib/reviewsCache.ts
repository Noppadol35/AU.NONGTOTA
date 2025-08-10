interface CachedReviews {
    data: any;
    timestamp: number;
}

// Cache duration: 24 hours (in milliseconds)
const CACHE_DURATION = 24 * 60 * 60 * 1000;

let reviewsCache: CachedReviews | null = null;

export function getCachedReviews() {
    if (!reviewsCache) return null;

    const now = Date.now();
    const isExpired = now - reviewsCache.timestamp > CACHE_DURATION;

    if (isExpired) {
        reviewsCache = null;
        return null;
    }

    return reviewsCache.data;
}

export function setCachedReviews(data: any) {
    reviewsCache = {
        data,
        timestamp: Date.now(),
    };
}

export function clearReviewsCache() {
    reviewsCache = null;
}
