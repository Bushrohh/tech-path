export default function FiltersBar({ value, onChange }) {
  const set = (k, v) => onChange({ ...value, [k]: v });

  return (
    <div style={{ display: 'flex', gap: 10, margin: '12px 0', flexWrap: 'wrap' }}>
      <input
        placeholder="Search title…"
        value={value.text || ''}
        onChange={(e) => set('text', e.target.value)}
      />
      <select value={value.type || ''} onChange={(e) => set('type', e.target.value || null)}>
        <option value="">All types</option>
        <option>video</option>
        <option>article</option>
        <option>course</option>
        <option>tool</option>
        <option>repo</option>
        <option>doc</option>
        <option>podcast</option>
      </select>
      <select value={value.difficulty || ''} onChange={(e) => set('difficulty', e.target.value || null)}>
        <option value="">All levels</option>
        <option>beginner</option>
        <option>intermediate</option>
        <option>advanced</option>
      </select>
      <select value={value.cost || ''} onChange={(e) => set('cost', e.target.value || null)}>
        <option value="">Any cost</option>
        <option>free</option>
        <option>freemium</option>
        <option>paid</option>
      </select>
    </div>
  );
}
