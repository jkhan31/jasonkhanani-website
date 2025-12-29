import React from 'react'

/**
 * Custom input component for displaying Unsplash photographer name
 * Shows the photographer name in a read-only styled div
 */
export const UnsplashPhotographerInput = (props: any) => {
    const photographerName = props.parent?.asset?.source?.name;
    return photographerName ? React.createElement('div', { 
        style: { 
            padding: '0.75rem', 
            backgroundColor: '#f3f4f6', 
            borderRadius: '0.375rem', 
            fontSize: '0.875rem' 
        } 
    }, photographerName) : null;
};

/**
 * Custom input component for displaying Unsplash image description
 * Shows the description in a read-only styled div
 */
export const UnsplashDescriptionInput = (props: any) => {
    const description = props.parent?.asset?.description;
    return description ? React.createElement('div', { 
        style: { 
            padding: '0.75rem', 
            backgroundColor: '#f3f4f6', 
            borderRadius: '0.375rem', 
            fontSize: '0.875rem' 
        } 
    }, description) : null;
};
