
import { Article } from '../types';

export const NEW_POST_TEMPLATE: Article = {
  id: "your-url-slug",
  slug: "your-url-slug",
  title: "A Compelling Title That Commands Authority",
  excerpt: "A sharp, one-to-two sentence summary that creates immediate curiosity.",
  date: "Month Year",
  dateObj: new Date("Month Year"),
  readTime: "X min",
  category: "Strategy",
  series: null,
  isFeatured: false,
  tags: ["Tag1", "Tag2"],
  content: [
    { type: 'paragraph', value: "Introduction paragraph goes here." },
    { type: 'heading', value: "A Section Heading" },
    { type: 'paragraph', value: "Deep dive text..." },
    { type: 'callout', label: "Key Insight", value: "A punchy, italicized takeaway." },
    { type: 'table', 
      headers: ["Column A", "Column B"], 
      rows: [["Data 1", "Data 2"], ["Data 3", "Data 4"]] 
    },
    { type: 'image', url: "URL_HERE", caption: "Figure 1: Description" },
    { type: 'paragraph', value: "Conclusion." }
  ]
};
