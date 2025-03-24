export function ReviewsSkeleton() {
    return (
        <div className="list-group">
            {Array.from({ length: 5 }).map((_, index) => (
                <div className="list-group-item skeleton-item" key={index}>
                    <div className="skeleton-text"></div>
                    <div className="skeleton-subtext"></div>
                </div>
            ))}
        </div>
    );
}

