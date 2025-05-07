export function generateSpeckle(count: number) {
  const lightColors = ["#ffffff", "#e0f7fa", "#f3e5f5", "#e3f2fd"]; // white, light blue, violet, etc.

  return Array.from({ length: count }, () => ({
    top: `${30 + Math.random() * 40}%`, // 30%–70%
    left: `${30 + Math.random() * 40}%`, // 30%–70%
    size: `${Math.random() * 1.5 + 0.3}px`, // 0.3px – 1.8px
    opacity: Math.random() * 0.3 + 0.1, // 0.1 – 0.4
    color: lightColors[Math.floor(Math.random() * lightColors.length)],
  }));
}
