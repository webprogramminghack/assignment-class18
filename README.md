# Important: Read Before Starting

All SVG files are located in the `/src/assets/svg` directory.

## Task Overview

Your main task is to create a `Dialog` component based on the provided design.  
**Design link:** [Figma Design](https://www.figma.com/design/tCG0LFrVbiUMBtiB10ia8H/Coding-Assignment-Class-18?node-id=0-1&t=R4Uxtcge930YpQYF-1).

## Guidelines

1. **Define the Props:**
   You are responsible for defining the appropriate props for the component. The designer provides the visuals, but it’s your job to determine which props are needed.

2. **Review the Design Carefully:**

   - Analyze the design closely to identify variations and nuances.
   - For example, you might notice that some buttons can be disabled. This suggests the need for a `disabled` prop on the `Button` component. This prop should be controlled through the `Dialog` component (prop drilling). If you are not familiar with prop drilling, please refer to class 18's module.

3. **Handle Variants:**

   - The design shows three different dialog styles. As a developer, you should decide appropriate names for each style.
   - You could implement a `variant` prop, such as: `variant: 'success' | 'info' | 'danger'`.

4. **Identify Design Differences:**
   - Pay attention to what changes between each variant. For instance, in the `success` variant, there might be only a secondary button, with no primary button present.

## Implementation Details

- The implementation must **match the design exactly**. Even a **1px difference** will not be tolerated.
- Pay attention to spacing, font sizes, colors, and every small detail in the design to ensure pixel-perfect accuracy.

---

### **🚫 DO NOT USE INLINE STYLES 🚫**

**All styles should be handled using SCSS module files** (e.g., `ComponentName.module.scss`).  
Do not use inline styles at all.  
Instead, utilize SCSS modules for each component and use **`clsx`** to handle conditional classes and styles effectively.

**Example:**

```jsx
className={clsx(styles.button, {
  [styles.primary]: color === 'primary',
  [styles.secondary]: color === 'secondary',
  [styles.danger]: color === 'danger',
})}
```

---

## Final Note

Do not rely on the designer to specify every implementation detail. It’s your responsibility to interpret the design and implement it accurately.
