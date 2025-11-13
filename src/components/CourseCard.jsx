export default function CourseCard({ track, onOpen }) {
  const levelBadge = track?.level?.[0]?.toUpperCase() + track?.level?.slice(1);
  return (
    <div style={{ border: '1px solid #eee', borderRadius: 12, padding: 16, marginBottom: 12 }}>
      <h3 style={{ margin: 0 }}>{track.title}</h3>
      <p style={{ color: '#666', marginTop: 6 }}>{track.description}</p>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <span style={{ fontSize: 12, background: '#f2f2f2', padding: '2px 8px', borderRadius: 8 }}>
          {levelBadge || 'Beginner'}
        </span>
        <span style={{ fontSize: 12, color: '#999' }}>
          {track.modules?.length || 0} modules
        </span>
      </div>
      <button style={{ marginTop: 10 }} onClick={onOpen}>Open</button>
    </div>
  );
}
