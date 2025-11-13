export default function ResourceCard({ r, onBookmark, onRate }) {
  return (
    <div style={{ border: '1px solid #eee', borderRadius: 12, padding: 14 }}>
      <a href={r.url} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
        <h4 style={{ margin: 0 }}>{r.title}</h4>
      </a>
      <p style={{ color: '#666', marginTop: 6 }}>{r.description}</p>
      <div style={{ display: 'flex', gap: 8, fontSize: 12, color: '#555' }}>
        <span>{r.type}</span>
        <span>•</span>
        <span>{r.difficulty}</span>
        <span>•</span>
        <span>{r.cost}</span>
      </div>
      <div style={{ marginTop: 8, display: 'flex', gap: 8 }}>
        <button onClick={onBookmark}>Bookmark</button>
        <button onClick={() => onRate(5)}>Rate 5★</button>
      </div>
    </div>
  );
}
