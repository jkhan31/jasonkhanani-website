import React from 'react'

/**
 * Custom input component for displaying Unsplash photographer name
 * Shows the photographer name in a read-only styled div
 */
export const UnsplashPhotographerInput = (props: any) => {
    const sourceName = props.parent?.asset?.source?.name
    const userName = props.parent?.asset?.user?.name || props.parent?.asset?.user?.username
    const photographerName = sourceName && sourceName.toLowerCase() !== 'unsplash' ? sourceName : userName
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
    const description = props.parent?.asset?.description || props.parent?.asset?.alt_description || props.parent?.asset?.metadata?.description;
    return description ? React.createElement('div', { 
        style: { 
            padding: '0.75rem', 
            backgroundColor: '#f3f4f6', 
            borderRadius: '0.375rem', 
            fontSize: '0.875rem' 
        } 
    }, description) : null;
};
