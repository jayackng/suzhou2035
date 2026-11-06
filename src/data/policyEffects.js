// CLASS 7: Keep every meter between 0 and 100, even for a large policy effect.
export function applyPolicyEffects(meters, effects) {
  return meters.map((meter) => {
    const change = effects[meter.name.toLowerCase()] ?? 0;
    return {
      ...meter,
      value: Math.max(0, Math.min(100, meter.value + change)),
    };
  });
}
