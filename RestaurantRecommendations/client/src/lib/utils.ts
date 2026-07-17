import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Extract numeric price value from price string
 * e.g. "$1500/人", "1500元", "$1000-1500", etc.
 */
export function getPriceValue(priceString: string): number | null {
  // Look for the first numeric value in the string
  const match = priceString.match(/(\d+)/);
  if (!match) return null;
  
  // Return the first matched number
  return parseInt(match[0], 10);
}
