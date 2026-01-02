import "@/assets/css/grid.css";

export default function GridBox({
  title = "developer.js",

  height = "380px",
  image,
  name,
  children, // 👈 IMPORTANT
}) {
  return (
    <div className="gradient-border w-full max-w-[400px]" style={{ height }}>

      <div className="code-window h-full">

        {/* Header */}
        <div className="window-header">
          <div className="window-dot bg-red-500"></div>
          <div className="window-dot bg-yellow-500"></div>
          <div className="window-dot bg-green-500"></div>
          <span className="ml-2 text-sm text-gray-400">{title}</span>
        </div>

        {/* Image */}
        {image && (
          <div className="gridbox-image-wrapper">
            <img src={image} alt={name || title} />
          </div>
        )}

        {/* Name */}
        <div className="gridbox-footer">
  {name && <span className="gridbox-title">{name}</span>}

  <div className="gridbox-actions">
    {children}
  </div>
</div>


      </div>
    </div>
  );
}
