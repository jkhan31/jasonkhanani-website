
# 🖋️ Contributor's Guide: Rich Content

Your blog now supports a "Block System." Instead of just text, you can insert headings, tables, and images by using different `type` objects.

## 🧱 Available Block Types

### 1. The Paragraph (Standard Text)
```typescript
{ type: 'paragraph', value: "Your text here..." }
```

### 2. The Heading (Sub-sections)
Use this to break up long essays.
```typescript
{ type: 'heading', value: "The Diagnostic Phase" }
```

### 3. The Callout (Key Takeaways)
Perfect for highlighting "Investigator Insights."
```typescript
{ type: 'callout', label: "Rule #1", value: "Measure twice, cut once." }
```

### 4. The Table (Data Proof)
Ideal for showing "Before/After" impact.
```typescript
{ 
  type: 'table', 
  headers: ["Metric", "Result"], 
  rows: [
    ["Efficiency", "+40%"],
    ["Cost", "-€200k"]
  ] 
}
```

### 5. The Image (Evidence)
Use high-quality Unsplash URLs or hosted images.
```typescript
{ 
  type: 'image', 
  url: "https://...", 
  caption: "Process flow diagram", 
  alt: "Descriptive text" 
}
```

---

## 💎 Editorial Tips for Rich Content

- **Visual Pacing:** Never have more than 3 paragraphs without a Heading or an Image to keep the reader engaged.
- **Table Impact:** Use tables to quantify your claims. "Better performance" is vague; a table showing "€690k recovered" is authoritative.
- **Grayscale Images:** The UI automatically applies a premium grayscale filter to images. They turn to color on hover for a tactile, interactive feel.
