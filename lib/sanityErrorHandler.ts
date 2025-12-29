/**
 * Utility functions for handling Sanity CMS errors and retries
 */

interface RetryOptions {
  maxRetries?: number;
  initialDelay?: number;
  maxDelay?: number;
  backoffMultiplier?: number;
}

/**
 * Fetch data from Sanity with exponential backoff retry logic
 * @param fetchFn - The async function to execute (should return Promise)
 * @param options - Retry configuration options
 * @returns Promise with the fetched data or null on failure
 */
export async function fetchWithRetry<T>(
  fetchFn: () => Promise<T>,
  options: RetryOptions = {}
): Promise<T | null> {
  const {
    maxRetries = 3,
    initialDelay = 1000,
    maxDelay = 10000,
    backoffMultiplier = 2,
  } = options;

  let lastError: Error | null = null;
  let delay = initialDelay;

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await fetchFn();
    } catch (error) {
      lastError = error as Error;
      
      // Log the error for debugging
      console.error(`Sanity fetch attempt ${attempt + 1} failed:`, error);

      // If this was the last attempt, don't wait
      if (attempt === maxRetries) {
        break;
      }

      // Wait before retrying with exponential backoff
      await new Promise((resolve) => setTimeout(resolve, delay));
      delay = Math.min(delay * backoffMultiplier, maxDelay);
    }
  }

  // All retries failed
  console.error(
    `Failed to fetch from Sanity after ${maxRetries + 1} attempts:`,
    lastError
  );
  return null;
}

/**
 * Check if an error is a CORS error
 */
export function isCorsError(error: any): boolean {
  if (!error) return false;
  
  const errorMessage = error.message || error.toString();
  return (
    errorMessage.includes('CORS') ||
    errorMessage.includes('Access-Control-Allow-Origin') ||
    errorMessage.includes('Cross-Origin')
  );
}

/**
 * Check if an error is a network error
 */
export function isNetworkError(error: any): boolean {
  if (!error) return false;
  
  const errorMessage = error.message || error.toString();
  return (
    errorMessage.includes('NetworkError') ||
    errorMessage.includes('Failed to fetch') ||
    errorMessage.includes('Network request failed') ||
    errorMessage.includes('ENOTFOUND') ||
    errorMessage.includes('getaddrinfo')
  );
}
