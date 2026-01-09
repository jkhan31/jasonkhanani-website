import React, { useEffect, useState } from 'react'
import { useClient } from 'sanity'

interface AnalyticsDisplayProps {
  value?: { views?: number; lastViewed?: string }
  documentId?: string
}

export function AnalyticsDisplay(props: AnalyticsDisplayProps) {
  const client = useClient({ apiVersion: '2023-05-03' })
  const [viewCount, setViewCount] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchViewCount = async () => {
      if (!props.documentId) return

      try {
        const query = `count(*[_type == "articleView" && references($articleId)])`
        const count = await client.fetch(query, { articleId: props.documentId })
        setViewCount(count)
      } catch (error) {
        console.error('Error fetching view count:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchViewCount()
  }, [props.documentId, client])

  if (loading) {
    return <div style={{ padding: '1rem' }}>Loading analytics...</div>
  }

  return (
    <div style={{ 
      padding: '1rem', 
      backgroundColor: '#f0f0f0', 
      borderRadius: '4px',
      border: '1px solid #ddd'
    }}>
      <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '14px', fontWeight: 600 }}>
        📊 View Analytics
      </h3>
      <p style={{ margin: 0, fontSize: '24px', fontWeight: 'bold', color: '#333' }}>
        {viewCount !== null ? viewCount.toLocaleString() : '0'} views
      </p>
      <p style={{ margin: '0.5rem 0 0 0', fontSize: '12px', color: '#666' }}>
        Tracked server-side via article views
      </p>
    </div>
  )
}
